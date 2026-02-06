import { useState, useMemo, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Trash, Package, Question, Check, ArrowLeft,
  ChartBar, TrendUp, Calendar, Recycle, CurrencyDollar
} from '@phosphor-icons/react';
import { Card, Button, ProgressBar } from '@/components/ui';
import { useDataStore } from '@/stores/dataStore';
import { useAppStore } from '@/stores/appStore';
import { cn } from '@/lib/utils/cn';
import type {
  Waste,
  ProductOutput,
  WasteCategory,
  DisposalRoute,
  ConfidenceLevel,
  DataSource,
} from '@/types';

type OutputsTab = 'all' | 'waste' | 'products';

const MONTHS_SHORT = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

const dataSourceOptions = [
  { value: 'invoice', label: 'Invoice' },
  { value: 'erp', label: 'ERP' },
  { value: 'supplier', label: 'Partner' },
  { value: 'estimate', label: 'Est.' },
];

const confidenceOptions = [
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Med' },
  { value: 'low', label: 'Low' },
];

// Row definitions
interface RowConfig {
  id: string;
  label: string;
  unit: string;
  tip: string;
}

const wasteRows: RowConfig[] = [
  { id: 'general', label: 'General', unit: 'kg', tip: 'General non-recyclable waste' },
  { id: 'recyclable', label: 'Recyclable', unit: 'kg', tip: 'Recyclable waste' },
  { id: 'organic', label: 'Organic', unit: 'kg', tip: 'Organic/food waste' },
  { id: 'hazardous', label: 'Hazardous', unit: 'kg', tip: 'Hazardous waste' },
];

const productRows: RowConfig[] = [
  { id: 'units', label: 'Units Produced', unit: '', tip: 'Number of units produced' },
  { id: 'weight', label: 'Output Weight', unit: 'kg', tip: 'Weight of goods produced' },
  { id: 'revenue', label: 'Revenue', unit: '€', tip: 'Sales revenue for products' },
];

// Emission factors for waste disposal (kg CO2e per kg waste)
const WASTE_EMISSION_FACTORS: Record<DisposalRoute, number> = {
  landfill: 0.58,
  incineration: 0.04,
  recycling: 0.02,
  composting: 0.01,
  reuse: 0.005,
  other: 0.3,
};

// Toast component
function Toast({ message, show, onClose }: { message: string; show: boolean; onClose: () => void }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="bg-primary text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
        <Check className="w-4 h-4" />
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
}

function formatNumber(n: number): string {
  if (n === 0) return '0';
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return n.toLocaleString();
}

