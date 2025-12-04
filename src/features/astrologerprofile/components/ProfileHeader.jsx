import { useParams } from "react-router-dom";
import pandit1 from "../../../assets/pandit1.png";
import pandit2 from "../../../assets/pandit2.png";
import pandit3 from "../../../assets/pandit3.png";
import pandit4 from "../../../assets/pandit4.png";
import pandit5 from "../../../assets/pandit5.png";

const astrologersData = {
  1: { name: "Ratan Josh", specialization: "Vedic Astrologer", image: pandit1, experience: "8+ Yrs" },
  2: { name: "Pandit Aakyan", specialization: "Vastu Experts", image: pandit2, experience: "10+ Yrs" },
  3: { name: "Guru Lakshmi Devi", specialization: "Vedic Astrologer", image: pandit3, experience: "12+ Yrs" },
  4: { name: "Swami Charan Das", specialization: "Numerologist", image: pandit4, experience: "15+ Yrs" },
  5: { name: "Astro Riyadev", specialization: "Vedic Astrologer", image: pandit5, experience: "9+ Yrs" },
};

function ProfileHeader() {
  const { id } = useParams();
  const astrologer = astrologersData[id] || astrologersData[1];

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 pb-8 border-b border-gray-200">
      {/* Profile Picture */}
      <div className="flex-shrink-0">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-[#0C4292] to-[#481299] p-1">
          <img
            src={astrologer.image}
            alt={astrologer.name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Name and Info */}
      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl font-bold text-[#481299] mb-2">
          {astrologer.name}
        </h1>
        <p className="text-lg md:text-xl text-[#734F94] mb-2">
          {astrologer.specialization}
        </p>
        <p className="text-gray-600">
          Exp - {astrologer.experience}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="px-6 py-3 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors duration-200">
          CONSULT NOW
        </button>
        <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#0C4292] to-[#481299] text-white font-semibold hover:shadow-lg transition-all duration-200">
          BOOK APPOINTMENT
        </button>
      </div>
    </div>
  );
}

export default ProfileHeader;

