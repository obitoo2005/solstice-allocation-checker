export default function Header() {
  return (
    <header className="relative z-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/60 bg-white/50 px-5 py-3 shadow-glass backdrop-blur-xl md:px-7">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#15214a] shadow-[0_10px_28px_rgba(21,33,74,0.18)]">
            <img
              src="/solstice-logo.png"
              alt="Solstice logo"
              className="h-7 w-7 object-contain"
            />
          </div>
          <p className="text-sm font-semibold text-ink sm:text-base">
            Solstice Flares Allocation Checker
          </p>
        </div>

        <a
          href="#calculator"
          className="rounded-full border border-amber/30 bg-white/80 px-4 py-2 text-sm font-semibold text-ink transition hover:border-amber/60 hover:bg-white"
        >
          Open calculator
        </a>
      </nav>
    </header>
  );
}