// ============ ALL/INSIGHTS TAB CONTENT ============
function AllInsightsTab({
  waste,
  productOutputs,
  onNavigate,
  selectedYear,
  setSelectedYear,
  sites,
  selectedSiteId,
  setSelectedSiteId,
}: {
  waste: Waste[];
  productOutputs: ProductOutput[];
  onNavigate: (tab: OutputsTab) => void;
  selectedYear: number;
  setSelectedYear: (year: number) => void;
  sites: { id: string; siteName: string }[];
  selectedSiteId: string;
  setSelectedSiteId: (id: string) => void;
}) {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  // Calculate totals
  const totals = useMemo(() => {
    const totalWasteKg = waste.reduce((sum, w) => sum + (w.quantityKg || 0), 0);
    const recycledKg = waste
      .filter(w => ['recycling', 'composting', 'reuse'].includes(w.disposalRoute))
      .reduce((sum, w) => sum + (w.quantityKg || 0), 0);
    const diversionRate = totalWasteKg > 0 ? (recycledKg / totalWasteKg) * 100 : 0;

    // Calculate emissions
    const wasteEmissions = waste.reduce((sum, w) => {
      const factor = WASTE_EMISSION_FACTORS[w.disposalRoute] || 0.3;
      return sum + ((w.quantityKg || 0) * factor / 1000);
    }, 0);

    const totalRevenue = productOutputs.reduce((sum, p) => sum + (p.revenue || 0), 0);
    const totalUnits = productOutputs.reduce((sum, p) => sum + (p.quantity || 0), 0);

    return {
      waste: { entries: waste.length, totalKg: totalWasteKg, recycledKg, diversionRate, emissions: wasteEmissions },
      products: { entries: productOutputs.length, totalUnits, totalRevenue },
    };
  }, [waste, productOutputs]);

  // Coverage by month
  const coverage = useMemo(() => {
    const now = new Date();
    const months: string[] = [];
    for (let i = 11; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      months.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`);
    }

    const coveredMonths = new Set([
      ...waste.map(w => w.period),
      ...productOutputs.map(p => p.period),
    ]);
    const covered = months.filter(m => coveredMonths.has(m)).length;
    return { covered, total: 12, percent: Math.round((covered / 12) * 100) };
  }, [waste, productOutputs]);

  // Periods for table
  const periods = useMemo(() => {
    return MONTHS_SHORT.map((short, i) => ({
      short,
      period: `${selectedYear}-${String(i + 1).padStart(2, '0')}`,
      isFuture: selectedYear === currentYear && i > currentMonth,
    }));
  }, [selectedYear, currentYear, currentMonth]);

  // Get value for combined table
  const getValueForPeriod = useCallback((period: string, field: string): number => {
    if (field === 'totalWaste') {
      return waste
        .filter(w => w.siteId === selectedSiteId && w.period === period)
        .reduce((sum, w) => sum + (w.quantityKg || 0), 0);
    } else if (field === 'diverted') {
      return waste
        .filter(w => w.siteId === selectedSiteId && w.period === period && ['recycling', 'composting', 'reuse'].includes(w.disposalRoute))
        .reduce((sum, w) => sum + (w.quantityKg || 0), 0);
    } else if (field === 'landfill') {
      return waste
        .filter(w => w.siteId === selectedSiteId && w.period === period && w.disposalRoute === 'landfill')
        .reduce((sum, w) => sum + (w.quantityKg || 0), 0);
    } else if (field === 'production') {
      return productOutputs
        .filter(p => p.siteId === selectedSiteId && p.period === period)
        .reduce((sum, p) => sum + (p.quantity || 0), 0);
    } else if (field === 'revenue') {
      return productOutputs
        .filter(p => p.siteId === selectedSiteId && p.period === period)
        .reduce((sum, p) => sum + (p.revenue || 0), 0);
    } else if (field === 'emissions') {
      return waste
        .filter(w => w.siteId === selectedSiteId && w.period === period)
        .reduce((sum, w) => {
          const factor = WASTE_EMISSION_FACTORS[w.disposalRoute] || 0.3;
          return sum + ((w.quantityKg || 0) * factor / 1000);
        }, 0);
    }
    return 0;
  }, [waste, productOutputs, selectedSiteId]);

  const getRowTotal = useCallback((field: string): number => {
    return periods.reduce((sum, { period }) => sum + getValueForPeriod(period, field), 0);
  }, [periods, getValueForPeriod]);

  const categories = [
    {
      id: 'waste' as OutputsTab,
      title: 'Waste',
      icon: Trash,
      color: 'bg-red-100 text-red-700',
      borderColor: 'border-red-300',
      hoverBorder: 'hover:border-red-400',
      value: formatNumber(totals.waste.totalKg),
      unit: 'kg',
      entries: totals.waste.entries,
      subtitle: 'Waste by category',
    },
    {
      id: 'products' as OutputsTab,
      title: 'Products',
      icon: Package,
      color: 'bg-green-100 text-green-700',
      borderColor: 'border-green-300',
      hoverBorder: 'hover:border-green-400',
      value: formatNumber(totals.products.totalUnits),
      unit: 'units',
      entries: totals.products.entries,
      subtitle: 'Production output',
    },
  ];

  // Combined table rows with icons
  const combinedRows = [
    { id: 'totalWaste', label: 'Total Waste', unit: 'kg', icon: Trash, iconColor: 'text-red-600' },
    { id: 'diverted', label: 'Diverted', unit: 'kg', icon: Recycle, iconColor: 'text-green-600' },
    { id: 'landfill', label: 'Landfill', unit: 'kg', icon: Trash, iconColor: 'text-gray-600' },
    { id: 'production', label: 'Production', unit: '', icon: Package, iconColor: 'text-green-600' },
    { id: 'emissions', label: 'Emissions', unit: 'tCO₂e', icon: TrendUp, iconColor: 'text-primary' },
  ];

  return (
    <div className="space-y-4">
      {/* Key Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white border border-gray-200 rounded-lg p-2.5">
          <div className="flex items-center gap-2 mb-0.5">
            <Calendar className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-xs text-gray-500">Monthly Coverage</span>
          </div>
          <div className="text-lg font-bold text-gray-900">{coverage.percent}%</div>
          <div className="text-xs text-gray-400">{coverage.covered} of {coverage.total} months</div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-2.5">
          <div className="flex items-center gap-2 mb-0.5">
            <Recycle className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-xs text-gray-500">Diversion Rate</span>
          </div>
          <div className="text-lg font-bold text-green-600">{totals.waste.diversionRate.toFixed(0)}%</div>
          <div className="text-xs text-gray-400">recycled/composted</div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-2.5">
          <div className="flex items-center gap-2 mb-0.5">
            <TrendUp className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-xs text-gray-500">Waste Emissions</span>
          </div>
          <div className="text-lg font-bold text-primary">{totals.waste.emissions.toFixed(1)}</div>
          <div className="text-xs text-gray-400">tCO₂e from waste</div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-2.5">
          <div className="flex items-center gap-2 mb-0.5">
            <CurrencyDollar className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-xs text-gray-500">Product Revenue</span>
          </div>
          <div className="text-lg font-bold text-gray-900">€{formatNumber(totals.products.totalRevenue)}</div>
          <div className="text-xs text-gray-400">YTD output value</div>
        </div>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-2 gap-3">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => onNavigate(cat.id)}
              className={cn(
                'text-left bg-white border-2 rounded-lg p-3 transition-all',
                cat.borderColor,
                cat.hoverBorder,
                'hover:shadow-sm'
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center', cat.color)}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs text-gray-400">{cat.entries} entries</span>
              </div>

              <h3 className="font-medium text-gray-900 text-sm">{cat.title}</h3>
              <p className="text-xs text-gray-500">{cat.subtitle}</p>

              <div className="flex items-end justify-between mt-1">
                <div>
                  <span className="text-lg font-bold text-gray-900">{cat.value}</span>
                  <span className="text-xs text-gray-500 ml-1">{cat.unit}</span>
                </div>
              </div>

              <div className="mt-2 pt-2 border-t border-gray-100">
                <span className="text-xs text-primary font-medium">Click to enter data →</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3 text-sm">
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-gray-500">Site:</span>
          <select
            value={selectedSiteId}
            onChange={e => setSelectedSiteId(e.target.value)}
            className="text-sm border border-gray-200 rounded-md px-2 py-1 bg-white focus:border-primary focus:outline-none"
          >
            {sites.map(s => (
              <option key={s.id} value={s.id}>{s.siteName}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setSelectedYear(selectedYear - 1)}
            disabled={selectedYear <= currentYear - 5}
            className="px-2 py-1 text-sm border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50"
          >
            ←
          </button>
          <span className="text-sm font-semibold text-primary w-12 text-center">{selectedYear}</span>
          <button
            onClick={() => setSelectedYear(selectedYear + 1)}
            disabled={selectedYear >= currentYear}
            className="px-2 py-1 text-sm border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50"
          >
            →
          </button>
        </div>
      </div>

      {/* Combined Table */}
      <Card className="overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-2 px-3 font-medium text-gray-600 w-32">Metric</th>
                {periods.map(({ short, period, isFuture }) => (
                  <th key={period} className={cn('py-2 px-0.5 font-medium text-center w-12', isFuture ? 'text-gray-300' : 'text-gray-500')}>
                    {short}
                  </th>
                ))}
                <th className="py-2 px-3 font-medium text-gray-600 text-right w-16">Total</th>
              </tr>
            </thead>
            <tbody>
              {combinedRows.map((row, idx) => {
                const Icon = row.icon;
                const rowTotal = getRowTotal(row.id);
                return (
                  <tr key={row.id} className={cn(
                    'border-b border-gray-50',
                    idx % 2 === 1 && 'bg-gray-50/30',
                    row.id === 'emissions' && 'bg-primary-100 border-t border-primary'
                  )}>
                    <td className="py-1 px-3 text-gray-700">
                      <div className="flex items-center gap-2">
                        <Icon className={cn('w-4 h-4', row.iconColor)} />
                        <span className="font-medium">{row.label}</span>
                        {row.unit && <span className="text-gray-400 text-xs">({row.unit})</span>}
                      </div>
                    </td>
                    {periods.map(({ period, isFuture }) => {
                      const value = getValueForPeriod(period, row.id);
                      const hasValue = value > 0;
                      return (
                        <td key={period} className="py-0.5 px-0.5">
                          <div className={cn(
                            'w-full h-7 flex items-center justify-center text-center text-xs border rounded',
                            isFuture ? 'bg-gray-50 border-gray-100 text-gray-300'
                              : hasValue ? 'bg-primary-100 border-primary-light text-gray-700'
                              : 'bg-white border-gray-200 text-gray-300'
                          )}>
                            {!isFuture && hasValue ? (row.id === 'emissions' ? value.toFixed(2) : formatNumber(value)) : ''}
                          </div>
                        </td>
                      );
                    })}
                    <td className="py-1 px-3 text-right font-medium text-gray-700 text-xs">
                      {rowTotal > 0 ? (row.id === 'emissions' ? rowTotal.toFixed(1) : formatNumber(rowTotal)) : ''}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Getting Started */}
      {waste.length + productOutputs.length === 0 && (
        <Card className="bg-primary-100 border-primary border-l-4">
          <h3 className="font-semibold text-gray-900 mb-1">Getting Started</h3>
          <p className="text-sm text-gray-600">
            Click on any category above to start entering output data. Start with waste for environmental tracking.
          </p>
        </Card>
      )}
    </div>
  );
}

// ============ DATA ENTRY GRID ============
function DataEntryGrid({
  rows,
  periods,
  getValue,
  setValue,
  getRowTotal,
  gridData,
  showEmissions,
  calculateEmissions,
  totalEmissions,
}: {
  rows: RowConfig[];
  periods: { short: string; period: string; isFuture: boolean }[];
  getValue: (period: string, field: string) => string;
  setValue: (period: string, field: string, value: string) => void;
  getRowTotal: (field: string) => number;
  gridData: Record<string, Record<string, string>>;
  showEmissions?: boolean;
  calculateEmissions?: (period: string) => number;
  totalEmissions?: number;
}) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-2 px-3 font-medium text-gray-600 w-32">Metric</th>
              {periods.map(({ short, period, isFuture }) => (
                <th key={period} className={cn('py-2 px-0.5 font-medium text-center w-12', isFuture ? 'text-gray-300' : 'text-gray-500')}>
                  {short}
                </th>
              ))}
              <th className="py-2 px-3 font-medium text-gray-600 text-right w-16">Total</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={row.id} className={cn('border-b border-gray-50', idx % 2 === 1 && 'bg-gray-50/30')}>
                <td className="py-1 px-3 text-gray-700">
                  <span className="cursor-help border-b border-dotted border-gray-300" title={row.tip}>
                    {row.label}
                  </span>
                  {row.unit && <span className="text-gray-400 text-xs ml-1">({row.unit})</span>}
                </td>
                {periods.map(({ period, isFuture }) => {
                  const cellValue = getValue(period, row.id);
                  const hasValue = cellValue !== '' && cellValue !== '0';
                  const isModified = gridData[period]?.[row.id] !== undefined;

                  return (
                    <td key={period} className="py-0.5 px-0.5">
                      <input
                        type="text"
                        inputMode="numeric"
                        value={cellValue}
                        onChange={e => {
                          const val = e.target.value.replace(/[^0-9.]/g, '');
                          setValue(period, row.id, val);
                        }}
                        disabled={isFuture}
                        className={cn(
                          'w-full h-7 text-center text-xs border rounded focus:outline-none transition-colors',
                          isFuture ? 'bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed'
                            : isModified ? 'bg-amber-50 border-amber-300 focus:border-primary'
                            : hasValue ? 'bg-primary-100 border-primary-light focus:border-primary'
                            : 'bg-white border-gray-200 focus:border-primary'
                        )}
                      />
                    </td>
                  );
                })}
                <td className="py-1 px-3 text-right font-medium text-gray-700 text-xs">
                  {formatNumber(getRowTotal(row.id))}
                </td>
              </tr>
            ))}

            {showEmissions && calculateEmissions && (
              <tr className="bg-primary-100 border-t border-primary">
                <td className="py-1.5 px-3 text-primary font-medium text-xs">
                  Emissions <span className="text-primary/70 ml-1">(tCO₂e)</span>
                </td>
                {periods.map(({ period, isFuture }) => {
                  const emissions = calculateEmissions(period);
                  return (
                    <td key={period} className={cn('py-1.5 px-0.5 text-center text-xs font-medium', isFuture ? 'text-gray-300' : 'text-primary')}>
                      {!isFuture && emissions > 0 ? emissions.toFixed(2) : ''}
                    </td>
                  );
                })}
                <td className="py-1.5 px-3 text-right font-bold text-primary text-xs">
                  {totalEmissions && totalEmissions > 0 ? totalEmissions.toFixed(1) : ''}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

// ============ MAIN COMPONENT ============
export function OutputsPage() {
  const { sites } = useAppStore();
  const {
    waste,
    productOutputs,
    addWaste,
    updateWaste,
    addProductOutput,
    updateProductOutput,
  } = useDataStore();

  const [activeTab, setActiveTab] = useState<OutputsTab>('all');
  const [selectedSiteId, setSelectedSiteId] = useState(sites[0]?.id || '');
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [dataSource, setDataSource] = useState<DataSource>('invoice');
  const [confidence, setConfidence] = useState<ConfidenceLevel>('high');
  const [hasChanges, setHasChanges] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [gridData, setGridData] = useState<Record<string, Record<string, string>>>({});

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const periods = useMemo(() => {
    return MONTHS_SHORT.map((short, i) => ({
      short,
      period: `${selectedYear}-${String(i + 1).padStart(2, '0')}`,
      isFuture: selectedYear === currentYear && i > currentMonth,
    }));
  }, [selectedYear, currentYear, currentMonth]);

  const rows = activeTab === 'waste' ? wasteRows : productRows;

  // Get value for a cell
  const getValue = useCallback((period: string, field: string): string => {
    if (gridData[period]?.[field] !== undefined) {
      return gridData[period][field];
    }

    if (activeTab === 'waste') {
      const records = waste.filter(w => w.siteId === selectedSiteId && w.period === period);
      if (field === 'general') return records.filter(w => w.wasteCategory === 'general').reduce((s, w) => s + (w.quantityKg || 0), 0).toString() || '';
      if (field === 'recyclable') return records.filter(w => w.wasteCategory === 'recyclable').reduce((s, w) => s + (w.quantityKg || 0), 0).toString() || '';
      if (field === 'organic') return records.filter(w => w.wasteCategory === 'organic').reduce((s, w) => s + (w.quantityKg || 0), 0).toString() || '';
      if (field === 'hazardous') return records.filter(w => w.wasteCategory === 'hazardous').reduce((s, w) => s + (w.quantityKg || 0), 0).toString() || '';
      return '';
    } else {
      const records = productOutputs.filter(p => p.siteId === selectedSiteId && p.period === period);
      if (field === 'units') return records.reduce((s, p) => s + (p.quantity || 0), 0).toString() || '';
      if (field === 'weight') return records.reduce((s, p) => s + ((p as ProductOutput & { weightKg?: number }).weightKg || 0), 0).toString() || '';
      if (field === 'revenue') return records.reduce((s, p) => s + (p.revenue || 0), 0).toString() || '';
      return '';
    }
  }, [gridData, activeTab, selectedSiteId, waste, productOutputs]);

  const setValue = useCallback((period: string, field: string, value: string) => {
    setGridData(prev => ({
      ...prev,
      [period]: {
        ...prev[period],
        [field]: value,
      },
    }));
    setHasChanges(true);
  }, []);

  const getRowTotal = useCallback((field: string): number => {
    let total = 0;
    periods.forEach(({ period }) => {
      const val = getValue(period, field);
      total += parseFloat(val) || 0;
    });
    return total;
  }, [periods, getValue]);

  // Calculate emissions for waste tab
  const calculateEmissions = useCallback((period: string): number => {
    const general = parseFloat(gridData[period]?.general || getValue(period, 'general')) || 0;
    const recyclable = parseFloat(gridData[period]?.recyclable || getValue(period, 'recyclable')) || 0;
    const organic = parseFloat(gridData[period]?.organic || getValue(period, 'organic')) || 0;
    const hazardous = parseFloat(gridData[period]?.hazardous || getValue(period, 'hazardous')) || 0;

    // Assume general goes to landfill, recyclable to recycling, organic to composting
    const emissions = (
      general * WASTE_EMISSION_FACTORS.landfill +
      recyclable * WASTE_EMISSION_FACTORS.recycling +
      organic * WASTE_EMISSION_FACTORS.composting +
      hazardous * WASTE_EMISSION_FACTORS.incineration
    ) / 1000;

    return emissions;
  }, [gridData, getValue]);

  const totalEmissions = useMemo(() => {
    return periods.reduce((sum, { period }) => sum + calculateEmissions(period), 0);
  }, [periods, calculateEmissions]);

  // Save handler
  const handleSave = async () => {
    if (activeTab === 'all') return;

    const now = new Date().toISOString();

    if (activeTab === 'waste') {
      Object.entries(gridData).forEach(([period, values]) => {
        const hasData = Object.values(values).some(v => v !== '');
        if (!hasData) return;

        // For each waste category that has data, create/update a record
        (['general', 'recyclable', 'organic', 'hazardous'] as WasteCategory[]).forEach(category => {
          const quantity = parseFloat(values[category]) || 0;
          if (quantity <= 0) return;

          const existing = waste.find(w =>
            w.siteId === selectedSiteId &&
            w.period === period &&
            w.wasteCategory === category
          );

          const route: DisposalRoute = category === 'recyclable' ? 'recycling'
            : category === 'organic' ? 'composting'
            : category === 'hazardous' ? 'incineration'
            : 'landfill';

          const record: Partial<Waste> = {
            siteId: selectedSiteId,
            period,
            wasteCategory: category,
            quantityKg: quantity,
            disposalRoute: route,
            hazardous: category === 'hazardous',
            source: dataSource,
            confidence,
            lastUpdated: now,
          };

          if (existing) {
            updateWaste(existing.id, record);
          } else {
            addWaste({
              ...record,
              id: crypto.randomUUID(),
            } as Waste);
          }
        });
      });
    } else if (activeTab === 'products') {
      Object.entries(gridData).forEach(([period, values]) => {
        const hasData = Object.values(values).some(v => v !== '');
        if (!hasData) return;

        const units = parseFloat(values.units) || 0;
        const weight = parseFloat(values.weight) || 0;
        const revenue = parseFloat(values.revenue) || 0;

        if (units <= 0 && weight <= 0 && revenue <= 0) return;

        const existing = productOutputs.find(p =>
          p.siteId === selectedSiteId &&
          p.period === period
        );

        const record: Partial<ProductOutput> = {
          siteId: selectedSiteId,
          period,
          productName: 'Total Output',
          quantity: units,
          unit: 'units',
          revenue: revenue || undefined,
          source: dataSource,
          confidence,
          lastUpdated: now,
        };

        if (existing) {
          updateProductOutput(existing.id, record);
        } else if (units > 0 || weight > 0 || revenue > 0) {
          addProductOutput({
            ...record,
            id: crypto.randomUUID(),
          } as ProductOutput);
        }
      });
    }

    setGridData({});
    setHasChanges(false);
    setShowToast(true);
  };

  const totalEntries = waste.length + productOutputs.length;
  const progress = Math.min(100, totalEntries * 5);

  const tabs = [
    { id: 'all' as OutputsTab, label: 'All + Insights', icon: ChartBar },
    { id: 'waste' as OutputsTab, label: 'Waste', icon: Trash },
    { id: 'products' as OutputsTab, label: 'Products', icon: Package },
  ];

  const handleTabChange = (tab: OutputsTab) => {
    setActiveTab(tab);
    setGridData({});
    setHasChanges(false);
  };

  return (
    <>
      <Toast message="Changes saved" show={showToast} onClose={() => setShowToast(false)} />

      <div className="animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <Link to="/data" className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <Trash className="w-5 h-5 text-red-700" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Outputs</h1>
                <p className="text-sm text-gray-500">Waste and product outputs</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-xs text-gray-500">{totalEntries} entries</div>
              <div className="text-sm font-semibold text-primary">{progress}% complete</div>
            </div>
            <div className="w-24">
              <ProgressBar value={progress} size="sm" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-4 border-b border-gray-200">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px',
                  isActive ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700'
                )}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeTab === 'all' ? (
          <AllInsightsTab
            waste={waste}
            productOutputs={productOutputs}
            onNavigate={handleTabChange}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            sites={sites}
            selectedSiteId={selectedSiteId}
            setSelectedSiteId={setSelectedSiteId}
          />
        ) : (
          <>
            {/* Controls Row */}
            <div className="flex items-center gap-3 mb-3 flex-wrap text-sm">
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-gray-500">Site:</span>
                <select
                  value={selectedSiteId}
                  onChange={e => { setSelectedSiteId(e.target.value); setGridData({}); setHasChanges(false); }}
                  className="text-sm border border-gray-200 rounded-md px-2 py-1 bg-white focus:border-primary focus:outline-none"
                >
                  {sites.map(s => <option key={s.id} value={s.id}>{s.siteName}</option>)}
                </select>
              </div>

              <div className="flex items-center gap-1">
                <button onClick={() => setSelectedYear(y => y - 1)} disabled={selectedYear <= currentYear - 5} className="px-2 py-1 text-sm border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50">←</button>
                <span className="text-sm font-semibold text-primary w-12 text-center">{selectedYear}</span>
                <button onClick={() => setSelectedYear(y => y + 1)} disabled={selectedYear >= currentYear} className="px-2 py-1 text-sm border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50">→</button>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-xs text-gray-500">Source:</span>
                <select value={dataSource} onChange={e => setDataSource(e.target.value as DataSource)} className="text-sm border border-gray-200 rounded-md px-2 py-1 bg-white focus:border-primary focus:outline-none">
                  {dataSourceOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-xs text-gray-500">Confidence:</span>
                <select value={confidence} onChange={e => setConfidence(e.target.value as ConfidenceLevel)} className="text-sm border border-gray-200 rounded-md px-2 py-1 bg-white focus:border-primary focus:outline-none">
                  {confidenceOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>

              <div className="flex-1" />

              {hasChanges && <span className="text-xs text-amber-600 font-medium">Unsaved</span>}
              <Button size="sm" onClick={handleSave} disabled={!hasChanges}>Save</Button>
            </div>

            {/* Data Grid */}
            <DataEntryGrid
              rows={rows}
              periods={periods}
              getValue={getValue}
              setValue={setValue}
              getRowTotal={getRowTotal}
              gridData={gridData}
              showEmissions={activeTab === 'waste'}
              calculateEmissions={calculateEmissions}
              totalEmissions={totalEmissions}
            />

            <div className="mt-2 flex justify-end">
              <button className="text-xs text-gray-400 hover:text-primary flex items-center gap-1 transition-colors">
                <Question className="w-3 h-3" />
                Help with {activeTab} data
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
