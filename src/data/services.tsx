
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { websites } from './websites';

export const services = [
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
