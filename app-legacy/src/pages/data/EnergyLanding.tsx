import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Lightning, 
  Flame, 
  Drop, 
  ArrowRight, 
  FileXls
} from '@phosphor-icons/react';
import { Card, Button, ProgressBar } from '@/components/ui';
import { useDataStore } from '@/stores/dataStore';
import { useAppStore } from '@/stores/appStore';
import { cn } from '@/lib/utils/cn';
import { useMemo } from 'react';

// Helper to format numbers compactly
function formatNumber(n: number): string {
  if (n === 0) return '0';
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return n.toLocaleString();
}

export function EnergyLanding() {
  const { sites: _sites } = useAppStore();
  const { energyElectricity, energyFuels, energyWater } = useDataStore();

  // Calculate totals
  const totals = useMemo(() => {
    const electricityTotal = energyElectricity.reduce((sum, e) => sum + (e.consumptionKwh || 0), 0);
    const electricityCost = energyElectricity.reduce((sum, e) => sum + (e.cost || 0), 0);
    const fuelTotal = energyFuels.reduce((sum, f) => sum + (f.quantity || 0), 0);
    const fuelCost = energyFuels.reduce((sum, f) => sum + (f.cost || 0), 0);
    const waterTotal = energyWater.reduce((sum, w) => sum + (w.withdrawalM3 || 0), 0);
    const waterCost = energyWater.reduce((sum, w) => sum + (w.cost || 0), 0);

    // Calculate Scope 2 estimate (simplified)
    const gridFactor = 0.4; // kg CO2/kWh
    const scope2 = energyElectricity.reduce((sum, e) => {
      const gridPercent = e.greenTariff ? 0 : (e.sourceGridPercent || 100);
      return sum + (e.consumptionKwh * (gridPercent / 100) * gridFactor / 1000);
    }, 0);

    return {
      electricity: { total: electricityTotal, cost: electricityCost, entries: energyElectricity.length },
      fuels: { total: fuelTotal, cost: fuelCost, entries: energyFuels.length },
      water: { total: waterTotal, cost: waterCost, entries: energyWater.length },
      scope2,
      totalCost: electricityCost + fuelCost + waterCost,
    };
  }, [energyElectricity, energyFuels, energyWater]);

  // Coverage by month (last 12 months)
  const coverage = useMemo(() => {
    const now = new Date();
    const months: string[] = [];
    for (let i = 11; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      months.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`);
    }

    const coveredMonths = new Set([
      ...energyElectricity.map(e => e.period),
      ...energyFuels.map(f => f.period),
      ...energyWater.map(w => w.period),
    ]);

    const covered = months.filter(m => coveredMonths.has(m)).length;
    return { covered, total: 12, percent: Math.round((covered / 12) * 100) };
  }, [energyElectricity, energyFuels, energyWater]);

  const totalEntries = totals.electricity.entries + totals.fuels.entries + totals.water.entries;
  const progress = Math.min(100, totalEntries * 3);

  const categories = [
    {
      id: 'electricity',
      title: 'Electricity',
      icon: Lightning,
      gradient: 'from-stack-3 to-stack-4',
      borderColor: 'border-stack-3',
      value: formatNumber(totals.electricity.total),
      unit: 'kWh',
      entries: totals.electricity.entries,
      description: 'Grid, renewable, and on-site generation',
    },
    {
      id: 'fuels',
      title: 'Fuels',
      icon: Flame,
      gradient: 'from-stack-1 to-stack-2',
      borderColor: 'border-stack-1',
      value: formatNumber(totals.fuels.total),
      unit: 'kWh/L',
      entries: totals.fuels.entries,
      description: 'Natural gas, diesel, petrol, heating oil',
    },
    {
      id: 'water',
      title: 'Water',
      icon: Drop,
      gradient: 'from-primary-dark to-primary',
      borderColor: 'border-primary',
      value: formatNumber(totals.water.total),
      unit: 'm³',
      entries: totals.water.entries,
      description: 'Withdrawal, discharge, and consumption',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
        <div className="flex items-start gap-4">
          <Link
            to="/data"
            className="mt-1 p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" weight="bold" />
          </Link>

          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-stack-3 to-stack-4 flex items-center justify-center shadow-sm">
                <Lightning className="w-5 h-5 text-white" weight="duotone" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Energy & Utilities</h1>
            </div>
            <p className="text-gray-500 ml-13">Track electricity, fuels, and water consumption across your sites</p>
          </div>
        </div>

        <Link to="/data/energy/entry">
          <Button>
            <FileXls className="w-4 h-4 mr-2" weight="duotone" />
            Enter Data
          </Button>
        </Link>
      </div>

      {/* Overview Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {/* Progress Card */}
        <Card className="bg-primary-100 py-3 px-4 rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="text-xs font-medium text-gray-600 mb-1">Data Completeness</div>
              <ProgressBar value={progress} size="sm" className="max-w-[120px]" />
            </div>
            <div className="text-center border border-gray-200 rounded-xl px-3 py-2 bg-white min-w-[60px] ml-3">
              <div className="text-base font-bold text-primary">{progress}%</div>
              <div className="text-xs text-gray-500">done</div>
            </div>
          </div>
        </Card>

        {/* Coverage Card */}
        <Card className="bg-gray-50 py-3 px-4 rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-medium text-gray-600">Monthly Coverage</div>
              <div className="text-sm text-gray-500">{coverage.covered} of {coverage.total} months</div>
            </div>
            <div className="text-center border border-gray-200 rounded-xl px-3 py-2 bg-white min-w-[60px]">
              <div className="text-base font-bold text-primary">{coverage.percent}%</div>
              <div className="text-xs text-gray-500">covered</div>
            </div>
          </div>
        </Card>

        {/* Scope 2 Card */}
        <Card className="bg-gray-50 py-3 px-4 rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-medium text-gray-600">Scope 2 Estimate</div>
              <div className="text-sm text-gray-500">From electricity</div>
            </div>
            <div className="text-center border border-gray-200 rounded-xl px-3 py-2 bg-white min-w-[70px]">
              <div className="text-base font-bold text-primary">{totals.scope2.toFixed(1)}</div>
              <div className="text-xs text-gray-500">tCO₂e</div>
            </div>
          </div>
        </Card>

        {/* Total Cost Card */}
        <Card className="bg-gray-50 py-3 px-4 rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-medium text-gray-600">Total Cost</div>
              <div className="text-sm text-gray-500">All utilities</div>
            </div>
            <div className="text-center border border-gray-200 rounded-xl px-3 py-2 bg-white min-w-[70px]">
              <div className="text-base font-bold text-primary">€{formatNumber(totals.totalCost)}</div>
              <div className="text-xs text-gray-500">YTD</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link key={cat.id} to={`/data/energy/entry?tab=${cat.id}`}>
              <Card className={cn('hover:shadow-md transition-all cursor-pointer border-l-4 rounded-2xl', cat.borderColor)}>
                <div className="flex items-start justify-between mb-3">
                  <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br shadow-sm', cat.gradient)}>
                    <Icon className="w-5 h-5 text-white" weight="duotone" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" weight="bold" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{cat.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{cat.description}</p>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">{cat.value}</span>
                    <span className="text-sm text-gray-500 ml-1">{cat.unit}</span>
                  </div>
                  <span className="text-xs text-gray-400">{cat.entries} entries</span>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card className="bg-primary-100 rounded-2xl">
        <h3 className="font-semibold text-gray-900 mb-3">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Link to="/data/energy/entry?tab=electricity">
            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-sm transition-all">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-stack-3 to-stack-4 flex items-center justify-center">
                <Lightning className="w-5 h-5 text-white" weight="duotone" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Add Electricity Data</div>
                <div className="text-xs text-gray-500">Enter monthly consumption</div>
              </div>
            </div>
          </Link>
          <Link to="/data/energy/entry?tab=fuels">
            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-sm transition-all">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-stack-1 to-stack-2 flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" weight="duotone" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Add Fuel Data</div>
                <div className="text-xs text-gray-500">Gas, diesel, heating oil</div>
              </div>
            </div>
          </Link>
          <Link to="/data/energy/entry?tab=water">
            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-sm transition-all">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center">
                <Drop className="w-5 h-5 text-white" weight="duotone" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Add Water Data</div>
                <div className="text-xs text-gray-500">Withdrawal and discharge</div>
              </div>
            </div>
          </Link>
        </div>
      </Card>

      {/* Tips */}
      {totalEntries === 0 && (
        <Card className="mt-6 border-primary border-l-4 bg-primary-100 rounded-2xl">
          <h3 className="font-semibold text-gray-900 mb-2">Getting Started</h3>
          <p className="text-sm text-gray-600 mb-3">
            Start by entering your electricity data from utility bills. Monthly data provides the best granularity for emissions calculations.
          </p>
          <Link to="/data/energy/entry">
            <Button size="sm">
              Start Entering Data
              <ArrowRight className="w-4 h-4 ml-2" weight="bold" />
            </Button>
          </Link>
        </Card>
      )}
    </div>
  );
}
