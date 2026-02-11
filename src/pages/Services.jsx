import React, { useState } from 'react';
import { Monitor, TrendingUp, Printer, Palette, Sparkles, Gift, Check } from 'lucide-react';
import { services } from '../data/mock';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const iconMap = {
    Monitor,
    TrendingUp,
    Printer,
    Palette,
    Sparkles,
    Gift
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Our <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive design and marketing solutions tailored to elevate your brand
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className={`mb-20 last:mb-0 ${index > 0 ? 'pt-20 border-t border-gray-200' : ''}`}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image/Icon Side */}
                  <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                      <div className={`relative bg-gradient-to-r ${service.color} rounded-3xl p-12 lg:p-16 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300`}>
                        <Icon className="w-32 h-32 lg:w-40 lg:h-40 text-white animate-float" />
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className={`inline-flex items-center space-x-3 px-4 py-2 bg-gradient-to-r ${service.color} rounded-full text-white font-medium`}>
                      <Icon className="w-5 h-5" />
                      <span>Service #{index + 1}</span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                      {service.title}
                    </h2>

                    <p className="text-xl text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-3 group"
                        >
                          <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300`}>
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Specialized Design <span className="italic text-teal-600">Services</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Logo Design',
              'Business Cards',
              'Letterhead',
              'Flyers',
              'Brochures',
              'Certificates',
              'Posters',
              'ID Cards',
              'Stickers',
              'Catalogues',
              'Bill Books',
              'Product Labels'
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-gray-100 hover:border-teal-500 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-gray-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Bring Your Vision to Life
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-emerald-100">
            Ready to start your project? Contact us today for a free consultation
          </p>
          <a
            href={`https://wa.me/919551727417?text=Hi, I'm interested in your services`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-white text-teal-600 rounded-full font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;

