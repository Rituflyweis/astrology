import yoga1 from "../../../assets/yoga1.png";
import yoga2 from "../../../assets/yoga2.png";
import yoga3 from "../../../assets/yoga3.png";
import yoga4 from "../../../assets/yoga4.png";

const YOGA_GURUS = [
  {
    image: yoga1,
    name: "Dr. Ramesh Gowda",
    title: "Panchakarma & Joint Pain",
  },
  {
    image: yoga2,
    name: "Dr. Shreya Menon",
    title: "Yoga Therapist | Pranayama Coach",
  },
  {
    image: yoga3,
    name: "Karun Sagar",
    title: "Karun Sagar",
  },
  {
    image: yoga4,
    name: "Dr. Karthik R Iyengar",
    title: "Hatha Yoga Master Trainer",
  },
  {
    image: yoga2,
    name: "Meena Bhat",
    title: "Yin Yoga & Meditation Coach",
  },
  {
    image: yoga1,
    name: "Dr. Ravi Nambiar",
    title: "Ayurveda + Yoga Integration Expert",
  },
];

function YogaGuruSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-3 sm:px-4 mt-10">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#111827] mb-4">
        Yoga Guru
      </h2>

      <div className="overflow-x-auto pb-4 -mx-3 sm:mx-0">
        <div className="min-w-max px-3 sm:px-0">
          <div className="flex gap-6 sm:gap-10">
            {YOGA_GURUS.map((guru) => (
              <div
                key={guru.name}
                className="flex flex-col items-center text-center min-w-[150px] sm:min-w-[170px]"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 mb-3">
                  <img
                    src={guru.image}
                    alt={guru.name}
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-[0_12px_30px_rgba(15,23,42,0.25)]"
                  />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#1F2937] mb-1">
                  {guru.name}
                </p>
                <p className="text-[11px] sm:text-xs text-[#4B5563] leading-snug max-w-[170px]">
                  <span className="text-[#4C1D95] font-semibold">
                    {guru.title}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default YogaGuruSection;



