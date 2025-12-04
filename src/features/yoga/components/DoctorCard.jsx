function DoctorCard({ image, name, title, subtitle }) {
  return (
    <div className="flex flex-col items-center text-center min-w-[150px] sm:min-w-[170px]">
      <div className="w-24 h-24 sm:w-28 sm:h-28 mb-3">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full border-4 border-white shadow-[0_12px_30px_rgba(15,23,42,0.25)]"
        />
      </div>
      <p className="text-xs sm:text-sm font-semibold text-[#1F2937] mb-1">
        {name}
      </p>
      <p className="text-[11px] sm:text-xs text-[#4B5563] leading-snug max-w-[160px]">
        <span className="text-[#4C1D95] font-semibold">{title}</span>
        {subtitle && (
          <>
            <br />
            {subtitle}
          </>
        )}
      </p>
    </div>
  );
}

export default DoctorCard;



