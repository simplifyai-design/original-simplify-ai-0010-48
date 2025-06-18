
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState<any>(null);

  const services = [{
    id: 'ai-coaching',
    title: 'AI Coaching & Advising',
    description: 'One-on-one guidance to help business owners understand and leverage AI. Learn which processes to automate, discover the best AI tools for your needs, and get step-by-step implementation guidance.',
    gradient: 'from-blue-500 to-indigo-600',
    tags: ['1-on-1 Sessions', '$125/hour', 'Implementation Guidance'],
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    fallbackText: "AI Coaching",
    expandedContent: <div>
          <p className="mb-4 text-gray-200">Personal AI coaching sessions designed to demystify AI and show you exactly how to use it in your business.</p>
          <h3 className="text-xl font-bold mb-3 text-white">What We Cover:</h3>
          <ul className="mb-6 space-y-2 text-gray-200">
            <li>• Identify automation opportunities in your business</li>
            <li>• Review and recommend specific AI tools</li>
            <li>• Step-by-step implementation guidance</li>
            <li>• Best practices and common pitfalls to avoid</li>
          </ul>
          <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
            <h3 className="text-xl font-bold mb-3 text-white">Success Story</h3>
            <p className="mb-3 text-gray-200">A restaurant owner learned to use ChatGPT for menu descriptions, social media posts, and email campaigns. Now creates a week's worth of content in 30 minutes.</p>
            <div className="bg-gray-800 p-4 rounded border border-gray-700">
              <p className="font-bold text-white">Results:</p>
              <p className="text-gray-200">• 10 hours saved weekly on marketing</p>
              <p className="text-gray-200">• 3x more social media engagement</p>
              <p className="text-gray-200">• Consistent brand voice across all channels</p>
            </div>
          </div>
        </div>
  }, {
    id: 'workflow-automation',
    title: 'Workflow & Process Automation',
    description: "We design and deploy complete automation solutions that deliver massive ROI. For one manufacturing client, we automated their entire order-to-delivery process, cutting processing time from 45 minutes to just 5 and saving them over $50,000 in annual labor costs.",
    gradient: 'from-emerald-500 to-teal-600',
    tags: ['Process Audit', 'Custom Build', 'User Training'],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    fallbackText: "Workflow Automation",
    expandedContent: <div>
          <h3 className="text-xl font-bold mb-3 text-white">Our Process:</h3>
          <ol className="mb-6 space-y-3 text-gray-200">
            <li><strong className="text-white">1. Process Audit:</strong> Map your current workflows and identify bottlenecks</li>
            <li><strong className="text-white">2. Design Framework:</strong> Create automated workflow with user-friendly interface</li>
            <li><strong className="text-white">3. Implementation:</strong> Build and deploy the automation</li>
            <li><strong className="text-white">4. Training:</strong> Ensure your team can use and maintain the system</li>
          </ol>
          <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
            <h3 className="text-xl font-bold mb-3 text-white">Manufacturing Client Success</h3>
            <p className="mb-3 text-gray-200">Automated their entire order-to-delivery process, connecting sales, inventory, and shipping systems.</p>
            <div className="bg-gray-800 p-4 rounded border border-gray-700">
              <p className="font-bold text-white">Results:</p>
              <p className="text-gray-200">• Order processing: 45 min → 5 min</p>
              <p className="text-gray-200">• Zero inventory errors</p>
              <p className="text-gray-200">• $50K annual labor savings</p>
            </div>
          </div>
        </div>
  }, {
    id: 'custom-ai-agents',
    title: 'Custom AI Agents',
    description: 'Build intelligent AI assistants tailored to your business. From customer service bots to internal knowledge assistants.',
    gradient: 'from-purple-500 to-pink-600',
    tags: ['Custom Development', 'AI Training', 'Integration'],
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    fallbackText: "AI Agents",
    expandedContent: <div>
          <h3 className="text-xl font-bold mb-3 text-white">Featured AI Agents:</h3>
          <div className="space-y-4 mb-6">
            <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
              <h4 className="font-bold text-white">ConfirmAI - Appointment Assistant</h4>
              <p className="text-gray-200">AI voice agent that calls patients to confirm appointments</p>
              <p className="text-sm mt-2 text-gray-300">842 appointments confirmed this week | 94% success rate</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
              <h4 className="font-bold text-white">Customer Service Bot</h4>
              <p className="text-gray-200">24/7 AI assistant handling inquiries, orders, and support tickets</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
              <h4 className="font-bold text-white">Internal Knowledge Assistant</h4>
              <p className="text-gray-200">AI trained on your company data to answer employee questions instantly</p>
            </div>
          </div>
          <p className="text-gray-200">Each agent is custom-built and trained specifically for your business needs.</p>
        </div>
  }, {
    id: 'consulting-services',
    title: 'Full Consulting Services',
    description: "Our end-to-end consulting drives real transformation. We've helped clients achieve incredible results, including a 60% reduction in administrative work for a major healthcare provider, with a full return on investment in just 6 months.",
    gradient: 'from-purple-500 to-violet-600',
    tags: ['End-to-End', 'Strategic Planning', 'Full Implementation'],
    imageUrl: "/lovable-uploads/c1d21a39-7e99-4558-84d5-d0c081c72a95.png",
    fallbackText: "Consulting",
    expandedContent: <div>
          <h3 className="text-xl font-bold mb-3 text-white">Complete Transformation Package</h3>
          <p className="mb-4 text-gray-200">Our full consulting service includes everything:</p>
          <ul className="space-y-2 mb-6 text-gray-200">
            <li>✓ Initial assessment and strategy</li>
            <li>✓ Tool selection and procurement</li>
            <li>✓ Process optimization</li>
            <li>✓ Custom development</li>
            <li>✓ Implementation and integration</li>
            <li>✓ Team training</li>
            <li>✓ Ongoing optimization</li>
          </ul>
          <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
            <h3 className="text-xl font-bold mb-3 text-white">Healthcare Provider Transformation</h3>
            <p className="mb-3 text-gray-200">Complete digital transformation including patient portal, automated scheduling, AI triage, and staff workflows.</p>
            <div className="bg-gray-800 p-4 rounded border border-gray-700">
              <p className="font-bold text-white">Results:</p>
              <p className="text-gray-200">• 60% reduction in administrative work</p>
              <p className="text-gray-200">• Patient satisfaction up 45%</p>
              <p className="text-gray-200">• ROI achieved in 6 months</p>
            </div>
          </div>
        </div>
  }, {
    id: 'ongoing-support',
    title: 'Ongoing Support & Optimization',
    description: 'Keep your systems running perfectly with continuous monitoring, updates, and optimization.',
    gradient: 'from-gray-600 to-gray-800',
    tags: ['Monthly Plans', 'Continuous Updates', '24/7 Monitoring'],
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    fallbackText: "Support",
    expandedContent: <div>
          <h3 className="text-xl font-bold mb-4 text-white">Support Plans</h3>
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
              <h4 className="font-bold mb-2 text-white">Basic Support - $500/month</h4>
              <ul className="text-sm space-y-1 text-gray-200">
                <li>• Monthly system check</li>
                <li>• Bug fixes</li>
                <li>• Email support</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
              <h4 className="font-bold mb-2 text-white">Active Support - $1,500/month</h4>
              <ul className="text-sm space-y-1 text-gray-200">
                <li>• Weekly optimization</li>
                <li>• Priority fixes</li>
                <li>• Phone support</li>
                <li>• Minor updates included</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
              <h4 className="font-bold mb-2 text-white">Full Service - $3,000+/month</h4>
              <ul className="text-sm space-y-1 text-gray-200">
                <li>• Daily monitoring</li>
                <li>• Immediate response</li>
                <li>• Continuous improvement</li>
                <li>• New features monthly</li>
              </ul>
            </div>
          </div>
        </div>
  }];

  return (
    <>
      <section id="services" className="py-20 px-6 bg-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              How We Can Transform Your Business
            </h2>
            <p className="text-xl text-gray-300">From quick strategy sessions to full implementations, we offer flexible solutions that match your needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => 
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-600 shadow-lg cursor-pointer bg-gray-700/50 backdrop-blur-sm hover:border-emerald-500/50 flex flex-col h-full" onClick={() => setExpandedService(service)}>
                <div className={`h-48 bg-gradient-to-br ${service.gradient} relative overflow-hidden rounded-t-lg`}>
                  <img src={service.imageUrl} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-30" onError={e => {
                    e.currentTarget.style.display = 'none';
                  }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="relative z-10 h-full flex items-center justify-center text-white">
                    <h3 className="text-lg font-bold text-center px-4">{service.fallbackText}</h3>
                  </div>
                </div>
                
                <CardHeader className="flex-grow">
                  <CardTitle className="text-lg text-white group-hover:text-orange-400 transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 mt-auto">
                  <div className="flex flex-wrap gap-2 min-h-[2.5rem] items-start">
                    {service.tags.map((tag, tagIndex) => 
                      <span key={tagIndex} className="bg-gray-600 text-gray-200 text-xs px-2 py-1 rounded-full group-hover:bg-purple-800 transition-colors">
                        {tag}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-orange-400 font-semibold hover:text-orange-300 transition-colors">
                    Learn More
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Service Overlay */}
      {expandedService && 
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 overflow-y-auto" onClick={() => setExpandedService(null)}>
          <div className="min-h-screen px-4 py-8">
            <div onClick={e => e.stopPropagation()} className="bg-gray-800 text-white rounded-lg max-w-4xl mx-auto p-8 border border-purple-500/30">
              <button onClick={() => setExpandedService(null)} className="float-right text-2xl hover:text-purple-400 transition-colors">✕</button>
              <h2 className="text-3xl font-bold mb-6 text-purple-400">{expandedService.title}</h2>
              {expandedService.expandedContent}
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default ServicesSection;
