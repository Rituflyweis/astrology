function OurServices() {
  const services = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-[#481299]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      title: "Astrology & Tarot",
      description:
        "Gain insights into your life path and potential through personalized readings.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-[#481299]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      ),
      title: "Yoga & Meditation",
      description:
        "Find inner peace and balance with guided practices for mind and body.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-[#481299]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Ayurveda & Wellness",
      description:
        "Discover natural remedies and lifestyle adjustments for optimal health.",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-serif text-[#481299] font-bold mb-8">
        Our Services at a Glance
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="w-12 h-12 rounded-full bg-[#481299]/10 flex items-center justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurServices;



