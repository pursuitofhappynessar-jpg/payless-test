import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Book Now', href: '/book' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with enhanced visibility */}
          <Link to="/" className="flex items-center group">
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-2 rounded-lg shadow-logo border border-sky-100">
              <img 
                src="https://paylesseg.com/wp-content/uploads/2024/10/362x200-pix-1.png"
                alt="Payless"
                className="h-8 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-sky-600'
                    : 'text-gray-700 hover:text-sky-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/book"
              className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 animate-glow"
            >
              Get Your Card
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-sky-600 bg-sky-50'
                      : 'text-gray-700 hover:text-sky-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/book"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-200 font-medium text-center"
              >
                Get Your Card
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;