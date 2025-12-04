import { useState } from "react";
import { Link } from "react-router-dom";
import pandit1 from "../../../assets/pandit1.png";
import pandit2 from "../../../assets/pandit2.png";
import pandit3 from "../../../assets/pandit3.png";
import pandit4 from "../../../assets/pandit4.png";
import pandit5 from "../../../assets/pandit5.png";

const allAstrologers = [
  { id: 1, name: "Ratan Josh", specialization: "Vedic Astrologer", image: pandit1 },
  { id: 2, name: "Pandit Aakyan", specialization: "Vastu Experts", image: pandit2 },
  { id: 3, name: "Guru Lakshmi Devi", specialization: "Vedic Astrologer", image: pandit3 },
  { id: 4, name: "Swami Charan Das", specialization: "Numerologist", image: pandit4 },
  { id: 5, name: "Astro Riyadev", specialization: "Vedic Astrologer", image: pandit5 },
  { id: 6, name: "Ratan Josh", specialization: "Vedic Astrologer", image: pandit1 },
  { id: 7, name: "Astro Riyadev", specialization: "Tarot Card Reader", image: pandit5 },
  { id: 8, name: "Astro Riyadev", specialization: "Tarot Card Reader", image: pandit5 },
  { id: 9, name: "Pandit Aakyan", specialization: "Vastu Experts", image: pandit2 },
  { id: 10, name: "Guru Lakshmi Devi", specialization: "Vedic Astrologer", image: pandit3 },
  { id: 11, name: "Ratan Josh", specialization: "Vedic Astrologer", image: pandit1 },
  { id: 12, name: "Astro Riyadev", specialization: "Tarot Card Reader", image: pandit5 },
];

const itemsPerPage = 12;

function AstrologersGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allAstrologers.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAstrologers = allAstrologers.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Astrologer Profiles</h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-8">
        {currentAstrologers.map((astrologer) => (
          <Link
            key={astrologer.id}
            to={`/astrologer/${astrologer.id}`}
            className="text-center cursor-pointer hover:scale-105 transition-transform duration-200 no-underline"
          >
            <div className="relative mb-3">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gradient-to-br from-[#0C4292] to-[#481299] p-1 mx-auto">
                <img
                  src={astrologer.image}
                  alt={astrologer.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
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

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-2 rounded-lg transition-colors duration-200 ${
            currentPage === 1
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
              currentPage === page
                ? "bg-[#481299] text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 rounded-lg transition-colors duration-200 ${
            currentPage === totalPages
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default AstrologersGrid;

