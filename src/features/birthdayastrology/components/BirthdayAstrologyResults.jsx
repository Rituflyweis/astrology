import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";

function BirthdayAstrologyResults({ formData }) {
  const [activeTab, setActiveTab] = useState(0);

  // Mock data - in real app, this would come from API based on formData
  const cosmicProfile = {
    zodiacSign: "Gemini",
    zodiacSymbol: "♊",
    rulingPlanet: "Mercury",
    element: "Air",
    luckyNumber: "3",
    luckyColor: "Yellow",
  };

  const insights = {
    personality: "As a Gemini, you are known for your quick wit, adaptability, and excellent communication skills. Your dual nature makes you versatile and curious, always seeking new experiences and knowledge.",
    love: "In relationships, you value intellectual connection and stimulating conversations. Your partner should appreciate your need for freedom and mental stimulation.",
    career: "Your natural communication skills make you excel in fields like writing, teaching, sales, and media. Your adaptability allows you to thrive in dynamic work environments.",
    health: "Focus on maintaining mental clarity through regular exercise and meditation. Pay attention to your nervous system and ensure adequate rest to balance your active mind.",
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="pt-12 pb-8">
      {/* Top Banner Button */}
      <div className="flex justify-center mb-12">
        <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#0C4292] to-[#481299] text-white font-semibold text-base uppercase tracking-wide hover:shadow-lg transition-all duration-200">
          REVEAL MY BIRTHDAY ASTROLOGY
        </button>
      </div>

      {/* Your Cosmic Profile Section */}
      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#481299] mb-8">
          Your Cosmic Profile
        </h2>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-[#481299] font-medium">Zodiac Sign & Symbol</span>
              <span className="text-gray-800 font-semibold text-lg">
                {cosmicProfile.zodiacSign} {cosmicProfile.zodiacSymbol}
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-[#481299] font-medium">Ruling Planet</span>
              <span className="text-gray-800 font-semibold text-lg">
                {cosmicProfile.rulingPlanet}
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <span className="text-[#481299] font-medium">Element</span>
              <span className="text-gray-800 font-semibold text-lg">
                {cosmicProfile.element}
              </span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-[#481299] font-medium">Lucky Number / Color</span>
              <span className="text-gray-800 font-semibold text-lg">
                {cosmicProfile.luckyNumber} / {cosmicProfile.luckyColor}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Insights
        </h2>
        <div className="mb-6">
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            sx={{
              "& .MuiTab-root": {
                color: "#481299",
                fontWeight: 500,
                textTransform: "none",
                fontSize: "1rem",
                borderBottom: "1px solid #E5E7EB",
                "&.Mui-selected": {
                  color: "#481299",
                  fontWeight: 600,
                },
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "transparent",
              },
            }}
          >
            <Tab label="Personality Traits" />
            <Tab label="Love & Relationships" />
            <Tab label="Career & Finances" />
            <Tab label="Health & Wellbeing" />
          </Tabs>
        </div>
        <div className="min-h-[200px] space-y-4">
          {activeTab === 0 && (
            <div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Happy Cosmic Birthday!
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Wishing you a year filled with joy, growth, and cosmic alignment.
                May the stars guide you towards your highest potential and bring
                you closer to your dreams.
              </p>
            </div>
          )}
          {activeTab === 1 && (
            <p className="text-gray-600 leading-relaxed text-base">
              {insights.love}
            </p>
          )}
          {activeTab === 2 && (
            <p className="text-gray-600 leading-relaxed text-base">
              {insights.career}
            </p>
          )}
          {activeTab === 3 && (
            <p className="text-gray-600 leading-relaxed text-base">
              {insights.health}
            </p>
          )}
        </div>
      </section>

      {/* Ready to dive deeper Section */}
      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
          Ready to dive deeper?
        </h2>
        <p className="text-gray-600 text-base mb-6 max-w-2xl mx-auto">
          Connect with our expert astrologers for personalized guidance and insights into your cosmic journey.
        </p>
        <Link
          to="/astrologers"
          className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-[#0C4292] to-[#481299] text-white font-semibold text-base uppercase tracking-wide hover:shadow-lg transition-all duration-200"
        >
          BOOK A SESSION
        </Link>
      </section>
    </div>
  );
}

export default BirthdayAstrologyResults;

