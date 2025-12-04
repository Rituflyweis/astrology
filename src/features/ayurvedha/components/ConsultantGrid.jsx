import doctor1 from "../../../assets/doctor1.png"
import doctor2 from "../../../assets/doctor2.png";
// import doctor3 from "../../../assets/doctor3.png";
import doctor4 from "../../../assets/doctor4.png";
import doctor5 from "../../../assets/doctor5.png";
import doctor6 from "../../../assets/doctor6.png";
import DoctorCard from "./DoctorCard";

const CONSULTANTS = [
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

function ConsultantGrid() {
  return (
    <section className="max-w-[1400px] mx-auto px-3 sm:px-4 mt-10">
      {/* Show same doctors in two rows */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8">
        {[0, 1].map((row) =>
          CONSULTANTS.map((consultant, index) => (
            <DoctorCard
              key={`${row}-${consultant.name}-${index}`}
              {...consultant}
            />
          ))
        )}
      </div>

      <div className="flex items-center justify-center gap-3 mt-10">
        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-[#E5E7EB] text-xs text-[#6B7280]">
          {"<"}
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#111827] text-xs text-white">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-[#E5E7EB] text-xs text-[#6B7280]">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-[#E5E7EB] text-xs text-[#6B7280]">
          3
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-[#E5E7EB] text-xs text-[#6B7280]">
          4
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-[#E5E7EB] text-xs text-[#6B7280]">
          5
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-[#E5E7EB] text-xs text-[#6B7280]">
          {">"}
        </button>
      </div>
    </section>
  );
}

export default ConsultantGrid;


