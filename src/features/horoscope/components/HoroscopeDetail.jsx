import horoscope2Image from "../../../assets/horoscope2.png";

function HoroscopeDetail({ selectedSign, onBack }) {
  // Mock data - in real app, this would come from API
  const horoscopeData = {
    sign: selectedSign || "Leo",
    date: "July 17, 2025",
    status: "Balanced",
    text: "You may feel grounded today, Leo. Financial clarity is within reach. A good day to focus on stability and personal growth.",
    keywords: ["Patience", "Stability", "Inner Growth"],
  };

  const signSymbols = {
    Aries: "♈",
    Taurus: "♉",
    Gemini: "♊",
    Cancer: "♋",
    Leo: "♌",
    Virgo: "♍",
    Libra: "♎",
    Scorpio: "♏",
    Sagittarius: "♐",
    Capricorn: "♑",
    Aquarius: "♒",
    Pisces: "♓",
  };

  return (
    <section className="max-w-[1400px] mx-auto px-3 sm:px-4 mt-12">


      <div className="grid grid-cols-1 lg:flex lg:items-center lg:gap-4">


        <div className="flex justify-center lg:justify-start lg:w-auto lg:ml-12
        ">

          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#481299] to-[#0C4292] flex flex-col items-center justify-center shadow-xl">

            {/* OLD: text-9xl mb-2 */}
            <span className="text-7xl text-white mb-1">
              {signSymbols[horoscopeData.sign] || "♌"}
            </span>


            <span className="text-white text-lg font-semibold">
              {horoscopeData.sign}
            </span>
          </div>
        </div>


        <div className="mt-4 lg:mt-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-400 text-lg">⭐</span>
            <span className="text-sm text-gray-600 font-medium">
              {horoscopeData.status}
            </span>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#481299] text-lg">📅</span>
            <span className="text-base font-semibold text-[#0C4292]">
              {horoscopeData.sign} - {horoscopeData.date}
            </span>
          </div>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
            {horoscopeData.text}
          </p>

          {/* Keywords */}
          <div>
            <h3 className="text-lg font-semibold text-[#481299] mb-2">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {horoscopeData.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-4 py-2 rounded-full border border-gray-300 bg-white text-sm text-gray-700"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Manifest Banner (Unchanged) */}
      <div className="mt-12 relative overflow-hidden rounded-lg">
        <img
          src={horoscope2Image}
          alt="Manifest Banner"
          className="w-full h-auto object-cover"
        />
      </div>

    </section>

  );
}

export default HoroscopeDetail;

