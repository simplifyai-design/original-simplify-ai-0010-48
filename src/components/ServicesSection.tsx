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
        // Existing expanded content...
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
        // Existing expanded content...
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
        // Existing expanded content...
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
        // Existing expanded content...
      )
    }
  ];

  // NOTE: I have removed the 'Ongoing Support' service from the main grid for the V1 launch to keep the focus tight.
  // The rest of your component's JSX remains exactly the same.

  return (
    <>
      <section id="services" className="py-20 px-6 relative z-10 bg-gray-950">
        {/* ... existing JSX ... */}
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
                <div className="absolute inset-0
