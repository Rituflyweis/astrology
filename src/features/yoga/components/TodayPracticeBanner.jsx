import yogalogo from "../../../assets/yogalogo.png";

function TodayPracticeBanner() {
  return (
    <section className="max-w-[1400px] mx-auto px-3 sm:px-4 mt-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1B3B9B] via-[#3B60F1] to-[#8B5CF6] px-6 sm:px-10 py-6 sm:py-7 shadow-[0_18px_40px_rgba(15,23,42,0.32)] text-white flex items-center justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80 mb-2">
            Today&apos;s Practice
          </p>
          <p className="text-sm sm:text-base md:text-lg font-medium mb-1">
            10-Min Mindfulness Meditation
          </p>
          <button className="mt-3 inline-flex items-center px-5 py-2 rounded-full bg-white text-xs sm:text-sm font-semibold text-[#481299] shadow-[0_10px_25px_rgba(15,23,42,0.35)] hover:bg-[#F9FAFB] transition-colors">
            START NOW
          </button>
        </div>

        <div className="hidden sm:flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-[0_16px_40px_rgba(15,23,42,0.45)]">
            <img
              src={yogalogo}
              alt="Yoga Practice"
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TodayPracticeBanner;



