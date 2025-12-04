import doctor1 from "../../../assets/doctor1.png";
import doctor2 from "../../../assets/doctor2.png";
// import doctor3 from "../../../assets/doctor3.png";
import doctor4 from "../../../assets/doctor4.png";
import doctor5 from "../../../assets/doctor5.png";
import doctor6 from "../../../assets/doctor6.png";
import DoctorCard from "./DoctorCard";

const DOCTORS = [
  {
    id: 1,
    image: doctor1,
    name: "Dr. Meera Nair",
    specialty: "Digestive Health |",
    subSpecialty: "Immunity",
  },
  {
    id: 2,
    image: doctor2,
    name: "Dr. Aditya Bhat",
    specialty: "Skin & Hair | Detox |",
    subSpecialty: "Lifestyle",
  },
  {
    id: 3,
    image: doctor6,
    name: "Dr. Ramesh Gowda",
    specialty: "Panchakarma &",
    subSpecialty: "Joint Pain",
  },
  {
    id: 4,
    image: doctor4,
    name: "Dr. Shalini Verma",
    specialty: "Women's Health |",
    subSpecialty: "Hormones",
  },
  {
    id: 5,
    image: doctor5,
    name: "Dr. Ravi Desai",
    specialty: "Stress | Mental",
    subSpecialty: "Wellness | Sleep",
  },
  {
    id: 6,
    image: doctor6,
    name: "Dr. Arvind Das",
    specialty: "Stress Relief |",
    subSpecialty: "Mind Detox",
  },
];

function TopFeaturedDoctors() {
  return (
    <section className="max-w-[1400px] mx-auto px-3 sm:px-4 mt-10">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#111827] mb-4">
        Top Featured
      </h2>

      <div className="overflow-x-auto pb-4 -mx-3 sm:mx-0">
        <div className="min-w-max px-3 sm:px-0">
          <div className="flex gap-6 sm:gap-10">
            {DOCTORS.map((doc) => (
              <DoctorCard key={doc.name} {...doc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopFeaturedDoctors;


