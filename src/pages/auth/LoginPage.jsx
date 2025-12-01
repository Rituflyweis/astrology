import AuthWelcome from "../../features/auth/AuthWelcome";
import SignupForm from "../../features/auth/SignupForm";
import ProSignupForm from "../../features/auth/ProSignupForm";
import SigninForm from "../../features/auth/SigninForm";
import OnboardingFlow from "../../features/auth/OnboardingFlow";

function LoginPage({ mode, onClose, setMode }) {
  if (mode === "signup") {
    return (
      <SignupForm
        onBack={() => setMode("welcome")}
        onClose={onClose}
        onSwitchToSignin={() => setMode("signin")}
      />
    );
  }

  if (mode === "pro-signup") {
    return (
      <ProSignupForm
        onBack={() => setMode("welcome")}
        onClose={onClose}
        onSwitchToSignin={() => setMode("signin")}
      />
    );
  }

  if (mode === "signin") {
    return (
      <SigninForm
        onBack={() => setMode("welcome")}
        onClose={onClose}
        onSwitchToSignup={() => setMode("signup")}
        onSuccess={() => setMode("onboarding")}
      />
    );
  }

  if (mode === "onboarding") {
    return (
      <OnboardingFlow
        onClose={onClose}
        onDone={() => setMode(null)}
      />
    );
  }

  // default welcome
  return (
    <AuthWelcome
      onClose={onClose}
      onSignup={() => setMode("signup")}
      onSignin={() => setMode("signin")}
      onProSignup={() => setMode("pro-signup")}
    />
  );
}

export default LoginPage;


