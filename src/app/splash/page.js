"use client";
import React,
{
  useState,
  useEffect
}
from "react";
import {
  motion,
  AnimatePresence
}
from "framer-motion";
import Image from "next/image";

// --- Configuration for Your New Logo Layout ---
// IMPORTANT: Adjust the top, left, width, and height values for a perfect fit.
// const logoParts = [
  
//   {
//     src: "/company/l3.png",
//     animation: { type: 'slide-right', delay: 0.5 },
//     style: { top: '0px', left: '10px', width: '480px', height: '400px' }
//   },

  
//   {
//     src: "/company/l2.png",
//     animation: { type: 'slide-down', delay: 0.8 },
//     style: { top: '100px', left: '180px', width: '420px', height: '200px' }
//   },

  
//   {
//     src: "/company/l1.png",
//     animation: { type: 'slide-up', delay: 1.1 },
//     style: { top: '280px', left: '180px', width: '420px', height: '160px' }
//   },
// ];



const logoParts = [
  
  {
    src: "/company/l3.png",
    animation: { type: 'slide-right', delay: 0.5 },
    style: { top: '0px', left: '0px', width: '480px', height: '400px' }
  },

  
  {
    src: "/company/l2.png",
    animation: { type: 'slide-down', delay: 0.8 },
    style: { top: '0px', left: '0px', width: '420px', height: '200px' }
  },

  
  {
    src: "/company/l1.png",
    animation: { type: 'slide-up', delay: 1.1 },
    style: { top: '0px', left: '0px', width: '420px', height: '160px' }
  },
];



// --- Pre-defined Animation Styles ---
const animationVariants = {
  'scale': { initial: { opacity: 0, scale: 0.7 }, animate: { opacity: 1, scale: 1 } },
  'slide-left': { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
  'slide-right': { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
  'slide-up': { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
  'slide-down': { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } },
  'fade': { initial: { opacity: 0 }, animate: { opacity: 1 } },
};

// --- Main Splash Screen Component ---
export default function SplashScreen({ onFinished }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set a timer for 5 seconds (5000 milliseconds)
    const timer = setTimeout(() => {
      setIsVisible(false); // This will trigger the fade-out animation
      if (onFinished) onFinished();
    }, 40000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, [onFinished]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center w-screen min-h-screen bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* This is your "CANVAS". Adjust its size if needed. */}
          <div className="relative ">
            {logoParts.map((part, index) => {
              const variant = animationVariants[part.animation.type] || animationVariants['fade'];
              return (
                <motion.div
                  key={index}
                  style={{
                    position: 'absolute',
                    ...part.style // Apply the exact position and size from the config
                  }}
                  initial={variant.initial}
                  animate={variant.animate}
                  transition={{ duration: 0.9, ease: "circOut", delay: part.animation.delay }}
                >
                  <Image
                    src={part.src}
                    layout="fill"
                    objectFit="contain"
                    alt={`Logo part ${index + 1}`}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}