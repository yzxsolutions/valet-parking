"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import CountUp from "../ui/CountUp";
import { motion } from "framer-motion";

// Content remains the same, but we'll render it differently on mobile.
const content = [
  {
    title: "Effortless Arrival",
    description:
      "Experience our curbside convenience. Our professional attendant greets you warmly, ensuring your experience starts smoothly and stress-free.",
    imageSrc: "/slide/1.jpg",
    alt: "Valet welcoming a guest",
  },
  {
    title: "White-Glove Assistance",
    description:
      "Our highly-trained staff provides first-class, courteous service, from opening your door to helping you exit your vehicle comfortably.",
    imageSrc: "/slide/2.jpg",
    alt: "Valet assisting a guest out of the car",
  },
  {
    title: "Secure Vehicle Handover",
    description:
      "Hand over your keys with confidence. We treat every vehicle with the utmost care, ensuring a secure and seamless transition.",
    imageSrc: "/slide/3.jpg",
    alt: "Guest handing over car keys to the valet",
  },
  {
    title: "Safe & Attentive Parking",
    description:
      "Our valet takes full responsibility for your vehicle, parking it carefully in our secure, designated area with 24/7 surveillance.",
    imageSrc: "/slide/4.jpg",
    alt: "Valet carefully parking the car",
  },
  {
    title: "Swift Vehicle Retrieval",
    description:
      "When you're ready to depart, simply call or text our retrieval line. Our efficient system ensures minimal wait times.",
    imageSrc: "/slide/5.jpg",
    alt: "Valet returning car to guest",
  },
  {
    title: "Premium Departure Experience",
    description:
      "Your experience concludes as excellently as it began, ensuring your departure is as smooth as your arrival.",
    imageSrc: "/slide/6.jpg",
    alt: "Guest driving away satisfied",
  },
];

// Reformat the content for the StickyScroll component specifically
const stickyScrollContent = content.map((item) => ({
  title: item.title,
  description: item.description,
  content: (
    <div className="flex h-full w-full items-center justify-center rounded-lg overflow-hidden">
      <Image
        src={item.imageSrc}
        width={400}
        height={400}
        className="h-full w-full object-cover"
        alt={item.alt}
      />
    </div>
  ),
}));

// A new component designed specifically for mobile layout
const MobileProcessCard = ({ item, index }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col mb-8"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <div className="relative w-full h-56">
      <Image
        src={item.imageSrc}
        alt={item.alt}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
      <p className="text-gray-600 leading-relaxed">{item.description}</p>
    </div>
  </motion.div>
);

export default function ProcessSection() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-slate-50">
      {/* Hero Header Section - Adjusted for responsiveness */}
      <div className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-600 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
              Premium Valet Service
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-5 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Seamless <span className="text-amber-500">Process</span>
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A flawless experience from arrival to departure. Discover how our six-step process ensures your complete satisfaction and peace of mind.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-x-6 gap-y-6 sm:gap-x-12 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Stats are now more responsive */}
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-slate-800">
                <CountUp from={0} to={50} duration={2} />+
              </div>
              <div className="text-sm text-slate-500">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-slate-800">
                <CountUp from={0} to={500} duration={2.5} />K+
              </div>
              <div className="text-sm text-slate-500">Cars Parked</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-slate-800">
                <CountUp from={0} to={99.9} decimals={1} duration={3} />%
              </div>
              <div className="text-sm text-slate-500">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-slate-800">24/7</div>
              <div className="text-sm text-slate-500">Service Available</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- CONDITIONAL RENDERING --- */}
      {/* Desktop Version: Sticky Scroll (Visible on md screens and up) */}
      <div className="w-full hidden md:block pb-20">
        <StickyScroll content={stickyScrollContent} />
      </div>

      {/* Mobile Version: Vertical Cards (Visible below md screens) */}
      <div className="w-full md:hidden px-4 pb-20">
        {content.map((item, index) => (
          <MobileProcessCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}