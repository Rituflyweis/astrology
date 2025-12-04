import { Link } from "react-router-dom";
import horoscope1Image from "../../../assets/horoscope1.png";

function HoroscopeHero() {
  return (
    <section className="max-w-[1400px] mx-auto px-3 sm:px-4 pt-10">
      {/* Breadcrumbs */}
      <nav className="mb-6">
        <div className="flex items-center gap-2 text-sm text-[#481299]">
          <Link to="/home" className="hover:underline">Home</Link>
          <span>/</span>
          <span>Horoscope</span>
          <span>/</span>
          <span className="text-[#734F94]">Daily</span>
        </div>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          {/* Title with emoji */}
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-[#481299] mb-2 flex items-center gap-2">
              <span>😊</span>
              <span>Horoscope of the Day</span>
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Your stars today, aligned with your journey.
            </p>
          </div>

          {/* Horoscope Image */}
          <div className="mt-6">
            <img
              src={horoscope1Image}
              alt="Astrological Clock"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Right Column - Aligned with title */}
        <div className="flex flex-col justify-start pt-24">
          {/* Date */}
          <p className="text-xs tracking-wide uppercase text-[#0C4292] font-medium mb-2">
            JULY 17, 2005
          </p>

          {/* Today's Energy Overview */}
          <h2 className="text-lg md:text-xl font-bold text-[#1D4ED8] mb-3">
            Today&apos;s Energy Overview
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-md">
            The Moon enters Cancer – bringing emotional sensitivity and family
            connection. A good day for self-care, reflection, and
            heart-to-heart conversations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HoroscopeHero;

