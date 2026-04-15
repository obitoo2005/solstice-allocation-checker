import { formatCurrency, formatNumber, formatTokenAmount } from "../lib/formatters";

export default function Hero({ flares, estimatedTokens, usdValue, tokenPrice }) {
  return (
    <section className="grid items-center gap-10 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:pt-14">
      <div className="max-w-3xl animate-fade-up">
        <span className="inline-flex rounded-full border border-white/70 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink-soft shadow-sm backdrop-blur-xl">
          Flares to SLX
        </span>

        <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          See if your Flares beat the $7 fee.
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-8 text-ink-soft sm:text-xl">
          Enter your balance, pick an FDV, and get the allocation, value, and break-even point instantly.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#calculator"
            className="inline-flex items-center justify-center rounded-full bg-amber px-6 py-3 text-base font-semibold text-white shadow-halo transition hover:scale-[1.01] hover:bg-[#ea7d22]"
          >
            Check now
          </a>
          <span className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/55 px-6 py-3 text-sm font-medium text-ink-soft backdrop-blur-xl">
            Independent utility
          </span>
        </div>
      </div>

      <div className="relative animate-fade-up-delay">
        <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-white/55 blur-3xl" />
        <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-amber/25 blur-3xl" />

        <div className="animate-float relative overflow-hidden rounded-[2rem] border border-white/65 bg-white/58 p-6 shadow-halo backdrop-blur-2xl sm:p-7">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,138,52,0.22),transparent_38%)]" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber/85">
              Live preview
            </p>
            <p className="mt-3 text-4xl font-black text-ink sm:text-5xl">
              {formatTokenAmount(estimatedTokens)} SLX
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-ink-soft">
              Fast estimate for allocation size and value.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/70 bg-white/75 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-ink-soft/75">Your flares</p>
                <p className="mt-2 text-xl font-bold text-ink">{formatNumber(flares)}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/70 bg-white/75 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-ink-soft/75">Est. value</p>
                <p className="mt-2 text-xl font-bold text-ink">{formatCurrency(usdValue)}</p>
              </div>
            </div>

            <div className="animate-pulse-glow mt-6 rounded-[1.5rem] border border-white/70 bg-gradient-to-r from-[#15214a] to-[#273972] p-5 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">Current scenario</p>
              <div className="mt-3 flex items-end justify-between gap-3">
                <div>
                  <p className="text-3xl font-bold">{formatCurrency(tokenPrice)} / SLX</p>
                  <p className="mt-1 text-sm text-white/70">FDV estimate</p>
                </div>
                <div className="h-16 w-16 rounded-full border border-white/20 bg-white/10 shadow-[0_0_40px_rgba(255,255,255,0.14)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
