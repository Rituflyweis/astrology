import { useState } from "react";
import {
  HoroscopeHero,
  ZodiacGrid,
  HoroscopeDetail,
} from "./components";

function HoroscopeFeature() {
  const [selectedSign, setSelectedSign] = useState("Leo");

  const handleSignClick = (signName) => {
    setSelectedSign(signName);
    // Scroll to detail section
    setTimeout(() => {
      const detailSection = document.querySelector('[data-horoscope-detail]');
      if (detailSection) {
        detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <main className="bg-gradient-to-b from-[#F4F2FF] via-white to-[#E9F4FF] min-h-screen py-8">
      <HoroscopeHero />
      <ZodiacGrid onSignClick={handleSignClick} />
      <div data-horoscope-detail>
        <HoroscopeDetail selectedSign={selectedSign} />
      </div>
    </main>
  );
}

export default HoroscopeFeature;

