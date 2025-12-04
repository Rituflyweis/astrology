import businessAstrologyImage from "../../../assets/businessAstrology.png";

function BusinessAstrologyHero() {
  return (
    <section className="max-w-[1400px] mx-auto px-3 sm:px-4 pt-10">
      {/* Hero Image */}
      <div className="overflow-hidden rounded-3xl mb-8 shadow-[0_18px_40px_rgba(15,23,42,0.22)]">
        <img
          src={businessAstrologyImage}
          alt="Business Astrology"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Title & Description */}
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#481299] mb-3">
          Unlock Success with Business Astrology
        </h1>
        <p className="text-sm md:text-base text-[#0C4292] leading-relaxed">
          Navigate your business ventures with the wisdom of the stars. Our
          expert astrologers provide personalized insights to guide your
          decisions, from launch dates to partnership compatibility and
          financial strategies.
        </p>
      </div>

      {/* Primary CTA */}
      <div className="flex justify-center mt-8">
        <button className="px-10 py-3 rounded-full bg-gradient-to-r from-[#0C4292] to-[#481299] text-white text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-[0_12px_30px_rgba(15,23,42,0.35)] hover:brightness-110 transition-all duration-200">
          Get My Business Report
        </button>
      </div>
    </section>
  );
}

export default BusinessAstrologyHero;


