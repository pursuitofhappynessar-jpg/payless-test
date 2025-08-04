import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, CreditCard } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-2 rounded-lg">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Payless</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200">
              Home
            </Link>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200"
            >
              Our Services
            </button>
            <button 
              onClick={() => scrollToSection('vouchers')}
              className="text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200"
            >
              Our Vouchers
            </button>
            <Link 
              to="/reservation" 
              className="text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200"
            >
              Reservation
            </Link>
            <Link
              to="/get-your-card"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
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
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection('vouchers')}
                className="text-left text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200"
              >
                Our Vouchers
              </button>
              <Link 
                to="/reservation" 
                className="text-gray-700 hover:text-sky-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Reservation
              </Link>
              <Link
                to="/get-your-card"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
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