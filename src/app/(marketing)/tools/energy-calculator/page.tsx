"use client";

import { useState } from "react";
import Link from "next/link";
import { analytics } from "@/lib/analytics";
import NewsletterSignup from "@/components/marketing/NewsletterSignup";

type GasUnit = "kWh" | "m3";

interface EnergyInputs {
  electricityKwh: string;
  electricityCost: string;
  fuelLiters: string;
  fuelCost: string;
  gasConsumption: string;
  gasCost: string;
  gasUnit: GasUnit;
  productionOutput: string;
  productionVolume: string;
}

// Emission factors
const EMISSION_FACTORS = {
  electricity: 0.42, // kg CO2e/kWh (EU average grid)
  diesel: 2.68, // kg CO2e/liter
  gasKwh: 0.18, // kg CO2e/kWh
  gasM3: 2.0, // kg CO2e/m³
};

// Energy conversion: 1 liter diesel ≈ 10 kWh, 1 m³ gas ≈ 11.1 kWh
const DIESEL_KWH_PER_LITER = 10;
const GAS_KWH_PER_M3 = 11.1;

function formatCurrency(value: number): string {
  return `€${value.toLocaleString("en-IE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatCO2(kg: number): string {
  const tonnes = kg / 1000;
  return `${tonnes.toLocaleString("en-IE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} t`;
}

function formatNumber(value: number, decimals = 2): string {
  return value.toLocaleString("en-IE", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

const quickWins = [
  {
    title: "LED lighting upgrade",
    reduction: "60% reduction in lighting energy",
    payback: "1-2 year payback",
    description:
      "Replace fluorescent and halogen lighting with LED equivalents. Often the simplest and fastest efficiency win.",
  },
  {
    title: "Variable speed drives on pumps/fans",
    reduction: "20-40% reduction in motor energy",
    payback: "2-3 year payback",
    description:
      "Motors running at full speed when partial speed would do waste significant energy. VSDs match output to demand.",
  },
  {
    title: "Insulation improvements",
    reduction: "15-25% heating reduction",
    payback: "3-5 year payback",
    description:
      "Improve insulation on buildings, pipes, and storage. Reduces heating and cooling loads year-round.",
  },
  {
    title: "Compressed air leak repair",
    reduction: "20-30% reduction in compressor energy",
    payback: "Often <1 year payback",
    description:
      "Compressed air systems commonly leak 20-30% of output. An ultrasonic leak survey and repair programme pays for itself fast.",
  },
  {
    title: "Solar PV installation",
    reduction: "Offset 30-50% of electricity",
    payback: "5-8 year payback",
    description:
      "On-site solar generation reduces grid dependence and locks in long-term electricity costs. Grants often available.",
  },
];

export default function EnergyCalculatorPage() {
  const [inputs, setInputs] = useState<EnergyInputs>({
    electricityKwh: "",
    electricityCost: "",
    fuelLiters: "",
    fuelCost: "",
    gasConsumption: "",
    gasCost: "",
    gasUnit: "kWh",
    productionOutput: "",
    productionVolume: "",
  });
  const [calculated, setCalculated] = useState(false);

  const handleChange = (field: keyof EnergyInputs, value: string) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
    setCalculated(false);
  };

  const electricityKwh = parseFloat(inputs.electricityKwh) || 0;
  const electricityCost = parseFloat(inputs.electricityCost) || 0;
  const fuelLiters = parseFloat(inputs.fuelLiters) || 0;
  const fuelCost = parseFloat(inputs.fuelCost) || 0;
  const gasConsumption = parseFloat(inputs.gasConsumption) || 0;
  const gasCost = parseFloat(inputs.gasCost) || 0;
  const productionVolume = parseFloat(inputs.productionVolume) || 0;

  // Check if at least one energy source has both consumption and cost
  const hasElectricity = electricityKwh > 0 && electricityCost > 0;
  const hasFuel = fuelLiters > 0 && fuelCost > 0;
  const hasGas = gasConsumption > 0 && gasCost > 0;
  const hasAnyEnergy = hasElectricity || hasFuel || hasGas;
  const canCalculate = hasAnyEnergy;

  // Calculations
  const totalCost = electricityCost + fuelCost + gasCost;

  const totalEnergyKwh =
    electricityKwh +
    fuelLiters * DIESEL_KWH_PER_LITER +
    (inputs.gasUnit === "m3"
      ? gasConsumption * GAS_KWH_PER_M3
      : gasConsumption);

  const co2Electricity = electricityKwh * EMISSION_FACTORS.electricity;
  const co2Fuel = fuelLiters * EMISSION_FACTORS.diesel;
  const co2Gas =
    inputs.gasUnit === "m3"
      ? gasConsumption * EMISSION_FACTORS.gasM3
      : gasConsumption * EMISSION_FACTORS.gasKwh;
  const totalCO2 = co2Electricity + co2Fuel + co2Gas;

  const costPerUnit = productionVolume > 0 ? totalCost / productionVolume : 0;
  const energyIntensity =
    productionVolume > 0 ? totalEnergyKwh / productionVolume : 0;
  const carbonIntensity =
    productionVolume > 0 ? totalCO2 / productionVolume : 0;

  const handleCalculate = () => {
    if (!canCalculate) return;
    setCalculated(true);
    analytics.track("calculator_used", {
      label: "energy_roi_calculator",
      total_energy_cost: totalCost,
      has_electricity: !!electricityCost,
      has_fuel: !!fuelCost,
      has_gas: !!gasCost,
    });
  };

  const handleReset = () => {
    setInputs({
      electricityKwh: "",
      electricityCost: "",
      fuelLiters: "",
      fuelCost: "",
      gasConsumption: "",
      gasCost: "",
      gasUnit: "kWh",
      productionOutput: "",
      productionVolume: "",
    });
    setCalculated(false);
  };

  const scenarios = [
    { label: "Conservative", percent: 10, color: "bg-emerald-50 border-emerald-200" },
    { label: "Moderate", percent: 20, color: "bg-blue-50 border-blue-200" },
    { label: "Ambitious", percent: 30, color: "bg-purple-50 border-purple-200" },
  ];

  const outputLabel = inputs.productionOutput || "unit of output";

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <nav className="mb-8">
        <Link
          href="/tools"
          className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#5B4A9E] transition-colors"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            &larr;
          </span>{" "}
          Back to Tools
        </Link>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#5B4A9E] text-white flex items-center justify-center font-bold">
            2
          </div>
          <span className="text-sm text-gray-500">Stack 2</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Energy Efficiency ROI Calculator
        </h1>
        <p className="text-gray-600">
          See how much energy costs you per unit of output — and what efficiency
          improvements could save.
        </p>
      </header>

      {/* Section 1: Current Energy Profile */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Your Current Energy Profile
        </h2>

        <div className="space-y-6">
          {/* Electricity */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-medium text-gray-900 mb-4">Electricity</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Annual consumption (kWh)
                </label>
                <input
                  type="number"
                  min="0"
                  step="100"
                  value={inputs.electricityKwh}
                  onChange={(e) =>
                    handleChange("electricityKwh", e.target.value)
                  }
                  placeholder="e.g. 50000"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4A9E] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Annual cost (&euro;)
                </label>
                <input
                  type="number"
                  min="0"
                  step="100"
                  value={inputs.electricityCost}
                  onChange={(e) =>
                    handleChange("electricityCost", e.target.value)
                  }
                  placeholder="e.g. 12000"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4A9E] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Fuel */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-medium text-gray-900 mb-4">
              Fuel (diesel/petrol)
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Annual consumption (liters)
                </label>
                <input
                  type="number"
                  min="0"
                  step="100"
                  value={inputs.fuelLiters}
                  onChange={(e) => handleChange("fuelLiters", e.target.value)}
                  placeholder="e.g. 5000"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4A9E] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Annual cost (&euro;)
                </label>
                <input
                  type="number"
                  min="0"
                  step="100"
                  value={inputs.fuelCost}
                  onChange={(e) => handleChange("fuelCost", e.target.value)}
                  placeholder="e.g. 7000"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4A9E] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Gas */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-medium text-gray-900 mb-4">Natural Gas</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Annual consumption
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min="0"
                    step="100"
                    value={inputs.gasConsumption}
                    onChange={(e) =>
                      handleChange("gasConsumption", e.target.value)
                    }
                    placeholder="e.g. 20000"
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4A9E] focus:border-transparent"
                  />
                  <select
                    value={inputs.gasUnit}
                    onChange={(e) =>
                      handleChange("gasUnit", e.target.value as GasUnit)
                    }
                    className="border border-gray-300 rounded-md px-3 py-2 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#5B4A9E] focus:border-transparent"
                  >
                    <option value="kWh">kWh</option>
                    <option value="m3">m&sup3;</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Annual cost (&euro;)
                </label>
                <input
                  type="number"
                  min="0"
                  step="100"
                  value={inputs.gasCost}
                  onChange={(e) => handleChange("gasCost", e.target.value)}
                  placeholder="e.g. 4000"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4A9E] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Production output */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-medium text-gray-900 mb-4">
              Production Output
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Main output (e.g. &quot;tonnes of wheat&quot;)
                </label>
                <input
                  type="text"
                  value={inputs.productionOutput}
                  onChange={(e) =>
                    handleChange("productionOutput", e.target.value)
                  }
                  placeholder="e.g. tonnes of wheat"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4A9E] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Annual volume
                </label>
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={inputs.productionVolume}
                  onChange={(e) =>
                    handleChange("productionVolume", e.target.value)
                  }
                  placeholder="e.g. 500"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4A9E] focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={handleCalculate}
            disabled={!canCalculate}
            className={`flex-1 py-3 rounded-md font-semibold transition-colors ${
              canCalculate
                ? "bg-[#5B4A9E] text-white hover:bg-[#4a3d85]"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            Calculate
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 rounded-md font-semibold border border-gray-300 text-gray-700 hover:border-gray-400 transition-colors"
          >
            Reset
          </button>
        </div>
        {!canCalculate && (
          <p className="text-sm text-gray-500 mt-2">
            Enter both consumption and cost for at least one energy source to
            calculate.
          </p>
        )}
      </section>

      {/* Section 2: Calculated Results */}
      {calculated && (
        <>
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Your Energy Profile
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <p className="text-sm text-gray-500 mb-1">Total energy cost</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(totalCost)}
                </p>
                <p className="text-xs text-gray-400 mt-1">per year</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <p className="text-sm text-gray-500 mb-1">
                  Estimated CO2e emissions
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCO2(totalCO2)}
                </p>
                <p className="text-xs text-gray-400 mt-1">CO2e per year</p>
              </div>

              {productionVolume > 0 && (
                <>
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <p className="text-sm text-gray-500 mb-1">
                      Energy cost per {outputLabel}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {formatCurrency(costPerUnit)}
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <p className="text-sm text-gray-500 mb-1">
                      Energy intensity
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {formatNumber(energyIntensity)} kWh
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      per {outputLabel}
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-5 sm:col-span-2">
                    <p className="text-sm text-gray-500 mb-1">
                      Carbon intensity
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {formatNumber(carbonIntensity)} kg CO2e
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      per {outputLabel}
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Breakdown */}
            <div className="mt-4 bg-gray-50 rounded-lg p-5">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Emissions breakdown
              </h3>
              <div className="space-y-2 text-sm">
                {hasElectricity && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Electricity</span>
                    <span className="text-gray-900 font-medium">
                      {formatCO2(co2Electricity)} CO2e
                    </span>
                  </div>
                )}
                {hasFuel && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fuel (diesel/petrol)</span>
                    <span className="text-gray-900 font-medium">
                      {formatCO2(co2Fuel)} CO2e
                    </span>
                  </div>
                )}
                {hasGas && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Natural gas</span>
                    <span className="text-gray-900 font-medium">
                      {formatCO2(co2Gas)} CO2e
                    </span>
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Using EU average emission factors: electricity 0.42 kg
                CO2e/kWh, diesel 2.68 kg CO2e/L, gas{" "}
                {inputs.gasUnit === "m3" ? "2.0 kg CO2e/m\u00B3" : "0.18 kg CO2e/kWh"}.
              </p>
            </div>
          </section>

          {/* Section 3: Improvement Scenarios */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Improvement Scenarios
            </h2>

            <div className="space-y-4">
              {scenarios.map((scenario) => {
                const savingCost = totalCost * (scenario.percent / 100);
                const savingCO2 = totalCO2 * (scenario.percent / 100);
                const newCostPerUnit =
                  productionVolume > 0
                    ? (totalCost - savingCost) / productionVolume
                    : 0;

                return (
                  <div
                    key={scenario.label}
                    className={`border rounded-lg p-6 ${scenario.color}`}
                  >
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {scenario.label} ({scenario.percent}% reduction)
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm text-gray-500">
                          Annual cost saving
                        </p>
                        <p className="text-xl font-bold text-gray-900">
                          {formatCurrency(savingCost)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          CO2e reduction
                        </p>
                        <p className="text-xl font-bold text-gray-900">
                          {formatCO2(savingCO2)} CO2e
                        </p>
                      </div>
                    </div>
                    {productionVolume > 0 && (
                      <p className="text-sm text-gray-600 mb-2">
                        New energy cost per {outputLabel}:{" "}
                        <span className="font-semibold">
                          {formatCurrency(newCostPerUnit)}
                        </span>{" "}
                        (down from {formatCurrency(costPerUnit)})
                      </p>
                    )}
                    <p className="text-sm font-medium text-[#5B4A9E]">
                      That&apos;s {formatCurrency(savingCost)} back in your
                      pocket every year
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </>
      )}

      {/* Section 4: Common Quick Wins */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Common Quick Wins
        </h2>
        <div className="space-y-4">
          {quickWins.map((win) => (
            <div
              key={win.title}
              className="bg-gray-50 rounded-lg p-5"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-medium text-gray-900">{win.title}</h3>
                <span className="flex-shrink-0 text-xs font-medium bg-[#5B4A9E]/10 text-[#5B4A9E] px-2 py-1 rounded">
                  {win.payback}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">{win.description}</p>
              <p className="text-sm font-medium text-[#5B4A9E]">
                {win.reduction}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mb-12">
        <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold mb-3">
            Want the full efficiency audit?
          </h2>
          <p className="text-gray-300 mb-6">
            The Efficiency Assessment identifies exactly where your operation
            leaks margin.
          </p>
          <Link
            href="/tools/efficiency-assessment"
            className="inline-block bg-[#5B4A9E] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#4a3d85] transition-colors"
          >
            Take the Efficiency Assessment &rarr;
          </Link>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
}
