import { useState } from 'react';
import { DownloadSimple, FileXls, FileText, Package, Check } from '@phosphor-icons/react';
import { Card, Button, Badge, Select } from '@/components/ui';
import { useDataStore } from '@/stores/dataStore';
import { useAppStore } from '@/stores/appStore';

interface ExportOption {
  id: string;
  name: string;
  description: string;
  icon: typeof FileXls;
  format: 'xlsx' | 'csv' | 'json';
  category: 'data' | 'report';
}

const exportOptions: ExportOption[] = [
  {
    id: 'scope3-data-pack',
    name: 'Scope 3 Data Pack',
    description: 'All upstream and downstream data formatted for GHG calculations',
    icon: Package,
    format: 'xlsx',
    category: 'report',
  },
  {
    id: 'all-data',
    name: 'All Operational Data',
    description: 'Complete export of all domains in a single workbook',
    icon: FileXls,
    format: 'xlsx',
    category: 'data',
  },
  {
    id: 'energy-data',
    name: 'Energy & Utilities',
    description: 'Electricity, fuel, and water consumption data',
    icon: FileXls,
    format: 'xlsx',
    category: 'data',
  },
  {
    id: 'materials-data',
    name: 'Materials & Packaging',
    description: 'Raw materials and packaging input data',
    icon: FileXls,
    format: 'xlsx',
    category: 'data',
  },
  {
    id: 'transport-data',
    name: 'Transport & Logistics',
    description: 'Inbound, outbound, and internal transport logs',
    icon: FileXls,
    format: 'xlsx',
    category: 'data',
  },
  {
    id: 'workforce-data',
    name: 'Workforce & Safety',
    description: 'Headcount, health & safety, and training data',
    icon: FileXls,
    format: 'xlsx',
    category: 'data',
  },
  {
    id: 'outputs-data',
    name: 'Outputs & Waste',
    description: 'Waste, product outputs, and emissions data',
    icon: FileXls,
    format: 'xlsx',
    category: 'data',
  },
  {
    id: 'raw-json',
    name: 'Raw Data (JSON)',
    description: 'Complete data export in JSON format for integration',
    icon: FileText,
    format: 'json',
    category: 'data',
  },
];

interface ExportHistoryItem {
  id: string;
  name: string;
  format: string;
  createdAt: string;
}

