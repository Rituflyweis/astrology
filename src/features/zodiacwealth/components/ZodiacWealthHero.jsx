import zodiacImage from "../../../assets/zodiac.png";

function ZodiacWealthHero() {
  return (
    <section className="max-w-[1400px] mx-auto px-3 sm:px-4 pt-10">
      {/* Hero Image */}
      <div className="overflow-hidden rounded-3xl mb-6 shadow-[0_18px_40px_rgba(15,23,42,0.22)]">
        <img
          src={zodiacImage}
          alt="Zodiac Wealth Guide"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Title & Subtitle under image */}
      <div className="mb-10">
        <h1 className="text-2xl md:text-3xl font-serif font-semibold text-[#481299] mb-1">
          Zodiac Wealth Guide
        </h1>
        <p className="text-xs sm:text-sm text-[#0C4292]">
          Your cosmic roadmap to prosperity and abundance
        </p>
      </div>
    </section>
  );
}

export default ZodiacWealthHero;


