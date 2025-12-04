function VisionMission() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-serif text-[#481299] font-bold mb-8">
        Our Vision & Mission
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#481299]/10 flex items-center justify-center flex-shrink-0">
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Vision
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To empower individuals to live authentically and in harmony with
                the cosmos.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#481299]/10 flex items-center justify-center flex-shrink-0">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Mission
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To provide personalized guidance and tools for self-discovery
                and holistic well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;

