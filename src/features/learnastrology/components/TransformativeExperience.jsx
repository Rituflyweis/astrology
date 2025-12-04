function TransformativeExperience() {
  const items = [
    {
      title: "Beginner to Expert Curriculum",
      text:
        "Progress from foundational concepts to advanced techniques with our comprehensive curriculum.",
      icon: (
        <svg
          className="w-5 h-5 text-[#0C4292]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 19.5A2.5 2.5 0 016.5 17H20"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4.5A2.5 2.5 0 016.5 7H20M4 12a2.5 2.5 0 012.5-2.5H20"
          />
        </svg>
      ),
    },
    {
      title: "Holistic & Practical Approach",
      text:
        "Integrate mind, body, and spirit with practical applications of astrology in daily life.",
      icon: (
        <svg
          className="w-5 h-5 text-[#0C4292]"
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
    },
    {
      title: "Learn From Certified Astrologers",
      text:
        "Gain insights from experienced astrologers with recognized certifications and deep expertise.",
      icon: (
        <svg
          className="w-5 h-5 text-[#0C4292]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21l-2-2-2 2M5 21l2-2 2 2"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="mb-14">
      <h2 className="text-xl sm:text-2xl font-serif text-[#0C4292] font-bold mb-2 text-center">
        A Transformative Learning Experience
      </h2>
      <p className="text-sm sm:text-base text-[#0C4292] mb-8 text-center">
        Our structured courses blend ancient astrological wisdom with modern insights. Whether
        you&apos;re a beginner or looking to advance, our step-by-step guidance and expert mentors
        will help you truly understand the stars.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 bg-[#F9FAFF] p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="w-10 h-10 rounded-full bg-[#481299]/10 flex items-center justify-center mb-3">
              {item.icon}
            </div>
            <h3 className="text-[13px] font-semibold text-[#1F2933] tracking-wide mb-2">
              {item.title}
            </h3>
            <p className="text-[12px] text-[#4B4F63] leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TransformativeExperience;


