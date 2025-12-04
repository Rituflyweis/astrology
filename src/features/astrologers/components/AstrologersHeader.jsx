import { useState } from "react";

function AstrologersHeader() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["Numerology", "Tarot Reading", "Horoscope", "Kundli Matching"];

  return (
    <div className="mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-[#481299] mb-4">
        Connect with Expert Astrologers
      </h1>
      <p className="text-gray-600 text-lg mb-6">
        Choose a category and see who is live right now.
      </p>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
              activeCategory === category
                ? "bg-[#481299] text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AstrologersHeader;
