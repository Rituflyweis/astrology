import event3 from "../../../assets/event3.png";

function LearnHero() {
  return (
    <section className="mb-14">
      <div className="rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.25)] mb-8">
        <img
          src={event3}
          alt="Astrology learning session"
          className="w-full h-[340px] sm:h-[380px] md:h-[420px] object-cover object-center"
        />
      </div>

      <div className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#481299] font-bold">
          Learn Astrology – Unlock the Secrets of the Universe
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          Master Vedic Astrology. Decode the Cosmos, and Transform Your Life.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button className="px-7 h-10 rounded-full bg-gradient-to-r from-[#481299] to-[#0C4292] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-[0_14px_30px_rgba(79,70,229,0.55)] hover:translate-y-[-1px] hover:shadow-[0_18px_36px_rgba(79,70,229,0.7)] transition">
            START LEARNING
          </button>
          <button className="px-7 h-10 rounded-full border border-slate-300 bg-white text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition">
            EXPLORE COURSES
          </button>
        </div>
      </div>
    </section>
  );
}

export default LearnHero;




