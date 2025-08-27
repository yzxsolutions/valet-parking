'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { XMarkIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import serviceData from '../../../data/serviceData.json'; 

export default function ServiceModal({ isOpen, onClose }) {
  const [currentServiceKey, setCurrentServiceKey] = useState(null);
  const [currentServiceData, setCurrentServiceData] = useState(null);

  useEffect(() => {
    if (currentServiceKey && serviceData[currentServiceKey]) {
      setCurrentServiceData(serviceData[currentServiceKey]);
    } else {
      setCurrentServiceData(null);
    }
  }, [currentServiceKey]);

  if (!isOpen) return null;

  const handleSelectService = (key) => {
    setCurrentServiceKey(key);
  };

  const handleBackToList = () => {
    setCurrentServiceKey(null);
    setCurrentServiceData(null);
  };

  const allServices = Object.keys(serviceData).map(key => ({
    key: key,
    title: serviceData[key].title,
    overview: serviceData[key].overview,
    heroImage: serviceData[key].heroImage 
  }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div
        className={`
          relative bg-white shadow-xl w-full
          md:rounded-lg md:max-w-4xl md:my-8 md:overflow-y-auto
          fixed bottom-0 left-0 right-0
          md:static
          max-h-[90vh] md:max-h-[90vh]
          rounded-t-2xl md:rounded-lg
          transition-transform duration-300
          animate-slide-up
        `}
      >
        {/* Mobile drag handle */}
        <div className="md:hidden flex justify-center py-2">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:text-black z-10 p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <XMarkIcon className="h-7 w-7" />
        </button>

        {/* Back Button */}
        {currentServiceKey && (
          <button
            onClick={handleBackToList}
            className="absolute top-4 left-4 text-black  hover:text-black z-10 p-1 rounded-full hover:bg-gray-100 transition-colors flex items-center"
            aria-label="Back to services list"
          >
            <ArrowLeftIcon className="h-6 w-6 mr-1" />
            <span className="hidden md:inline">Back</span>
          </button>
        )}

        {/* Modal Content */}
        <div className="overflow-y-auto max-h-[85vh] md:max-h-[80vh]">
          {!currentServiceKey ? (
            // Service List
            <div className="p-6 md:p-8">
              <h2 className="text-4xl font-bold text-[#424242] mb-8 text-center">
                Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {allServices.map((service) => (
                  <div
                    key={service.key}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer flex flex-col overflow-hidden"
                    onClick={() => handleSelectService(service.key)}
                  >
                    {service.heroImage && (
                      <div className="relative h-40 w-full">
                        <Image
                          src={service.heroImage.src}
                          alt={service.heroImage.alt}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
                      </div>
                    )}
                    <div className="p-4 flex-grow">
                      <h3 className="text-xl font-semibold text-[#005B70] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {service.overview}
                      </p>
                    </div>
                    <div className="p-4 border-t border-gray-100 text-right">
                      <span className="text-[#EF522D] font-medium hover:underline">
                        Learn More →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Service Detail
            currentServiceData && (
              <>
                {/* Hero Image */}
                {currentServiceData.heroImage && (
                  <div className="relative h-64 w-full rounded-t-lg overflow-hidden">
                    <Image
                      src={currentServiceData.heroImage.src}
                      alt={currentServiceData.heroImage.alt}
                      fill
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                    <h2 className="absolute bottom-4 left-6 text-white text-4xl font-bold">
                      {currentServiceData.title}
                    </h2>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 md:p-8">
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {currentServiceData.overview}
                  </p>

                  {currentServiceData.sections && currentServiceData.sections.map((section, index) => (
                    <div key={index} className="mb-8">
                      <h3 className="text-3xl font-semibold text-[#005B70] mb-4">
                        {section.title}
                      </h3>
                      {section.content && (
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {section.content}
                        </p>
                      )}
                      {section.image && (
                        <div className="mb-6">
                          <Image
                            src={section.image}
                            alt={section.title}
                            width={800}
                            height={450}
                            className="rounded-lg shadow-md object-cover w-full h-auto"
                          />
                        </div>
                      )}
                      {section.features && (
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          {section.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start">
                              <svg className="flex-shrink-0 h-6 w-6 text-[#EF522D] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <div>
                                <h4 className="font-semibold text-gray-800">{feature.name}</h4>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.benefits && (
                        <ul className="list-disc pl-5 text-gray-700 mt-4 space-y-2">
                          {section.benefits.map((benefit, bIndex) => (
                            <li key={bIndex} dangerouslySetInnerHTML={{ __html: benefit }} />
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}

                  {currentServiceData.gallery && currentServiceData.gallery.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-3xl font-semibold text-[#005B70] mb-4">Gallery</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {currentServiceData.gallery.map((item, gIndex) => (
                          <div key={gIndex} className="relative w-full h-40 rounded-lg overflow-hidden shadow-md">
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-xs leading-tight">{item.alt}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentServiceData.cta && (
                    <div className="bg-[#FFF8F6] p-6 rounded-lg text-center mt-8">
                      <h3 className="text-3xl font-bold text-[#EF522D] mb-3">
                        {currentServiceData.cta.headline}
                      </h3>
                      <p className="text-gray-700 text-lg mb-6">
                        {currentServiceData.cta.subtext}
                      </p>
                      <button className="bg-[#EF522D] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#d4441f] transition-colors">
                        {currentServiceData.cta.buttonText}
                      </button>
                    </div>
                  )}
                </div>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
}
