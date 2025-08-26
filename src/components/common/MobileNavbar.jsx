"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Home, LayoutGrid, Info, Mail } from "lucide-react";

// The main component for the mobile navigation bar
export default function MobileNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Effect to handle hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide if scrolling down, show if scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to prevent scrolling when the service menu is open
  useEffect(() => {
    if (isServicesOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isServicesOpen]);
  
  const toggleServices = () => {
      setIsServicesOpen(prev => !prev);
  }

  // Define the service links to be reused
  const serviceLinks = [
    { href: "/services/privateEvents", label: "Private Events" },
    { href: "/services/restaurantHotelValet", label: "Restaurant & Hotel Valet" },
    { href: "/services/corporateFunctions", label: "Corporate Functions" },
    { href: "/services/specialVenues", label: "Special Venues" },
  ];

  return (
    <>
      {/* Services Drop-up Menu and Backdrop */}
      <AnimatePresence>
        {isServicesOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsServicesOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            {/* Menu */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed bottom-24 left-4 right-4 bg-white p-6 rounded-2xl shadow-2xl z-50 md:hidden"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4">Our Services</h3>
              <div className="flex flex-col space-y-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsServicesOpen(false)}
                    className="text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Navigation Bar */}
      <motion.div
        className="fixed bottom-4 left-4 right-4 h-16 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg z-50 flex items-center justify-around md:hidden"
        animate={{ y: isVisible ? 0 : 100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <NavItem icon={Home} label="Home" href="/" />
        <NavItem
          icon={LayoutGrid}
          label="Services"
          onClick={toggleServices}
          isActive={isServicesOpen}
        />
        <NavItem icon={Info} label="About" href="/about" />
        <NavItem icon={Mail} label="Contact" href="/contact" />
      </motion.div>
    </>
  );
}

// A reusable component for each navigation item
const NavItem = ({ icon: Icon, label, href, onClick, isActive = false }) => {
  const content = (
    <div
      className={`flex flex-col items-center space-y-1 transition-colors duration-200 ${
        isActive ? "text-amber-500" : "text-gray-600 hover:text-amber-600"
      }`}
    >
      <Icon className="w-6 h-6" />
      <span className="text-xs font-medium">{label}</span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="p-2">
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="p-2">
      {content}
    </button>
  );
};