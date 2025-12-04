import { useParams } from "react-router-dom";
import { ProfileLayout } from "../../components/profile";
import pandit1 from "../../assets/pandit1.png";
import pandit2 from "../../assets/pandit2.png";
import pandit3 from "../../assets/pandit3.png";
import pandit4 from "../../assets/pandit4.png";
import pandit5 from "../../assets/pandit5.png";
import person1 from "../../assets/person1.png";

const astrologersData = {
  1: {
    name: "Ratan Josh",
    specialization: "Vedic Astrologer",
    image: pandit1,
    experience: "8+ Yrs",
    aboutText: [
      "I am Ratan Josh, a dedicated Vedic Astrologer with over 10 years of experience in guiding individuals through life's challenges and opportunities. My practice is rooted in the ancient wisdom of the Vedas, blending traditional methods with a compassionate, modern approach.",
      "I specialize in Kundli reading, horoscope analysis, marriage compatibility (kundli matching), numerology, and career consultation. My goal is to help people find clarity, confidence, and balance in their personal and professional lives through the power of astrology.",
    ],
    services: [
      { name: "Natal Chart Readings", key: "natal" },
      { name: "Relationship Astrology", key: "relationship" },
      { name: "Career Guidance", key: "career" },
      { name: "Wellness Coaching", key: "wellness" },
      { name: "Spiritual Counseling", key: "spiritual" },
      { name: "Life Path Analysis", key: "lifePath" },
    ],
    reviews: [
      {
        id: 1,
        reviewerName: "Rajata M.",
        rating: 4,
        reviewText: "After years of IBS flare-ups, Dr. Meera gave me the first relief plan that actually worked. Her gut tea and meal routine made a huge difference!",
        doctorResponse: {
          name: "Ratan Josh",
          text: "Thank you Wishing you clarity, strength, and good fortune.",
        },
      },
      {
        id: 2,
        reviewerName: "Rajata M.",
        rating: 4,
        reviewText: "After years of IBS flare-ups, Dr. Meera gave me the first relief plan that actually worked. Her gut tea and meal routine made a huge difference!",
        doctorResponse: {
          name: "Ratan Josh",
          text: "Thank you Wishing you clarity, strength, and good fortune.",
        },
      },
      {
        id: 3,
        reviewerName: "Rajata M.",
        rating: 4,
        reviewText: "After years of IBS flare-ups, Dr. Meera gave me the first relief plan that actually worked. Her gut tea and meal routine made a huge difference!",
        doctorResponse: {
          name: "Ratan Josh",
          text: "Thank you Wishing you clarity, strength, and good fortune.",
        },
      },
    ],
  },
  2: {
    name: "Pandit Aakyan",
    specialization: "Vastu Experts",
    image: pandit2,
    experience: "10+ Yrs",
    aboutText: [
      "I am Pandit Aakyan, a dedicated Vedic Astrologer with over 10 years of experience in guiding individuals through life's challenges and opportunities. My practice is rooted in the ancient wisdom of the Vedas, blending traditional methods with a compassionate, modern approach.",
      "I specialize in Kundli reading, horoscope analysis, marriage compatibility (kundli matching), numerology, and career consultation. My goal is to help people find clarity, confidence, and balance in their personal and professional lives through the power of astrology.",
    ],
    services: [
      { name: "Natal Chart Readings", key: "natal" },
      { name: "Relationship Astrology", key: "relationship" },
      { name: "Career Guidance", key: "career" },
      { name: "Wellness Coaching", key: "wellness" },
      { name: "Spiritual Counseling", key: "spiritual" },
      { name: "Life Path Analysis", key: "lifePath" },
    ],
    reviews: [
      {
        id: 1,
        reviewerName: "Rajata M.",
        rating: 4,
        reviewText: "After years of IBS flare-ups, Dr. Meera gave me the first relief plan that actually worked. Her gut tea and meal routine made a huge difference!",
        doctorResponse: {
          name: "Pandit Aakyan",
          text: "Thank you Wishing you clarity, strength, and good fortune.",
        },
      },
    ],
  },
  3: {
    name: "Guru Lakshmi Devi",
    specialization: "Vedic Astrologer",
    image: pandit3,
    experience: "12+ Yrs",
    aboutText: [
      "I am Guru Lakshmi Devi, a dedicated Vedic Astrologer with over 10 years of experience in guiding individuals through life's challenges and opportunities. My practice is rooted in the ancient wisdom of the Vedas, blending traditional methods with a compassionate, modern approach.",
      "I specialize in Kundli reading, horoscope analysis, marriage compatibility (kundli matching), numerology, and career consultation. My goal is to help people find clarity, confidence, and balance in their personal and professional lives through the power of astrology.",
    ],
    services: [
      { name: "Natal Chart Readings", key: "natal" },
      { name: "Relationship Astrology", key: "relationship" },
      { name: "Career Guidance", key: "career" },
      { name: "Wellness Coaching", key: "wellness" },
      { name: "Spiritual Counseling", key: "spiritual" },
      { name: "Life Path Analysis", key: "lifePath" },
    ],
    reviews: [
      {
        id: 1,
        reviewerName: "Rajata M.",
        rating: 4,
        reviewText: "After years of IBS flare-ups, Dr. Meera gave me the first relief plan that actually worked. Her gut tea and meal routine made a huge difference!",
        doctorResponse: {
          name: "Guru Lakshmi Devi",
          text: "Thank you Wishing you clarity, strength, and good fortune.",
        },
      },
    ],
  },
  4: {
    name: "Swami Charan Das",
    specialization: "Numerologist",
    image: pandit4,
    experience: "15+ Yrs",
    aboutText: [
      "I am Swami Charan Das, a dedicated Vedic Astrologer with over 10 years of experience in guiding individuals through life's challenges and opportunities. My practice is rooted in the ancient wisdom of the Vedas, blending traditional methods with a compassionate, modern approach.",
      "I specialize in Kundli reading, horoscope analysis, marriage compatibility (kundli matching), numerology, and career consultation. My goal is to help people find clarity, confidence, and balance in their personal and professional lives through the power of astrology.",
    ],
    services: [
      { name: "Natal Chart Readings", key: "natal" },
      { name: "Relationship Astrology", key: "relationship" },
      { name: "Career Guidance", key: "career" },
      { name: "Wellness Coaching", key: "wellness" },
      { name: "Spiritual Counseling", key: "spiritual" },
      { name: "Life Path Analysis", key: "lifePath" },
    ],
    reviews: [
      {
        id: 1,
        reviewerName: "Rajata M.",
        rating: 4,
        reviewText: "After years of IBS flare-ups, Dr. Meera gave me the first relief plan that actually worked. Her gut tea and meal routine made a huge difference!",
        doctorResponse: {
          name: "Swami Charan Das",
          text: "Thank you Wishing you clarity, strength, and good fortune.",
        },
      },
    ],
  },
  5: {
    name: "Astro Riyadev",
    specialization: "Vedic Astrologer",
    image: pandit5,
    experience: "9+ Yrs",
    aboutText: [
      "I am Astro Riyadev, a dedicated Vedic Astrologer with over 10 years of experience in guiding individuals through life's challenges and opportunities. My practice is rooted in the ancient wisdom of the Vedas, blending traditional methods with a compassionate, modern approach.",
      "I specialize in Kundli reading, horoscope analysis, marriage compatibility (kundli matching), numerology, and career consultation. My goal is to help people find clarity, confidence, and balance in their personal and professional lives through the power of astrology.",
    ],
    services: [
      { name: "Natal Chart Readings", key: "natal" },
      { name: "Relationship Astrology", key: "relationship" },
      { name: "Career Guidance", key: "career" },
      { name: "Wellness Coaching", key: "wellness" },
      { name: "Spiritual Counseling", key: "spiritual" },
      { name: "Life Path Analysis", key: "lifePath" },
    ],
    reviews: [
      {
        id: 1,
        reviewerName: "Rajata M.",
        rating: 4,
        reviewText: "After years of IBS flare-ups, Dr. Meera gave me the first relief plan that actually worked. Her gut tea and meal routine made a huge difference!",
        doctorResponse: {
          name: "Astro Riyadev",
          text: "Thank you Wishing you clarity, strength, and good fortune.",
        },
      },
    ],
  },
};

function AstrologerProfileContent() {
  const { id } = useParams();
  const astrologer = astrologersData[id] || astrologersData[1];

  const handleConsultNow = () => {
    // Handle consult now action
    console.log("Consult now clicked");
  };

  const handleBookAppointment = () => {
    // Handle book appointment action
    console.log("Book appointment clicked");
  };

  return (
    <ProfileLayout
      name={astrologer.name}
      specialization={astrologer.specialization}
      image={astrologer.image}
      experience={astrologer.experience}
      onConsultNow={handleConsultNow}
      onBookAppointment={handleBookAppointment}
      aboutText={astrologer.aboutText}
      services={astrologer.services}
      reviews={astrologer.reviews}
      reviewerImage={person1}
    />
  );
}

export default AstrologerProfileContent;
