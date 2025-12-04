import doctor1 from "../../../assets/doctor1.png";
import doctor2 from "../../../assets/doctor2.png";
import doctor4 from "../../../assets/doctor4.png";
import doctor5 from "../../../assets/doctor5.png";
import doctor6 from "../../../assets/doctor6.png";
import DoctorCard from "./DoctorCard";

const DIETITIANS = [
  {
    image: doctor1,
    name: "Aarti Joshi",
    title: "Certified Dietitian |",
    subtitle: "Gut Health Coach",
  },
  {
    image: doctor2,
    name: "Rohan Iyengar",
    title: "Functional Diet",
    subtitle: "Coach | Vegan Specialist",
  },
  {
    image: doctor4,
    name: "Miheer Khan",
    title: "Ayurvedic Nutritionist |",
    subtitle: "Mindful Eating Coach",
  },
  {
    image: doctor5,
    name: "Dr. Vishal Tandon",
    title: "Diabetes & Thyroid",
    subtitle: "Diet Expert",
  },
  {
    image: doctor6,
    name: "Dr. Ravi Nambiar",
    title: "Ayurveda + Yoga",
    subtitle: "Integration Expert",
  },
  {
    image: doctor2,
    name: "Dr. Sneha Kapoor",
    title: "PCOS Diet &",
    subtitle: "Hormonal Wellness",
  },
];

function DietitiansSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-3 sm:px-4 mt-10">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#111827] mb-4">
        Dietitians
      </h2>

      <div className="overflow-x-auto pb-4 -mx-3 sm:mx-0">
        <div className="min-w-max px-3 sm:px-0">
          <div className="flex gap-6 sm:gap-10">
            {DIETITIANS.map((dietitian) => (
              <DoctorCard key={dietitian.name} {...dietitian} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DietitiansSection;



