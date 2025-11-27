import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage.jsx';
import VerifyPage from './pages/VerifyPage.jsx';
import SuccessPage from './pages/SuccessPage.jsx';
import CheckEmailPage from './pages/CheckEmailPage.jsx';
import ResendPage from './pages/ResendPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/check-email" element={<CheckEmailPage />} />
        <Route path="/resend" element={<ResendPage />} />
      </Routes>
    </Router>
  );
}

export default App;
