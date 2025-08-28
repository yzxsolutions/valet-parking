"use client";

import Link from "next/link";
import { Github, Twitter, Instagram, Facebook, Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const contactDetails = [
  { icon: Clock, title: "Dubai Office Hours", lines: ["Monday-Friday", "9:00 am to 6:00 pm"] },
  { icon: Phone, title: "Get In Touch", lines: ["+971 561464784", "+971 543308944"] },
  { icon: MapPin, title: "Our Address", lines: ["Al Mamzar Building, Dubai"] },
];

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Logo */}
        <div className="mb-8 flex justify-center items-center">
          <Link href="/" className="text-3xl font-bold text-gray-900">
            <Image src="/icons/logo.svg" width={180} height={180} alt="Logo" />
          </Link>
        </div>

       

        {/* Navigation Links */}
        <nav className="mb-10">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Contact Us
            </Link>
          </div>
        </nav>

       
         {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactDetails.map((detail, idx) => (
            <div key={idx} className="text-start flex items-start gap-4 justify-center ">
              <detail.icon className="w-6 h-6  text-gray-600 mb-3" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">{detail.title}</h4>
              {detail.lines.map((line, i) => (
                <p key={i} className="text-gray-600 text-sm">{line}</p>
              ))}
              </div>
            </div>
          ))}
        </div>
         {/* Social Media Icons */}
        <div className="flex justify-center items-center space-x-6 mb-8">
          <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Twitter">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Facebook">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Created by{" "}
          <Link href="https://codeteak.com" className="hover:text-gray-700 font-medium">
            Codeteak Technologies PVT. LTD
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
