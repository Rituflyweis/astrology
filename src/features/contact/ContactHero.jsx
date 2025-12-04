import contactImage from "../../assets/contactImage.png";

function ContactHero() {
  return (
    <section className="mb-10">
      <div className="overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(15,23,42,0.25)]">
        <img
          src={contactImage}
          alt="Cosmic nebula background"
          className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover"
        />
      </div>

      <div className="mt-10 text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-serif text-[#481299]">
          Connect with Us
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
          We&apos;re here to support your journey toward balance and well-being.
          Reach out with any questions or inquiries.
        </p>
        <button className="inline-flex items-center justify-center px-8 h-10 rounded-full bg-gradient-to-r from-[#481299] to-[#0C4292] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-[0_16px_32px_rgba(79,70,229,0.5)] hover:translate-y-[-1px] hover:shadow-[0_20px_40px_rgba(79,70,229,0.65)] transition">
          LEARN MORE
        </button>
      </div>
    </section>
  );
}

export default ContactHero;





