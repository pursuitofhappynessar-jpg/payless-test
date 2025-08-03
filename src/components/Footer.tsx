import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-white/10 p-2 rounded-lg">
                <img 
                  src="https://paylesseg.com/wp-content/uploads/2024/10/362x200-pix-1.png"
                  alt="Payless"
                  className="h-8 w-auto object-contain brightness-0 invert"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your ultimate travel companion for exploring Egypt's most beautiful destinations. 
              Save money while creating unforgettable memories across the land of pharaohs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/book" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Get Your Card
                </a>
              </li>
              <li>
                <a href="/reservation" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Reservation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-sky-400" />
                <span className="text-gray-400 text-sm">info@paylesseg.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-sky-400" />
                <span className="text-gray-400 text-sm">010 44503305</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-sky-400" />
                <span className="text-gray-400 text-sm">Cairo, Egypt</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Payless Travel. All rights reserved. | Terms of Service | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;