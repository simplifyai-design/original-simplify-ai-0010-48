
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ChevronDown, Brain, BarChart3, Target, Settings, Zap, GraduationCap, Shield, ArrowDown } from 'lucide-react';

const Index = () => {
  const [expandedService, setExpandedService] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const services = [
    {
      id: 'ai-coaching',
      title: 'AI Coaching & Advising',
      description: 'One-on-one guidance to help business owners understand and leverage AI. Learn which processes to automate, discover the best AI tools for your needs, and get step-by-step implementation guidance.',
      gradient: 'from-blue-500 to-indigo-600',
      tags: ['1-on-1 Sessions', '$125/hour', 'Implementation Guidance'],
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "AI Coaching",
      expandedContent: (
        <div>
          <p className="mb-4">Personal AI coaching sessions designed to demystify AI and show you exactly how to use it in your business.</p>
          <h3 className="text-xl font-bold mb-3">What We Cover:</h3>
          <ul className="mb-6 space-y-2">
            <li>• Identify automation opportunities in your business</li>
            <li>• Review and recommend specific AI tools</li>
            <li>• Step-by-step implementation guidance</li>
            <li>• Best practices and common pitfalls to avoid</li>
          </ul>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Success Story</h3>
            <p className="mb-3">A restaurant owner learned to use ChatGPT for menu descriptions, social media posts, and email campaigns. Now creates a week's worth of content in 30 minutes.</p>
            <div className="bg-blue-50 p-4 rounded">
              <p className="font-bold">Results:</p>
              <p>• 10 hours saved weekly on marketing</p>
              <p>• 3x more social media engagement</p>
              <p>• Consistent brand voice across all channels</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'workflow-automation',
      title: 'Workflow & Process Automation',
      description: 'Complete automation solutions from audit to implementation. We review your processes, design automated workflows, build the system, and train your team.',
      gradient: 'from-emerald-500 to-teal-600',
      tags: ['Process Audit', 'Custom Build', 'User Training'],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "Workflow Automation",
      expandedContent: (
        <div>
          <h3 className="text-xl font-bold mb-3">Our Process:</h3>
          <ol className="mb-6 space-y-3">
            <li><strong>1. Process Audit:</strong> Map your current workflows and identify bottlenecks</li>
            <li><strong>2. Design Framework:</strong> Create automated workflow with user-friendly interface</li>
            <li><strong>3. Implementation:</strong> Build and deploy the automation</li>
            <li><strong>4. Training:</strong> Ensure your team can use and maintain the system</li>
          </ol>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Manufacturing Client Success</h3>
            <p className="mb-3">Automated their entire order-to-delivery process, connecting sales, inventory, and shipping systems.</p>
            <div className="bg-green-50 p-4 rounded">
              <p className="font-bold">Results:</p>
              <p>• Order processing: 45 min → 5 min</p>
              <p>• Zero inventory errors</p>
              <p>• $50K annual labor savings</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'custom-ai-agents',
      title: 'Custom AI Agents',
      description: 'Build intelligent AI assistants tailored to your business. From customer service bots to internal knowledge assistants.',
      gradient: 'from-purple-500 to-pink-600',
      tags: ['Custom Development', 'AI Training', 'Integration'],
      imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "AI Agents",
      expandedContent: (
        <div>
          <h3 className="text-xl font-bold mb-3">Featured AI Agents:</h3>
          <div className="space-y-4 mb-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold text-purple-800">ConfirmAI - Appointment Assistant</h4>
              <p>AI voice agent that calls patients to confirm appointments</p>
              <p className="text-sm mt-2">842 appointments confirmed this week | 94% success rate</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold text-purple-800">Customer Service Bot</h4>
              <p>24/7 AI assistant handling inquiries, orders, and support tickets</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold text-purple-800">Internal Knowledge Assistant</h4>
              <p>AI trained on your company data to answer employee questions instantly</p>
            </div>
          </div>
          <p className="text-gray-600">Each agent is custom-built and trained specifically for your business needs.</p>
        </div>
      )
    },
    {
      id: 'consulting-services',
      title: 'Full Consulting Services',
      description: 'Comprehensive AI and automation consulting covering strategy, implementation, optimization, and ongoing support.',
      gradient: 'from-orange-500 to-red-600',
      tags: ['End-to-End', 'Strategic Planning', 'Full Implementation'],
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "Consulting",
      expandedContent: (
        <div>
          <h3 className="text-xl font-bold mb-3">Complete Transformation Package</h3>
          <p className="mb-4">Our full consulting service includes everything:</p>
          <ul className="space-y-2 mb-6">
            <li>✓ Initial assessment and strategy</li>
            <li>✓ Tool selection and procurement</li>
            <li>✓ Process optimization</li>
            <li>✓ Custom development</li>
            <li>✓ Implementation and integration</li>
            <li>✓ Team training</li>
            <li>✓ Ongoing optimization</li>
          </ul>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Healthcare Provider Transformation</h3>
            <p className="mb-3">Complete digital transformation including patient portal, automated scheduling, AI triage, and staff workflows.</p>
            <div className="bg-orange-50 p-4 rounded">
              <p className="font-bold">Results:</p>
              <p>• 60% reduction in administrative work</p>
              <p>• Patient satisfaction up 45%</p>
              <p>• ROI achieved in 6 months</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'training-videos',
      title: 'Training & Education',
      description: 'Professional AI and automation training videos custom-created for your team. From Disney Pixar style to corporate professional.',
      gradient: 'from-green-500 to-emerald-600',
      tags: ['Custom Videos', 'Multiple Styles', 'Team Training'],
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "Training",
      expandedContent: (
        <div>
          <h3 className="text-xl font-bold mb-4">Custom Training Videos</h3>
          <p className="mb-6">We create engaging training content in any style to match your company culture.</p>
          <div className="grid gap-4">
            <a href="https://youtu.be/9MPf-pO5mhI" target="_blank" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
              <h4 className="font-bold text-green-800 mb-2">The Power of Feedback</h4>
              <p className="text-gray-600">Disney Pixar style - Perfect for engaging team training</p>
              <p className="text-blue-600 mt-2">▶ Watch Video</p>
            </a>
            <a href="https://youtu.be/3nd54SrD6-0" target="_blank" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
              <h4 className="font-bold text-green-800 mb-2">Our Home, Planet Earth</h4>
              <p className="text-gray-600">Modern style - Environmental awareness training</p>
              <p className="text-blue-600 mt-2">▶ Watch Video</p>
            </a>
            <a href="https://youtu.be/ZusJ_Sy3kbY" target="_blank" className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
              <h4 className="font-bold text-green-800 mb-2">Spread Kindness</h4>
              <p className="text-gray-600">Character animation - Culture and values training</p>
              <p className="text-blue-600 mt-2">▶ Watch Video</p>
            </a>
          </div>
        </div>
      )
    },
    {
      id: 'website-design',
      title: 'Website Design & Development',
      description: 'Professional websites that convert visitors into customers. Integrated with your automation systems for seamless operations.',
      gradient: 'from-indigo-500 to-purple-600',
      tags: ['Custom Design', 'Conversion Focused', 'Automation Ready'],
      imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "Website Design",
      expandedContent: (
        <div>
          <h3 className="text-xl font-bold mb-4">Professional Web Development</h3>
          <div className="space-y-6">
            <a href="https://jcwindowcovering.com" target="_blank" className="block bg-gray-900 text-white p-6 rounded-lg hover:bg-gray-800 transition">
              <h4 className="text-2xl font-bold mb-2">J&C Window Covering</h4>
              <p className="text-lg mb-2">Premium Blinds Installation - $45/window</p>
              <p className="text-gray-300">Features: Automated scheduling, instant quotes, payment processing</p>
              <p className="text-blue-400 mt-3">Visit Live Site →</p>
            </a>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold mb-2">What We Build:</h4>
              <ul className="space-y-2">
                <li>• Service business websites</li>
                <li>• E-commerce platforms</li>
                <li>• Professional portfolios</li>
                <li>• Automated booking systems</li>
                <li>• Integrated payment processing</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'app-design',
      title: 'App Design & Development',
      description: 'Custom mobile and web applications that streamline your operations and enhance customer experience.',
      gradient: 'from-cyan-500 to-blue-600',
      tags: ['Mobile Apps', 'Web Apps', 'Custom Solutions'],
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "App Development",
      expandedContent: (
        <div>
          <h3 className="text-xl font-bold mb-4">Custom App Development</h3>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">MeasurePro</h4>
              <p>Window measurement app for contractors</p>
              <p className="text-sm mt-2">• Voice recording • PDF estimates • 75% faster quotes</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">CloserCoach</h4>
              <p>AI training app for sales teams</p>
              <p className="text-sm mt-2">• Voice practice • Real scenarios • 35% better close rates</p>
            </div>
          </div>
          <h4 className="font-bold mt-6 mb-2">We Build:</h4>
          <ul className="space-y-2">
            <li>• Customer portals</li>
            <li>• Internal tools</li>
            <li>• Mobile-first applications</li>
            <li>• AI-powered interfaces</li>
          </ul>
        </div>
      )
    },
    {
      id: 'ongoing-support',
      title: 'Ongoing Support & Optimization',
      description: 'Keep your systems running perfectly with continuous monitoring, updates, and optimization.',
      gradient: 'from-gray-600 to-gray-800',
      tags: ['Monthly Plans', 'Continuous Updates', '24/7 Monitoring'],
      imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "Support",
      expandedContent: (
        <div>
          <h3 className="text-xl font-bold mb-4">Support Plans</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Basic Support - $500/month</h4>
              <ul className="text-sm space-y-1">
                <li>• Monthly system check</li>
                <li>• Bug fixes</li>
                <li>• Email support</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Active Support - $1,500/month</h4>
              <ul className="text-sm space-y-1">
                <li>• Weekly optimization</li>
                <li>• Priority fixes</li>
                <li>• Phone support</li>
                <li>• Minor updates included</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Full Service - $3,000+/month</h4>
              <ul className="text-sm space-y-1">
                <li>• Daily monitoring</li>
                <li>• Immediate response</li>
                <li>• Continuous improvement</li>
                <li>• New features monthly</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-600">
            Automate AI Design
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#how-we-work" className="text-gray-700 hover:text-blue-600 transition-colors">How We Work</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
            <Button asChild>
              <a href="#contact">Get Started</a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-blue-600 font-semibold">Strategic Consulting & Implementation</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transform Your Business with{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AI-Powered Automation
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Expert consulting for small to medium-sized businesses. We design and build intelligent automation systems that learn, adapt, and scale with your business.
                </p>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  Trusted by SMBs across industries
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  100% Satisfaction Guaranteed
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  Free Initial Consultation
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <a href="#contact">Schedule Free Consultation</a>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <a href="#services">Learn More</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-500 border-0 shadow-2xl">
                <CardContent className="p-8">
                  <img 
                    src="/lovable-uploads/ab4212de-ad4f-4057-bb06-ac5c1423b613.png"
                    alt="Automate AI Design"
                    className="w-full h-auto max-w-md mx-auto"
                  />
                </CardContent>
              </Card>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ArrowDown className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How We Can Transform Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From quick strategy sessions to full implementations, we offer flexible solutions that match your needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg cursor-pointer"
                    onClick={() => setExpandedService(service)}>
                <div className={`h-48 bg-gradient-to-br ${service.gradient} relative overflow-hidden rounded-t-lg`}>
                  <img 
                    src={service.imageUrl} 
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="relative z-10 h-full flex items-center justify-center text-white">
                    <h3 className="text-lg font-bold text-center px-4">{service.fallbackText}</h3>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Learn More
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Overlay */}
      {expandedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto" onClick={() => setExpandedService(null)}>
          <div className="min-h-screen px-4 py-8">
            <div className="bg-white rounded-lg max-w-4xl mx-auto p-8" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setExpandedService(null)} className="float-right text-2xl hover:text-gray-600">✕</button>
              <h2 className="text-3xl font-bold mb-6">{expandedService.title}</h2>
              {expandedService.expandedContent}
            </div>
          </div>
        </div>
      )}

      {/* How We Work Section */}
      <section id="how-we-work" className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">How We Work</h2>
            <p className="text-xl text-gray-600">Simple, transparent, results-driven</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Understand Your Needs",
                description: "Discovery call or assessment to identify your challenges and goals"
              },
              {
                number: "2",
                title: "Design Your Solution",
                description: "Custom strategy and recommendations tailored to your business"
              },
              {
                number: "3",
                title: "Deliver Results",
                description: "Implementation and support to ensure successful adoption"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Investment Options</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-600 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Strategy Session</h3>
              <p className="text-4xl font-bold">$125/hour</p>
              <ul className="mt-6 space-y-2">
                <li>✓ 1-2 hour sessions</li>
                <li>✓ Automation roadmap</li>
                <li>✓ Tool recommendations</li>
              </ul>
            </div>
            <div className="border-2 border-gray-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Custom Projects</h3>
              <p className="text-4xl font-bold">Quoted</p>
              <p className="mt-6">Simple: $2,500-5,000</p>
              <p>Medium: $5,000-15,000</p>
              <p>Complex: $15,000+</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Ongoing Support</h3>
              <p className="text-4xl font-bold">Monthly</p>
              <p className="mt-6">Basic: $500/month</p>
              <p>Active: $1,500/month</p>
              <p>Full: $3,000+/month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get Started Today</h2>
            <p className="text-xl text-gray-600">Ready to transform your business with AI automation?</p>
          </div>

          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Tell us about your automation needs</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-1"
                    placeholder="Describe your current challenges and automation goals..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg py-6">
                  Schedule Free Consultation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-8">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#how-we-work" className="hover:text-blue-400 transition-colors">How We Work</a>
            <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <p className="text-gray-400">© 2024 Automate AI Design. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
