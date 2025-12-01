import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './features/Header';
import HomePage from './pages/HomePage';
import Footer from './features/Footer';
import LoginPage from './pages/auth/LoginPage';
import ChatPage from './pages/chat/ChatPage';
import ContactPage from './pages/contact/ContactPage';
import './App.css';

function App() {
  // Start with the auth welcome screen open by default
  const [authMode, setAuthMode] = useState('welcome'); // null | 'welcome' | 'signup' | 'signin' | 'pro-signup' | 'onboarding'
  const isAuthOpen = authMode !== null;

  const closeAuth = () => setAuthMode(null);

  return (
    <Router>
      <div>
        {!isAuthOpen && <Header onLoginClick={() => setAuthMode('welcome')} />}

        {isAuthOpen ? (
          // Full-page auth experience as default route
          <LoginPage
            mode={authMode}
            setMode={setAuthMode}
            onClose={closeAuth}
          />
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
