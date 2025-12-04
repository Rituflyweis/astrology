import { useParams } from "react-router-dom";
import { ProfileLayout } from "../../components/profile";
import doctor1 from "../../assets/doctor1.png";
import doctor2 from "../../assets/doctor2.png";
import doctor4 from "../../assets/doctor4.png";
import doctor5 from "../../assets/doctor5.png";
import doctor6 from "../../assets/doctor6.png";
import person1 from "../../assets/person1.png";

const ayurvedaDoctorsData = {
  1: {
    name: "Dr. Meera Nair",
    specialization: "Digestive Health & Immunity Specialist",
    image: doctor1,
    experience: "12+ Yrs",
    aboutText: [
      "I am Dr. Meera Nair, a dedicated Ayurveda practitioner specializing in digestive health and immunity. With over 12 years of experience, I help patients achieve optimal gut health through traditional Ayurvedic principles combined with modern wellness approaches.",
      "My practice focuses on personalized treatment plans that address root causes rather than just symptoms. I specialize in IBS management, digestive disorders, immune system strengthening, and holistic wellness through diet, lifestyle modifications, and herbal remedies.",
    ],
    services: [
      { name: "Digestive Health", key: "digestive" },
      { name: "Immunity Building", key: "wellness" },
      { name: "Gut Healing", key: "digestive" },
      { name: "Detox Programs", key: "wellness" },
      { name: "Diet Consultation", key: "career" },
      { name: "Herbal Medicine", key: "wellness" },
    ],
    reviews: [
      {
        id: 1,
        reviewerName: "Rajata M.",
        rating: 5,
        reviewText: "After years of IBS flare-ups, Dr. Meera gave me the first relief plan that actually worked. Her gut tea and meal routine made a huge difference!",
        doctorResponse: {
          name: "Dr. Meera Nair",
          text: "Thank you for your kind words. I'm so glad the treatment plan worked for you. Wishing you continued good health!",
        },
      },
      {
        id: 2,
        reviewerName: "Priya S.",
        rating: 5,
        reviewText: "Dr. Meera's approach to digestive health is truly holistic. The combination of diet, herbs, and lifestyle changes transformed my health completely.",
        doctorResponse: {
          name: "Dr. Meera Nair",
          text: "Thank you Priya! Your dedication to following the plan made all the difference. Keep up the great work!",
        },
      },
      {
        id: 3,
        reviewerName: "Anil K.",
        rating: 4,
        reviewText: "Excellent consultation. Dr. Meera is very knowledgeable and patient. The immunity program helped me stay healthy throughout the season.",
        doctorResponse: {
          name: "Dr. Meera Nair",
          text: "Thank you Anil! I'm happy to hear the immunity program worked well for you.",
        },
      },
    ],
  },
  2: {
    name: "Dr. Aditya Bhat",
    specialization: "Skin & Hair Care | Detox | Lifestyle",
    image: doctor2,
    experience: "10+ Yrs",
    aboutText: [
      "I am Dr. Aditya Bhat, an Ayurveda specialist focusing on skin, hair health, detoxification, and lifestyle medicine. With a decade of experience, I help patients achieve radiant skin and healthy hair through natural Ayurvedic treatments.",
      "My expertise includes treating acne, eczema, hair loss, premature graying, and various skin conditions. I also design personalized detox programs and lifestyle modification plans to help patients achieve long-term wellness.",
    ],
    services: [
      { name: "Skin Care", key: "skin" },
      { name: "Hair Care", key: "skin" },
      { name: "Detox Programs", key: "wellness" },
      { name: "Lifestyle Medicine", key: "career" },
      { name: "Beauty & Wellness", key: "wellness" },
      { name: "Herbal Treatments", key: "wellness" },
    ],
    reviews: [
      {
        id: 1,
        reviewerName: "Sneha R.",
        rating: 5,
        reviewText: "Dr. Aditya's treatment for my acne was life-changing. The herbal face packs and internal medicines worked wonders. My skin has never looked better!",
        doctorResponse: {
          name: "Dr. Aditya Bhat",
          text: "Thank you Sneha! I'm thrilled to see such great results. Your commitment to the treatment made all the difference.",
        },
      },
      {
        id: 2,
        reviewerName: "Rohit M.",
        rating: 4,
        reviewText: "The hair loss treatment plan was very effective. Dr. Aditya's approach is comprehensive and the results speak for themselves.",
        doctorResponse: {
          name: "Dr. Aditya Bhat",
          text: "Thank you Rohit! Keep following the regimen for best long-term results.",
        },
      },
    ],
  },
  3: {
    name: "Dr. Ramesh Gowda",
    specialization: "Panchakarma & Joint Pain Specialist",
    image: doctor6,
    experience: "15+ Yrs",
    aboutText: [
      "I am Dr. Ramesh Gowda, a senior Ayurveda practitioner specializing in Panchakarma therapies and joint pain management. With over 15 years of experience, I have helped hundreds of patients find relief from chronic pain and achieve better mobility.",
      "My practice emphasizes traditional Panchakarma detoxification procedures, joint health through Ayurvedic treatments, and pain management using natural therapies. I believe in treating the root cause of pain rather than just managing symptoms.",
    ],
    services: [
      { name: "Panchakarma", key: "panchakarma" },
      { name: "Joint Pain Relief", key: "wellness" },
      { name: "Detox Therapy", key: "wellness" },
      { name: "Arthritis Care", key: "wellness" },
      { name: "Rejuvenation", key: "spiritual" },
      { name: "Pain Management", key: "wellness" },
    ],
    reviews: [
      {
        id: 1,
        reviewerName: "Vikram S.",
        rating: 5,
        reviewText: "Dr. Ramesh's Panchakarma treatment was transformative. My chronic joint pain has significantly reduced, and I feel more energetic than ever.",
        doctorResponse: {
          name: "Dr. Ramesh Gowda",
          text: "Thank you Vikram! Panchakarma is indeed a powerful healing process. Continue with the follow-up care for best results.",
        },
      },
    ],
  },
  4: {
    name: "Dr. Shalini Verma",
    specialization: "Women's Health & Hormones",
    image: doctor4,
    experience: "11+ Yrs",
    aboutText: [
      "I am Dr. Shalini Verma, an Ayurveda specialist dedicated to women's health and hormonal balance. With 11 years of experience, I help women navigate various life stages with natural, holistic treatments.",
      "My expertise includes PCOS management, menstrual health, menopause support, fertility enhancement, and hormonal balance. I create personalized treatment plans that address the unique needs of each woman.",
    ],
    services: [
      { name: "Women's Health", key: "womens" },
      { name: "Hormonal Balance", key: "womens" },
      { name: "PCOS Management", key: "womens" },
      { name: "Fertility Care", key: "womens" },
      { name: "Menopause Support", key: "womens" },
      { name: "Menstrual Health", key: "womens" },
    ],
    reviews: [
      {
        id: 1,
        reviewerName: "Kavita P.",
        rating: 5,
        reviewText: "Dr. Shalini helped me manage my PCOS naturally. Her treatment plan was comprehensive and the results have been amazing. Highly recommend!",
        doctorResponse: {
          name: "Dr. Shalini Verma",
          text: "Thank you Kavita! I'm so happy to see your progress. Keep following the lifestyle recommendations.",
        },
      },
      {
        id: 2,
        reviewerName: "Meera D.",
        rating: 5,
        reviewText: "The best consultation for hormonal issues. Dr. Shalini is understanding, knowledgeable, and her treatments really work.",
        doctorResponse: {
          name: "Dr. Shalini Verma",
          text: "Thank you Meera! Your positive feedback means a lot. Wishing you continued wellness!",
        },
      },
    ],
  },
  5: {
    name: "Dr. Ravi Desai",
    specialization: "Stress | Mental Wellness | Sleep",
    image: doctor5,
    experience: "9+ Yrs",
    aboutText: [
      "I am Dr. Ravi Desai, an Ayurveda practitioner specializing in stress management, mental wellness, and sleep disorders. With 9 years of experience, I help patients find balance and peace through natural therapies.",
      "My practice focuses on treating anxiety, depression, insomnia, and stress-related conditions using Ayurvedic principles, meditation guidance, herbal remedies, and lifestyle modifications.",
    ],
    services: [
      { name: "Stress Management", key: "stress" },
      { name: "Mental Wellness", key: "spiritual" },
      { name: "Sleep Therapy", key: "stress" },
      { name: "Anxiety Relief", key: "stress" },
      { name: "Meditation Guidance", key: "spiritual" },
      { name: "Wellness Coaching", key: "wellness" },
    ],
    reviews: [
      {
        id: 1,
        reviewerName: "Arjun T.",
        rating: 5,
        reviewText: "Dr. Ravi's stress management program changed my life. The combination of herbs, meditation, and lifestyle changes helped me overcome chronic anxiety.",
        doctorResponse: {
          name: "Dr. Ravi Desai",
          text: "Thank you Arjun! I'm glad the holistic approach worked for you. Continue practicing the meditation techniques.",
        },
      },
    ],
  },
  6: {
    name: "Dr. Arvind Das",
    specialization: "Stress Relief | Mind Detox",
    image: doctor6,
    experience: "8+ Yrs",
    aboutText: [
      "I am Dr. Arvind Das, an Ayurveda specialist focusing on stress relief and mental detoxification. With 8 years of experience, I help patients achieve mental clarity and emotional balance.",
      "My practice emphasizes mind-body connection, stress reduction techniques, mental detox programs, and holistic approaches to mental wellness. I believe in empowering patients with tools for long-term mental health.",
    ],
    services: [
      { name: "Stress Relief", key: "stress" },
      { name: "Mind Detox", key: "spiritual" },
      { name: "Mental Clarity", key: "stress" },
      { name: "Emotional Balance", key: "spiritual" },
      { name: "Wellness Coaching", key: "wellness" },
      { name: "Life Path Analysis", key: "lifePath" },
    ],
    reviews: [
      {
        id: 1,
        reviewerName: "Neha K.",
        rating: 5,
        reviewText: "Dr. Arvind's mind detox program was exactly what I needed. I feel more focused, calm, and in control of my emotions now.",
        doctorResponse: {
          name: "Dr. Arvind Das",
          text: "Thank you Neha! Mental wellness is a journey, and you're doing great. Keep up the practices!",
        },
      },
    ],
  },
};

function AyurvedhaDoctorProfilePage() {
  const { id } = useParams();
  const doctor = ayurvedaDoctorsData[id] || ayurvedaDoctorsData[1];

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
      name={doctor.name}
      specialization={doctor.specialization}
      image={doctor.image}
      experience={doctor.experience}
      onConsultNow={handleConsultNow}
      onBookAppointment={handleBookAppointment}
      aboutText={doctor.aboutText}
      services={doctor.services}
      reviews={doctor.reviews}
      reviewerImage={person1}
    />
  );
}

export default AyurvedhaDoctorProfilePage;

