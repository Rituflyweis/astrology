function WhyLearnWithUs() {
  const reasons = [
    {
      title: "Certified Mentors",
      text: "Learn from experienced and certified astrology experts.",
    },
    {
      title: "Live Q&A Sessions",
      text: "Engage in live Q&A sessions to clarify doubts and deepen understanding.",
    },
    {
      title: "Personalized Feedback",
      text: "Receive detailed feedback on your progress and assignments.",
    },
    {
      title: "Lifetime Access",
      text: "Access course materials and updates for a lifetime.",
    },
  ];

  return (
    <section className="mb-14">
      <h2 className="text-xl sm:text-2xl font-serif text-[#481299] font-bold mb-6">
        Why Learn With Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="w-9 h-9 rounded-full bg-[#481299]/10 flex items-center justify-center mb-3">
              <span className="text-[#481299] text-lg">✧</span>
            </div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              {reason.title}
            </h3>
            <p className="text-[11px] text-slate-600 leading-snug">
              {reason.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyLearnWithUs;




