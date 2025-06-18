
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState<any>(null);

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
      id: 'workflow-automation',
      title: 'Workflow & Process Automation',
      description: "We design and deploy complete automation solutions that deliver massive ROI. For one manufacturing client, we automated their entire order-to-delivery process, cutting processing time from 45 minutes to just 5 and saving them over $50,000 in annual labor costs.",
      gradient: 'from-emerald-500 to-teal-600',
      tags: ['Process Audit', 'Custom Build', 'User Training'],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "Workflow Automation",
      expandedContent: (
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4">Workflow & Process Automation</h3>
          <p className="text-gray-300 mb-4">
            Complete automation solutions that streamline your business processes and deliver significant ROI.
          </p>
        </div>
      )
    },
    {
      id: 'custom-ai-agents',
      title: 'Custom AI Agents',
      description: "From AI-powered appointment assistants like our ConfirmAI agent to internal knowledge bots, we build intelligent agents tailored to your business needs, freeing up your team to focus on high-value work.",
      gradient: 'from-purple-500 to-pink-600',
      tags: ['Custom Development', 'AI Training', 'Integration'],
      imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "AI Agents",
      expandedContent: (
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4">Custom AI Agents</h3>
          <p className="text-gray-300 mb-4">
            Intelligent agents built specifically for your business needs and workflows.
          </p>
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
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">{service.fallbackText}</span>
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

      {expandedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
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
    </>
  );
};

export default ServicesSection;
