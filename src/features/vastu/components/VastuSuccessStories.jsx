import person5 from "../../../assets/person5.png";

const STORIES = [
  {
    image: person5,
    name: "Sarah, Homeowner",
    text: "After implementing Vastu remedies, I noticed a significant improvement in my family's health and overall harmony at home.",
  },
  {
    image: person5,
    name: "Rahul, Business Owner",
    text: "The Vastu consultation helped me redesign my office layout, leading to better team collaboration and increased productivity.",
  },
  {
    image: person5,
    name: "Emily, Property Developer",
    text: "Following Vastu principles in our new project resulted in faster sales and positive feedback from buyers.",
  },
];

function VastuSuccessStories() {
  return (
    <section className="max-w-[1400px] mx-auto px-3 sm:px-4 mt-14">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#111827] mb-6">
        Success Stories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STORIES.map((story, index) => (
          <article
            key={index}
            className="rounded-2xl border border-[#E5E7EB] bg-white px-5 py-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={story.image}
                alt={story.name}
                className="w-10 h-10 rounded-full object-cover"
              />
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

export default VastuSuccessStories;

