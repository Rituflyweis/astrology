function EventsSearch() {
  return (
    <section className="mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search events"
            className="w-full h-11 rounded-lg border border-slate-200 bg-white px-4 pl-10 text-sm outline-none focus:ring-2 focus:ring-[#481299]/30 focus:border-[#481299]"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button className="px-4 h-9 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50 transition flex items-center gap-2">
          Category
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <button className="px-4 h-9 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50 transition flex items-center gap-2">
          Date
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <button className="px-4 h-9 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50 transition flex items-center gap-2">
          Location
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <button className="px-4 h-9 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50 transition flex items-center gap-2">
          Price
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default EventsSearch;



