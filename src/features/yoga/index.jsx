import {
  YogaHeader,
  TodayPracticeBanner,
  YogaGuruSection,
  DietitiansSection,
  ConsultantProfiles,
} from "./components";

function YogaFeature() {
  return (
    <main className="bg-gradient-to-b from-[#F4F2FF] via-white to-[#E9F4FF] min-h-screen pb-16">
      <YogaHeader />
      <TodayPracticeBanner />
      <YogaGuruSection />
      <DietitiansSection />
      <ConsultantProfiles />
    </main>
  );
}

export default YogaFeature;



