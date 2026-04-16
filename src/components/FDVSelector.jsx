import { fdvOptions } from "../lib/calculator";
import { formatCurrency } from "../lib/formatters";

export default function FDVSelector({
  selectedFDV,
  customFDVInput,
  onSelectPreset,
  onCustomFDVChange,
}) {
  const isCustomFDVActive = customFDVInput.trim() !== "";

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-ink">FDV scenario</label>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-soft/70">
          Token price {formatCurrency(selectedFDV / 1_000_000_000)}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 rounded-3xl bg-white/60 p-2 shadow-inner shadow-white/40 sm:grid-cols-4">
        {fdvOptions.map((option) => {
          const active = !isCustomFDVActive && option.value === selectedFDV;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelectPreset(option.value)}
              className={`rounded-2xl px-3 py-3 text-sm font-semibold transition ${
                active
                  ? "bg-ink text-white shadow-lg shadow-ink/20"
                  : "bg-transparent text-ink-soft hover:bg-white/80"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <div className="space-y-2">
        <label htmlFor="custom-fdv-input" className="text-sm font-semibold text-ink">
          Custom FDV ($)
        </label>
        <input
          id="custom-fdv-input"
          type="text"
          inputMode="numeric"
          value={customFDVInput}
          onChange={(event) => onCustomFDVChange(event.target.value)}
          placeholder="Enter custom FDV"
          className="w-full rounded-[1.4rem] border border-white/70 bg-white/80 px-5 py-4 text-lg font-semibold text-ink shadow-sm outline-none ring-0 transition placeholder:text-slate-400 focus:border-amber/50 focus:bg-white"
        />
      </div>
    </div>
  );
}
