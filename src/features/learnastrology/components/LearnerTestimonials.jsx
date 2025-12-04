import person1 from "../../../assets/person1.png";
import person2 from "../../../assets/person2.png";
import person3 from "../../../assets/person3.png";
import person4 from "../../../assets/person4.png";

function LearnerTestimonials() {
  const learners = [
    {
      image: person1,
      name: "Sophia Carter",
      role: "Aspiring Astrologer",
      quote:
        "This course has transformed my understanding of astrology. The instructors are knowledgeable and supportive, and the community is fantastic!",
    },
    {
      image: person2,
      name: "Ethan Bennett",
      role: "Curious Learner",
      quote:
        "I've always been curious about astrology, but this course made it accessible and engaging. I'm amazed by how much I've learned in such a short time.",
    },
    {
      image: person3,
      name: "Olivia Hayes",
      role: "Dedicated Student",
      quote:
        "The course materials are well-organized and easy to follow. I appreciate the practical exercises and real-world examples that help solidify my understanding.",
    },
    {
      image: person4,
      name: "Liam Foster",
      role: "Skeptical Turned Believer",
      quote:
        "I was skeptical at first, but this course exceeded my expectations. It’s a comprehensive and insightful journey into the world of astrology.",
    },
  ];

  return (
    <section className="mb-14">
      <h2 className="text-xl sm:text-2xl font-serif text-[#481299] font-bold mb-6">
        What Our Learners Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {learners.map((learner, idx) => (
          <div key={idx} className="text-center">
            <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden shadow-lg">
              <img
                src={learner.image}
                alt={learner.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-sm font-semibold text-slate-900">
              {learner.name}
            </h3>
            <p className="text-[11px] text-[#481299] font-medium mb-2">
              {learner.role}
            </p>
            <p className="text-[11px] text-slate-600 leading-snug">
              {learner.quote}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LearnerTestimonials;


