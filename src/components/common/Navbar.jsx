"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu"; // Ensure this import path is correct
import { cn } from "@/lib/utils";

// This is the main Navbar component that you will place in your layout.
export default function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setVisible(visible);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed hidden md:block top-10 inset-x-0 max-w-2xl mx-auto z-50 transition-top duration-300",
        visible ? "top-10" : "-top-20",
        className
      )}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        {/* Services Menu Item */}
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/services/privateEvents">
              Private Events
            </HoveredLink>
            <HoveredLink href="/services/restaurantHotelValet">
              Restaurant & Hotel Valet
            </HoveredLink>
            <HoveredLink href="/services/corporateFunctions">
              Corporate Functions
            </HoveredLink>
            <HoveredLink href="/services/specialVenues">
              Special Venues
            </HoveredLink>
          </div>
        </MenuItem>

        {/* About Us Menu Item */}
<HoveredLink href="/about">About Us</HoveredLink>
        {/* Contact Menu Item (Simple Link) */}
        <HoveredLink href="/contact">Contact</HoveredLink>

      </Menu>
    </div>
  );
}