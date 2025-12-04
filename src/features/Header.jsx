import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white w-full shadow-sm">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 py-4 flex items-center justify-between gap-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="text-2xl font-bold tracking-wide bg-gradient-to-r from-[#481299] to-purple-500 bg-clip-text text-transparent">
            LOGO
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8 flex-1 justify-center">
          <Link
            to="/home"
            className="text-[#481299] no-underline text-base font-medium hover:text-purple-600 transition-colors duration-300"
          >
            Home
          </Link>
          
          {/* Services dropdown - open on click for more stable behavior */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setShowServicesDropdown((prev) => !prev);
                setShowSubMenu(false);
              }}
              className="bg-transparent border-0 text-[#481299] no-underline text-base font-medium hover:text-purple-600 transition-colors duration-300 flex items-center gap-1 cursor-pointer"
            >
              Services
              <span className="text-xs">▼</span>
            </button>
            
            {showServicesDropdown && !showSubMenu && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 mt-2 min-w-[260px] z-50 border border-purple-100">
                <button
                  type="button"
                  onClick={() => setShowSubMenu(true)}
                  className="w-full block px-6 py-3 text-gray-700 no-underline hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#481299]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                      <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
                      <circle cx="16" cy="8" r="1.5" fill="currentColor"/>
                      <circle cx="8" cy="16" r="1.5" fill="currentColor"/>
                      <circle cx="16" cy="16" r="1.5" fill="currentColor"/>
                    </svg>
                    <span>Astrologers & Tarot</span>
                  </div>
                  <span className="text-gray-400">›</span>
                </button>
                <Link
                  to="/ayurvedha"
                  onClick={() => setShowServicesDropdown(false)}
                  className="block px-6 py-3 text-gray-700 no-underline hover:bg-gray-100 transition-colors duration-200 flex items-center gap-3"
                >
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    <path d="M8 10c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" fill="currentColor" opacity="0.6"/>
                  </svg>
                  <span>Ayurveda Doctors</span>
                </Link>
                <Link
                  to="/services/yoga"
                  onClick={() => setShowServicesDropdown(false)}
                  className="block px-6 py-3 text-gray-700 no-underline hover:bg-gray-100 transition-colors duration-200 flex items-center gap-3"
                >
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="3" fill="currentColor"/>
                    <path d="M12 11c-3.31 0-6 2.69-6 6v3h12v-3c0-3.31-2.69-6-6-6z" fill="currentColor" opacity="0.8"/>
                    <path d="M10 14h4v4h-4z" fill="currentColor" opacity="0.6"/>
                  </svg>
                  <span>Yoga & Meditation</span>
                </Link>
              </div>
            )}

            {showServicesDropdown && showSubMenu && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 mt-2 min-w-[260px] z-50 border border-purple-100">
                <button
                  type="button"
                  onClick={() => setShowSubMenu(false)}
                  className="w-full block px-6 py-3 text-gray-700 no-underline hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 text-left border-b border-gray-100"
                >
                  <span className="text-lg">‹</span>
                  <span>Back</span>
                </button>
                <Link
                  to="/services/birthday-astrology"
                  onClick={() => setShowServicesDropdown(false)}
                  className="block px-6 py-3 text-gray-700 no-underline hover:bg-gray-100 transition-colors duration-200"
                >
                  Birthday Astrology
                </Link>
                <Link
                  to="/services/business-astrology"
                  onClick={() => setShowServicesDropdown(false)}
                  className="block px-6 py-3 text-gray-700 no-underline hover:bg-gray-100 transition-colors duration-200"
                >
                  Business Astrology
                </Link>
                <Link
                  to="/services/zodiac-wellness"
                  onClick={() => setShowServicesDropdown(false)}
                  className="block px-6 py-3 text-gray-700 no-underline hover:bg-gray-100 transition-colors duration-200"
                >
                  Zodiac Wellness
                </Link>
                <Link
                  to="/services/kundli-match"
                  onClick={() => setShowServicesDropdown(false)}
                  className="block px-6 py-3 text-gray-700 no-underline hover:bg-gray-100 transition-colors duration-200"
                >
                  Kundli Match
                </Link>
                <Link
                  to="/services/numberology"
                  onClick={() => setShowServicesDropdown(false)}
                  className="block px-6 py-3 text-gray-700 no-underline hover:bg-gray-100 transition-colors duration-200"
                >
                  Numerology
                </Link>
                <Link
                  to="/services/horoscope"
                  onClick={() => setShowServicesDropdown(false)}
                  className="block px-6 py-3 text-gray-700 no-underline hover:bg-gray-100 transition-colors duration-200"
                >
                  Horoscope
                </Link>
                <Link
                  to="/services/tarot-reading"
                  onClick={() => setShowServicesDropdown(false)}
                  className="block px-6 py-3 text-gray-700 no-underline hover:bg-gray-100 transition-colors duration-200"
                >
                  Tarot Reading
                </Link>
              </div>
            )}
          </div>
          
          <Link to="/astrologers" className="text-[#481299] no-underline text-base font-medium hover:text-purple-600 transition-colors duration-300">
            Astrologers
          </Link>
          <Link to="/events" className="text-[#481299] no-underline text-base font-medium hover:text-purple-600 transition-colors duration-300">
            Events
          </Link>
          <Link to="/learn" className="text-[#481299] no-underline text-base font-medium hover:text-purple-600 transition-colors duration-300">
            Learn astrology
          </Link>
          <Link to="/about" className="text-[#481299] no-underline text-base font-medium hover:text-purple-600 transition-colors duration-300">
            About Us
          </Link>
          <Link to="/contact" className="text-[#481299] no-underline text-base font-medium hover:text-purple-600 transition-colors duration-300">
            Contact Us
          </Link>
        </nav>

        {/* Right Side Icons and Buttons */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {/* Search Icon */}
          <button 
            className="bg-transparent border-0 text-gray-600 cursor-pointer p-2 hover:text-[#481299] transition-colors duration-300 flex items-center justify-center" 
            aria-label="Search"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
          
          {/* Chat Icon */}
          <button 
            className="bg-transparent border-0 text-gray-600 cursor-pointer p-2 hover:text-[#481299] transition-colors duration-300 flex items-center justify-center" 
            aria-label="Chat"
            onClick={() => navigate('/chat')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
          
          {/* LOGIN Button */}
          <button
            className="bg-gradient-to-b from-[#481299] to-[#0C4292] text-white border-0 rounded-lg px-6 py-3 text-sm font-semibold uppercase tracking-wide cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#481299]/40 transition-all duration-200 active:translate-y-0"
            onClick={() => navigate('/')}
          >
            LOGIN
          </button>
          
          {/* GET THE APP Button */}
          <button className="bg-gradient-to-b from-[#481299] to-[#0C4292] text-white border-0 rounded-lg px-6 py-3 text-sm font-semibold uppercase tracking-wide cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#481299]/40 transition-all duration-200 active:translate-y-0">
            GET THE APP
          </button>
        </div>
      </div>
      
      {/* Bottom Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
    </header>
  );
}

export default Header;
