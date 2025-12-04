import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <main className="bg-gradient-to-b from-[#F4F2FF] via-white to-[#E9F4FF]">
      <div className="py-16">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-4">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#481299] mb-8">
            Privacy Policy
          </h1>

          {/* Section: Introduction */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#481299] mb-4">
              Introduction
            </h2>
            <p className="text-base leading-relaxed text-[#0C4292]">
              Welcome to Cosmic Flow&apos;s Privacy Policy. This document outlines how
              we collect, use, and protect your personal information. By using
              our services, you agree to the terms described herein. We are
              committed to safeguarding your privacy and ensuring a secure
              experience.
            </p>
          </section>

          {/* Section: Information We Collect */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#481299] mb-4">
              Information We Collect
            </h2>
            <p className="text-base leading-relaxed text-[#0C4292]">
              We collect various types of information, including personal
              details such as your name, email address, and date of birth, which
              are necessary for providing personalized astrological insights. We
              also gather usage data, such as your interactions with our website
              and services, to improve your experience and tailor our offerings.
            </p>
          </section>

          {/* Section: How We Use Your Information */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#481299] mb-4">
              How We Use Your Information
            </h2>
            <p className="text-base leading-relaxed text-[#0C4292]">
              The information we collect is used to deliver personalized
              astrological readings, tarot interpretations, and wellness
              recommendations. We may also use your data to communicate with you
              about updates, promotions, and new services. Your information
              helps us understand your needs and enhance our platform.
            </p>
          </section>

          {/* Section: Sharing & Security */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#481299] mb-4">
              Sharing &amp; Security
            </h2>
            <p className="text-base leading-relaxed text-[#0C4292]">
              We do not sell or rent your personal information to third parties.
              We may share data with trusted service providers who assist us in
              operating our website and delivering services, under strict
              confidentiality agreements. We employ industry-standard security
              measures to protect your information from unauthorized access and
              misuse.
            </p>
          </section>

          {/* Section: Cookies & Tracking */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#481299] mb-4">
              Cookies &amp; Tracking
            </h2>
            <p className="text-base leading-relaxed text-[#0C4292]">
              Our website uses cookies and similar tracking technologies to
              enhance your browsing experience, analyze site traffic, and
              personalize content. You can manage your cookie preferences
              through your browser settings. Please note that disabling cookies
              may affect the functionality of our services.
            </p>
          </section>

          {/* Section: Third-Party Services */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#481299] mb-4">
              Third-Party Services
            </h2>
            <p className="text-base leading-relaxed text-[#0C4292]">
              We may integrate with third-party services, such as payment
              processors and analytics providers. These services have their own
              privacy policies, and we encourage you to review them. We are not
              responsible for the privacy practices of these third parties.
            </p>
          </section>

          {/* Section: Your Rights */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#481299] mb-4">
              Your Rights
            </h2>
            <p className="text-base leading-relaxed text-[#0C4292]">
              You have the right to access, correct, or delete your personal
              information. You can also opt-out of receiving promotional
              communications from us. To exercise these rights, please contact
              us using the information provided below. We will respond to your
              request within a reasonable timeframe.
            </p>
          </section>

          {/* Section: Contact Information */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#481299] mb-4">
              Contact Information
            </h2>
            <p className="text-base leading-relaxed text-[#0C4292]">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at: support@cosmicflow.com. We are here to
              assist you and address any inquiries you may have.
            </p>
          </section>

          {/* Back button */}
          <div className="flex justify-center mt-12">
            <Link
              to="/home"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-[#481299] text-white text-sm font-semibold tracking-wide hover:bg-[#5a1bb3] transition-colors"
            >
              BACK TO HOME
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicy;

