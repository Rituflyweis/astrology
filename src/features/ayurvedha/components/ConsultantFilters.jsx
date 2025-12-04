function ConsultantFilters() {
  return (
    <section className="max-w-[1400px] mx-auto px-3 sm:px-4 mt-10">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#111827] mb-4">
        Consultant Profiles
      </h2>

      <div className="rounded-2xl bg-white shadow-[0_16px_40px_rgba(15,23,42,0.10)] px-4 sm:px-6 py-4 flex flex-col gap-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for Doctors"
            className="w-full rounded-full border border-[#E5E7EB] px-10 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/60"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] text-lg">
            🔍
          </span>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <button className="inline-flex items-center gap-1 rounded-full border border-[#E5E7EB] px-3 py-1.5 text-xs sm:text-sm text-[#374151] hover:border-[#6D28D9] hover:text-[#6D28D9]">
            Price range ▾
          </button>
          <button className="inline-flex items-center gap-1 rounded-full border border-[#E5E7EB] px-3 py-1.5 text-xs sm:text-sm text-[#374151] hover:border-[#6D28D9] hover:text-[#6D28D9]">
            Language ▾
          </button>
          <button className="inline-flex items-center gap-1 rounded-full border border-[#E5E7EB] px-3 py-1.5 text-xs sm:text-sm text-[#374151] hover:border-[#6D28D9] hover:text-[#6D28D9]">
            Availability ▾
          </button>
          <button className="inline-flex items-center gap-1 rounded-full border border-[#E5E7EB] px-3 py-1.5 text-xs sm:text-sm text-[#374151] hover:border-[#6D28D9] hover:text-[#6D28D9]">
            Rating ▾
          </button>
          <button className="ml-auto text-xs sm:text-sm font-semibold text-[#6B21A8]">
            Clear all
          </button>
        </div>
      </div>
    </section>
  );
}

export default ConsultantFilters;



