import ProfileHeader from "./ProfileHeader";
import AboutSection from "./AboutSection";
import ExpertiseSection from "./ExpertiseSection";
import ConsultationAvailability from "./ConsultationAvailability";
import ConsultationFee from "./ConsultationFee";
import ReviewsSection from "./ReviewsSection";

function ProfileLayout({
  // Profile Header Props
  name,
  specialization,
  image,
  experience,
  onConsultNow,
  onBookAppointment,
  
  // About Section Props
  aboutText,
  
  // Expertise Section Props
  expertiseTitle,
  services,
  
  // Consultation Availability Props
  availabilityTitle,
  
  // Consultation Fee Props
  feeTitle,
  fee,
  baseFeeLabel,
  
  // Reviews Section Props
  reviews,
  reviewerImage,
}) {
  return (
    <section className="py-16 bg-gradient-to-b from-[#F4F2FF] via-white to-[#E9F4FF]">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4">
        {/* Main Content */}
        <div>
          <ProfileHeader
            name={name}
            specialization={specialization}
            image={image}
            experience={experience}
            onConsultNow={onConsultNow}
            onBookAppointment={onBookAppointment}
          />
          <AboutSection aboutText={aboutText} />
          <ExpertiseSection title={expertiseTitle} services={services} />
          <ConsultationAvailability title={availabilityTitle} />
          <ConsultationFee title={feeTitle} fee={fee} baseFeeLabel={baseFeeLabel} />
          <ReviewsSection reviews={reviews} reviewerImage={reviewerImage} />
        </div>
      </div>
    </section>
  );
}

export default ProfileLayout;


