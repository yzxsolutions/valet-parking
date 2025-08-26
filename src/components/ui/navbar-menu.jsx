"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Animation settings for the dropdown menu
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// A single top-level menu item like "Services" or "Pricing"
export const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer flex items-center gap-2 text-black hover:opacity-[0.9]" // Text color is now solid black
      >
        {item}

         {children && (
          <img
            src="/icons/right-arrow.svg"
            alt="Dropdown indicator"
            className="w-4 h-4"
          />
        )}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

// The main navigation bar container
export const Menu = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // Resets the state when the mouse leaves the container
      className="relative rounded-full border border-black/[0.1] bg-white shadow-sm flex justify-center space-x-8 px-4 py-6" // Using subtle 'shadow-sm'
    >
      
      {children}
    </nav>
  );
};

// A component for displaying a product or service with an image in the dropdown
export const ProductItem = ({ title, description, href, src }) => {
  return (
    <Link href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-dark-grey">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem]">
          {description}
        </p>
      </div>
    </Link>
  );
};

// A simple link component used inside the dropdowns
export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 hover:text-primary" // On hover, uses our brand's primary orange color
    >
      {children}
    </Link>
  );
};