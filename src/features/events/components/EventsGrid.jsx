import { useState } from "react";
import event1 from "../../../assets/event1.png";
import event2 from "../../../assets/event2.png";
import event3 from "../../../assets/event3.png";
import astrologers from "../../../assets/astrologers.png";
import yoga from "../../../assets/yoga.png";
import ayurveda from "../../../assets/ayurveda.png";

function EventsGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  const allEvents = [
    {
      id: 1,
      image: astrologers,
      title: "Astrology Workshop",
      description: "Learn the basics of astrology",
    },
    {
      id: 2,
      image: event2,
      title: "Tarot Reading Session",
      description: "Personalized tarot readings",
    },
    {
      id: 3,
      image: event3,
      title: "Wellness Seminar",
      description: "Enhance your overall well-being",
    },
    {
      id: 4,
      image: yoga,
      title: "Yoga Retreat",
      description: "Relax and rejuvenate with yoga",
    },
    {
      id: 5,
      image: event1,
      title: "Meditation Workshop",
      description: "Find inner peace through meditation",
    },
    {
      id: 6,
      image: ayurveda,
      title: "Ayurveda Consultation",
      description: "Discover your Ayurvedic dosha",
    },
    {
      id: 7,
      image: astrologers,
      title: "Advanced Astrology",
      description: "Deep dive into advanced techniques",
    },
    {
      id: 8,
      image: event2,
      title: "Tarot Masterclass",
      description: "Master the art of tarot reading",
    },
    {
      id: 9,
      image: event3,
      title: "Holistic Wellness",
      description: "Comprehensive wellness approach",
    },
  ];

  const totalPages = Math.ceil(allEvents.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const currentEvents = allEvents.slice(startIndex, endIndex);

  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {currentEvents.map((event) => (
          <div
            key={event.id}
            className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold text-slate-900 mb-1">
                {event.title}
              </h3>
              <p className="text-sm text-slate-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="w-9 h-9 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-9 h-9 rounded-lg border transition ${
                currentPage === page
                  ? "bg-[#481299] text-white border-[#481299]"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
            className="w-9 h-9 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}

export default EventsGrid;



