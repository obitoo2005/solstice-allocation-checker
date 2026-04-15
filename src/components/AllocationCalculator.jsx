import { useState } from "react";
import FDVSelector from "./FDVSelector";
import ResultsCard from "./ResultsCard";
import { calculateAllocation, constants, fdvOptions } from "../lib/calculator";
import { formatCurrency, formatNumber } from "../lib/formatters";

const DEFAULT_FLARES = 1_000_000;
const SLIDER_MAX = 5_000_000_000;
const SLIDER_STEP = 10_000;

function formatFlaresInput(value) {
  const digitsOnly = value.replace(/\D/g, "");

  if (!digitsOnly) {
    return "";
  }

  return formatNumber(Number(digitsOnly));
}

function getVerdict(netValue) {
  if (netValue > 0.000001) {
    return {
      label: "Profitable",
      tone: "profitable",
      message: "Above fee",
    };
  }

  if (netValue < -0.000001) {
    return {
      label: "Not worth it",
      tone: "warning",
      message: "Below fee",
    };
  }

  return {
    label: "Break-even",
    tone: "neutral",
    message: "At fee",
  };
}

export default function AllocationCalculator() {
  const [flaresInput, setFlaresInput] = useState(formatNumber(DEFAULT_FLARES));
  const [selectedFDV, setSelectedFDV] = useState(fdvOptions[0].value);

  const parsedFlares = Number(flaresInput.replace(/,/g, "")) || 0;
  const metrics = calculateAllocation(parsedFlares, selectedFDV);

  const verdict = getVerdict(metrics.netValue);
  const sliderValue = Math.min(metrics.sanitizedFlares, SLIDER_MAX);

  return (
    <section id="calculator" className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
      <div className="animate-fade-up rounded-[2rem] border border-white/65 bg-white/72 p-6 shadow-glass backdrop-blur-xl sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber/75">
              Calculator
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Allocation calculator
            </h2>
          </div>

          <div className="rounded-2xl bg-amber/10 px-4 py-3 text-right">
            <p className="text-xs uppercase tracking-[0.22em] text-ink-soft/70">Registration fee</p>
            <p className="mt-1 text-xl font-bold text-ink">
              {formatCurrency(constants.REGISTRATION_FEE)}
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-7">
          <div className="space-y-3">
            <label htmlFor="flares-input" className="text-sm font-semibold text-ink">
              Solstice Flares balance
            </label>
            <input
              id="flares-input"
              type="text"
              inputMode="numeric"
              value={flaresInput}
              onChange={(event) => setFlaresInput(formatFlaresInput(event.target.value))}
              placeholder="Enter your flares"
              className="w-full rounded-[1.4rem] border border-white/70 bg-white/80 px-5 py-4 text-lg font-semibold text-ink shadow-sm outline-none ring-0 transition placeholder:text-slate-400 focus:border-amber/50 focus:bg-white"
            />
            <p className="text-sm leading-6 text-ink-soft">
              Supply {formatNumber(constants.TOTAL_FLARES_SUPPLY)} flares. Pool {formatNumber(constants.AIRDROP_ALLOCATION)} SLX.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <label htmlFor="flares-slider" className="text-sm font-semibold text-ink">
                Quick adjustment
              </label>
              <span className="text-sm text-ink-soft">
                Slider range: 0 to {formatNumber(SLIDER_MAX)} flares
              </span>
            </div>

            <input
              id="flares-slider"
              type="range"
              min="0"
              max={SLIDER_MAX}
              step={SLIDER_STEP}
              value={sliderValue}
              onChange={(event) => setFlaresInput(formatNumber(Number(event.target.value)))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gradient-to-r from-amber/60 via-amber/35 to-slate-200"
            />
          </div>

          <FDVSelector selectedFDV={selectedFDV} onChange={setSelectedFDV} />

          <div className="rounded-[1.6rem] border border-slate-200/80 bg-gradient-to-r from-slate-50 via-white to-amber-50/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-ink-soft/70">
              Verdict
            </p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-2xl font-bold text-ink">{verdict.label}</p>
              <p
                className={`rounded-full px-3 py-1 text-sm font-semibold ${
                  verdict.tone === "profitable"
                    ? "bg-emerald-100 text-success"
                    : verdict.tone === "warning"
                      ? "bg-rose-100 text-danger"
                      : "bg-amber-100 text-amber-700"
                }`}
              >
                {verdict.message}
              </p>
            </div>
          </div>
        </div>
      </div>

      <ResultsCard
        flares={metrics.sanitizedFlares}
        selectedFDV={selectedFDV}
        tokenPrice={metrics.tokenPrice}
        estimatedTokens={metrics.estimatedTokens}
        usdValue={metrics.usdValue}
        netValue={metrics.netValue}
        breakEvenFlares={metrics.breakEvenFlares}
        verdict={verdict}
      />
    </section>
  );
}
