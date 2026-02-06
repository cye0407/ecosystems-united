import { Link } from 'react-router-dom';
import {
  Cube,
  Package,
  Lightning,
  Buildings,
  Truck,
  UsersThree,
  Recycle,
  GlobeHemisphereWest,
  Plus,
  ArrowRight,
} from '@phosphor-icons/react';
import { Card, CardTitle, ProgressBar, Button, Select } from '@/components/ui';
import { useAppStore } from '@/stores/appStore';
import { useDataStore } from '@/stores/dataStore';
import { cn } from '@/lib/utils/cn';
import { useState } from 'react';

const domains = [
  {
    id: 'materials',
    name: 'Materials',
    icon: Cube,
    path: '/data/materials',
    description: 'Raw materials, components, and consumables',
    gradient: 'from-stack-1 to-stack-2',
  },
  {
    id: 'packaging',
    name: 'Packaging',
    icon: Package,
    path: '/data/packaging',
    description: 'Primary, secondary, and tertiary packaging',
    gradient: 'from-stack-2 to-stack-3',
  },
  {
    id: 'energy',
    name: 'Energy & Utilities',
    icon: Lightning,
    path: '/data/energy',
    description: 'Electricity, fuels, and water consumption',
    gradient: 'from-stack-3 to-stack-4',
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    icon: Buildings,
    path: '/data/infrastructure',
    description: 'Sites, buildings, and equipment',
    gradient: 'from-stack-4 to-stack-5',
  },
  {
    id: 'transport',
    name: 'Transport',
    icon: Truck,
    path: '/data/transport',
    description: 'Inbound, outbound, and internal logistics',
    gradient: 'from-stack-1 to-stack-3',
  },
  {
    id: 'workforce',
    name: 'Workforce',
    icon: UsersThree,
    path: '/data/workforce',
    description: 'Employees, health & safety, training',
    gradient: 'from-stack-2 to-stack-4',
  },
  {
    id: 'outputs',
    name: 'Outputs',
    icon: Recycle,
    path: '/data/outputs',
    description: 'Waste, products, and emissions',
    gradient: 'from-stack-3 to-stack-5',
  },
  {
    id: 'context',
    name: 'Context',
    icon: GlobeHemisphereWest,
    path: '/data/context',
    description: 'External and financial context',
    gradient: 'from-primary-dark to-primary',
  },
];

