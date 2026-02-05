"use client";

import { useState } from 'react';
import Link from 'next/link';
import {
  Cube,
  Package,
  Lightning,
  Buildings,
  Truck,
  UsersThree,
  Recycle,
  GlobeHemisphereWest,
  FileText,
  Export,
  ArrowRight,
  Leaf,
  Plus,
  TreeStructure,
  Sparkle,
} from '@phosphor-icons/react';
import { Card, Button } from '@/components/ui';
import { useAppStore } from '@/stores/appStore';
import { useDataStore } from '@/stores/dataStore';
import { cn } from '@/lib/utils/cn';

// Domain configuration - using brand colors
const domains = [
  {
    id: 'materials',
    name: 'Materials',
    icon: Cube,
    path: '/data/materials',
    description: 'Raw materials & components',
    gradient: 'from-stack-1 to-stack-2',
  },
  {
    id: 'packaging',
    name: 'Packaging',
    icon: Package,
    path: '/data/packaging',
    description: 'Primary & secondary packaging',
    gradient: 'from-stack-2 to-stack-3',
  },
  {
    id: 'energy',
    name: 'Energy',
    icon: Lightning,
    path: '/data/energy',
    description: 'Electricity, fuels & water',
    gradient: 'from-stack-3 to-stack-4',
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    icon: Buildings,
    path: '/data/infrastructure',
    description: 'Sites, buildings & assets',
    gradient: 'from-stack-4 to-stack-5',
  },
  {
    id: 'transport',
    name: 'Transport',
    icon: Truck,
    path: '/data/transport',
    description: 'Inbound & outbound logistics',
    gradient: 'from-stack-1 to-stack-3',
  },
  {
    id: 'workforce',
    name: 'Workforce',
    icon: UsersThree,
    path: '/data/workforce',
    description: 'Employees, H&S & training',
    gradient: 'from-stack-2 to-stack-4',
  },
  {
    id: 'outputs',
    name: 'Outputs',
    icon: Recycle,
    path: '/data/outputs',
    description: 'Waste, products & emissions',
    gradient: 'from-stack-3 to-stack-5',
  },
  {
    id: 'context',
    name: 'Context',
    icon: GlobeHemisphereWest,
    path: '/data/context',
    description: 'External & financial context',
    gradient: 'from-primary-dark to-primary',
  },
];

// Helper to format numbers
function formatNumber(n: number): string {
  if (n === 0) return '—';
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return n.toLocaleString();
}

