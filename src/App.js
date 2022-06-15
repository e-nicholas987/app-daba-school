import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyle";
import RequireAuth from "./components/route/RequireAuth";
import PersistLogin from "./components/route/PersistLogin";
import Onboarding from "./pages/Onboarding";
import OnboardingActions from "./components/onboarding/OnboardingActions";
import LoginForm from "./components/onboarding/LoginForm";
import SignUpForm from "./components/onboarding/SignUpForm";
import PasswordRecovery from "./components/onboarding/PasswordRecovery";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      {/* Public Routes */}
      <Routes>
        <Route path="/" element={<Navigate to="onboarding" />} />

        <Route element={<PersistLogin />}>
          <Route path="/" element={<Onboarding />}>
            <Route path="onboarding" element={<OnboardingActions />} />
            <Route path="onboarding/signup" element={<SignUpForm />} />
            <Route path="onboarding/login" element={<LoginForm />} />
            <Route
              path="onboarding/forgot-password"
              element={<PasswordRecovery />}
            />
          </Route>
        </Route>

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
