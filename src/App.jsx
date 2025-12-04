import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Header from './features/Header';
import Footer from './features/Footer';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isAuthRoute =
    location.pathname === '/' ||
    location.pathname === '/signin' ||
    location.pathname === '/signup' ||
    location.pathname === '/signup/professional' ||
    location.pathname === '/onboarding';

  return (
    <div>
      {!isAuthRoute && <Header />}
      <AppRoutes />
      {!isAuthRoute && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
