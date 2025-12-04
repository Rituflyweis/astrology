import ContactHero from "./ContactHero";
import ContactFormSection from "./ContactFormSection";
import ContactMap from "./ContactMap";

function ContactPageContent() {
  return (
    <main className="py-10 bg-gradient-to-b from-[#F4F2FF] via-white to-[#E9F4FF]">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4">
        <ContactHero />
        <ContactFormSection />
        <ContactMap />
      </div>
    </main>
  );
}

export default ContactPageContent;



