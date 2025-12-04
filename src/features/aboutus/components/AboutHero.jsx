import mainAboutusImage from "../../../assets/mainAboutus.png";

function AboutHero() {
  return (
    <section className="mb-12">
      <div className="w-full rounded-2xl overflow-hidden shadow-lg mb-8">
        <img
          src={mainAboutusImage}
          alt="Tarot cards"
          className="w-full h-[420px] object-cover object-top"
        />
      </div>

      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl sm:text-4xl font-serif text-[#481299] font-bold">
          About Us
        </h1>
        <p className="text-lg text-[#0C4292] max-w-2xl mx-auto">
          Guiding your journey to clarity, balance, and holistic well-being.
        </p>
        <button className="px-8 h-11 rounded-full bg-gradient-to-r from-[#481299] to-[#0C4292] text-white text-sm font-semibold tracking-wide shadow-[0_16px_32px_rgba(79,70,229,0.5)] hover:translate-y-[-1px] hover:shadow-[0_20px_40px_rgba(79,70,229,0.65)] transition">
          START YOUR JOURNEY
        </button>
      </div>
    </section>
  );
}

export default AboutHero;

