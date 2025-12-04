import person1 from "../../assets/person1.png";

function ReviewsSection({ reviews = [], reviewerImage = person1 }) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-start gap-4 mb-4">
              <img
                src={review.reviewerImage || reviewerImage}
                alt={review.reviewerName}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="font-semibold text-gray-800 mb-1">
                  {review.reviewerName}
                </p>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">{review.reviewText}</p>
            {review.doctorResponse && (
              <div className="pl-4 border-l-2 border-[#734F94]">
                <p className="font-semibold text-[#734F94] mb-1">
                  {review.doctorResponse.name}
                </p>
                <p className="text-gray-700">{review.doctorResponse.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewsSection;


