import { useState } from "react";

function ProfilesFilter({ onSearchChange, onFilterChange, onClearAll }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    priceRange: false,
    language: false,
    availability: false,
    rating: false,
  });

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearchChange(value);
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleClearAll = () => {
    setSearchQuery("");
    setFilters({
      priceRange: false,
      language: false,
      availability: false,
      rating: false,
    });
    onClearAll();
  };

  const togglePill = (key) => {
    const newValue = !filters[key];
    const newFilters = { ...filters, [key]: newValue };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="mb-10">
      {/* Search Bar */}
      <div className="w-full mb-4">
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#734F94]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search for astrologers"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-3 rounded-full bg-white/70 border border-[#E1E4EB] text-[13px] text-[#734F94] placeholder:text-[#734F94]/70 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#734F94]/40"
          />
        </div>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => togglePill("priceRange")}
            className={`px-4 py-1.5 rounded-full text-[12px] border ${
              filters.priceRange
                ? "bg-[#734F94] text-white border-[#734F94]"
                : "bg-white text-slate-700 border-[#E1E4EB]"
            }`}
          >
            Price range ˅
          </button>
          <button
            type="button"
            onClick={() => togglePill("language")}
            className={`px-4 py-1.5 rounded-full text-[12px] border ${
              filters.language
                ? "bg-[#734F94] text-white border-[#734F94]"
                : "bg-white text-slate-700 border-[#E1E4EB]"
            }`}
          >
            Language ˅
          </button>
          <button
            type="button"
            onClick={() => togglePill("availability")}
            className={`px-4 py-1.5 rounded-full text-[12px] border ${
              filters.availability
                ? "bg-[#734F94] text-white border-[#734F94]"
                : "bg-white text-slate-700 border-[#E1E4EB]"
            }`}
          >
            Availability ˅
          </button>
          <button
            type="button"
            onClick={() => togglePill("rating")}
            className={`px-4 py-1.5 rounded-full text-[12px] border ${
              filters.rating
                ? "bg-[#734F94] text-white border-[#734F94]"
                : "bg-white text-slate-700 border-[#E1E4EB]"
            }`}
          >
            Rating ˅
          </button>
        </div>

        <button
          type="button"
          onClick={handleClearAll}
          className="ml-auto px-4 py-1.5 text-[12px] text-slate-600 hover:text-[#734F94] transition-colors"
        >
          Clear all
        </button>
      </div>
    </div>
  );
}

export default ProfilesFilter;
