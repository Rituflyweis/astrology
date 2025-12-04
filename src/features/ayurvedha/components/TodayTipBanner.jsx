function TodayTipBanner() {
  return (
    <section className="max-w-[1400px] mx-auto px-3 sm:px-4 mt-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1B3B9B] via-[#3B60F1] to-[#8B5CF6] text-white px-6 sm:px-10 py-6 sm:py-7 shadow-[0_18px_40px_rgba(15,23,42,0.32)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80 mb-2">
            Today&apos;s Tip
          </p>
          <p className="text-sm sm:text-base md:text-lg font-medium">
            Start your day with warm water + tulsi leaves
          </p>
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden sm:block">
          <div className="w-12 h-12 rounded-full bg-amber-300 flex items-center justify-center shadow-[0_10px_25px_rgba(15,23,42,0.35)]">
            <span className="text-2xl">💡</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TodayTipBanner;



