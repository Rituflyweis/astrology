import { useState } from "react";
import AuthFrame from "./AuthFrame";
import astrologerStep2 from "../../assets/AstrologerStep2.png";
import ayurvedaStep2 from "../../assets/ayurvedaStep2.png";
import yogaStep2 from "../../assets/yogaStep2.png";

const TOTAL_STEPS = 4;

function StepProgress({ step }) {
  const percent = (step / TOTAL_STEPS) * 100;

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-[11px] text-slate-500">
        <span>Step {step}/{TOTAL_STEPS}</span>
      </div>
      <div className="h-[3px] w-full rounded-full bg-[#E1E4EB] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#481299] to-[#0C4292] transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function OnboardingFlow({ onClose, onDone }) {
  const [step, setStep] = useState(1);

  const next = () => {
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
    } else {
      onDone();
    }
  };

  const back = () => {
    if (step === 1) {
      onClose();
    } else {
      setStep(step - 1);
    }
  };

  return (
    <AuthFrame
      onBack={back}
      onClose={onClose}
      fullWidth
    >
      <div className="space-y-6">
        <StepProgress step={step} />

        {step === 1 && (
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              next();
            }}
          >
            <h2 className="text-center text-lg sm:text-xl font-serif text-slate-900">
              Tell us about your birth details
            </h2>

            <div className="space-y-3 max-w-md">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="w-full h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs outline-none focus:ring-1 focus:ring-[#481299] focus:border-[#481299]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Time of Birth
                </label>
                <input
                  type="time"
                  className="w-full h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs outline-none focus:ring-1 focus:ring-[#481299] focus:border-[#481299]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Place of Birth
                </label>
                <input
                  type="text"
                  placeholder="Enter city"
                  className="w-full h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs outline-none focus:ring-1 focus:ring-[#481299] focus:border-[#481299]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Gender (Optional)
                </label>
                <select className="w-full h-9 rounded-md border border-slate-200 bg-slate-50 px-3 text-xs outline-none focus:ring-1 focus:ring-[#481299] focus:border-[#481299]">
                  <option value="">Select</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="prefer-not">Prefer not to say</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-6 h-9 rounded-full bg-gradient-to-r from-[#481299] to-[#0C4292] text-white text-xs font-semibold tracking-wide shadow-[0_10px_24px_rgba(79,70,229,0.5)] hover:translate-y-[-1px] hover:shadow-[0_14px_30px_rgba(79,70,229,0.65)] transition"
              >
                NEXT
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <div className="text-center space-y-1">
              <h2 className="text-lg sm:text-xl font-serif text-slate-900">
                What are you interested in?
              </h2>
              <p className="text-[11px] text-slate-500">Select all that apply.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  id: 1,
                  title: "Astrologers & Tarot",
                  description: "Gain insights into your life’s path and potential.",
                  image: astrologerStep2,
                  emoji: "🔮",
                },
                {
                  id: 2,
                  title: "Ayurveda Doctors",
                  description: "Consult with experienced Ayurveda practitioners.",
                  image: ayurvedaStep2,
                  emoji: "🌿",
                },
                {
                  id: 3,
                  title: "Yoga & Meditation",
                  description: "Find inner peace and enhance your well-being.",
                  image: yogaStep2,
                  emoji: "🧘‍♀️",
                },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  className="group flex flex-col items-start rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.12)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.18)] hover:-translate-y-1 transition"
                >
                  <div className="w-full h-28 overflow-hidden">
                    <img
                      src={opt.image}
                      alt={opt.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <div className="px-4 py-3 text-left space-y-1">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                      <span>{opt.emoji}</span>
                      <span className ="font-bold text-[18px]">{opt.title}</span>
                    </div>
                    <p className="text-[16px] text-[#734F94] leading-snug">
                      {opt.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={next}
                className="px-6 h-9 rounded-full bg-gradient-to-r from-[#481299] to-[#0C4292] text-white text-xs font-semibold tracking-wide shadow-[0_10px_24px_rgba(79,70,229,0.5)] hover:translate-y-[-1px] hover:shadow-[0_14px_30px_rgba(79,70,229,0.65)] transition"
              >
                NEXT
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5">
            <div className="text-center space-y-1">
              <h2 className="text-lg sm:text-xl font-serif text-slate-900">
                What are your goals?
              </h2>
              <p className="text-[11px] text-slate-500">Select all that apply.</p>
            </div>
            <div className="flex flex-col gap-3 max-w-xs">
              {[
                "Personal Growth",
                "Stress Relief",
                "Relationship Guidance",
                "Career / Business Insights",
              ].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="w-full h-9 rounded-full bg-gradient-to-r from-[#481299] to-[#0C4292] text-[11px] font-semibold text-white text-left px-4 shadow-[0_10px_24px_rgba(79,70,229,0.4)] hover:translate-y-[-1px] hover:shadow-[0_14px_30px_rgba(79,70,229,0.6)] transition"
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={next}
                className="px-6 h-9 rounded-full bg-gradient-to-r from-[#481299] to-[#0C4292] text-white text-xs font-semibold tracking-wide shadow-[0_10px_24px_rgba(79,70,229,0.5)] hover:translate-y-[-1px] hover:shadow-[0_14px_30px_rgba(79,70,229,0.65)] transition"
              >
                NEXT
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-5">
            <div className="text-center space-y-1">
              <h2 className="text-lg sm:text-xl font-serif text-slate-900">
                Choose your membership
              </h2>
              <p className="text-[11px] text-slate-500 max-w-xl mx-auto">
                Unlock premium features for a personalized wellness journey, or
                continue with our free plan.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-xs text-slate-500 mb-1">Free</div>
                <div className="text-2xl font-semibold text-slate-900 mb-1">
                  $0 <span className="text-sm text-slate-500">/month</span>
                </div>
                <p className="text-[11px] text-slate-600 mb-3">
                  Continue with Free Plan
                </p>
                <ul className="space-y-1 text-[11px] text-slate-600">
                  <li>✓ Basic access to services</li>
                  <li>✓ Limited consultations</li>
                  <li>✓ Standard support</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-violet-400 bg-violet-50 p-4 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-slate-500">Premium</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#4f46e5] text-[10px] text-white">
                    BEST VALUE
                  </span>
                </div>
                <div className="text-2xl font-semibold text-slate-900 mb-1">
                  $9.99 <span className="text-sm text-slate-500">/month</span>
                </div>
                <p className="text-[11px] text-slate-600 mb-3">
                  Upgrade to Premium
                </p>
                <ul className="space-y-1 text-[11px] text-slate-700">
                  <li>✓ Unlimited consultations</li>
                  <li>✓ Priority access</li>
                  <li>✓ Personalized reports</li>
                  <li>✓ Exclusive discounts</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={next}
                className="px-6 h-9 rounded-full bg-[#4f46e5] text-white text-xs font-semibold tracking-wide shadow-[0_10px_24px_rgba(79,70,229,0.5)] hover:translate-y-[-1px] hover:shadow-[0_14px_30px_rgba(79,70,229,0.65)] transition"
              >
                NEXT
              </button>
            </div>
          </div>
        )}
      </div>
    </AuthFrame>
  );
}

export default OnboardingFlow;

