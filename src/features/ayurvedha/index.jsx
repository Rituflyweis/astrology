import {
  AyurvedhaHeader,
  TodayTipBanner,
  TopFeaturedDoctors,
  ConsultantFilters,
  ConsultantGrid,
} from "./components";

function AyurvedhaFeature() {
  return (
    <main className="bg-gradient-to-b from-[#F9FAFB] via-white to-[#EEF2FF] min-h-screen pb-16">
      <AyurvedhaHeader />
      <TodayTipBanner />
      <TopFeaturedDoctors />
      <ConsultantFilters />
      <ConsultantGrid />
    </main>
  );
}

export default AyurvedhaFeature;



