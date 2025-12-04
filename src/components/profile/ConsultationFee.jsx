function ConsultationFee({ title = "Consultation Fee", fee, baseFeeLabel = "Base Fee" }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-[#481299] mb-6">
        {title}
      </h2>
      <div className="space-y-2">
        <p className="text-gray-700 font-medium">{baseFeeLabel}</p>
        <p className="text-lg text-[#734F94]">{fee || "₹299/15 min"}</p>
      </div>
    </div>
  );
}

export default ConsultationFee;


