import {
  AstrologersHeader,
  LiveNowSection,
  ProfilesFilter,
  AstrologersGrid,
} from "./components";

function AstrologersContent() {
  const handleSearchChange = (query) => {
    // Handle search logic
    console.log("Search:", query);
  };

  const handleFilterChange = (filters) => {
    // Handle filter logic
    console.log("Filters:", filters);
  };

  const handleClearAll = () => {
    // Handle clear all logic
    console.log("Clear all");
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#F4F2FF] via-white to-[#E9F4FF]">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4">
        <AstrologersHeader />
        <LiveNowSection />
        <ProfilesFilter
          onSearchChange={handleSearchChange}
          onFilterChange={handleFilterChange}
          onClearAll={handleClearAll}
        />
        <AstrologersGrid />
      </div>
    </section>
  );
}

export default AstrologersContent;



