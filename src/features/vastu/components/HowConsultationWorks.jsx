function HowConsultationWorks() {
  const steps = [
    "Book Appointment",
    "Share Home/Office Layout",
    "Personalized Remedies",
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-3 sm:px-4 mt-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#481299] mb-6">
        How Consultation Works
      </h2>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#481299] text-white flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className="w-0.5 h-12 bg-[#E5E7EB] mt-2"></div>
              )}
            </div>
            <p className="text-base md:text-lg text-[#111827] font-medium">
              {step}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowConsultationWorks;

