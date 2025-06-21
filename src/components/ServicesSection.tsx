import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ExternalLink, X } from 'lucide-react';

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState<any>(null);
  const [showcaseWebsite, setShowcaseWebsite] = useState<any>(null);

  const websites = [
    {
      title: "E-commerce Platform",
      url: "https://demo.vercel.store",
      description: "Modern e-commerce with AI-powered recommendations"
    },
    {
      title: "Healthcare Portal",
      url: "https://react-health-dashboard.vercel.app", 
      description: "Patient management system with automated workflows"
    },
    {
      title: "Real Estate CRM",
      url: "https://react-real-estate-tau.vercel.app",
      description: "Property management with AI lead qualification"
    },
    {
      title: "Restaurant Management",
      url: "https://restaurant-pos-react.vercel.app",
      description: "Complete restaurant operations with automation"
    }
  ];

  const services = [
    {
      id: 'ai-coaching',
      title: 'AI Coaching & Advising',
      description: "One-on-one guidance to demystify AI and provide a step-by-step implementation plan. We helped one restaurant owner save 10 hours weekly on marketing with our coaching.",
      gradient: 'from-blue-500 to-indigo-600',
      tags: ['1-on-1 Sessions', '$125/hour', 'Implementation Guidance'],
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "AI Coaching",
      expandedContent: (
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4">AI Coaching & Advising</h3>
          <p className="text-gray-300 mb-4">
            Personalized guidance to help you understand and implement AI solutions for your business.
          </p>
        </div>
      )
    },
    {
      id: 'automation-solutions',
      title: 'Automation & AI Solutions',
      description: "We design and deploy complete automation solutions and custom AI agents that deliver massive ROI. From workflow automation that cuts processing time by 90% to intelligent agents like our ConfirmAI assistant, we build systems tailored to your business needs.",
      gradient: 'from-emerald-500 to-purple-600',
      tags: ['Process Audit', 'Custom AI Agents', 'Workflow Automation', 'User Training'],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "Automation & AI",
      expandedContent: (
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4">Automation & AI Solutions</h3>
          <p className="text-gray-300 mb-4">
            Complete automation solutions and custom AI agents that streamline your business processes and deliver significant ROI.
          </p>
        </div>
      )
    },
    {
      id: 'website-showcase',
      title: 'Website Development',
      description: "Modern, responsive websites and web applications built with cutting-edge technology. From e-commerce platforms to business portals, we create digital experiences that drive results.",
      gradient: 'from-cyan-500 to-blue-600',
      tags: ['Responsive Design', 'Modern Tech', 'Custom Development'],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "Websites",
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
                onClick={() => setShowcaseWebsite(website)}
                className="bg-slate-800 p-4 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors border border-slate-600 hover:border-cyan-500"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-semibold">{website.title}</h4>
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                </div>
                <p className="text-gray-400 text-sm">{website.description}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'consulting-services',
      title: 'Full Consulting Services',
      description: "Our end-to-end consulting drives real transformation. We've helped clients achieve incredible results, including a 60% reduction in administrative work for a major healthcare provider, with a full return on investment in just 6 months.",
      gradient: 'from-purple-500 to-violet-600',
      tags: ['End-to-End', 'Strategic Planning', 'Full Implementation'],
      imageUrl: "/lovable-uploads/c1d21a39-7e99-4558-84d5-d0c081c72a95.png",
      fallbackText: "Consulting",
      expandedContent: (
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4">Full Consulting Services</h3>
          <p className="text-gray-300 mb-4">
            Comprehensive consulting that transforms your business operations and drives measurable results.
          </p>
        </div>
      )
    }
  ];

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
            {services.map((service, index) => (
              <Card
                key={index}
                onClick={() => setExpandedService(service)}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-600 shadow-lg cursor-pointer backdrop-blur-sm hover:border-emerald-500/50 flex flex-col h-full bg-slate-900"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${service.gradient} relative overflow-hidden rounded-t-lg`}
                >
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold transform transition-transform duration-300 group-hover:scale-105">{service.fallbackText}</span>
                  </div>
                </div>
                
                <CardHeader className="flex-grow">
                  <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-800 text-emerald-400 text-xs rounded-full border border-emerald-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-emerald-400 text-sm font-medium group-hover:text-emerald-300 transition-colors">
                    Learn More
                    <ChevronDown className="ml-1 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {expandedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 rounded-lg max-w-4xl w-full max-h-96 overflow-y-auto">
            {expandedService.expandedContent}
            <div className="p-6 pt-0">
              <button
                onClick={() => setExpandedService(null)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Website Showcase Modal */}
      {showcaseWebsite && (
        <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white rounded-lg overflow-hidden">
            <div className="flex items-center justify-between p-4 bg-slate-800 text-white">
              <div>
                <h3 className="text-lg font-semibold">{showcaseWebsite.title}</h3>
                <p className="text-sm text-gray-300">{showcaseWebsite.description}</p>
                <p className="text-xs text-cyan-400 mt-1">{showcaseWebsite.url}</p>
              </div>
              <button
                onClick={() => setShowcaseWebsite(null)}
                className="text-white hover:text-gray-300 p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <iframe
              src={showcaseWebsite.url}
              className="w-full h-full border-0"
              title={showcaseWebsite.title}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-navigation"
              onError={(e) => {
                console.log('Iframe failed to load:', showcaseWebsite.url);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesSection;
