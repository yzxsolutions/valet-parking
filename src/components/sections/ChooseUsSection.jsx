'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Users, Clock, Award, X, Car, CheckCircle, Star } from 'lucide-react';
import { PlaceholdersAndVanishInput } from '../ui/placeholders-and-vanish-input';
import Link from 'next/link';

const ChooseUs = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Premium Security",
      subtitle: "Your Vehicle is Safe",
      icon: Shield,
      color: "bg-gradient-to-br from-red-500 to-red-600",
      description: "State-of-the-art security systems and professional staff ensure your vehicle's safety.",
      details: {
        features: [
          "24/7 CCTV monitoring",
          "Secure covered parking",
          "Licensed and bonded staff",
          "GPS tracking system",
          "Insurance coverage up to $100k"
        ],
        stats: "99.9% Security Rating"
      }
    },
    {
      id: 2,
      title: "Personalized Service",
      subtitle: "Tailored for You",
      icon: Users,
      color: "bg-gradient-to-br from-blue-600 to-blue-700",
      description: "Every service is customized to meet your specific needs and preferences.",
      details: {
        features: [
          "Personal valet attendant",
          "Custom pickup times",
          "Vehicle maintenance checks",
          "Interior climate control",
          "Preferred parking spots"
        ],
        stats: "100% Customer Satisfaction"
      }
    },
    {
      id: 3,
      title: "Lightning Fast",
      subtitle: "Quick & Efficient",
      icon: Clock,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      description: "Average pickup time under 3 minutes with our efficient system.",
      details: {
        features: [
          "60-second drop-off",
          "3-minute pickup guarantee",
          "Mobile app notifications",
          "Real-time vehicle tracking",
          "Express lane service"
        ],
        stats: "2.5 Min Average Response"
      }
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 100
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      y: 100,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-[#ffffff] py-20 px-4">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={titleVariants}
        >
          <motion.p 
            className="text-red-500 font-semibold text-lg tracking-widest mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            W H Y &nbsp;&nbsp; C H O O S E &nbsp;&nbsp; U S
          </motion.p>
          <motion.h1 
            className="text-6xl md:text-5xl font-bold text-slate-800 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.7,
              type: "spring",
              stiffness: 100 
            }}
          >
             
            The <span className="text-[#EF522D]">Premier Choice</span><br />
            for Valet Services
          
          </motion.h1>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="relative group cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setSelectedCard(card)}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-slate-200/50">
                {/* Card Number */}
                <div className="absolute -top-4 left-8">
                  <div className={`${card.color} text-white w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg`}>
                    <card.icon size={20} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="pt-8">
                  <div className="text-right mb-4">
                    <span className="text-3xl font-bold text-slate-300">
                      0{card.id}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {card.title}
                  </h3>
                  
                  <p className="text-slate-500 font-medium mb-4">
                    {card.subtitle}
                  </p>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                  
                  <motion.div 
                    className="mt-6 flex items-center text-blue-600 font-semibold"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <motion.span 
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCard && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4"
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setSelectedCard(null)}
              >
                {/* Modal Content */}
                <motion.div
                  className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="absolute top-6 right-6 bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-colors"
                  >
                    <X size={24} className="text-slate-600" />
                  </button>

                  {/* Modal Header */}
                  <div className="flex items-center mb-8">
                    <div className={`${selectedCard.color} text-white w-16 h-16 rounded-3xl flex items-center justify-center shadow-lg mr-6`}>
                      <selectedCard.icon size={28} />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-slate-800 mb-2">
                        {selectedCard.title}
                      </h2>
                      <p className="text-slate-500 text-lg">
                        {selectedCard.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                      <Star className="mr-3 text-yellow-500" size={24} />
                      Premium Features
                    </h3>
                    <div className="grid gap-4">
                      {selectedCard.details.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center bg-slate-50 rounded-xl p-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                          <span className="text-slate-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Award className="text-blue-600 mr-2" size={24} />
                      <span className="text-slate-600 font-medium">Performance Stats</span>
                    </div>
                    <div className="text-3xl font-bold text-blue-600">
                      {selectedCard.details.stats}
                    </div>
                  </div>

                  {/* CTA Button */}
                 <Link href="/contact">
                  <motion.button 
                    className="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Our Valet Service
                  </motion.button>
                 </Link>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
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
  );
};

export default ChooseUs;