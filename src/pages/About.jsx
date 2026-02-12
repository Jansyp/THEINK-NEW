import React from 'react';
import { Award, Users, Target, Heart, Star } from 'lucide-react';
import { testimonials, stats } from '../data/mock';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 reveal-3d">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              About <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">THEINK DESIGNS</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your trusted partner for creative design and digital marketing solutions
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Our <span className="italic text-teal-600">Story</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                THEINK DESIGNS is a creative design studio passionate about transforming businesses through exceptional design and strategic marketing solutions.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                We specialize in crafting unique brand identities, developing stunning websites, and providing comprehensive digital marketing services that help businesses stand out in today's competitive market.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                From concept to execution, we work closely with our clients to understand their vision and deliver solutions that exceed expectations.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl blur-2xl opacity-30 animate-pulse-slow" />
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHw0fHxkZXNpZ24lMjBzdHVkaW98ZW58MHx8fHwxNzcwNzk1MTkyfDA&ixlib=rb-4.1.0&q=85"
                alt="Our Studio"
                className="relative rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="italic text-teal-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We deliver nothing but the best quality in every project',
                color: 'from-emerald-400 to-teal-500'
              },
              {
                icon: Users,
                title: 'Collaboration',
                description: 'We work closely with clients to bring their vision to life',
                color: 'from-teal-400 to-cyan-500'
              },
              {
                icon: Target,
                title: 'Results-Driven',
                description: 'We focus on delivering measurable results and ROI',
                color: 'from-green-400 to-emerald-500'
              },
              {
                icon: Heart,
                title: 'Passion',
                description: 'We love what we do and it shows in our work',
                color: 'from-lime-400 to-green-500'
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 tilt-card"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl mx-auto mb-6 flex items-center justify-center transform hover:scale-110 hover:rotate-6 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-emerald-100">
              Numbers that speak for themselves
            </p>
          </div>

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

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our <span className="italic text-teal-600">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-teal-500 hover:shadow-2xl transition-all duration-300 tilt-card"
              >
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch today!
          </p>
          <a
            href={`https://wa.me/919551727417?text=Hi, I'd like to know more about your services`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;

