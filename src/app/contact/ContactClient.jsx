"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Send, Loader, CheckCircle } from "lucide-react";

// --- Data for the contact info cards ---
const contactDetails = [
  { icon: Clock, title: "Dubai Office Hours", lines: ["Monday-Friday", "9:00 am to 6:00 pm"] },
  { icon: MapPin, title: "Our Address", lines: ["Al Mamzar Building , Dubai"] },
  { icon: Phone, title: "Get In Touch", lines: ["+971 561464784", "+971 543308944"] },
];

// --- Reusable Components ---
const ContactInfoCard = ({ icon: Icon, title, lines }) => (
  <div className="text-center md:text-left">
    <div className="flex justify-center md:justify-start items-center mb-3">
      <Icon className="w-5 h-5 text-amber-600 mr-3" />
      <h3 className="text-sm font-bold text-amber-600 uppercase tracking-wider">{title}</h3>
    </div>
    <div className="text-slate-800 font-medium">
      {lines.map((line, i) => <p key={i}>{line}</p>)}
    </div>
  </div>
);

const FormField = ({ label, name, type, placeholder, value, onChange, isTextarea = false, delay }) => {
  const commonProps = {
    name, id: name, placeholder, value, onChange, required: !name.includes("Phone"), // Phone is optional
    className: "w-full px-4 py-3 bg-slate-100 border text-black border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300",
  };
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
      {isTextarea ? <textarea {...commonProps} rows="5" /> : <input type={type} {...commonProps} />}
    </motion.div>
  );
};


// --- The Main Combined Contact Page Component ---
export default function FullContactPage() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // IMPORTANT: Get the Google Script URL from your environment variables
    const scriptURL = "https://script.google.com/macros/s/AKfycbz7BEpB4c_QCWjT7z79vE8_2jNq3sgP9CaCPhI-J-4PLkW8lU0w7HzlXyPJtqMAxmIPYA/exec";
    if (!scriptURL) {
      console.error("Google Script URL is not defined in .env.local");
      setError("The form is not configured correctly. Please contact support.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();

      if (result.status === 'success') {
        console.log("Form Submitted Successfully!");
        setIsSubmitted(true);
      } else {
        throw new Error(result.message || 'An unknown error occurred.');
      }
      
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to send message. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-slate-50 py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- TOP SECTION: Header & Image --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              Love to hear from you,<br />Get in touch
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-8">
              We&apos;re here to answer any questions and help you get started. Reach out to us through any of the channels below.
            </p>
          </motion.div>
          <motion.div
            className="w-full h-80 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/slide/1.jpg" // IMPORTANT: Update with your image path
              alt="Customer service representative smiling on a call"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* --- MIDDLE SECTION: Contact Details --- */}
        <motion.div
            className="mt-20 sm:mt-24 lg:mt-32 pt-16 border-t border-slate-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-x-8">
            {contactDetails.map((detail) => <ContactInfoCard key={detail.title} {...detail} />)}
          </div>
        </motion.div>

        {/* --- BOTTOM SECTION: Contact Form --- */}
        <div className="mt-20 sm:mt-24 lg:mt-32 pt-16 border-t border-slate-200">
          {isSubmitted ? (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
              <h2 className="text-3xl font-bold text-slate-900">Thank You!</h2>
              <p className="text-slate-600 mt-2">Your message has been sent. We&apos;ll get back to you as soon as possible. You&apos;ll be in touch shortly.</p>
            </motion.div>
          ) : (
            <>
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Send Us a Message</h2>
                <p className="mt-4 text-lg text-slate-600">Have a question or a project in mind? We&apos;d love to hear from you.</p>
              </motion.div>
              
              <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="First Name" name="firstName" type="text" placeholder="Alex" value={formData.firstName} onChange={handleChange} delay={0.1} />
                  <FormField label="Last Name" name="lastName" type="text" placeholder="Johnson" value={formData.lastName} onChange={handleChange} delay={0.2} />
                </div>
                <FormField label="Email Address" name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} delay={0.3} />
                <FormField label="Phone Number (Optional)" name="phone" type="tel" placeholder="+1 (555) 123-4567" value={formData.phone} onChange={handleChange} delay={0.4} />
                <FormField label="Your Message" name="message" placeholder="Tell us about your event..." value={formData.message} onChange={handleChange} isTextarea delay={0.5} />
                
                {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-600 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                          <Loader className="w-5 h-5 mr-3" />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5 ml-3" />
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}