import {
  VastuHero,
  HowConsultationWorks,
  VastuSuccessStories,
  VastuSpecialists,
  VastuCta,
} from "./components";

function VastuFeature() {
  return (
    <main className="bg-gradient-to-b from-[#F4F2FF] via-white to-[#E9F4FF] min-h-screen pb-10">
      <VastuHero />
      <HowConsultationWorks />
      <VastuSuccessStories />
      <VastuSpecialists />
      <VastuCta />
    </main>
  );
}

export default VastuFeature;

