import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Users, 
  Upload, 
  MessageSquare,
  CheckCircle,
  ArrowLeft,
  Star,
  Shield,
  Clock
} from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  travelDate: string;
  travelers: string;
  document: File | null;
  notes: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  destination?: string;
  travelDate?: string;
  travelers?: string;
}

const BookNow: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    travelers: '1',
    document: null,
    notes: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const destinations = [
    'North Coast',
    'Sharm El Sheikh',
    'El Gouna',
    'Dahab',
    'Luxor',
    'Aswan',
    'Hurghada',
    'Marsa Alam',
    'Siwa Oasis',
    'Alexandria',
    'Cairo',
    'Other'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.destination) {
      newErrors.destination = 'Please select a destination';
    }

    if (!formData.travelDate) {
      newErrors.travelDate = 'Travel date is required';
    }

    if (!formData.travelers || parseInt(formData.travelers) < 1) {
      newErrors.travelers = 'Please specify number of travelers';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      document: file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Booking Request Submitted!
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Thank you for choosing Payless! We've received your booking request and will contact you within 24 hours to confirm your travel discount card details.
            </p>
            
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
              <div className="space-y-2 text-sm text-gray-600 text-left">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                  <span>We'll verify your information and travel details</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                  <span>Your Payless card will be activated within 24 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                  <span>Start enjoying discounts immediately at partner locations</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    destination: '',
                    travelDate: '',
                    travelers: '1',
                    document: null,
                    notes: ''
                  });
                }}
                className="border border-sky-500 text-sky-600 hover:bg-sky-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Book Another Trip
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-sky-600 hover:text-sky-700 mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          
          <div className="flex justify-center mb-6">
            <div className="bg-sky-500 p-4 rounded-full">
              <CreditCard className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Your Payless Card
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of smart travelers and start saving up to 70% on your next Egyptian adventure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Benefits Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Why Choose Payless?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Shield className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Guaranteed Savings</p>
                    <p className="text-sm text-gray-600">Up to 70% off at 500+ locations</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Clock className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Instant Activation</p>
                    <p className="text-sm text-gray-600">Start saving within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Star className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Premium Support</p>
                    <p className="text-sm text-gray-600">24/7 customer assistance</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  Trusted by 50,000+ travelers across Egypt
                </p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <User className="h-5 w-5 text-sky-500" />
                    <span>Personal Information</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200 ${
                          errors.fullName ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200 ${
                          errors.email ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200 ${
                        errors.phone ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="+20 123 456 789"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Travel Details */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-sky-500" />
                    <span>Travel Details</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                        Destination *
                      </label>
                      <select
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200 ${
                          errors.destination ? 'border-red-300' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select your destination</option>
                        {destinations.map((dest) => (
                          <option key={dest} value={dest}>{dest}</option>
                        ))}
                      </select>
                      {errors.destination && (
                        <p className="mt-1 text-sm text-red-600">{errors.destination}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Travel Date *
                      </label>
                      <input
                        type="date"
                        id="travelDate"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200 ${
                          errors.travelDate ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                      {errors.travelDate && (
                        <p className="mt-1 text-sm text-red-600">{errors.travelDate}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Travelers *
                    </label>
                    <select
                      id="travelers"
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200 ${
                        errors.travelers ? 'border-red-300' : 'border-gray-300'
                      }`}
                    >
                      {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Traveler' : 'Travelers'}
                        </option>
                      ))}
                    </select>
                    {errors.travelers && (
                      <p className="mt-1 text-sm text-red-600">{errors.travelers}</p>
                    )}
                  </div>
                </div>

                {/* Document Upload */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <Upload className="h-5 w-5 text-sky-500" />
                    <span>Verification</span>
                  </h3>
                  
                  <div>
                    <label htmlFor="document" className="block text-sm font-medium text-gray-700 mb-2">
                      Upload ID or Payment Proof (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-sky-400 transition-colors duration-200">
                      <input
                        type="file"
                        id="document"
                        name="document"
                        onChange={handleFileChange}
                        accept="image/*,.pdf"
                        className="hidden"
                      />
                      <label
                        htmlFor="document"
                        className="cursor-pointer flex flex-col items-center space-y-2"
                      >
                        <Upload className="h-8 w-8 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {formData.document ? formData.document.name : 'Click to upload or drag and drop'}
                        </span>
                        <span className="text-xs text-gray-400">PNG, JPG, PDF up to 10MB</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="pt-6 border-t border-gray-200">
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                    <MessageSquare className="h-4 w-4 text-sky-500" />
                    <span>Additional Notes (Optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200"
                    placeholder="Any special requests or questions about your trip?"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <CreditCard className="h-5 w-5" />
                        <span>Get My Payless Card</span>
                      </div>
                    )}
                  </button>
                  
                  <p className="text-center text-sm text-gray-500 mt-4">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;