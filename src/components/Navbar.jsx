import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-2xl border-b border-teal-100/50' 
          : 'bg-gradient-to-b from-white/60 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Premium Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            {/* Logo Icon */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            
            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-bold italic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-teal-800 to-emerald-800 group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300">
                THEINK
              </span>
              <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                Designs
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 group ${
                  isActive(link.path)
                    ? 'text-teal-600'
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                {/* Background highlight on hover */}
                <span className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  isActive(link.path) 
                    ? 'bg-gradient-to-r from-emerald-50 to-teal-50 scale-100' 
                    : 'bg-gradient-to-r from-emerald-50 to-teal-50 scale-0 group-hover:scale-100'
                }`} />
                
                {/* Text */}
                <span className="relative z-10">{link.label}</span>
                
                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 transition-all duration-300 ${
                    isActive(link.path) ? 'w-8' : 'w-0 group-hover:w-8'
                  }`}
                />
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-4 group relative px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold text-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Animated gradient overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <span className="relative flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 hover:from-emerald-50 hover:to-teal-50 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
            aria-label="Toggle menu"
          >
            <div className="relative">
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-emerald-600 animate-in spin-in-180 duration-300" />
              ) : (
                <Menu className="w-6 h-6 text-emerald-600 animate-in fade-in duration-300" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Premium Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="bg-white/95 backdrop-blur-2xl border-t border-gray-100 shadow-2xl">
          <div className="container mx-auto px-4 py-6 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-300 transform hover:translate-x-2 ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-emerald-50 to-teal-50 text-teal-600 shadow-md'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-teal-600'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <div className="flex items-center justify-between">
                  <span>{link.label}</span>
                  {isActive(link.path) && (
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 animate-pulse" />
                  )}
                </div>
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-semibold text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


