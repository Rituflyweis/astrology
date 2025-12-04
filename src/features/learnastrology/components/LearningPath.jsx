import astrologyFoundation from "../../../assets/astrologyFoundation.png";
import chartReading from "../../../assets/chartReading.png";
import certificate from "../../../assets/certificate.png";

function LearningPath() {
  const levels = [
    {
      image: astrologyFoundation,
      title: "Level 1 – Foundations of Astrology",
      description: "Basics, Planets, Houses, Signs",
      duration: "Duration: 3 months | Price: $299",
      cta: "ENROLL NOW",
    },
    {
      image: chartReading,
      title: "Level 2 – Chart Reading & Predictions",
      description: "Interpretations, Yogas, Remedies",
      duration: "Duration: 4 months | Price: $399",
      cta: "ENROLL NOW",
    },
    {
      image: certificate,
      title: "Level 3 – Professional Certification",
      description: "Case studies, Live sessions, Mentorship",
      duration: "Duration: 6 months | Price: $599",
      cta: "ENROLL NOW",
    },
  ];

  return (
    <section className="mb-14">
      <h2 className="text-xl sm:text-2xl font-serif text-[#481299] font-bold mb-2">
        Our Learning Path
      </h2>
      <p className="text-sm sm:text-base text-slate-600 mb-6">
        Choose your level and craft your astrological journey.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {levels.map((level, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
          >
            <div className="h-40 overflow-hidden">
              <img
                src={level.image}
                alt={level.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                {level.title}
              </h3>
              <p className="text-[11px] text-slate-700">{level.description}</p>
              <p className="text-[11px] text-slate-600 mb-3 flex-1">
                {level.duration}
              </p>
              <button className="self-start px-5 h-8 rounded-full bg-gradient-to-r from-[#481299] to-[#0C4292] text-white text-[11px] font-semibold tracking-wide shadow-[0_10px_24px_rgba(79,70,229,0.5)] hover:translate-y-[-1px] hover:shadow-[0_14px_30px_rgba(79,70,229,0.65)] transition">
                {level.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LearningPath;


