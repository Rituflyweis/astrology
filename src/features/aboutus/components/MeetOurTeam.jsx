import pandit1 from "../../../assets/pandit1.png";
import pandit2 from "../../../assets/pandit2.png";
import pandit4 from "../../../assets/pandit4.png";

function MeetOurTeam() {
  const team = [
    {
      name: "Ratan Josh",
      title: "Vedic Astrologer",
      image: pandit1,
    },
    {
      name: "Pandit Akyan",
      title: "Vastu Experts",
      image: pandit2,
    },
    {
      name: "Guru Lakshmi Devi",
      title: "Vedic Astrologer",
      image: pandit4,
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-serif text-[#481299] font-bold mb-8">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <div key={idx} className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-1">
              {member.name}
            </h3>
            <p className="text-sm text-[#481299] font-medium">
              {member.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MeetOurTeam;



