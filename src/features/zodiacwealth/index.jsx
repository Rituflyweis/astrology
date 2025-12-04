import {
  ZodiacWealthHero,
  FinancialClaritySection,
  ExclusiveOfferSection,
} from "./components";

function ZodiacWealthFeature() {
  return (
    <main className="bg-gradient-to-b from-[#F4F2FF] via-white to-[#E9F4FF] min-h-screen pb-16">
      <ZodiacWealthHero />
      <FinancialClaritySection />
      <ExclusiveOfferSection />
    </main>
  );
}

export default ZodiacWealthFeature;


