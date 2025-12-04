import doctor1 from "../../../assets/doctor1.png";
import doctor2 from "../../../assets/doctor2.png";
import doctor4 from "../../../assets/doctor4.png";
import doctor5 from "../../../assets/doctor5.png";
import doctor6 from "../../../assets/doctor6.png";
import DoctorCard from "./DoctorCard";

const CONSULTANTS = [
  {
    image: doctor1,
    name: "Dr. Ramesh Gowda",
    title: "Panchakarma &",
    subtitle: "Joint Pain",
  },
  {
    image: doctor2,
    name: "Dr. Shreya Menon",
    title: "Yoga Therapist |",
    subtitle: "Pranayama Coach",
  },
  {
    image: doctor4,
    name: "Karun Sagar",
    title: "Hatha Yoga",
    subtitle: "Master Trainer",
  },
  {
    image: doctor5,
    name: "Meena Bhat",
    title: "Yin Yoga &",
    subtitle: "Meditation Coach",
  },
  {
    image: doctor6,
    name: "Dr. Ravi Nambiar",
    title: "Ayurveda + Yoga",
    subtitle: "Integration Expert",
  },
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
    subtitle: "Coach",
  },
  {
    image: doctor4,
    name: "Miheer Khan",
    title: "Ayurvedic",
    subtitle: "Nutritionist",
  },
];

function ConsultantProfiles() {
  return (
    <section className="max-w-[1400px] mx-auto px-3 sm:px-4 mt-10 mb-12">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#111827] mb-4">
        Consultant Profiles
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
        {CONSULTANTS.map((consultant) => (
          <DoctorCard key={consultant.name} {...consultant} />
        ))}
      </div>
    </section>
  );
}

export default ConsultantProfiles;



