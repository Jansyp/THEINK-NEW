import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { companyInfo } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = '9551727417';
    const message = [
      'New Contact Form Enquiry',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'N/A'}`,
      `Service: ${formData.service}`,
      `Message: ${formData.message}`
    ].join('\n');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    toast({
      title: "Message Sent!",
      description: "Opening WhatsApp with your enquiry details.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 reveal-3d">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Get In <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have a project in mind? Let's discuss how we can help bring your vision to life
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 border-2 border-gray-100 shadow-xl tilt-card">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="website">Website Design & Development</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="print">Print Design Services</option>
                    <option value="brand">Brand Identity Design</option>
                    <option value="specialized">Specialized Design</option>
                    <option value="corporate">Corporate Gifting</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Get in touch with us today. We're here to help you with all your design and marketing needs.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 tilt-card"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-teal-600 font-medium">{companyInfo.phone}</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 tilt-card"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-teal-600 font-medium">{companyInfo.email}</p>
                  </div>
                </a>

                {/* Website */}
                <a
                  href={`https://${companyInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 tilt-card"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Website</h3>
                    <p className="text-teal-600 font-medium">{companyInfo.website}</p>
                  </div>
                </a>
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-4 pt-8">
                <h3 className="text-xl font-bold text-gray-900">Or Contact Us Directly</h3>
                
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 w-full px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center justify-center space-x-3 w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl h-96 flex items-center justify-center">
            <div className="text-center text-white">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Visit Our Studio</h3>
              <p className="text-emerald-100">Contact us for our location details</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

