"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Flag, Target, Heart, ArrowDown } from "lucide-react";






// --- Data for the page ---
const foundersData = [
  {
    name: "Shamim Hossain",
    title: "Founder",
    bio: "Shamim Hossain is the foundational Founder who provided the original spark and core ethos for the company. His profound understanding of the service industry and his unwavering commitment to integrity laid the essential groundwork for our success. Today, Shamim serves as a guiding mentor, ensuring the company's growth and innovation remain true to the founding principles of reliability and absolute professionalism",
    image: "/founders/owner.png", 
  },
  {
    name: "Rahim Shaikh",
    title: "CEO & Co-Founder",
    bio: "Rahim Shaikh, our CEO & Co-Founder, is the strategic mind and visionary leader of the company. Drawing from deep experience in the luxury hospitality sector, he identified a critical gap in the market for a valet service that was not just a utility, but a true luxury experience. His leadership is centered on strategic growth, brand innovation, and cultivating a company culture where every team member is an ambassador for excellence.",
    image: "/founders/ceo.jpg", 
  },
  {
    name: "Saeprasad Chodankar",
    title: "General Manager & Co-Founder",
    bio: "Saeprasad Chodankar, our General Manager & Co-Founder, is the expert architect of our day-to-day operations. With a meticulous eye for logistics and a passion for team development, he is responsible for upholding the impeccable standards our clients expect. Saeprasad personally oversees the rigorous training programs that empower our valets, ensuring that every event, big or small, runs with military-grade precision and a human touch.",
    image: "/founders/general-manager.jpg", 
  },
];

const timelineData = [
  { year: "2015", title: "The Spark of an Idea", description: "Observing a gap in the market, our founders envisioned a valet service defined not just by parking, but by creating an exceptional first impression.", icon: Flag },
  { year: "2016", title: "First Valet Event", description: "We launched with a 50-person charity gala, proving our model of efficiency and elegance. The positive feedback was immediate.", icon: Users },
  { year: "2019", title: "Expanding to Hospitality", description: "Our reputation for excellence led to our first partnership with a luxury hotel, marking our expansion into full-time hospitality solutions.", icon: Heart },
  { year: "2023", title: "A New Standard of Service", description: "Today, we stand as an industry leader, trusted by premier brands and planners to deliver an unparalleled arrival experience.", icon: Target },
];

// --- Reusable Animated Components ---
const SectionHeader = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const TimelineItem = ({ item, index }) => {
  const isOdd = index % 2 !== 0;
  return (
    <div className={`flex items-center w-full my-4 md:my-0 ${isOdd ? 'md:justify-end' : 'md:justify-start'}`}>
      <motion.div
        className="w-full md:w-5/12 p-6 bg-white/50 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg"
        initial={{ opacity: 0, x: isOdd ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500 mb-1">{item.year}</p>
        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
        <p className="text-slate-300 text-sm">{item.description}</p>
      </motion.div>
    </div>
  );
};

// --- Main Page Component ---
export default function AboutClient() {
  // Parallax scroll for the hero background
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="bg-slate-900 text-white">
      {/* Immersive Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y }} // Apply parallax effect
        >
          <Image
            src="/valet-service.jpg" // A dark, high-quality, professional image
            layout="fill"
            objectFit="cover"
            alt="Premium valet service background"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
        
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          
          <p className="text-amber-400 font-semibold mb-2">Our Genesis</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Crafting the First Impression
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
            We believe the experience of an event begins the moment you arrive. This is our story.
          </p>
        </motion.div>

        <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            initial={{ y: 0, opacity: 0.7 }}
            animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        >
            <ArrowDown className="w-6 h-6"/>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-24 md:py-32 px-4 bg-slate-100 text-slate-800">
        <div className="max-w-4xl mx-auto text-center">
            <SectionHeader>
              <Image src="/icons/logo.svg" width={250} height={250} alt="Logo" className="mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    More Than Just Parking.<br/> It&apos;s <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">Peace of Mind.</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Our journey started with a simple, yet powerful, observation: the valet experience was broken. It was a utility, not an extension of the event&apos;s hospitality. We saw an opportunity to change that. We set out to build a service founded on trust, powered by technology, and delivered with a human touch, ensuring every guest feels valued from the curb to the car and back again.
                </p>
            </SectionHeader>
        </div>
      </section>

      {/* Founders Section - Asymmetrical Layout */}
      <section className="py-24 md:py-32 px-4 bg-white text-slate-800 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <SectionHeader>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold">The Visionaries</h2>
              <p className="mt-3 text-lg text-slate-600">The driving force behind our commitment to excellence.</p>
            </div>
          </SectionHeader>

          <div className="space-y-20">
            {foundersData.map((founder, index) => (
              <motion.div
                key={founder.name}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className={`relative h-96 rounded-2xl overflow-hidden ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <Image src={founder.image} layout="fill" objectFit="cover" style={{ objectPosition:  "top" }} alt={`Portrait of ${founder.name}`} />
                </div>
                <div className={`text-center md:text-left ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <p className="text-amber-600 font-semibold">{founder.title}</p>
                  <h3 className="text-3xl font-bold my-2">{founder.name}</h3>
                  <p className="text-slate-600 leading-relaxed">{founder.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    

    </div>
  );
}