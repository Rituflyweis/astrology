import {
  LearnHero,
  TransformativeExperience,
  LearningPath,
  LearnerTestimonials,
  WhyLearnWithUs,
  ReadyToBegin,
} from "./components";

function LearnAstrologyContent() {
  return (
    <main className="py-14 bg-gradient-to-b from-[#F4F2FF] via-white to-[#E9F4FF]">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-4">
        <LearnHero />
        <TransformativeExperience />
        <LearningPath />
        <LearnerTestimonials />
        <WhyLearnWithUs />
        <ReadyToBegin />
      </div>
    </main>
  );
}

export default LearnAstrologyContent;


