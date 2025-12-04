const tabs = ["Numerology", "Tarot Reading", "Horoscope", "Kundli Matching"];

function CategoryTabs() {
  return (
    <div className="flex flex-wrap gap-2 mb-6 text-[12px] sm:text-xs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className="px-4 h-8 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition"
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;




