function AboutSection({ aboutText }) {
  if (!aboutText || aboutText.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-[#481299] mb-6">About</h2>
      <div className="space-y-4 text-[#0C4292] leading-relaxed">
        {Array.isArray(aboutText) ? (
          aboutText.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))
        ) : (
          <p>{aboutText}</p>
        )}
      </div>
    </div>
  );
}

export default AboutSection;


