import { formatCurrency, formatNumber, formatTokenAmount } from "../lib/formatters";

function StatRow({ label, value, emphasis = false }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-slate-200/70 py-3 last:border-b-0">
      <span className="text-sm text-ink-soft">{label}</span>
      <span className={`text-right text-sm font-semibold ${emphasis ? "text-ink" : "text-ink-soft"}`}>
        {value}
      </span>
    </div>
  );
}

export default function ResultsCard({
  flares,
  selectedFDV,
  tokenPrice,
  estimatedTokens,
  usdValue,
  netValue,
  breakEvenFlares,
  verdict,
}) {
  const badgeStyles = {
    profitable: "border-emerald-200 bg-emerald-50 text-success",
    warning: "border-rose-200 bg-rose-50 text-danger",
    neutral: "border-amber-200 bg-amber-50 text-amber-700",
  };

  return (
    <section className="animate-fade-up-delay rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-glass backdrop-blur-xl sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber/75">
            Output
          </p>
          <h3 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">Airdrop snapshot</h3>
        </div>

        <span className={`rounded-full border px-3 py-1 text-sm font-semibold ${badgeStyles[verdict.tone]}`}>
          {verdict.label}
        </span>
      </div>

      <div className="mt-6 rounded-[1.75rem] bg-gradient-to-br from-amber-50 via-white to-slate-50 p-5 shadow-inner shadow-white/70">
        <p className="text-sm text-ink-soft">Estimated USD value</p>
        <p className="mt-2 text-5xl font-black tracking-tight text-ink sm:text-6xl">
          {formatCurrency(usdValue)}
        </p>
        <div className="mt-4 flex items-center justify-between gap-4 rounded-[1.25rem] border border-white/80 bg-white/85 px-4 py-3">
          <p className="text-sm font-medium text-ink-soft sm:text-base">Net after registration fee</p>
          <p
            className={`text-2xl font-black tracking-tight sm:text-3xl ${
              netValue >= 0 ? "text-success" : "text-danger"
            }`}
          >
            {formatCurrency(netValue)}
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-[1.5rem] border border-white/70 bg-[#15214a] px-5 py-4 text-white shadow-[0_20px_40px_rgba(21,33,74,0.14)]">
        <p className="text-xs uppercase tracking-[0.22em] text-white/65">Estimated SLX</p>
        <p className="mt-2 text-3xl font-black sm:text-4xl">{formatTokenAmount(estimatedTokens)} SLX</p>
      </div>

      <div className="mt-6">
        <StatRow label="User flares entered" value={formatNumber(flares)} emphasis />
        <StatRow label="Selected FDV" value={formatCurrency(selectedFDV)} />
        <StatRow label="Token price" value={formatCurrency(tokenPrice)} />
        <StatRow label="Break-even flare amount" value={formatNumber(breakEvenFlares)} />
      </div>
    </section>
  );
}
