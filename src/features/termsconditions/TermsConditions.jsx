import { Link } from "react-router-dom";
import privacyPolicyImage from "../../assets/PrivacyPolicy.png";

function TermsConditions() {
  return (
    <main className="bg-gradient-to-b from-[#F4F2FF] via-white to-[#E9F4FF]">
      {/* Header Image */}
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 pt-6">
        <div className="overflow-hidden rounded-3xl shadow-[0_18px_40px_rgba(15,23,42,0.22)]">
          <img
            src={privacyPolicyImage}
            alt="Terms & Conditions"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent mt-4"></div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-4">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#481299] mb-8">
            Terms &amp; Conditions
          </h1>

          {/* Section: Acceptance of Terms */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#481299] mb-4">
              Acceptance of Terms
            </h2>
            <p className="text-base leading-relaxed text-[#0C4292]">
              By accessing and using the Cosmic Flow website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          {/* Section: Services Provided */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#481299] mb-4">
              Services Provided
            </h2>
            <p className="text-base leading-relaxed text-[#0C4292]">
              Cosmic Flow provides astrological insights, tarot readings, yoga and meditation guidance, and ayurvedic consultations. These services are for informational and entertainment purposes only and should not be considered as professional medical, legal, or financial advice.
            </p>
          </section>

          {/* Section: User Responsibilities */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#481299] mb-4">
              User Responsibilities
            </h2>
            <p className="text-base leading-relaxed text-[#0C4292]">
              You are responsible for maintaining the confidentiality of your account and password. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
            </p>
          </section>

          {/* Section: Payments & Refunds */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#481299] mb-4">
              Payments &amp; Refunds
            </h2>
            <p className="text-base leading-relaxed text-[#0C4292]">
              All payments are processed securely through our payment partners. Refunds are subject to our refund policy, which can be found on our website. We reserve the right to change our pricing at any time, but such changes will not affect services already purchased.
            </p>
          </section>

          {/* Section: Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#481299] mb-4">
              Limitation of Liability
            </h2>
            <p className="text-base leading-relaxed text-[#0C4292]">
              Cosmic Flow shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service. Our total liability for any claims arising from your use of the service shall not exceed the amount you paid to us in the twelve months prior to the claim.
            </p>
          </section>

          {/* Section: Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#481299] mb-4">
              Intellectual Property
            </h2>
            <p className="text-base leading-relaxed text-[#0C4292]">
              All content on the Cosmic Flow website, including text, graphics, logos, images, and software, is the property of Cosmic Flow and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.
            </p>
          </section>

          {/* Section: Third-Party Links */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#481299] mb-4">
              Third-Party Links
            </h2>
            <p className="text-base leading-relaxed text-[#0C4292]">
              Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party websites. We encourage you to review the terms and conditions and privacy policies of any third-party websites you visit.
            </p>
          </section>

          {/* Section: Governing Law */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#481299] mb-4">
              Governing Law
            </h2>
            <p className="text-base leading-relaxed text-[#0C4292]">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Cosmic Flow operates. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.
            </p>
          </section>

          {/* Section: Contact Information */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#481299] mb-4">
              Contact Information
            </h2>
            <p className="text-base leading-relaxed text-[#0C4292]">
              If you have any questions or concerns about these Terms &amp; Conditions, please contact us at: support@cosmicflow.com. We are here to assist you and address any inquiries you may have.
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

export default TermsConditions;

