import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold italic">{companyInfo.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {companyInfo.tagline}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting websites and digital marketing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-teal-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-teal-400">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Website Design</li>
              <li>Digital Marketing</li>
              <li>Brand Identity</li>
              <li>Print Design</li>
              <li>Corporate Gifting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-teal-400">Contact Us</h4>
            <div className="space-y-3">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center space-x-2 text-gray-400 hover:text-teal-400 transition-colors text-sm group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{companyInfo.phone}</span>
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center space-x-2 text-gray-400 hover:text-teal-400 transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{companyInfo.email}</span>
              </a>
              <a
                href={`https://${companyInfo.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-teal-400 transition-colors text-sm group"
              >
                <Globe className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{companyInfo.website}</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/theinkdesigns?igsh=Y3pmczQ4OTI1Mnhl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

