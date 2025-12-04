import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import event1Image from "../../assets/event1.png";
import event2Image from "../../assets/event2.png";
import event3Image from "../../assets/event3.png";
import astrologersImage from "../../assets/astrologers.png";
import yogaImage from "../../assets/yoga.png";

const shorts = [
  { id: 1, title: "Cosmic Workshop", image: event1Image },
  { id: 2, title: "Astrology Desk", image: event2Image },
  { id: 3, title: "Zodiac Wheel", image: event3Image },
  { id: 4, title: "Expert Astrologers", image: astrologersImage },
  { id: 5, title: "Mindful Yoga", image: yogaImage },
];

function AstroShortsSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const swiperRef = useRef(null);

  return (
    <section className="py-16 bg-gradient-to-b from-[#F4F2FF] via-white to-[#E9F4FF]">
      {/* Outer container aligned with previous section */}
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold text-[#481299] mb-2">Astro Shorts</h2>
            <p className="text-lg text-[#0C4292]">
              A holistic journey to wellness—spiritual, physical, and emotional.
            </p>
          </div>
        </div>

        {/* Carousel (narrower, centered) */}
        <div className="relative py-10 max-w-[800px] mx-auto">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            spaceBetween={-70}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 180,
              modifier: 1.8,
              slideShadows: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              el: paginationRef.current,
              clickable: true,
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            breakpoints={{
              0: { slidesPerView: 1.6, spaceBetween: -40 },
              640: { slidesPerView: 2.4, spaceBetween: -60 },
              1024: { slidesPerView: 3.4, spaceBetween: -80 },
            }}
            className="shorts-swiper select-none"
          >
            {shorts.map((short, index) => (
              <SwiperSlide
                key={short.id}
                className="w-[200px] sm:w-[220px] md:w-[240px]"
              >
                <div
                  className="slide-card rounded-3xl overflow-hidden shadow-[0_22px_40px_rgba(15,23,42,0.25)] bg-black/10 backdrop-blur cursor-pointer"
                  onClick={() => swiperRef.current?.slideToLoop(index)}
                >
                  <img
                    src={short.image}
                    alt={short.title}
                    className="w-full h-[280px] sm:h-[320px] md:h-[340px] object-cover"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button ref={prevRef} className="nav-btn">
              ←
            </button>
            <div ref={paginationRef} className="shorts-pagination" />
            <button ref={nextRef} className="nav-btn">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .shorts-swiper {
          overflow: hidden;
        }
        .shorts-swiper .swiper-wrapper {
          align-items: center;
        }
        .shorts-swiper .swiper-slide {
          opacity: 0.35;
          transform: scale(0.88) translateY(10px);
          transition: transform 0.4s ease, opacity 0.4s ease;
        }
        .shorts-swiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1) translateY(-10px);
          z-index: 5;
        }
        .shorts-swiper .swiper-slide-next,
        .shorts-swiper .swiper-slide-prev {
          opacity: 0.7;
          transform: scale(0.9);
          z-index: 4;
        }
        .nav-btn {
          background-color: #ffffff;
          border: 1px solid rgba(148, 163, 184, 0.7);
          color: #64748b;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.12);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease;
        }
        .nav-btn:hover {
          background-color: #4f46e5;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 16px 30px rgba(79, 70, 229, 0.35);
        }
        .shorts-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          border-radius: 50%;
          opacity: 1;
          transition: all 0.3s;
        }
        .shorts-pagination .swiper-pagination-bullet-active {
          background: #481299;
          width: 24px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
}

export default AstroShortsSection;
