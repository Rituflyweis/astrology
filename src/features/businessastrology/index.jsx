import {
  BusinessAstrologyHero,
  ServiceHighlights,
  HowItWorks,
  SuccessStories,
  BusinessSpecialists,
  FinalCta,
} from "./components";

function BusinessAstrologyFeature() {
  return (
    <main className="bg-gradient-to-b from-[#F4F2FF] via-white to-[#E9F4FF] min-h-screen pb-10">
      <BusinessAstrologyHero />
      <ServiceHighlights />
      <HowItWorks />
      <SuccessStories />
      <BusinessSpecialists />
      <FinalCta />
    </main>
  );
}

export default BusinessAstrologyFeature;


