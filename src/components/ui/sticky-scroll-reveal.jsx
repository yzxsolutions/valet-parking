"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#fafafa",
    "#fafafa", 
    "#fafafa",
    "#fafafa",
    "#fafafa",
    "#fafafa",
  ];

  // Professional gradient backgrounds
  const linearGradients = [
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  // Navigation functions
  const goToPrevious = () => {
    if (activeCard > 0) {
      setActiveCard(activeCard - 1);
      // Scroll to the previous section
      const element = ref.current;
      if (element) {
        const scrollPosition = ((activeCard - 1) / cardLength) * element.scrollHeight;
        element.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      }
    }
  };

  const goToNext = () => {
    if (activeCard < cardLength - 1) {
      setActiveCard(activeCard + 1);
      // Scroll to the next section
      const element = ref.current;
      if (element) {
        const scrollPosition = ((activeCard + 1) / cardLength) * element.scrollHeight;
        element.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative scrollbar-hide flex h-[30rem] lg:h-[32rem] w-full justify-center lg:justify-between space-x-0 lg:space-x-12 overflow-y-auto rounded-xl p-6 lg:p-12"
      ref={ref}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Content Section */}
      <div className="relative flex items-start w-full lg:w-1/2 px-2 lg:px-6">
        <div className="max-w-full lg:max-w-2xl w-full">
          {/* Progress Indicator with Navigation */}
          <div className=" lg:flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="flex space-x-2">
                {content.map((_, index) => (
                  <motion.div
                    key={index}
                    className={cn(
                      "h-1 rounded-full transition-all duration-500 cursor-pointer",
                      index === activeCard ? "bg-[#EF522D] w-8" : "bg-gray-300 w-4"
                    )}
                    animate={{
                      backgroundColor: index === activeCard ? "#EF522D" : "#d1d5db",
                      width: index === activeCard ? "32px" : "16px",
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    onClick={() => setActiveCard(index)}
                  />
                ))}
              </div>
              <span className="ml-4 text-sm font-medium text-gray-500">
                {String(activeCard + 1).padStart(2, '0')} / {String(content.length).padStart(2, '0')}
              </span>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center space-x-2">
              <motion.button
                onClick={goToPrevious}
                disabled={activeCard === 0}
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300",
                  activeCard === 0 
                    ? "border-gray-300 text-gray-300 cursor-not-allowed" 
                    : "border-[#EF522D] text-[#EF522D] hover:bg-[#EF522D] hover:text-white"
                )}
                whileHover={activeCard > 0 ? { scale: 1.1 } : {}}
                whileTap={activeCard > 0 ? { scale: 0.95 } : {}}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                onClick={goToNext}
                disabled={activeCard === cardLength - 1}
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300",
                  activeCard === cardLength - 1 
                    ? "border-gray-300 text-gray-300 cursor-not-allowed" 
                    : "border-[#EF522D] text-[#EF522D] hover:bg-[#EF522D] hover:text-white"
                )}
                whileHover={activeCard < cardLength - 1 ? { scale: 1.1 } : {}}
                whileTap={activeCard < cardLength - 1 ? { scale: 0.95 } : {}}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </div>

          {content.map((item, index) => (
            <div key={item.title + index} className="my-16 lg:my-20">
              {/* Step Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.2,
                  scale: activeCard === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex items-center mb-6"
              >
                <div className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold transition-all duration-500",
                  activeCard === index 
                    ? "bg-[#EF522D] text-white shadow-lg" 
                    : "bg-gray-200 text-gray-400"
                )}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                {/* Mobile Navigation */}
     
    </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  y: activeCard === index ? 0 : 10,
                }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={cn(
                  "text-2xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight transition-all duration-500",
                  activeCard === index ? "text-gray-900" : "text-gray-400"
                )}
              >
                {item.title}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.25,
                  y: activeCard === index ? 0 : 10,
                }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={cn(
                  "text-base lg:text-lg max-w-full lg:max-w-2xl leading-relaxed lg:leading-loose transition-all duration-500",
                  activeCard === index ? "text-gray-700" : "text-gray-400"
                )}
              >
                {item.description}
              </motion.p>

              {/* Decorative Line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: activeCard === index ? "60px" : "0px",
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-[#EF522D] mt-6 lg:mt-8 rounded-full"
              />
            </div>
          ))}
          <div className="h-20 lg:h-40" />
        </div>
      </div>

      {/* Sticky Content Section */}
      <motion.div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-8 lg:top-10 hidden lg:block h-[28rem] lg:h-[32rem] w-1/2 overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-100",
          contentClassName
        )}
       
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full w-full"
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </motion.div>

      {/* Mobile Content Display */}
      <div className="lg:hidden mt-8 w-full">
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden shadow-lg border border-gray-200"
          style={{ background: backgroundGradient }}
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </div>
    </motion.div>
  );
};