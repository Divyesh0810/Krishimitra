import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { NotificationProvider } from './components/Notifications/NotificationSystem';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Weather from './pages/Weather';
import Marketplace from './pages/Marketplace';
import Community from './pages/Community';
import FarmerDashboard from './pages/FarmerDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import SignIn from './components/Auth/SignIn';

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/community" element={<Community />} />
              <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
              <Route path="/customer-dashboard" element={<CustomerDashboard />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </div>
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;