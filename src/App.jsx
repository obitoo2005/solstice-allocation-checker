import Header from "./components/Header";
import Hero from "./components/Hero";
import AllocationCalculator from "./components/AllocationCalculator";
import { calculateAllocation, fdvOptions } from "./lib/calculator";

const heroPreview = calculateAllocation(1_000_000, fdvOptions[0].value);

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-hero-sheen text-slate-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift absolute -left-16 top-24 h-72 w-72 rounded-full bg-white/60 blur-3xl" />
        <div className="animate-drift-slow absolute right-0 top-0 h-80 w-80 rounded-full bg-amber/30 blur-3xl" />
        <div className="animate-drift absolute bottom-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#d8def8]/40 blur-3xl" />
        <div className="absolute inset-x-0 top-[12%] h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
        <div className="absolute right-[8%] top-28 h-44 w-44 rounded-full border border-white/35" />
        <div className="absolute right-[11%] top-32 h-28 w-28 rounded-full border border-white/20" />
        <div className="absolute left-[6%] top-[44%] h-px w-44 rotate-[18deg] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pb-24">
        <Header />
        <main className="flex-1">
          <Hero
            flares={1_000_000}
            estimatedTokens={heroPreview.estimatedTokens}
            usdValue={heroPreview.usdValue}
            tokenPrice={heroPreview.tokenPrice}
          />

          <div className="mt-14 rounded-[2.5rem] border border-white/60 bg-white/35 p-3 shadow-glass backdrop-blur-2xl sm:mt-16 sm:p-4">
            <AllocationCalculator />
          </div>
        </main>

        <footer className="mt-10 px-2 text-sm leading-6 text-ink-soft">
          Independent checker. Instant client-side estimates only.
        </footer>
      </div>
    </div>
  );
}