export default function DashboardPage() {
  const { company, sites, companyLogo } = useAppStore();
  const {
    materialInputs,
    packagingInputs,
    energyElectricity,
    energyFuels,
    energyWater,
    assets,
    transportLogs,
    workforce,
    healthSafety,
    training,
    waste,
    productOutputs,
    directEmissions,
    externalContext,
    financialContext,
  } = useDataStore();

  const [activeTab, setActiveTab] = useState<string>('all');

  // Domain stats with key metrics
  const domainStats = {
    materials: {
      count: materialInputs.length,
      metric: materialInputs.reduce((sum, m) => sum + m.quantity, 0),
      metricUnit: 'kg',
    },
    packaging: {
      count: packagingInputs.length,
      metric: packagingInputs.reduce((sum, p) => sum + p.totalWeightKg, 0),
      metricUnit: 'kg',
    },
    energy: {
      count: energyElectricity.length + energyFuels.length + energyWater.length,
      metric: energyElectricity.reduce((sum, e) => sum + e.consumptionKwh, 0),
      metricUnit: 'kWh',
    },
    infrastructure: {
      count: assets.length + sites.length,
      metric: sites.reduce((sum, s) => sum + (s.floorAreaM2 || 0), 0),
      metricUnit: 'm²',
    },
    transport: {
      count: transportLogs.length,
      metric: transportLogs.reduce((sum, t) => sum + (t.tkm || 0), 0),
      metricUnit: 'tkm',
    },
    workforce: {
      count: workforce.length + healthSafety.length + training.length,
      metric: workforce.length > 0 ? workforce[workforce.length - 1].totalFte : (company?.totalFte || 0),
      metricUnit: 'FTE',
    },
    outputs: {
      count: waste.length + productOutputs.length + directEmissions.length,
      metric: waste.reduce((sum, w) => sum + w.quantityKg, 0),
      metricUnit: 'kg',
    },
    context: {
      count: (externalContext ? 1 : 0) + (financialContext ? 1 : 0),
      metric: (externalContext ? 50 : 0) + (financialContext ? 50 : 0),
      metricUnit: '%',
    },
  };

  // Overall stats
  const domainsWithData = Object.values(domainStats).filter(d => d.count > 0).length;
  const totalEntries = Object.values(domainStats).reduce((sum, d) => sum + d.count, 0);
  const overallProgress = Math.round((domainsWithData / 8) * 100);

  // Filter domains based on active tab
  const filteredDomains = activeTab === 'all'
    ? domains
    : activeTab === 'with-data'
    ? domains.filter(d => domainStats[d.id as keyof typeof domainStats].count > 0)
    : domains.filter(d => domainStats[d.id as keyof typeof domainStats].count === 0);

  return (
    <div className="animate-fade-in">
      {/* Progress Banner */}
      <div className="relative mb-8 p-6 rounded-2xl bg-gradient-to-r from-stack-1 via-stack-3 to-primary overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-white/5 rounded-full translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full -translate-y-1/2" />

        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-white/20 items-center justify-center">
              <TreeStructure className="w-8 h-8 text-white" weight="duotone" />
            </div>
            <div className="text-white">
              <div className="text-sm font-medium text-white/80 mb-1">Metrics — Baseline Completeness</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">{domainsWithData}</span>
                <span className="text-xl text-white/70">/ 8 domains</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-center text-white">
              <div className="text-2xl font-bold">{totalEntries}</div>
              <div className="text-xs text-white/70">Records</div>
            </div>
            <div className="text-center text-white">
              <div className="text-2xl font-bold">{sites.length}</div>
              <div className="text-xs text-white/70">Sites</div>
            </div>
            <div className="hidden md:block w-32">
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all duration-500"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
              <div className="text-xs text-white/70 mt-1 text-right">{overallProgress}%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs + Action Buttons */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-1">
          {[
            { id: 'all', label: 'All Domains' },
            { id: 'with-data', label: `With Data (${domainsWithData})` },
            { id: 'empty', label: `Needs Data (${8 - domainsWithData})` },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-lg transition-all',
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link href="/respond">
            <Button>
              <FileText className="w-4 h-4 mr-2" weight="duotone" />
              Generate Response
            </Button>
          </Link>
          <Link href="/exports">
            <Button variant="outline">
              <Export className="w-4 h-4 mr-2" weight="duotone" />
              Export
            </Button>
          </Link>
        </div>
      </div>

      {/* Domain Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {filteredDomains.map((domain) => {
          const stats = domainStats[domain.id as keyof typeof domainStats];
          const hasData = stats.count > 0;
          const Icon = domain.icon;

          return (
            <Link key={domain.id} href={domain.path}>
              <div
                className={cn(
                  'group relative p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden h-full',
                  hasData
                    ? 'bg-white border border-gray-200'
                    : 'bg-gray-50/50 border border-dashed border-gray-300'
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
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        {formatNumber(stats.metric)}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">{stats.metricUnit}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-medium text-primary bg-primary-100 px-2 py-1 rounded-full">
                        {stats.count} entries
                      </span>
                    </div>
                  </div>
                ) : (
                  <button className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-primary transition-colors">
                    <Plus className="w-4 h-4" weight="bold" />
                    <span>Add first entry</span>
                  </button>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {!companyLogo ? (
          <Link href="/settings" className="group">
            <Card className="border-2 border-transparent hover:border-primary transition-all hover:shadow-md rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-stack-1 to-stack-2 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" weight="duotone" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">Upload Company Logo</div>
                  <div className="text-sm text-gray-500">Personalize your dashboard</div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" weight="bold" />
              </div>
            </Card>
          </Link>
        ) : (
          <Link href="/exports" className="group">
            <Card className="border-2 border-transparent hover:border-primary transition-all hover:shadow-md rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-stack-3 to-stack-4 flex items-center justify-center">
                  <Export className="w-6 h-6 text-white" weight="duotone" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">View Exports</div>
                  <div className="text-sm text-gray-500">Download your data</div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" weight="bold" />
              </div>
            </Card>
          </Link>
        )}

        <Link href="/respond" className="group">
          <Card className="border-2 border-transparent hover:border-primary transition-all hover:shadow-md rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" weight="duotone" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">Answer Questionnaire</div>
                <div className="text-sm text-gray-500">Generate responses from data</div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" weight="bold" />
            </div>
          </Card>
        </Link>

        <Link href="/settings" className="group">
          <Card className="border-2 border-transparent hover:border-primary transition-all hover:shadow-md rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-stack-4 to-stack-5 flex items-center justify-center">
                <Sparkle className="w-6 h-6 text-white" weight="duotone" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">Load Demo Data</div>
                <div className="text-sm text-gray-500">Explore with sample data</div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" weight="bold" />
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
}
