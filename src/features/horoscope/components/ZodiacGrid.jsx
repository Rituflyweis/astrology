const zodiacSigns = [
  { name: "Aries", symbol: "♈" },
  { name: "Taurus", symbol: "♉" },
  { name: "Gemini", symbol: "♊" },
  { name: "Cancer", symbol: "♋" },
  { name: "Leo", symbol: "♌" },
  { name: "Virgo", symbol: "♍" },
  { name: "Libra", symbol: "♎" },
  { name: "Scorpio", symbol: "♏" },
  { name: "Sagittarius", symbol: "♐" },
  { name: "Capricorn", symbol: "♑" },
  { name: "Aquarius", symbol: "♒" },
  { name: "Pisces", symbol: "♓" },
];

function ZodiacGrid({ onSignClick }) {
  return (
    <section className="max-w-[1400px] mx-auto px-3 sm:px-4 mt-12">
      <h2 className="text-xl md:text-2xl font-bold text-[#481299] mb-6">
        Zodiac Grid
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {zodiacSigns.map((sign) => (
          <button
            key={sign.name}
            onClick={() => onSignClick && onSignClick(sign.name)}
            className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0C4292] to-[#481299] flex items-center justify-center shadow-lg">
              <span className="text-5xl text-white">{sign.symbol}</span>
            </div>
            <span className="text-sm font-medium text-[#481299]">{sign.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default ZodiacGrid;

