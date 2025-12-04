function ExpertiseSection({ title = "Expertise & Services Offered", services = [] }) {
  if (!services || services.length === 0) return null;

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
      case "digestive":
        return (
          <svg
            className="w-4 h-4 text-[#734F94]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
        );
      case "skin":
        return (
          <svg
            className="w-4 h-4 text-[#734F94]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
      case "panchakarma":
        return (
          <svg
            className="w-4 h-4 text-[#734F94]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        );
      case "womens":
        return (
          <svg
            className="w-4 h-4 text-[#734F94]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        );
      case "stress":
        return (
          <svg
            className="w-4 h-4 text-[#734F94]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
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
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {services.map((service) => (
          <button
            key={service.key || service.name}
            className="px-4 py-2.5 rounded-full bg-[#F4F2FF] text-[#0C4292] text-xs md:text-sm font-medium hover:bg-[#481299] hover:text-white transition-all duration-200 flex items-center gap-2 justify-center border border-[#E1E4EB]"
          >
            {service.key && renderIcon(service.key)}
            <span>{service.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ExpertiseSection;


