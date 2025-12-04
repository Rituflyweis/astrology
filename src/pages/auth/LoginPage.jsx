import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthWelcome from "../../features/auth/AuthWelcome";
import SignupForm from "../../features/auth/SignupForm";
import ProSignupForm from "../../features/auth/ProSignupForm";
import SigninForm from "../../features/auth/SigninForm";
import OnboardingFlow from "../../features/auth/OnboardingFlow";

function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mode, setMode] = useState("welcome");

  // Sync mode with URL path
  useEffect(() => {
    if (location.pathname === "/") {
      setMode("welcome");
    } else if (location.pathname === "/signin") {
      setMode("signin");
    } else if (location.pathname === "/signup") {
      setMode("signup");
    } else if (location.pathname === "/signup/professional") {
      setMode("pro-signup");
    } else if (location.pathname === "/onboarding") {
      setMode("onboarding");
    }
  }, [location.pathname]);

  const goHome = () => {
    navigate("/home", { replace: true });
  };

  const goTo = (nextMode, path) => {
    setMode(nextMode);
    navigate(path, { replace: true });
  };

  if (mode === "signup") {
    return (
      <SignupForm
        onBack={() => goTo("welcome", "/")}
        onClose={goHome}
        onSwitchToSignin={() => goTo("signin", "/signin")}
      />
    );
  }

  if (mode === "pro-signup") {
    return (
      <ProSignupForm
        onBack={() => goTo("welcome", "/")}
        onClose={goHome}
        onSwitchToSignin={() => goTo("signin", "/signin")}
      />
    );
  }

  if (mode === "signin") {
    return (
      <SigninForm
        onBack={() => goTo("welcome", "/")}
        onClose={goHome}
        onSwitchToSignup={() => goTo("signup", "/signup")}
        onSuccess={() => goTo("onboarding", "/onboarding")}
      />
    );
  }

  if (mode === "onboarding") {
    return (
      <OnboardingFlow
        onClose={goHome}
        onDone={goHome}
      />
    );
  }

  // default welcome
  return (
    <AuthWelcome
      onClose={goHome}
      onSignup={() => goTo("signup", "/signup")}
      onSignin={() => goTo("signin", "/signin")}
      onProSignup={() => goTo("pro-signup", "/signup/professional")}
    />
  );
}

export default LoginPage;


