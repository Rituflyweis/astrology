import AuthFrame from "./AuthFrame";

function SigninForm({ onBack, onClose, onSwitchToSignup, onSuccess }) {
  return (
    <AuthFrame
      onBack={onBack}
      onClose={onClose}
      title="Sign in to Your Account"
      subtitle="Access your insights, saved readings, and upcoming sessions from one place."
    >
      <form
        className="space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          if (onSuccess) onSuccess();
        }}
      >
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
            Password
          </label>
          <input
            type="password"
            className="w-full h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#481299] focus:border-[#481299]"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-600">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-3 w-3 rounded border-slate-300 text-[#481299] focus:ring-[#481299]"
            />
            <span>Keep me signed in</span>
          </label>
          <button
            type="button"
            className="text-[#0C4292] hover:underline"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="mt-1 w-full h-9 rounded-full bg-gradient-to-r from-[#481299] to-[#0C4292] text-white text-xs font-semibold uppercase tracking-wide shadow-[0_14px_28px_rgba(79,70,229,0.5)] hover:translate-y-[-1px] hover:shadow-[0_18px_36px_rgba(79,70,229,0.65)] transition"
        >
          SIGN IN
        </button>

        <p className="pt-1 text-[11px] text-center text-slate-500">
          Don&apos;t have an account yet?{" "}
          <button
            type="button"
            onClick={onSwitchToSignup}
            className="text-[#0C4292] font-semibold hover:underline"
          >
            Sign up
          </button>
        </p>
      </form>
    </AuthFrame>
  );
}

export default SigninForm;