export function Exports() {
  const { company, sites } = useAppStore();
  const dataStore = useDataStore();

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());
  const [selectedSite, setSelectedSite] = useState('all');
  const [isExporting, setIsExporting] = useState<string | null>(null);
  const [exportHistory, setExportHistory] = useState<ExportHistoryItem[]>([]);

  const yearOptions = [
    { value: new Date().getFullYear().toString(), label: new Date().getFullYear().toString() },
    { value: (new Date().getFullYear() - 1).toString(), label: (new Date().getFullYear() - 1).toString() },
  ];

  const siteOptions = [
    { value: 'all', label: 'All Sites' },
    ...sites.map((s) => ({ value: s.id, label: s.siteName })),
  ];

  const handleExport = async (exportOption: ExportOption) => {
    setIsExporting(exportOption.id);

    // Simulate export delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Generate export data based on option
    let exportData: any;
    let fileName: string;

    switch (exportOption.id) {
      case 'raw-json':
        exportData = {
          company,
          sites,
          materials: dataStore.materials,
          materialInputs: dataStore.materialInputs,
          packaging: dataStore.packaging,
          packagingInputs: dataStore.packagingInputs,
          energyElectricity: dataStore.energyElectricity,
          energyFuels: dataStore.energyFuels,
          energyWater: dataStore.energyWater,
          assets: dataStore.assets,
          transportLogs: dataStore.transportLogs,
          workforce: dataStore.workforce,
          healthSafety: dataStore.healthSafety,
          training: dataStore.training,
          waste: dataStore.waste,
          productOutputs: dataStore.productOutputs,
          externalContext: dataStore.externalContext,
          financialContext: dataStore.financialContext,
          exportedAt: new Date().toISOString(),
        };
        fileName = `five-stacks-data-${selectedYear}.json`;

        const jsonBlob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        downloadBlob(jsonBlob, fileName);
        break;

      case 'scope3-data-pack':
        // Generate CSV for Scope 3 data
        const scope3Data = generateScope3DataPack(dataStore, sites, selectedYear, selectedSite);
        fileName = `scope3-data-pack-${selectedYear}.csv`;
        downloadCSV(scope3Data, fileName);
        break;

      case 'energy-data':
        const energyData = generateEnergyExport(dataStore, sites, selectedYear, selectedSite);
        fileName = `energy-data-${selectedYear}.csv`;
        downloadCSV(energyData, fileName);
        break;

      default:
        // Generic CSV export
        const genericData = generateGenericExport(exportOption.id, dataStore, sites, selectedYear, selectedSite);
        fileName = `${exportOption.id}-${selectedYear}.csv`;
        downloadCSV(genericData, fileName);
    }

    // Add to history
    setExportHistory([
      {
        id: crypto.randomUUID(),
        name: exportOption.name,
        format: exportOption.format.toUpperCase(),
        createdAt: new Date().toISOString(),
      },
      ...exportHistory,
    ]);

    setIsExporting(null);
  };

  const downloadBlob = (blob: Blob, fileName: string) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  };

  const downloadCSV = (data: string[][], fileName: string) => {
    const csv = data.map((row) => row.map((cell) => `"${cell || ''}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    downloadBlob(blob, fileName);
  };

  const generateScope3DataPack = (store: typeof dataStore, _sitesList: typeof sites, year: string, siteId: string) => {
    const headers = ['Category', 'Sub-category', 'Description', 'Quantity', 'Unit', 'Supplier/Origin', 'Period', 'Data Source', 'Confidence'];
    const rows: string[][] = [headers];

    // Category 1: Purchased Goods
    store.materialInputs.forEach((input) => {
      const material = store.materials.find((m) => m.id === input.materialId);
      if (siteId !== 'all' && input.siteId !== siteId) return;
      if (!input.period.startsWith(year)) return;

      rows.push([
        'Scope 3 Cat 1',
        'Purchased Goods',
        material?.materialName || 'Unknown',
        input.quantity.toString(),
        input.unit,
        `${input.supplierName || ''} (${input.supplierCountry || ''})`,
        input.period,
        input.source,
        input.confidence,
      ]);
    });

    // Category 1: Packaging
    store.packagingInputs.forEach((input) => {
      const pkg = store.packaging.find((p) => p.id === input.packagingId);
      if (siteId !== 'all' && input.siteId !== siteId) return;
      if (!input.period.startsWith(year)) return;

      rows.push([
        'Scope 3 Cat 1',
        'Packaging',
        pkg?.packagingName || 'Unknown',
        input.totalWeightKg.toString(),
        'kg',
        input.supplierName || '',
        input.period,
        input.source,
        input.confidence,
      ]);
    });

    // Category 4: Upstream Transport
    store.transportLogs
      .filter((t) => t.direction === 'inbound')
      .forEach((log) => {
        if (siteId !== 'all' && log.siteId !== siteId) return;
        if (!log.period.startsWith(year)) return;

        rows.push([
          'Scope 3 Cat 4',
          'Upstream Transport',
          `${log.mode} - ${log.vehicleType || 'Unknown'}`,
          log.tkm?.toString() || log.distanceKm?.toString() || '',
          log.tkm ? 'tkm' : 'km',
          log.carrierName || '',
          log.period,
          log.source,
          log.confidence,
        ]);
      });

    // Category 5: Waste
    store.waste.forEach((w) => {
      if (siteId !== 'all' && w.siteId !== siteId) return;
      if (!w.period.startsWith(year)) return;

      rows.push([
        'Scope 3 Cat 5',
        'Waste',
        `${w.wasteCategory} - ${w.disposalRoute}`,
        w.quantityKg.toString(),
        'kg',
        w.disposalPartner || '',
        w.period,
        w.source,
        w.confidence,
      ]);
    });

    // Category 9: Downstream Transport
    store.transportLogs
      .filter((t) => t.direction === 'outbound')
      .forEach((log) => {
        if (siteId !== 'all' && log.siteId !== siteId) return;
        if (!log.period.startsWith(year)) return;

        rows.push([
          'Scope 3 Cat 9',
          'Downstream Transport',
          `${log.mode} - ${log.vehicleType || 'Unknown'}`,
          log.tkm?.toString() || log.distanceKm?.toString() || '',
          log.tkm ? 'tkm' : 'km',
          log.carrierName || '',
          log.period,
          log.source,
          log.confidence,
        ]);
      });

    return rows;
  };

  const generateEnergyExport = (store: typeof dataStore, sitesList: typeof sites, year: string, siteId: string) => {
    const headers = ['Type', 'Site', 'Period', 'Quantity', 'Unit', 'Source Mix', 'Cost', 'Data Source', 'Confidence'];
    const rows: string[][] = [headers];

    store.energyElectricity.forEach((e) => {
      const site = sitesList.find((s) => s.id === e.siteId);
      if (siteId !== 'all' && e.siteId !== siteId) return;
      if (!e.period.startsWith(year)) return;

      rows.push([
        'Electricity',
        site?.siteName || 'Unknown',
        e.period,
        e.consumptionKwh.toString(),
        'kWh',
        `Grid ${e.sourceGridPercent}%, Renewable ${e.sourceOnsiteRenewablePercent}%`,
        e.cost?.toString() || '',
        e.source,
        e.confidence,
      ]);
    });

    store.energyFuels.forEach((f) => {
      const site = sitesList.find((s) => s.id === f.siteId);
      if (siteId !== 'all' && f.siteId !== siteId) return;
      if (!f.period.startsWith(year)) return;

      rows.push([
        `Fuel - ${f.fuelType}`,
        site?.siteName || 'Unknown',
        f.period,
        f.quantity.toString(),
        f.unit,
        f.purpose,
        f.cost?.toString() || '',
        f.source,
        f.confidence,
      ]);
    });

    store.energyWater.forEach((w) => {
      const site = sitesList.find((s) => s.id === w.siteId);
      if (siteId !== 'all' && w.siteId !== siteId) return;
      if (!w.period.startsWith(year)) return;

      rows.push([
        'Water',
        site?.siteName || 'Unknown',
        w.period,
        w.withdrawalM3.toString(),
        'm³',
        '',
        w.cost?.toString() || '',
        w.source,
        w.confidence,
      ]);
    });

    return rows;
  };

  const generateGenericExport = (type: string, _store: typeof dataStore, _sitesList: typeof sites, year: string, _siteId: string) => {
    // Simplified generic export
    const headers = ['Type', 'Site', 'Period', 'Description', 'Value', 'Unit'];
    const rows: string[][] = [headers];

    // Add placeholder data
    rows.push(['Export', 'All', year, `${type} export`, 'Data available', '-']);

    return rows;
  };

  const dataExports = exportOptions.filter((e) => e.category === 'data');
  const reportExports = exportOptions.filter((e) => e.category === 'report');

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Exports</h1>
          <p className="text-gray-500">Download your data in various formats for reporting and analysis.</p>
        </div>

        <div className="flex items-center gap-3">
          <Select
            value={selectedSite}
            onChange={(e) => setSelectedSite(e.target.value)}
            options={siteOptions}
            className="w-40"
          />
          <Select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            options={yearOptions}
            className="w-28"
          />
        </div>
      </div>

      {/* Reports Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reportExports.map((option) => {
            const Icon = option.icon;
            const isLoading = isExporting === option.id;

            return (
              <Card key={option.id} className="hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6 text-white" weight="duotone" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{option.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{option.description}</p>
                      <Badge variant="info" className="mt-2">
                        {option.format.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleExport(option)}
                    disabled={isLoading}
                    className="flex-shrink-0"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <DownloadSimple className="w-4 h-4" weight="duotone" />
                    )}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Data Exports Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Data Exports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataExports.map((option) => {
            const Icon = option.icon;
            const isLoading = isExporting === option.id;

            return (
              <Card key={option.id} className="hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-stack-2 to-stack-3 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" weight="duotone" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{option.name}</h3>
                      <p className="text-xs text-gray-500">{option.format.toUpperCase()}</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleExport(option)}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-forest-700 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <DownloadSimple className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Export History */}
      {exportHistory.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Exports</h2>
          <Card>
            <div className="divide-y">
              {exportHistory.slice(0, 5).map((item) => (
                <div key={item.id} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" weight="bold" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(item.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <Badge variant="info">{item.format}</Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
