'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Trigger the initial animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Handle scroll events
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate car position based on scroll
  const getCarTransform = () => {
    const maxScroll = 1000; // Adjust this value to control when the animation completes
    const scrollProgress = Math.min(scrollPosition / maxScroll, 1);
    
    if (!isLoaded) {
      return 'translateX(-100vw)'; // Start from left off-screen
    }
    
    if (scrollPosition === 0) {
      return 'translateX(0)'; // Center position
    }
    
    // Move to right as user scrolls
    const rightOffset = scrollProgress * 100; // Adjust 50 to control how far right it goes
    return `translateX(${rightOffset}vw)`;
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen bg-[#ffffff] overflow-hidden">
      {/* Header */}
      <header className="flex  justify-between items-center px-8 md:px-12 py-6">
        <div className="flex items-center md:justify-between justify-center">
          <Image
            src="/icons/logo.svg"
            alt="Logo"
            width={200}
            height={200}
            className="flex-shrink-0 md:absolute md:top-10 md:left-10"
          />
        </div>
        
        <button className="bg-[#EF522D] hidden text-white px-6 py-3 rounded-full md:flex items-center gap-2 hover:bg-[#d4441f] transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          Call Us
        </button>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 pt-16 pb-8">
        <div className="text-center mt-8 max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-[#424242]">The </span>
            <span className="text-[#EF522D]">Trusted</span>
            <span className="text-[#424242]"> Name in</span>
          </h2>
          
          <h3 className="text-4xl md:text-7xl font-bold text-[#005B70] mb-12">
            Valet Parking
          </h3>
          
          <p className="text-[#424242] text-lg md:text-md max-w-3xl mx-auto mb-12 leading-relaxed">
            We provide more than just parking. We deliver a premier arrival and departure 
            experience with fully insured, professionally trained attendants dedicated to making 
            every guest feel valued and secure.
          </p>
          
          <button className="border-2 border-[#EF522D] text-[#EF522D] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#EF522D] hover:text-white transition-all duration-300">
            See Our Services
          </button>
        </div>
      </div>

      {/* Car Image - Bottom of the hero */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none">
        <div 
          className="relative w-full max-w-5xl transition-transform duration-1000 ease-out"
          style={{
            transform: getCarTransform()
          }}
        >
          <Image
            src="/image/car.png"
            alt="Luxury car for valet parking service"
            width={800}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}