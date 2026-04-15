import { fdvOptions } from "../lib/calculator";
import { formatCurrency } from "../lib/formatters";

export default function FDVSelector({ selectedFDV, onChange }) {
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
          const active = option.value === selectedFDV;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
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
    </div>
  );
}
