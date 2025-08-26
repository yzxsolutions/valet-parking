'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Users, TrafficCone, Zap, ShieldCheck, CheckCircle, ArrowRight, Briefcase, Clock } from 'lucide-react';

// --- Icon Map ---
// This map translates the string from your JSON into an actual component
const iconMap = {
  Users,
  TrafficCone,
  Zap,
  ShieldCheck,
  Briefcase,
  Clock,
};

// --- Reusable Motion Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// This is your refactored client component
const ServicePageClient = ({ serviceData }) => {
  const { title, overview, heroImage, sections, gallery, cta } = serviceData;

  // Find the specific sections from the data
  const aboutSection = sections.find(s => s.title.includes("Class") || s.title.includes("Tone"));
  const featuresSection = sections.find(s => s.title.includes("Features"));
  const benefitsSection = sections.find(s => s.title.includes("Partner"));

  const FeatureAccordion = ({ features }) => {
    const [activeFeature, setActiveFeature] = useState(0);
    return (
      <div className="space-y-2">
        {features.map((feature, index) => {
          const IconComponent = iconMap[feature.icon]; // Look up the icon here
          const isActive = activeFeature === index;
          return (
            <div key={index} className="border-b border-slate-200 last:border-b-0">
              <button
                onClick={() => setActiveFeature(isActive ? null : index)}
                className="w-full p-4 flex items-center justify-between text-left transition-colors duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg transition-colors duration-300 ${isActive ? 'bg-amber-500 text-white' : 'bg-slate-100 text-amber-600'}`}>
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">{feature.name}</h3>
                </div>
                <motion.div animate={{ rotate: isActive ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-5 h-5 text-slate-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 pr-4 pl-16">
                      <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    );
  };

  const BentoGallery = ({ images }) => (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 h-96 md:h-[500px]">
      <motion.div className="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-lg" whileHover={{ scale: 1.03, zIndex: 10 }} transition={{ duration: 0.3 }}>
        <img src={images[0]?.src} alt={images[0]?.alt} className="w-full h-full object-cover" />
      </motion.div>
      <motion.div className="col-span-2 row-span-1 rounded-xl overflow-hidden shadow-lg" whileHover={{ scale: 1.03, zIndex: 10 }} transition={{ duration: 0.3 }}>
        <img src={images[1]?.src} alt={images[1]?.alt} className="w-full h-full object-cover" />
      </motion.div>
      <motion.div className="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-lg" whileHover={{ scale: 1.03, zIndex: 10 }} transition={{ duration: 0.3 }}>
        <img src={images[2]?.src} alt={images[2]?.alt} className="w-full h-full object-cover" />
      </motion.div>
      <motion.div className="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-lg" whileHover={{ scale: 1.03, zIndex: 10 }} transition={{ duration: 0.3 }}>
        <img src={images[3]?.src} alt={images[3]?.alt} className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white text-center pt-40 px-4">
        <div className="absolute inset-0 bg-slate-900 opacity-60 z-10"></div>
        <img src={heroImage.src} alt={`${title} hero image`} className="absolute inset-0 w-full h-full object-cover"/>
        <motion.div className="relative z-20" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{title}</h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-light">{overview}</p>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-4 space-y-24 py-24">
        {aboutSection && (
          <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="pr-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">{aboutSection.title}</h2>
                <div className="w-16 h-1 bg-amber-500 mb-6"></div>
                <p className="text-slate-600 text-lg leading-relaxed">{aboutSection.content}</p>
              </div>
              <motion.div className="rounded-xl overflow-hidden shadow-2xl shadow-slate-200" whileHover={{ scale: 1.03, y: -5 }} transition={{ duration: 0.3 }}>
                <img src={aboutSection.image} alt={aboutSection.title} className="w-full h-96 object-cover" />
              </motion.div>
            </div>
          </motion.section>
        )}

        {featuresSection && (
          <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">{featuresSection.title}</h2>
                  <div className="w-16 h-1 bg-amber-500 mb-6"></div>
                  <p className="text-slate-600 text-lg">Our service is built on a foundation of excellence, ensuring every detail is handled perfectly.</p>
              </div>
              <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-lg shadow-slate-100">
                  <FeatureAccordion features={featuresSection.features} />
              </div>
            </div>
          </motion.section>
        )}

        {benefitsSection && (
          <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">{benefitsSection.title}</h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefitsSection.benefits.map((benefit, index) => (
                <motion.div key={index} className="bg-white p-6 rounded-xl shadow-lg shadow-slate-100 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15 }} viewport={{ once: true }} whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(100, 116, 139, 0.1)' }}>
                  <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800 text-lg mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {cta && (
            <motion.section className="bg-slate-800 rounded-2xl p-12 text-center" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-white mb-4">{cta.headline}</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">{cta.subtext}</p>
            <motion.button className="inline-flex items-center space-x-2 bg-amber-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg" whileHover={{ scale: 1.05, backgroundColor: '#f59e0b' }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
              <span>{cta.buttonText}</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default ServicePageClient;