import AuthFrame from "./AuthFrame";

function SignupForm({ onBack, onClose, onSwitchToSignin }) {
  return (
    <AuthFrame
      title="Create Your Account"
      subtitle="Join us to explore astrology, tarot, yoga, and holistic wellness services."
      onBack={onBack}
      onClose={onClose}
    >
      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs outline-none focus:ring-2 focus:ring-[#481299]/30 focus:border-[#481299]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs outline-none focus:ring-2 focus:ring-[#481299]/30 focus:border-[#481299]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs outline-none focus:ring-2 focus:ring-[#481299]/30 focus:border-[#481299]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs outline-none focus:ring-2 focus:ring-[#481299]/30 focus:border-[#481299]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Date of birth
            </label>
            <input
              type="text"
              placeholder="MM/DD/YYYY"
              className="w-full h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs outline-none focus:ring-2 focus:ring-[#481299]/30 focus:border-[#481299]"
            />
          </div>
        </div>

        <label className="flex items-center gap-2 text-xs text-slate-600">
          <input
            type="checkbox"
            className="h-3 w-3 rounded border-slate-300 text-[#481299] focus:ring-[#481299]"
          />
          <span>I agree to Terms &amp; Privacy Policy</span>
        </label>

        <button
          type="submit"
          className="w-full h-9 rounded-full bg-gradient-to-r from-[#481299] to-[#0C4292] text-white text-xs font-semibold tracking-wide shadow-[0_12px_25px_rgba(79,70,229,0.45)] hover:shadow-[0_16px_30px_rgba(79,70,229,0.6)] transition"
        >
          SIGN UP
        </button>

        <p className="text-[11px] text-center text-slate-500">
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

export default SignupForm;

// import AuthFrame from "./AuthFrame";

// function SignupForm({ onBack, onClose, onSwitchToSignin }) {
//   return (
//     <AuthFrame
//       onBack={onBack}
//       onClose={onClose}
//       title="Create Your Account"
//       description="Join us to explore astrology, tarot, yoga, and holistic wellness services."
//     >
//       <form className="space-y-3">
//         <div className="space-y-1">
//           <label className="text-xs font-medium text-slate-600">Full Name</label>
//           <input
//             type="text"
//             className="w-full h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#481299] focus:border-[#481299]"
//             placeholder="Enter your full name"
//           />
//         </div>

//         <div className="space-y-1">
//           <label className="text-xs font-medium text-slate-600">
//             Email Address
//           </label>
//           <input
//             type="email"
//             className="w-full h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#481299] focus:border-[#481299]"
//             placeholder="Enter your email address"
//           />
//         </div>

//         <div className="space-y-1">
//           <label className="text-xs font-medium text-slate-600">Password</label>
//           <input
//             type="password"
//             className="w-full h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#481299] focus:border-[#481299]"
//             placeholder="Create a password"
//           />
//         </div>

//         <div className="space-y-1">
//           <label className="text-xs font-medium text-slate-600">
//             Confirm Password
//           </label>
//           <input
//             type="password"
//             className="w-full h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#481299] focus:border-[#481299]"
//             placeholder="Confirm your password"
//           />
//         </div>

//         <div className="space-y-1">
//           <label className="text-xs font-medium text-slate-600">
//             Date of Birth
//           </label>
//           <input
//             type="text"
//             className="w-full h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#481299] focus:border-[#481299]"
//             placeholder="MM/DD/YYYY"
//           />
//         </div>

//         <label className="flex items-center gap-2 pt-1 text-[11px] text-slate-600">
//           <input
//             type="checkbox"
//             className="h-3 w-3 rounded border-slate-300 text-[#481299] focus:ring-[#481299]"
//           />
//           <span>
//             I agree to Terms &amp; Privacy Policy
//           </span>
//         </label>

//         <button
//           type="submit"
//           className="mt-2 w-full h-9 rounded-full bg-gradient-to-r from-[#481299] to-[#0C4292] text-white text-xs font-semibold uppercase tracking-wide shadow-[0_14px_28px_rgba(79,70,229,0.5)] hover:translate-y-[-1px] hover:shadow-[0_18px_36px_rgba(79,70,229,0.65)] transition"
//         >
//           SIGN UP
//         </button>

//         <p className="pt-1 text-[11px] text-center text-slate-500">
//           Already have an account?{" "}
//           <button
//             type="button"
//             onClick={onSwitchToSignin}
//             className="text-[#0C4292] font-semibold hover:underline"
//           >
//             Sign in
//           </button>
//         </p>
//       </form>
//     </AuthFrame>
//   );
// }

// export default SignupForm;