export function DataOverview() {
  const { sites } = useAppStore();
  const {
    materials,
    materialInputs,
    packaging,
    packagingInputs,
    energyElectricity,
    energyFuels,
    energyWater,
    assets,
    transportLogs,
    workforce,
    waste,
    productOutputs,
    externalContext,
    financialContext,
  } = useDataStore();

  const [selectedSite, setSelectedSite] = useState('all');
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());

  // Calculate stats for each domain
  const domainStats = {
    materials: {
      count: materials.length,
      entries: materialInputs.length,
      progress: materials.length > 0 ? Math.min(100, materialInputs.length * 10) : 0,
    },
    packaging: {
      count: packaging.length,
      entries: packagingInputs.length,
      progress: packaging.length > 0 ? Math.min(100, packagingInputs.length * 10) : 0,
    },
    energy: {
      count: energyElectricity.length + energyFuels.length + energyWater.length,
      entries: energyElectricity.length + energyFuels.length + energyWater.length,
      progress: Math.min(100, (energyElectricity.length + energyFuels.length) * 8),
    },
    infrastructure: {
      count: assets.length,
      entries: sites.length,
      progress: Math.min(100, assets.length * 15),
    },
    transport: {
      count: transportLogs.length,
      entries: transportLogs.length,
      progress: Math.min(100, transportLogs.length * 10),
    },
    workforce: {
      count: workforce.length,
      entries: workforce.length,
      progress: Math.min(100, workforce.length * 8),
    },
    outputs: {
      count: waste.length + productOutputs.length,
      entries: waste.length + productOutputs.length,
      progress: Math.min(100, (waste.length + productOutputs.length) * 10),
    },
    context: {
      count: (externalContext ? 1 : 0) + (financialContext ? 1 : 0),
      entries: 2,
      progress: (externalContext ? 50 : 0) + (financialContext ? 50 : 0),
    },
  };

  const siteOptions = [
    { value: 'all', label: 'All Sites' },
    ...sites.map((s) => ({ value: s.id, label: s.siteName })),
  ];

  const yearOptions = [
    { value: (new Date().getFullYear()).toString(), label: new Date().getFullYear().toString() },
    { value: (new Date().getFullYear() - 1).toString(), label: (new Date().getFullYear() - 1).toString() },
  ];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Your Data</h1>
          <p className="text-gray-500">
            Track and manage your operational data across all domains.
          </p>
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
          <Button>
            <Plus className="w-4 h-4 mr-2" weight="bold" />
            Add Data
          </Button>
        </div>
      </div>

      {/* Domain Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {domains.map((domain) => {
          const stats = domainStats[domain.id as keyof typeof domainStats];
          const hasData = stats.progress > 0;
          const Icon = domain.icon;

          return (
            <Link
              key={domain.id}
              to={domain.path}
              className={cn(
                'group relative p-5 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg overflow-hidden',
                hasData
                  ? 'bg-white border-2 border-gray-200 hover:border-primary'
                  : 'bg-gray-50/50 border-2 border-dashed border-gray-300 hover:border-primary'
              )}
            >
              {/* Gradient accent bar */}
              <div className={cn(
                'absolute top-0 left-0 right-0 h-1 bg-gradient-to-r',
                domain.gradient,
                !hasData && 'opacity-30'
              )} />

              <div className="flex items-start justify-between mb-4">
                <div className={cn(
                  'w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br shadow-sm',
                  hasData ? domain.gradient : 'from-gray-200 to-gray-300'
                )}>
                  <Icon className="w-6 h-6 text-white" weight="duotone" />
                </div>
                <ArrowRight 
                  className={cn(
                    'w-5 h-5 transition-all duration-300',
                    hasData 
                      ? 'text-gray-300 group-hover:text-primary group-hover:translate-x-1' 
                      : 'text-gray-300'
                  )} 
                  weight="bold"
                />
              </div>

              <h3 className={cn(
                'font-semibold mb-1',
                hasData ? 'text-gray-900' : 'text-gray-500'
              )}>
                {domain.name}
              </h3>
              <p className="text-xs text-gray-500 mb-4">{domain.description}</p>

              {hasData ? (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <ProgressBar value={stats.progress} size="sm" className="flex-1" />
                    <span className="text-xs font-medium text-gray-600">{stats.progress}%</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    {stats.count} {stats.count === 1 ? 'item' : 'items'} tracked
                  </p>
                </>
              ) : (
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-primary transition-colors">
                  <Plus className="w-4 h-4" weight="bold" />
                  <span className="text-sm">Add first entry</span>
                </div>
              )}
            </Link>
          );
        })}
      </div>

      {/* Quick Tips */}
      <Card className="mt-8 bg-primary-100 border-primary rounded-2xl">
        <CardTitle className="text-primary mb-3">Getting Started</CardTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-medium text-gray-900 mb-1">Start with Energy</p>
            <p className="text-gray-600">
              Energy bills are usually the easiest to find. Electricity data unlocks Scope 2 emissions.
            </p>
          </div>
          <div>
            <p className="font-medium text-gray-900 mb-1">Add Materials Next</p>
            <p className="text-gray-600">
              Your material inputs form the foundation for Scope 3 Category 1 (purchased goods).
            </p>
          </div>
          <div>
            <p className="font-medium text-gray-900 mb-1">Complete Context Last</p>
            <p className="text-gray-600">
              External and financial context helps tailor recommendations and unlock full Stack 1.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
