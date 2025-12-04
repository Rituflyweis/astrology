function HowItWorks() {
  const steps = [
    {
      title: "Book Your Consultation",
      description:
        "Select a business astrology service and schedule a consultation with one of our expert astrologers.",
    },
    {
      title: "Receive Your Personalized Report",
      description:
        "Our astrologers analyze your business details and astrological charts to create a comprehensive report tailored to your needs.",
    },
    {
      title: "Implement Your Cosmic Strategy",
      description:
        "Use the insights from your report to make informed decisions and align your business actions with favorable cosmic influences.",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-3 sm:px-4 mt-12">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#111827] mb-6">
        How It Works
      </h2>

      <ol className="space-y-6">
        {steps.map((step, index) => (
          <li key={step.title} className="flex gap-4">
            <div className="flex-shrink-0">
              <span className="block text-sm font-semibold text-[#9CA3AF]">
                H{index + 1}
              </span>
            </div>
            <div>
              <p className="text-sm sm:text-base font-semibold text-[#111827] mb-1">
                {step.title}
              </p>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default HowItWorks;


