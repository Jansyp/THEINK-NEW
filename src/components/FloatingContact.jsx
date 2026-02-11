import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { companyInfo } from '../data/mock';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${companyInfo.whatsapp}`, '_blank');
  };

  const handlePhone = () => {
    window.location.href = `tel:${companyInfo.phone}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Contact Options */}
      <div
        className={`flex flex-col space-y-3 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="group flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">WhatsApp</span>
        </button>

        {/* Phone Button */}
        <button
          onClick={handlePhone}
          className="group flex items-center space-x-3 bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5" />
          <span className="text-sm font-medium">Call Now</span>
        </button>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen
            ? 'bg-gray-900 hover:bg-gray-800'
            : 'bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700'
        }`}
        aria-label="Toggle contact options"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Phone className="w-6 h-6 text-white animate-pulse" />
        )}
      </button>
    </div>
  );
};

export default FloatingContact;

