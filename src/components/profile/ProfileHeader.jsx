function ProfileHeader({ name, specialization, image, experience, onConsultNow, onBookAppointment }) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 pb-8 border-b border-gray-200">
      {/* Profile Picture */}
      <div className="flex-shrink-0">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-[#0C4292] to-[#481299] p-1">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Name and Info */}
      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl font-bold text-[#481299] mb-2">
          {name}
        </h1>
        <p className="text-lg md:text-xl text-[#734F94] mb-2">
          {specialization}
        </p>
        {experience && (
          <p className="text-gray-600">
            Exp - {experience}
          </p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button 
          onClick={onConsultNow}
          className="px-6 py-3 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors duration-200"
        >
          CONSULT NOW
        </button>
        <button 
          onClick={onBookAppointment}
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#0C4292] to-[#481299] text-white font-semibold hover:shadow-lg transition-all duration-200"
        >
          BOOK APPOINTMENT
        </button>
      </div>
    </div>
  );
}

export default ProfileHeader;


