'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PlaceholdersAndVanishInput } from '../ui/placeholders-and-vanish-input';

export default function WhyChooseUsSection() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.1 7 14 7.9 14 9C14 10.1 13.1 11 12 11C10.9 11 10 10.1 10 9C10 7.9 10.9 7 12 7ZM18 17H6V15.5C6 13.56 9.97 12.5 12 12.5C14.03 12.5 18 13.56 18 15.5V17Z"/>
        </svg>
      ),
      title: "Fully Insured & Licensed",
      description: "Complete peace of mind with comprehensive insurance coverage and professional licensing for all our valet attendants."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
        </svg>
      ),
      title: "24/7 Service Available",
      description: "Round-the-clock valet service to accommodate your schedule, whether it's early morning or late night events."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H9V12H7V10ZM11 10H13V12H11V10ZM15 10H17V12H15V10Z"/>
        </svg>
      ),
      title: "Advanced Technology",
      description: "State-of-the-art tracking systems and digital key management ensure your vehicle's security and quick retrieval."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z"/>
        </svg>
      ),
      title: "Detailed Documentation",
      description: "Every handover is documented with timestamps and vehicle condition notes for complete transparency and accountability."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
        </svg>
      ),
      title: "Premium Experience",
      description: "White-glove service with professionally trained staff who treat every guest with the highest level of courtesy and respect."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
        </svg>
      ),
      title: "99.9% Satisfaction Rate",
      description: "Proven track record of excellence with thousands of satisfied customers and virtually zero incidents over 15+ years."
    }
  ];


  const placeholders = [
    "Enter your phone number",
    "Ready for a premium valet experience?",
    "Please provide your contact",
    "24/7 valet service at your fingertips",
    "Fully insured & licensed",
  ];
 
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#EF522D] opacity-5 rounded-full -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#005B70] opacity-5 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-[#EF522D] bg-opacity-10 rounded-full text-[#EF522D] text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-[#EF522D] rounded-full mr-2 animate-pulse"></span>
            Why Choose Us
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The <span className="text-[#EF522D]">Premier Choice</span><br />
            for Valet Services
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the difference that comes with choosing UAE's most trusted valet parking service. 
            Here's what sets us apart from the competition.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#EF522D]/20"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#EF522D] to-[#d4441f] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#005B70] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-2 lg:p-2 text-center overflow-hidden"
        >
          
            
            <div className="h-[30rem] flex flex-col justify-center  items-center px-4">
      <h3 className="text-3xl lg:text-4xl font-bold text-gray-500 mb-4">
              Ready to Experience <span className="text-[#EF522D]">Premium</span> Service?
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Get an instant quote and book your valet service today. 
              Enter your phone number and we'll call you within 5 minutes.
            </p>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <div className="flex flex-wrap justify-center items-center gap-6 mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2 text-black">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"/>
                </svg>
                <span className="text-sm">100% Secure</span>
              </div>
              <div className="flex items-center gap-2 text-black">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
                </svg>
                <span className="text-sm">5 Min Response</span>
              </div>
              <div className="flex items-center gap-2 text-black">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span className="text-sm">No Hidden Fees</span>
              </div>
            </div>
    </div>

            {/* Trust Indicators */}
            
        </motion.div>
      </div>
    </section>
  );
}