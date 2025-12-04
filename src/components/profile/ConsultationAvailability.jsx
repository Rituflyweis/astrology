function ConsultationAvailability({ title = "Consultation Availability" }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-[#481299] mb-6">
        {title}
      </h2>
      <div className="relative max-w-md">
        <input
          type="date"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#481299] text-gray-700"
        />
        <svg
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  );
}

export default ConsultationAvailability;


