import doctor1 from "../../../assets/doctor1.png";
import doctor2 from "../../../assets/doctor2.png";
import doctor4 from "../../../assets/doctor4.png";

const SPECIALISTS = [
  {
    image: doctor1,
    name: "Dr. Anya Sharma",
    title: "Residential Vastu",
  },
  {
    image: doctor2,
    name: "Dr. Karan Mehta",
    title: "Commercial Vastu",
  },
  {
    image: doctor4,
    name: "Dr. Riya Sinha",
    title: "Vastu Remedies",
  },
];

function VastuSpecialists() {
  return (
    <section className="max-w-[1400px] mx-auto px-3 sm:px-4 mt-14 mb-12">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#111827] mb-6">
        Our Vastu Specialists
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SPECIALISTS.map((spec, index) => (
          <div
            key={index}
            className="rounded-3xl bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)] p-6 flex flex-col items-center text-center"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 mb-4">
              <img
                src={spec.image}
                alt={spec.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-semibold text-[#111827] mb-1">
              {spec.name}
            </p>
            <p className="text-xs text-[#4C1D95] mb-4">
              Specialization: {spec.title}
            </p>
            <button className="mt-auto px-6 py-2 rounded-full bg-gradient-to-r from-[#0C4292] to-[#481299] text-white text-xs font-semibold tracking-wide uppercase hover:brightness-110 transition-colors">
              BOOK NOW
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VastuSpecialists;

