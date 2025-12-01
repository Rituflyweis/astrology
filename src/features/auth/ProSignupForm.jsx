import AuthFrame from "./AuthFrame";

function ProSignupForm({ onBack, onClose, onSwitchToSignin }) {
  return (
    <AuthFrame
      onBack={onBack}
      onClose={onClose}
      title="Join as a Professional"
      subtitle="Offer your astrology, tarot, and holistic wellness services to seekers around the world."
    >
      <form className="space-y-3">
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-600">
            Full Name
          </label>
          <input
            type="text"
            className="w-full h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#481299] focus:border-[#481299]"
            placeholder="Enter your full name"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-600">
            Email Address
          </label>
          <input
            type="email"
            className="w-full h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#481299] focus:border-[#481299]"
            placeholder="Enter your email address"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-600">
            Practice Type
          </label>
          <input
            type="text"
            className="w-full h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#481299] focus:border-[#481299]"
            placeholder="Astrologer, Tarot Reader, Yoga Coach..."
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-600">
            Password
          </label>
          <input
            type="password"
            className="w-full h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#481299] focus:border-[#481299]"
            placeholder="Create a password"
          />
        </div>

        <label className="flex items-center gap-2 pt-1 text-[11px] text-slate-600">
          <input
            type="checkbox"
            className="h-3 w-3 rounded border-slate-300 text-[#481299] focus:ring-[#481299]"
          />
          <span>I agree to Terms &amp; Privacy Policy</span>
        </label>

        <button
          type="submit"
          className="mt-2 w-full h-9 rounded-full bg-gradient-to-r from-[#481299] to-[#0C4292] text-white text-xs font-semibold uppercase tracking-wide shadow-[0_14px_28px_rgba(79,70,229,0.5)] hover:translate-y-[-1px] hover:shadow-[0_18px_36px_rgba(79,70,229,0.65)] transition"
        >
          SIGN UP AS A PROFESSIONAL
        </button>

        <p className="pt-1 text-[11px] text-center text-slate-500">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToSignin}
            className="text-[#0C4292] font-semibold hover:underline"
          >
            Sign in
          </button>
        </p>
      </form>
    </AuthFrame>
  );
}

export default ProSignupForm;


