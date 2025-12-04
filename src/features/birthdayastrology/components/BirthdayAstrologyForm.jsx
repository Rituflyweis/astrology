import { useState } from "react";
import birthdayAstrologyImage from "../../../assets/birthdayAstrology.png";

function BirthdayAstrologyForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-3 sm:px-4 py-12">
      {/* Header Image */}
      <div className="mb-8">
        <img
          src={birthdayAstrologyImage}
          alt="Birthday Astrology"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Title - aligned with image */}
      <div className="mb-6">
        <h1 className="text-4xl md:text-5xl font-serif text-[#481299]">
          Discover Your Birthday Astrology
        </h1>
      </div>

      {/* Description - aligned with image */}
      <div className="mb-10">
        <p className="text-base md:text-lg text-[#0C4292] leading-relaxed">
          Unlock the secrets of your future with our personalized yearly birthday astrology horoscope readings and services. At Cosmic Flow, we offer comprehensive astrological insights tailored to your unique birth chart, helping you navigate life's journey with confidence and clarity. Our professional astrologers provide in-depth analyses of planetary influences, yearly important events, effects, and effective remedies to empower you to make informed decisions and maximize your potential.
        </p>
      </div>

      {/* Form - left aligned */}
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="space-y-6 mb-8">
          {/* Date of Birth */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <label
              htmlFor="dateOfBirth"
              className="text-[#481299] font-medium text-base sm:w-40 flex-shrink-0"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#481299] text-gray-700"
            />
          </div>

          {/* Time of Birth */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <label
              htmlFor="timeOfBirth"
              className="text-[#481299] font-medium text-base sm:w-40 flex-shrink-0"
            >
              Time of Birth
            </label>
            <input
              type="time"
              id="timeOfBirth"
              name="timeOfBirth"
              value={formData.timeOfBirth}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#481299] text-gray-700"
            />
          </div>

          {/* Place of Birth */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <label
              htmlFor="placeOfBirth"
              className="text-[#481299] font-medium text-base sm:w-40 flex-shrink-0"
            >
              Place of Birth
            </label>
            <input
              type="text"
              id="placeOfBirth"
              name="placeOfBirth"
              value={formData.placeOfBirth}
              onChange={handleChange}
              required
              placeholder="Enter your place of birth"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#481299] text-gray-700"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#481299] to-[#0C4292] text-white font-semibold text-base uppercase tracking-wide hover:shadow-lg transition-all duration-200"
          >
            REVEAL MY BIRTHDAY ASTROLOGY
          </button>
        </div>
      </form>
    </div>
  );
}

export default BirthdayAstrologyForm;

