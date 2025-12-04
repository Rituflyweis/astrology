import vastu from "../../../assets/vastu.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupsIcon from "@mui/icons-material/Groups";
import BoltIcon from "@mui/icons-material/Bolt";

const BENEFITS = [
  {
    label: "Health",
    Icon: FavoriteIcon,
  },
  {
    label: "Wealth",
    Icon: AttachMoneyIcon,
  },
  {
    label: "Relationships",
    Icon: GroupsIcon,
  },
  {
    label: "Energy Flow",
    Icon: BoltIcon,
  },
];

function VastuHero() {
  return (
    <section className="max-w-[1400px] mx-auto px-3 sm:px-4 pt-10">
      {/* Hero Image */}
      <div className="overflow-hidden rounded-lg mb-8 border border-blue-200">
        <img
          src={vastu}
          alt="Vastu"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* About Vastu Section */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#481299] mb-4">
          About Vastu
        </h1>
        <p className="text-base md:text-lg text-[#0C4292] leading-relaxed mb-6 max-w-4xl">
          Vastu Shastra is an ancient Indian architectural science that harmonizes
          living spaces with natural energies. By aligning your home or office with
          the five elements (earth, water, fire, air, and space) and cardinal
          directions, Vastu promotes health, wealth, harmonious relationships, and
          positive energy flow.
        </p>

        {/* Benefits Cards */}
        <div className="flex flex-wrap gap-4">
          {BENEFITS.map(({ label, Icon }) => (
            <div
              key={label}
              className="inline-flex items-center gap-3 rounded-xl border border-[#E5E7EB] bg-white px-5 py-3 shadow-sm"
            >
              <span className="w-8 h-8 rounded-full border border-[#D1D5DB] flex items-center justify-center text-[#6B7280]">
                <Icon sx={{ fontSize: 18 }} />
              </span>
              <span className="text-sm font-medium text-[#374151]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VastuHero;

