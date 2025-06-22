
import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';
import WebsiteShowcase from './ui/WebsiteShowcase';
import { services } from '../data/services';
import { websites } from '../data/websites';

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState<any>(null);
  const [showcaseWebsite, setShowcaseWebsite] = useState<any>(null);

  const handleServiceClick = (service: any) => {
    if (service.id === 'website-showcase') {
      // For website showcase, we handle the click differently in the expanded content
      setExpandedService(service);
    } else {
      setExpandedService(service);
    }
  };

  const handleWebsiteClick = (website: any) => {
    setShowcaseWebsite(website);
    setExpandedService(null); // Close the service modal
  };

  // Update the website showcase service to handle website clicks
  const updatedServices = services.map(service => {
    if (service.id === 'website-showcase') {
      return {
        ...service,
        expandedContent: (
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">Website Showcase</h3>
            <p className="text-gray-300 mb-4">
              Explore our portfolio of websites and web applications built for various industries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {websites.map((website, index) => (
                <div
                  key={index}
                  onClick={() => handleWebsiteClick(website)}
                  className="bg-slate-800 p-4 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors border border-slate-600 hover:border-cyan-500"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-semibold">{website.title}</h4>
                    <span className="w-4 h-4 text-cyan-400">→</span>
                  </div>
                  <p className="text-gray-400 text-sm">{website.description}</p>
                </div>
              ))}
            </div>
          </div>
        )
      };
    }
    return service;
  });

  return (
    <>
      <section id="services" className="py-20 px-6 relative z-10 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive AI solutions to transform your business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {updatedServices.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                onClick={() => handleServiceClick(service)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {expandedService && (
        <ServiceModal
          service={expandedService}
          onClose={() => setExpandedService(null)}
        />
      )}

      {/* Website Showcase Modal */}
      {showcaseWebsite && (
        <WebsiteShowcase
          website={showcaseWebsite}
          onClose={() => setShowcaseWebsite(null)}
        />
      )}
    </>
  );
};

export default ServicesSection;
