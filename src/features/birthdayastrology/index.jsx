import { useState } from "react";
import {
  BirthdayAstrologyForm,
  BirthdayAstrologyResults,
} from "./components";

function BirthdayAstrologyFeature() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
    // Scroll to results section when form is submitted
    setTimeout(() => {
      const resultsSection = document.querySelector('[data-results-section]');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <main className="bg-gradient-to-b from-[#F4F2FF] via-white to-[#E9F4FF] min-h-screen py-8">
      <BirthdayAstrologyForm onSubmit={handleFormSubmit} />
      <div className="max-w-[1200px] mx-auto px-3 sm:px-4" data-results-section>
        <BirthdayAstrologyResults formData={formData} />
      </div>
    </main>
  );
}

export default BirthdayAstrologyFeature;

