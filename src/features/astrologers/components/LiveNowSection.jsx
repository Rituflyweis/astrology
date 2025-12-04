import { Link } from "react-router-dom";
import pandit1 from "../../../assets/pandit1.png";
import pandit2 from "../../../assets/pandit2.png";
import pandit3 from "../../../assets/pandit3.png";
import pandit4 from "../../../assets/pandit4.png";
import pandit5 from "../../../assets/pandit5.png";

const liveAstrologers = [
  { id: 1, name: "Ratan Josh", specialization: "Vedic Astrologer", image: pandit1 },
  { id: 2, name: "Pandit Aakyan", specialization: "Vastu Experts", image: pandit2 },
  { id: 3, name: "Guru Lakshmi Devi", specialization: "Vedic Astrologer", image: pandit3 },
  { id: 4, name: "Swami Charan Das", specialization: "Numerologist", image: pandit4 },
  { id: 5, name: "Astro Riyadev", specialization: "Vedic Astrologer", image: pandit5 },
  { id: 6, name: "Ratan Josh", specialization: "Vedic Astrologer", image: pandit1 },
];

function LiveNowSection() {
  return (
    <div className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Live Now</h2>
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {liveAstrologers.map((astrologer) => (
          <Link
            key={astrologer.id}
            to={`/astrologer/${astrologer.id}`}
            className="flex-shrink-0 text-center cursor-pointer hover:scale-105 transition-transform duration-200 no-underline"
          >
            <div className="relative mb-3">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gradient-to-br from-[#0C4292] to-[#481299] p-1">
                <img
                  src={astrologer.image}
                  alt={astrologer.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-1">
              {astrologer.name}
            </h3>
            <p className="text-xs md:text-sm text-[#481299] font-medium">
              {astrologer.specialization}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LiveNowSection;
