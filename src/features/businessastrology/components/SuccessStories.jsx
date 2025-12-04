import person5 from "../../../assets/person5.png";

const STORIES = [
  {
    image: person5,
    name: "Sarah, Founder of Bloom & Grow",
    text: "Cosmic Path helped me launch my startup at the perfect time, leading to rapid growth and success.",
  },
  {
    image: person5,
    name: "Rahul, Tech Entrepreneur",
    text: "The business astrology report gave me clarity on investment timing and partnership choices.",
  },
  {
    image: person5,
    name: "Emily, Creative Studio Owner",
    text: "Aligning launches with favorable dates made a noticeable difference in our client responses.",
  },
];

function SuccessStories() {
  return (
    <section className="max-w-[1400px] mx-auto px-3 sm:px-4 mt-14">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#111827] mb-6">
        Success Stories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STORIES.map((story) => (
          <article
            key={story.name}
            className="rounded-2xl border border-[#E5E7EB] bg-white px-5 py-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={story.image}
                alt={story.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="text-xs text-[#6B7280]">Business Astrology Client</p>
            </div>
            <p className="text-sm text-[#111827] leading-relaxed mb-3">
              {story.text}
            </p>
            <p className="text-xs font-semibold text-[#4C1D95]">{story.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SuccessStories;


