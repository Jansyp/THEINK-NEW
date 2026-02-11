import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, TrendingUp, Printer, Palette, Sparkles, Gift, Play } from 'lucide-react';
import { services, stats } from '../data/mock';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Mouse parallax effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const iconMap = {
    Monitor,
    TrendingUp,
    Printer,
    Palette,
    Sparkles,
    Gift
  };

  // Animated particle component
  const AnimatedParticle = ({ delay, duration, size, color }) => (
    <div
      className="absolute rounded-full opacity-60 animate-float"
      style={{
        width: size,
        height: size,
        background: color,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: delay,
        animationDuration: duration,
      }}
    />
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background & Animations */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source
              src="https://videos.pexels.com/video-files/3209889/3209889-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>
          
          {/* Video Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 via-teal-900/50 to-cyan-900/60 mix-blend-multiply" />
        </div>

        {/* Animated 3D Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating shapes */}
          <div
            className="absolute top-20 left-10 w-96 h-96 rounded-full border-4 border-emerald-400/30 animate-float transform-3d"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
          <div
            className="absolute bottom-20 right-20 w-72 h-72 rounded-full border-4 border-teal-400/30 animate-float-delayed transform-3d"
            style={{
              transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px) rotateX(${mousePosition.y * -0.1}deg) rotateY(${mousePosition.x * -0.1}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
          
          {/* Particle System */}
          {[...Array(20)].map((_, i) => (
            <AnimatedParticle
              key={i}
              delay={`${i * 0.2}s`}
              duration={`${5 + Math.random() * 5}s`}
              size={`${10 + Math.random() * 20}px`}
              color={`linear-gradient(135deg, ${['#10b981', '#14b8a6', '#06b6d4', '#22d3ee'][Math.floor(Math.random() * 4)]}, transparent)`}
            />
          ))}

          {/* Geometric Shapes */}
          <div className="absolute top-1/4 right-1/4 w-40 h-40 border-8 border-cyan-400/20 rotate-45 animate-pulse-slow" />
          <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl animate-float transform rotate-12" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Animated Badge */}
            <div
              className={`inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-medium text-sm border border-white/20 mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}
            >
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Professional Design Studio - Launching Soon</span>
            </div>

            {/* Animated Title */}
            <h1
              className={`text-6xl lg:text-8xl font-bold text-white leading-tight mb-8 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="block italic mb-2">THEINK</span>
              <span className="block italic bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-gradient-x">
                DESIGNS
              </span>
            </h1>

            {/* Animated Subtitle */}
            <p
              className={`text-xl lg:text-3xl text-gray-200 leading-relaxed mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              We design and develop <span className="font-bold text-emerald-400">creative websites</span> to showcase your brand and attract your audience.
            </p>

            {/* Animated Description */}
            <p
              className={`text-lg lg:text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              From stunning websites to complete digital marketing solutions, we bring your vision to life with creativity and innovation.
            </p>

            {/* Animated CTAs */}
            <div
              className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Link
                to="/services"
                className="group px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-110 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-110 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Animated Stats */}
            <div
              className={`grid grid-cols-3 gap-8 mt-20 transition-all duration-1000 delay-900 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {[
                { number: '100+', label: 'Design Projects' },
                { number: '50+', label: 'Happy Clients' },
                { number: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm lg:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full p-2 backdrop-blur-sm">
            <div className="w-2 h-3 bg-white rounded-full animate-scroll mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From websites to corporate gifting, we provide end-to-end creative solutions for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-teal-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Icon with 3D effect */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-6 h-6 text-teal-600" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-teal-600 font-semibold text-lg hover:text-teal-700 transition-colors group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-110 transition-transform duration-300"
              >
                <div className="text-5xl lg:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to <span className="italic text-teal-600">Transform</span> Your Brand?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch with our team today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

