function ContactFormSection() {
  return (
    <section className="mb-12">
      <div className="space-y-8">
        {/* Form (half width on larger screens, left aligned) */}
        <div className="w-full md:w-1/2">
          <h2 className="text-lg sm:text-xl font-serif text-slate-900 mb-2">
            Contact Form
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full h-10 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs outline-none focus:ring-1 focus:ring-[#481299] focus:border-[#481299]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full h-10 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs outline-none focus:ring-1 focus:ring-[#481299] focus:border-[#481299]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                Phone (Optional)
              </label>
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full h-10 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs outline-none focus:ring-1 focus:ring-[#481299] focus:border-[#481299]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                Select Service
              </label>
              <select className="w-full h-10 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs outline-none focus:ring-1 focus:ring-[#481299] focus:border-[#481299]">
                <option>Choose a service</option>
                <option>Astrology Consultation</option>
                <option>Tarot Reading</option>
                <option>Yoga &amp; Meditation</option>
                <option>Ayurveda Guidance</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none resize-none focus:ring-1 focus:ring-[#481299] focus:border-[#481299]"
              />
            </div>

            <div className="pt-2 flex justify-start">
              <button
                type="submit"
                className="px-8 h-10 rounded-full bg-gradient-to-r from-[#481299] to-[#0C4292] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-[0_16px_32px_rgba(79,70,229,0.5)] hover:translate-y-[-1px] hover:shadow-[0_20px_40px_rgba(79,70,229,0.65)] transition"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>

        {/* Quick contact info cards (stacked below form) */}
        <div className="space-y-4">
          <h3 className="text-lg font-serif text-slate-900">Quick Contact Info</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold text-slate-500 mb-1">
                OFFICE ADDRESS
              </p>
              <p className="text-sm text-slate-800">
                123 Harmony Lane, Serenity City
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold text-slate-500 mb-1">EMAIL</p>
              <p className="text-sm text-slate-800">support@zenithwellness.com</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold text-slate-500 mb1">CALL US</p>
              <p className="text-sm text-slate-800">+1 (505) 123-4567</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold text-slate-500 mb-1">FOLLOW US</p>
              <p className="text-sm text-slate-800">
                Connect with us on social media
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;


