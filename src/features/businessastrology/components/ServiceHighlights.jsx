import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupsIcon from "@mui/icons-material/Groups";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const HIGHLIGHTS = [
  {
    label: "Right Time to Start",
    Icon: AccessTimeIcon,
  },
  {
    label: "Partnership Compatibility",
    Icon: GroupsIcon,
  },
  {
    label: "Financial Guidance",
    Icon: AttachMoneyIcon,
  },
  {
    label: "Career Direction",
    Icon: WorkOutlineIcon,
  },
];

function ServiceHighlights() {

  return (
    <section className="max-w-[1400px] mx-auto px-3 sm:px-4 mt-12">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#111827] mb-4">
        Service Highlights
      </h2>

      <div className="flex flex-wrap gap-4">
        {HIGHLIGHTS.map(({ label, Icon }) => (
          <div
            key={label}
            className="inline-flex items-center gap-3 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-sm text-xs sm:text-sm text-[#374151]"
          >
            <span className="w-7 h-7 rounded-full border border-[#D1D5DB] flex items-center justify-center text-[#6B7280]">
              <Icon sx={{ fontSize: 16 }} />
            </span>
            <span className="font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceHighlights;


