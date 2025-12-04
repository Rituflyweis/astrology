import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ChatPage from "../pages/chat/ChatPage";
import ContactPage from "../pages/contact/ContactPage";
import AboutUsPage from "../pages/aboutus/AboutUsPage";
import LearnAstrologyPage from "../pages/learn/LearnAstrologyPage";
import EventsPage from "../pages/events/EventsPage";
import AstrologersPage from "../pages/astrologers/AstrologersPage";
import AstrologerProfilePage from "../pages/astrologerprofile/AstrologerProfilePage";
import AyurvedhaPage from "../pages/ayurvedha/AyurvedhaPage";
import YogaPage from "../pages/yoga/YogaPage";
import BirthdayAstrologyPage from "../pages/birthdayastrology/BirthdayAstrologyPage";
import BusinessAstrologyPage from "../pages/businessastrology/BusinessAstrologyPage";
import ZodiacWealthPage from "../pages/zodiacwealth/ZodiacWealthPage";
import HoroscopePage from "../pages/horoscope/HoroscopePage";
import VastuPage from "../pages/vastu/VastuPage";
import AyurvedhaDoctorProfilePage from "../pages/ayurvedha/AyurvedhaDoctorProfilePage";
import PrivacyPolicyPage from "../pages/privacy/PrivacyPolicyPage";
import TermsConditionsPage from "../pages/terms/TermsConditionsPage";
import LoginPage from "../pages/auth/LoginPage";

function AppRoutes() {
  return (
    <Routes>
      {/* Auth routes */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<LoginPage />} />
      <Route path="/signup/professional" element={<LoginPage />} />
      <Route path="/onboarding" element={<LoginPage />} />

      {/* Main app routes */}
      <Route path="/home" element={<HomePage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/learn" element={<LearnAstrologyPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/ayurvedha" element={<AyurvedhaPage />} />
      {/* <Route path="/services/ayurveda" element={<AyurvedhaPage />} />
      <Route path="/services/yoga" element={<YogaPage />} />
      <Route path="/services/birthday-astrology" element={<BirthdayAstrologyPage />} />
      <Route path="/services/business-astrology" element={<BusinessAstrologyPage />} />
      <Route path="/services/zodiac-wellness" element={<ZodiacWealthPage />} />
      <Route path="/services/horoscope" element={<HoroscopePage />} /> */}
      <Route path="/services/vastu" element={<VastuPage />} />
      <Route path="/ayurvedha/doctor/:id" element={<AyurvedhaDoctorProfilePage />} />
      <Route path="/astrologers" element={<AstrologersPage />} />
      <Route path="/astrologer/:id" element={<AstrologerProfilePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-conditions" element={<TermsConditionsPage />} />
    </Routes>
  );
}

export default AppRoutes;

