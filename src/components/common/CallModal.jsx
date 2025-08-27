'use client';

import { motion, useAnimation } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export default function CallModal({ isOpen, onClose }) {
  const controls = useAnimation();
  const [isCalling, setIsCalling] = useState(false);

  if (!isOpen) return null;

  const handleSwipe = async (_, info) => {
    if (info.offset.x > 180) { // ✅ swipe far enough
      setIsCalling(true);
      // ✅ trigger phone call
      window.location.href = "tel:+971543308944"; // replace with your number
      setTimeout(() => {
        onClose();
        setIsCalling(false);
      }, 500); // half a second delay for smooth animation
    } else {
      // reset position
      controls.start({ x: 0 });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md relative overflow-hidden">
        
        {/* Close button */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-[#005B70]">Call Us Now</h2>
          <p className="text-gray-600">Swipe the button to start the call</p>

          {/* Swipe container */}
          <div className="relative w-full bg-gray-200 rounded-full h-14 overflow-hidden flex items-center">
            {/* draggable phone button */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 260 }} // ✅ max swipe distance
              dragElastic={0.1}
              onDragEnd={handleSwipe}
              animate={controls}
              className="absolute left-0 top-0 h-14 w-14 bg-[#EF522D] rounded-full flex items-center justify-center text-white shadow-md cursor-pointer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
            </motion.div>
            <span className="w-full text-center text-gray-500 text-sm">
              Swipe to Call →
            </span>
          </div>

          {isCalling && (
            <p className="text-green-600 font-semibold mt-3 animate-pulse">
              Connecting...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
