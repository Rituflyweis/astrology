import yogalogo from "../../assets/yogalogo.png";
import cosmicFlowImage from "../../assets/cosmicflowimage.png";

function AuthWelcome({ onClose, onSignup, onSignin, onProSignup }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background image (same as Cosmic Flow) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${cosmicFlowImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Centered modal card */}
      <div className="relative z-10 w-full max-w-3xl mx-4 bg-white/95 rounded-3xl shadow-[0_24px_60px_rgba(15,23,42,0.4)] overflow-hidden">
        <div className="flex justify-end p-4">
          <button
            type="button"
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="px-8 pb-10 pt-2 flex flex-col items-center text-center space-y-6">
          {/* Yoga Logo */}
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-[0_18px_35px_rgba(79,70,229,0.35)] bg-gradient-to-b from-[#1e1b4b] to-[#020617] flex items-center justify-center">
            <img
              src={yogalogo}
              alt="Yoga Pose"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Heading & text */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-serif text-slate-900">
              Welcome to{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#481299] to-[#0C4292]">
                LOGO
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Discover astrology, tarot, yoga, and holistic wellness with
              expert guidance tailored to your unique cosmic journey.
            </p>
          </div>

          {/* Primary actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mt-2">
            <button
              type="button"
              onClick={onSignup}
              className="w-full sm:w-1/2 h-11 rounded-full bg-gradient-to-r from-[#481299] to-[#0C4292] text-white text-sm font-semibold tracking-wide shadow-[0_16px_30px_rgba(79,70,229,0.45)] hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(79,70,229,0.6)] transition"
            >
              SIGN UP
            </button>
            <button
              type="button"
              onClick={onSignin}
              className="w-full sm:w-1/2 h-11 rounded-full bg-slate-100 text-slate-800 text-sm font-semibold tracking-wide hover:bg-slate-200 transition"
            >
              SIGN IN
            </button>
          </div>

          {/* Secondary action */}
          <button
            type="button"
            onClick={onProSignup}
            className="mt-2 inline-flex items-center justify-center px-6 h-10 rounded-full border border-slate-200 bg-white text-xs font-semibold tracking-wide text-slate-700 hover:bg-slate-50 shadow-sm transition"
          >
            SIGN UP AS A PROFESSIONAL
          </button>
        </div>
      </div>
    </section>
  );
}

export default AuthWelcome;


