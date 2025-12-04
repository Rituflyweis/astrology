function ExpertiseSection() {
  const services = [
    { name: "Natal Chart Readings", key: "natal" },
    { name: "Relationship Astrology", key: "relationship" },
    { name: "Career Guidance", key: "career" },
    { name: "Wellness Coaching", key: "wellness" },
    { name: "Spiritual Counseling", key: "spiritual" },
    { name: "Life Path Analysis", key: "lifePath" },
  ];

  const renderIcon = (key) => {
    switch (key) {
      case "natal":
        return (
          <svg
            className="w-4 h-4 text-[#734F94]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="4" />
            <circle cx="12" cy="12" r="8" strokeDasharray="2 2" />
            <line x1="12" y1="2" x2="12" y2="6" />
            <line x1="12" y1="18" x2="12" y2="22" />
            <line x1="2" y1="12" x2="6" y2="12" />
            <line x1="18" y1="12" x2="22" y2="12" />
          </svg>
        );
      case "relationship":
        return (
          <svg
            className="w-4 h-4 text-[#734F94]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12.1 8.64l-.1.1-.11-.11A3.5 3.5 0 0 0 6.44 9a3.5 3.5 0 0 0 .21 4.95L12 18.5l5.35-4.55A3.5 3.5 0 0 0 17.56 9a3.5 3.5 0 0 0-5.46-.36z" />
          </svg>
        );
      case "career":
        return (
          <svg
            className="w-4 h-4 text-[#734F94]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <rect x="3" y="7" width="18" height="12" rx="2" />
            <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
            <path d="M3 12h18" />
          </svg>
        );
      case "wellness":
        return (
          <svg
            className="w-4 h-4 text-[#734F94]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M12 3C9 5 7 8 7 11a5 5 0 0 0 10 0c0-3-2-6-5-8z" />
            <path d="M5 21c1.5-2 3.5-3 7-3s5.5 1 7 3" />
          </svg>
        );
      case "spiritual":
        return (
          <svg
            className="w-4 h-4 text-[#734F94]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="7" r="3" />
            <path d="M7 21c1-2.5 2.5-4 5-4s4 1.5 5 4" />
            <path d="M5 11h14" />
          </svg>
        );
      case "lifePath":
      default:
        return (
          <svg
            className="w-4 h-4 text-[#734F94]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M4 20c1.5-3 3.5-4 6-4s4.5-1 6-4" />
            <path d="M12 4l2 2-2 2-2-2z" />
            <path d="M12 8v3" />
          </svg>
        );
    }
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-[#481299] mb-6">
        Expertise & Services Offered
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {services.map((service) => (
          <button
            key={service.key}
            className="px-4 py-2.5 rounded-full bg-[#F4F2FF] text-[#0C4292] text-xs md:text-sm font-medium hover:bg-[#481299] hover:text-white transition-all duration-200 flex items-center gap-2 justify-center border border-[#E1E4EB]"
          >
            {renderIcon(service.key)}
            <span>{service.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ExpertiseSection;

