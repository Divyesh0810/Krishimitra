import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { NotificationBell } from './Notifications/NotificationSystem';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showProfile, setShowProfile] = React.useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/signin');
    setShowProfile(false);
  };

  return (
    <nav className="bg-white shadow-lg relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-green-600">
              KrishiMitra.In
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/marketplace"
              className={`text-gray-600 hover:text-green-600 transition ${
                location.pathname === '/marketplace' ? 'text-green-600' : ''
              }`}
            >
              Marketplace
            </Link>
            <Link
              to="/weather"
              className={`text-gray-600 hover:text-green-600 transition ${
                location.pathname === '/weather' ? 'text-green-600' : ''
              }`}
            >
              Weather
            </Link>
            <Link
              to="/community"
              className={`text-gray-600 hover:text-green-600 transition ${
                location.pathname === '/community' ? 'text-green-600' : ''
              }`}
            >
              Community
            </Link>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <NotificationBell />
                
                <div className="relative">
                  <button
                    onClick={() => setShowProfile(!showProfile)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <User size={20} className="text-gray-600" />
                  </button>
                  
                  {showProfile && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                      <button 
                        onClick={() => {
                          navigate('/farmer-dashboard');
                          setShowProfile(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-50"
                      >
                        Farmer Dashboard
                      </button>
                      <button 
                        onClick={() => {
                          navigate('/customer-dashboard');
                          setShowProfile(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-50"
                      >
                        Customer Dashboard
                      </button>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Link
                to="/signin"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/marketplace"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Marketplace
              </Link>
              <Link
                to="/weather"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Weather
              </Link>
              <Link
                to="/community"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Community
              </Link>
              {!isAuthenticated && (
                <Link
                  to="/signin"
                  className="block px-3 py-2 rounded-md text-white bg-green-600 hover:bg-green-700"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;