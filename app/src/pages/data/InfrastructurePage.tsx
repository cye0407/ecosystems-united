import { useState, useMemo, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Buildings, Factory, Wind, Truck, Monitor, DotsThree, Check, ArrowLeft,
  ChartBar, TrendUp, Plus, PencilSimple, Trash, Lightning
} from '@phosphor-icons/react';
import { Card, Button, ProgressBar, Modal, Input, Select, Badge, EmptyState } from '@/components/ui';
import { useDataStore } from '@/stores/dataStore';
import { useAppStore } from '@/stores/appStore';
import { cn } from '@/lib/utils/cn';
import type { Asset, AssetCategory, Criticality, MaintenanceFrequency } from '@/types';

type InfrastructureTab = 'all' | 'production_equipment' | 'hvac' | 'vehicles' | 'it' | 'other';

const categoryOptions = [
  { value: 'production_equipment', label: 'Production Equipment' },
  { value: 'hvac', label: 'HVAC Systems' },
  { value: 'vehicles', label: 'Vehicles' },
  { value: 'it', label: 'IT Equipment' },
  { value: 'other', label: 'Other' },
];

const criticalityOptions = [
  { value: 'critical', label: 'Critical' },
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
];

const maintenanceOptions = [
  { value: 'monthly', label: 'Monthly' },
  { value: 'quarterly', label: 'Quarterly' },
  { value: 'annual', label: 'Annual' },
  { value: 'as_needed', label: 'As Needed' },
];

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
  assets,
  onNavigate,
  sites,
  selectedSiteId,
  setSelectedSiteId,
  onAddAsset,
}: {
  assets: Asset[];
  onNavigate: (tab: InfrastructureTab) => void;
  sites: { id: string; siteName: string }[];
  selectedSiteId: string;
  setSelectedSiteId: (id: string) => void;
  onAddAsset: () => void;
}) {
  // Filter assets by site
  const siteAssets = useMemo(() => {
    return assets.filter(a => a.siteId === selectedSiteId);
  }, [assets, selectedSiteId]);

  // Calculate totals by category
  const totals = useMemo(() => {
    const production = siteAssets.filter(a => a.assetCategory === 'production_equipment');
    const hvac = siteAssets.filter(a => a.assetCategory === 'hvac');
    const vehicles = siteAssets.filter(a => a.assetCategory === 'vehicles');
    const it = siteAssets.filter(a => a.assetCategory === 'it');
    const other = siteAssets.filter(a => a.assetCategory === 'other');

    const getEnergy = (list: Asset[]) => list.reduce((s, a) => s + (a.energyConsumptionKwhYear || 0), 0);
    const getCount = (list: Asset[]) => list.reduce((s, a) => s + (a.quantity || 1), 0);

    const totalEnergy = getEnergy(siteAssets);
    const totalUnits = getCount(siteAssets);
    const criticalCount = siteAssets.filter(a => a.criticality === 'critical').length;

    return {
      production: { count: getCount(production), energy: getEnergy(production), assets: production.length },
      hvac: { count: getCount(hvac), energy: getEnergy(hvac), assets: hvac.length },
      vehicles: { count: getCount(vehicles), energy: getEnergy(vehicles), assets: vehicles.length },
      it: { count: getCount(it), energy: getEnergy(it), assets: it.length },
      other: { count: getCount(other), energy: getEnergy(other), assets: other.length },
      totalEnergy,
      totalUnits,
      criticalCount,
    };
  }, [siteAssets]);

  const categories = [
    {
      id: 'production_equipment' as InfrastructureTab,
      title: 'Production',
      icon: Factory,
      color: 'bg-blue-100 text-blue-700',
      borderColor: 'border-blue-300',
      hoverBorder: 'hover:border-blue-400',
      value: totals.production.count,
      unit: 'units',
      assets: totals.production.assets,
      energy: totals.production.energy,
      subtitle: 'Manufacturing equipment',
    },
    {
      id: 'hvac' as InfrastructureTab,
      title: 'HVAC',
      icon: Wind,
      color: 'bg-cyan-100 text-cyan-700',
      borderColor: 'border-cyan-300',
      hoverBorder: 'hover:border-cyan-400',
      value: totals.hvac.count,
      unit: 'units',
      assets: totals.hvac.assets,
      energy: totals.hvac.energy,
      subtitle: 'Heating & cooling',
    },
    {
      id: 'vehicles' as InfrastructureTab,
      title: 'Vehicles',
      icon: Truck,
      color: 'bg-amber-100 text-amber-700',
      borderColor: 'border-amber-300',
      hoverBorder: 'hover:border-amber-400',
      value: totals.vehicles.count,
      unit: 'units',
      assets: totals.vehicles.assets,
      energy: totals.vehicles.energy,
      subtitle: 'Fleet & transport',
    },
    {
      id: 'it' as InfrastructureTab,
      title: 'IT',
      icon: Monitor,
      color: 'bg-purple-100 text-purple-700',
      borderColor: 'border-purple-300',
      hoverBorder: 'hover:border-purple-400',
      value: totals.it.count,
      unit: 'units',
      assets: totals.it.assets,
      energy: totals.it.energy,
      subtitle: 'Servers & computers',
    },
    {
      id: 'other' as InfrastructureTab,
      title: 'Other',
      icon: DotsThree,
      color: 'bg-gray-100 text-gray-700',
      borderColor: 'border-gray-300',
      hoverBorder: 'hover:border-gray-400',
      value: totals.other.count,
      unit: 'units',
      assets: totals.other.assets,
      energy: totals.other.energy,
      subtitle: 'Miscellaneous',
    },
  ];

  // Table rows for assets by category
  const tableRows = [
    { category: 'production_equipment' as AssetCategory, label: 'Production Equipment', icon: Factory, iconColor: 'text-blue-600' },
    { category: 'hvac' as AssetCategory, label: 'HVAC Systems', icon: Wind, iconColor: 'text-cyan-600' },
    { category: 'vehicles' as AssetCategory, label: 'Vehicles', icon: Truck, iconColor: 'text-amber-600' },
    { category: 'it' as AssetCategory, label: 'IT Equipment', icon: Monitor, iconColor: 'text-purple-600' },
    { category: 'other' as AssetCategory, label: 'Other', icon: DotsThree, iconColor: 'text-gray-600' },
  ];

  if (assets.length === 0) {
    return (
      <EmptyState
        icon={Buildings}
        title="No assets recorded yet"
        description="Add your major equipment and infrastructure assets."
        actionLabel="Add First Asset"
        onAction={onAddAsset}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Key Stats Row */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="bg-blue-50 border-blue-200 py-3 px-4">
          <div className="flex items-center gap-2 text-blue-700">
            <Buildings className="w-4 h-4" />
            <span className="text-xs font-medium">Total Assets</span>
          </div>
          <div className="text-2xl font-bold text-blue-800 mt-1">{siteAssets.length}</div>
          <div className="text-xs text-blue-600">defined</div>
        </Card>
        <Card className="bg-green-50 border-green-200 py-3 px-4">
          <div className="flex items-center gap-2 text-green-700">
            <ChartBar className="w-4 h-4" />
            <span className="text-xs font-medium">Total Units</span>
          </div>
          <div className="text-2xl font-bold text-green-800 mt-1">{totals.totalUnits}</div>
          <div className="text-xs text-green-600">equipment items</div>
        </Card>
        <Card className="bg-amber-50 border-amber-200 py-3 px-4">
          <div className="flex items-center gap-2 text-amber-700">
            <Lightning className="w-4 h-4" />
            <span className="text-xs font-medium">Est. Energy</span>
          </div>
          <div className="text-2xl font-bold text-amber-800 mt-1">{formatNumber(totals.totalEnergy)}</div>
          <div className="text-xs text-amber-600">kWh/year</div>
        </Card>
        <Card className="bg-red-50 border-red-200 py-3 px-4">
          <div className="flex items-center gap-2 text-red-700">
            <TrendUp className="w-4 h-4" />
            <span className="text-xs font-medium">Critical</span>
          </div>
          <div className="text-2xl font-bold text-red-800 mt-1">{totals.criticalCount}</div>
          <div className="text-xs text-red-600">assets</div>
        </Card>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-5 gap-4">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => onNavigate(cat.id)}
              className={cn(
                'text-left p-4 rounded-xl border-2 transition-all',
                cat.borderColor,
                cat.hoverBorder,
                'hover:shadow-md'
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center', cat.color)}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="font-semibold text-gray-900 text-sm">{cat.title}</div>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold text-gray-900">{cat.value}</span>
                <span className="text-xs text-gray-500">{cat.unit}</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">{formatNumber(cat.energy)} kWh/yr</div>
            </button>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <select
            value={selectedSiteId}
            onChange={(e) => setSelectedSiteId(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white"
          >
            {sites.map((site) => (
              <option key={site.id} value={site.id}>{site.siteName}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Summary Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Category</th>
                <th className="text-center py-3 px-4 font-medium text-gray-600">Assets</th>
                <th className="text-center py-3 px-4 font-medium text-gray-600">Units</th>
                <th className="text-center py-3 px-4 font-medium text-gray-600">Critical</th>
                <th className="text-right py-3 px-4 font-medium text-gray-600">Est. Energy</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row) => {
                const Icon = row.icon;
                const categoryAssets = siteAssets.filter(a => a.assetCategory === row.category);
                const unitCount = categoryAssets.reduce((s, a) => s + (a.quantity || 1), 0);
                const criticalCount = categoryAssets.filter(a => a.criticality === 'critical').length;
                const energy = categoryAssets.reduce((s, a) => s + (a.energyConsumptionKwhYear || 0), 0);
                return (
                  <tr key={row.category} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Icon className={cn('w-4 h-4', row.iconColor)} />
                        <span className="font-medium text-gray-900">{row.label}</span>
                      </div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <span className="text-gray-700">{categoryAssets.length}</span>
                    </td>
                    <td className="text-center py-3 px-4">
                      <span className="text-gray-700">{unitCount}</span>
                    </td>
                    <td className="text-center py-3 px-4">
                      {criticalCount > 0 ? (
                        <Badge variant="low">{criticalCount}</Badge>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="text-right py-3 px-4">
                      <span className="font-medium text-gray-900">{formatNumber(energy)} kWh</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

// ============ CATEGORY TAB CONTENT ============
function CategoryTab({
  category,
  assets,
  sites,
  selectedSiteId,
  setSelectedSiteId,
  onAddAsset,
  onEditAsset,
  onDeleteAsset,
}: {
  category: AssetCategory;
  assets: Asset[];
  sites: { id: string; siteName: string }[];
  selectedSiteId: string;
  setSelectedSiteId: (id: string) => void;
  onAddAsset: () => void;
  onEditAsset: (asset: Asset) => void;
  onDeleteAsset: (id: string) => void;
}) {
  const categoryAssets = assets.filter(a => a.assetCategory === category && a.siteId === selectedSiteId);

  const categoryLabels: Record<AssetCategory, { title: string; icon: typeof Buildings; color: string }> = {
    production_equipment: { title: 'Production Equipment', icon: Factory, color: 'bg-blue-100 text-blue-700' },
    hvac: { title: 'HVAC Systems', icon: Wind, color: 'bg-cyan-100 text-cyan-700' },
    vehicles: { title: 'Vehicles', icon: Truck, color: 'bg-amber-100 text-amber-700' },
    it: { title: 'IT Equipment', icon: Monitor, color: 'bg-purple-100 text-purple-700' },
    other: { title: 'Other', icon: DotsThree, color: 'bg-gray-100 text-gray-700' },
  };

  const { title, icon: Icon, color } = categoryLabels[category];

  if (categoryAssets.length === 0) {
    return (
      <EmptyState
        icon={Buildings}
        title={`No ${title.toLowerCase()} defined yet`}
        description="Add your first asset to start tracking."
        actionLabel="Add Asset"
        onAction={onAddAsset}
      />
    );
  }

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <select
            value={selectedSiteId}
            onChange={(e) => setSelectedSiteId(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white"
          >
            {sites.map((site) => (
              <option key={site.id} value={site.id}>{site.siteName}</option>
            ))}
          </select>
        </div>
        <Button onClick={onAddAsset} variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-1" />
          Add Asset
        </Button>
      </div>

      {/* Asset List */}
      <div className="space-y-3">
        {categoryAssets.map((asset) => {
          return (
            <Card key={asset.id} className="hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center', color)}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">{asset.assetName}</span>
                      {asset.criticality && (
                        <Badge
                          variant={
                            asset.criticality === 'critical'
                              ? 'low'
                              : asset.criticality === 'high'
                              ? 'medium'
                              : 'high'
                          }
                        >
                          {asset.criticality}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      {asset.assetType && `${asset.assetType} • `}
                      {asset.quantity > 1 ? `${asset.quantity} units` : '1 unit'}
                      {asset.acquisitionYear && ` • Acquired ${asset.acquisitionYear}`}
                    </p>
                    {asset.energyConsumptionKwhYear && (
                      <p className="text-xs text-gray-400 mt-1">
                        Est. {asset.energyConsumptionKwhYear.toLocaleString()} kWh/year
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" onClick={() => onEditAsset(asset)}>
                    <PencilSimple className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => onDeleteAsset(asset.id)}>
                    <Trash className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

// ============ MAIN PAGE ============
export function InfrastructurePage() {
  const { sites } = useAppStore();
  const { assets, addAsset, updateAsset, removeAsset } = useDataStore();

  const [activeTab, setActiveTab] = useState<InfrastructureTab>('all');
  const [selectedSiteId, setSelectedSiteId] = useState(sites[0]?.id || '');

  const [showAssetModal, setShowAssetModal] = useState(false);
  const [editingAsset, setEditingAsset] = useState<Asset | null>(null);

  const [toastMessage, setToastMessage] = useState('');
  const [showToastState, setShowToastState] = useState(false);

  const [assetForm, setAssetForm] = useState<Partial<Asset>>({
    siteId: sites[0]?.id || '',
    assetName: '',
    assetCategory: 'production_equipment',
    assetType: '',
    quantity: 1,
    criticality: 'medium',
  });

  const progress = useMemo(() => {
    return Math.min(100, assets.length * 15);
  }, [assets]);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    setShowToastState(true);
  }, []);

  const handleAddAsset = (category?: AssetCategory) => {
    setEditingAsset(null);
    setAssetForm({
      siteId: selectedSiteId,
      assetName: '',
      assetCategory: category || (activeTab !== 'all' ? activeTab as AssetCategory : 'production_equipment'),
      assetType: '',
      quantity: 1,
      criticality: 'medium',
    });
    setShowAssetModal(true);
  };

  const handleEditAsset = (asset: Asset) => {
    setEditingAsset(asset);
    setAssetForm(asset);
    setShowAssetModal(true);
  };

  const handleSaveAsset = () => {
    const now = new Date().toISOString();
    if (editingAsset) {
      updateAsset(editingAsset.id, { ...assetForm, updatedAt: now });
      showToast('Asset updated');
    } else {
      addAsset({
        ...assetForm,
        id: crypto.randomUUID(),
        createdAt: now,
        updatedAt: now,
      } as Asset);
      showToast('Asset added');
    }
    setShowAssetModal(false);
  };

  const handleDeleteAsset = (id: string) => {
    removeAsset(id);
    showToast('Asset deleted');
  };

  const tabs = [
    { id: 'all' as InfrastructureTab, label: 'All + Insights', icon: ChartBar },
    { id: 'production_equipment' as InfrastructureTab, label: 'Production', icon: Factory },
    { id: 'hvac' as InfrastructureTab, label: 'HVAC', icon: Wind },
    { id: 'vehicles' as InfrastructureTab, label: 'Vehicles', icon: Truck },
    { id: 'it' as InfrastructureTab, label: 'IT', icon: Monitor },
    { id: 'other' as InfrastructureTab, label: 'Other', icon: DotsThree },
  ];

  return (
    <div className="animate-fade-in">
      <Toast message={toastMessage} show={showToastState} onClose={() => setShowToastState(false)} />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
        <div className="flex items-start gap-4">
          <Link
            to="/data"
            className="mt-1 p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center">
                <Buildings className="w-5 h-5" />
              </div>
              <h1 className="text-2xl font-bold text-deep-forest">Infrastructure</h1>
            </div>
            <p className="text-gray-500 ml-13">Track sites, buildings, and equipment assets</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <Card className="bg-cream py-3 px-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-medium text-gray-600">Data Completeness</span>
              <span className="text-xs text-gray-400">{assets.length} assets</span>
            </div>
            <ProgressBar value={progress} size="sm" className="max-w-xs" />
          </div>
          <div className="text-center border border-gray-200 rounded-lg px-3 py-2 bg-white min-w-[70px] ml-4">
            <div className="text-base font-bold text-primary">{progress}%</div>
            <div className="text-xs text-gray-500">done</div>
          </div>
        </div>
      </Card>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 border-b border-gray-200">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px',
                isActive
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
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
          assets={assets}
          onNavigate={setActiveTab}
          sites={sites}
          selectedSiteId={selectedSiteId}
          setSelectedSiteId={setSelectedSiteId}
          onAddAsset={() => handleAddAsset()}
        />
      ) : (
        <CategoryTab
          category={activeTab as AssetCategory}
          assets={assets}
          sites={sites}
          selectedSiteId={selectedSiteId}
          setSelectedSiteId={setSelectedSiteId}
          onAddAsset={() => handleAddAsset(activeTab as AssetCategory)}
          onEditAsset={handleEditAsset}
          onDeleteAsset={handleDeleteAsset}
        />
      )}

      {/* Asset Modal */}
      <Modal
        isOpen={showAssetModal}
        onClose={() => setShowAssetModal(false)}
        title={editingAsset ? 'Edit Asset' : 'Add Asset'}
        size="lg"
      >
        <div className="space-y-4">
          <Select
            label="Site"
            value={assetForm.siteId}
            onChange={(e) => setAssetForm({ ...assetForm, siteId: e.target.value })}
            options={sites.map((s) => ({ value: s.id, label: s.siteName }))}
          />
          <Input
            label="Asset Name"
            value={assetForm.assetName || ''}
            onChange={(e) => setAssetForm({ ...assetForm, assetName: e.target.value })}
            placeholder="e.g., CNC Machine, Main HVAC Unit"
          />
          <div className="grid grid-cols-2 gap-4">
            <Select
              label="Category"
              value={assetForm.assetCategory}
              onChange={(e) => setAssetForm({ ...assetForm, assetCategory: e.target.value as AssetCategory })}
              options={categoryOptions}
            />
            <Input
              label="Asset Type"
              value={assetForm.assetType || ''}
              onChange={(e) => setAssetForm({ ...assetForm, assetType: e.target.value })}
              placeholder="e.g., Lathe, Air Handler"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Quantity"
              type="number"
              min={1}
              value={assetForm.quantity || 1}
              onChange={(e) => setAssetForm({ ...assetForm, quantity: parseInt(e.target.value) || 1 })}
            />
            <Select
              label="Criticality"
              value={assetForm.criticality || 'medium'}
              onChange={(e) => setAssetForm({ ...assetForm, criticality: e.target.value as Criticality })}
              options={criticalityOptions}
            />
          </div>

          <div className="border-t pt-4">
            <h4 className="font-medium text-gray-900 mb-3">Asset Details (Optional)</h4>
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Acquisition Year"
                type="number"
                min={1900}
                max={new Date().getFullYear()}
                value={assetForm.acquisitionYear || ''}
                onChange={(e) => setAssetForm({ ...assetForm, acquisitionYear: parseInt(e.target.value) || undefined })}
              />
              <Input
                label="Expected Lifespan (Years)"
                type="number"
                min={1}
                value={assetForm.expectedLifespanYears || ''}
                onChange={(e) =>
                  setAssetForm({ ...assetForm, expectedLifespanYears: parseInt(e.target.value) || undefined })
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Input
                label="Replacement Cost"
                type="number"
                value={assetForm.replacementCost || ''}
                onChange={(e) =>
                  setAssetForm({ ...assetForm, replacementCost: parseFloat(e.target.value) || undefined })
                }
                hint="In your local currency"
              />
              <Input
                label="Energy Consumption (kWh/year)"
                type="number"
                value={assetForm.energyConsumptionKwhYear || ''}
                onChange={(e) =>
                  setAssetForm({ ...assetForm, energyConsumptionKwhYear: parseFloat(e.target.value) || undefined })
                }
                hint="Estimated annual usage"
              />
            </div>
            <Select
              label="Maintenance Frequency"
              value={assetForm.maintenanceFrequency || 'as_needed'}
              onChange={(e) =>
                setAssetForm({ ...assetForm, maintenanceFrequency: e.target.value as MaintenanceFrequency })
              }
              options={maintenanceOptions}
              className="mt-4"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <Button variant="outline" onClick={() => setShowAssetModal(false)}>
            Cancel
          </Button>
          <Button onClick={handleSaveAsset}>{editingAsset ? 'Update' : 'Add Asset'}</Button>
        </div>
      </Modal>

      {/* Tips Card */}
      <Card className="mt-8 bg-cream border-forest-300">
        <div className="font-semibold text-forest-700 mb-3">Tips for Better Data</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-medium text-gray-900 mb-1">Focus on energy consumers</p>
            <p className="text-gray-600">Prioritize assets that consume significant energy like HVAC and production equipment.</p>
          </div>
          <div>
            <p className="font-medium text-gray-900 mb-1">Track acquisition year</p>
            <p className="text-gray-600">Equipment age helps plan for replacements and efficiency upgrades.</p>
          </div>
          <div>
            <p className="font-medium text-gray-900 mb-1">Note energy consumption</p>
            <p className="text-gray-600">Estimated annual energy use helps identify efficiency opportunities.</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
