import Link from 'next/link';
import { Github, Twitter, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Logo */}
        <div className="mb-8 flex justify-center items-center">
          <Link href="/" className="text-3xl font-bold text-gray-900">
           <Image src="/icons/logo.svg" width={200} height={200} alt="Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="mb-12">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
           
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              
              Contact Us
            </Link>
          </div>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center space-x-6 mb-8">
          <Link 
            href="#" 
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </Link>
          <Link 
            href="#" 
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </Link>
          <Link 
            href="#" 
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </Link>
          <Link 
            href="#" 
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm">
          © Copyright 2021, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;