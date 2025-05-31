
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
      id: 'ai-strategy',
      icon: Brain,
      title: "AI Strategy Consultation",
      description: "One-on-one advisory sessions to identify automation opportunities and select the right AI tools for your business. Get expert guidance on what to automate and which tools to use. Perfect for business owners ready to leverage AI but unsure where to start.",
      tags: ["1-2 Hour Sessions", "$125/hour", "Automation Roadmap"],
      gradient: "from-blue-500 to-indigo-600",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "AI Strategy"
    },
    {
      id: 'automation-assessment',
      icon: BarChart3,
      title: "Automation Assessment",
      description: "Comprehensive analysis of your current processes to identify automation opportunities that will deliver the highest ROI.",
      tags: ["Process Analysis", "ROI Projections", "Priority Ranking"],
      gradient: "from-emerald-500 to-green-600",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "Assessment"
    },
    {
      id: 'ai-tool-selection',
      icon: Target,
      title: "AI Tool Selection",
      description: "Expert guidance on choosing the right AI tools and platforms for your specific business needs and budget.",
      tags: ["Vendor Comparison", "Budget Planning", "Integration Guide"],
      gradient: "from-purple-500 to-violet-600",
      imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "Tool Selection"
    },
    {
      id: 'custom-implementation',
      icon: Settings,
      title: "Custom Implementation",
      description: "Hands-on development and deployment of automation solutions, from simple workflows to complex AI integrations.",
      tags: ["Full Development", "API Integration", "Custom Solutions"],
      gradient: "from-amber-500 to-orange-600",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "Implementation"
    },
    {
      id: 'process-optimization',
      icon: Zap,
      title: "Process Optimization",
      description: "Streamline your workflows, eliminate bottlenecks, and create scalable systems that grow with your business.",
      tags: ["Workflow Design", "Efficiency Gains", "Scalable Systems"],
      gradient: "from-cyan-500 to-blue-600",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "Optimization"
    },
    {
      id: 'team-training',
      icon: GraduationCap,
      title: "Team Training",
      description: "Empower your team with the knowledge and skills to effectively use and maintain your new automation tools.",
      tags: ["Custom Videos", "Live Sessions", "Documentation"],
      gradient: "from-emerald-500 to-teal-600",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "Training"
    },
    {
      id: 'ongoing-support',
      icon: Shield,
      title: "Ongoing Support",
      description: "Continuous optimization and support to ensure your automation solutions evolve with your business needs.",
      tags: ["Monthly Retainer", "Priority Support", "Continuous Improvement"],
      gradient: "from-indigo-500 to-purple-600",
      imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "Support"
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
              <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center text-white shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <h2 className="text-3xl font-bold mb-2">AI & Automation</h2>
                  <p className="text-xl opacity-90">Intelligent Solutions for Modern Business</p>
                </div>
              </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
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
                      <h3 className="text-2xl font-bold text-center px-4">{service.fallbackText}</h3>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      View Case Study
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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
              
              {expandedService.id === 'ai-strategy' && (
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold mb-3">Dental Practice Success Story</h3>
                    <p className="mb-3">A busy dental office was losing money from missed appointments. Staff spent 15+ hours weekly on phone calls.</p>
                    <p className="mb-3"><strong>Solution:</strong> AI system for automatic appointment reminders.</p>
                    <div className="bg-blue-50 p-4 rounded">
                      <p className="font-bold">Results:</p>
                      <p>• 15 hours saved weekly</p>
                      <p>• 85% fewer no-shows</p>
                      <p>• $12,000 more monthly revenue</p>
                    </div>
                  </div>
                </div>
              )}

              {expandedService.id === 'automation-assessment' && (
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold mb-3">Manufacturing Client Assessment</h3>
                    <p className="mb-3">A mid-size manufacturer was struggling with manual inventory tracking and order processing inefficiencies.</p>
                    <p className="mb-3"><strong>Solution:</strong> Comprehensive process analysis and automation roadmap.</p>
                    <div className="bg-green-50 p-4 rounded">
                      <p className="font-bold">Results:</p>
                      <p>• Identified $50K annual savings</p>
                      <p>• 40% reduction in order processing time</p>
                      <p>• 15 automation opportunities mapped</p>
                    </div>
                  </div>
                </div>
              )}

              {expandedService.id === 'ai-tool-selection' && (
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold mb-3">ConfirmAI Implementation</h3>
                    <p className="mb-3">A healthcare practice needed reliable appointment confirmation but struggled with staff availability.</p>
                    <p className="mb-3"><strong>Solution:</strong> ConfirmAI - AI voice assistant for automatic appointment confirmations.</p>
                    <div className="bg-purple-50 p-4 rounded">
                      <p className="font-bold">Results:</p>
                      <p>• 842 appointments confirmed this week</p>
                      <p>• 94% success rate</p>
                      <p>• 10+ hours saved weekly</p>
                    </div>
                  </div>
                </div>
              )}

              {expandedService.id === 'custom-implementation' && (
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold mb-3">MeasurePro for Contractors</h3>
                    <p className="mb-3">Window contractors spent hours measuring and creating quotes manually, leading to delays and errors.</p>
                    <p className="mb-3"><strong>Solution:</strong> MeasurePro - Voice-recording measurement tool with instant PDF generation.</p>
                    <div className="bg-orange-50 p-4 rounded">
                      <p className="font-bold">Results:</p>
                      <p>• Voice recording during measurements</p>
                      <p>• Instant PDF estimates</p>
                      <p>• 75% reduction in quote time</p>
                    </div>
                  </div>
                </div>
              )}

              {expandedService.id === 'process-optimization' && (
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold mb-3">Retail Chain Optimization</h3>
                    <p className="mb-3">A growing retail chain was overwhelmed by manual order processing and inventory management challenges.</p>
                    <p className="mb-3"><strong>Solution:</strong> Streamlined workflows and automated inventory management system.</p>
                    <div className="bg-cyan-50 p-4 rounded">
                      <p className="font-bold">Results:</p>
                      <p>• Order processing: 45 min → 5 min</p>
                      <p>• Automated inventory management</p>
                      <p>• 60% reduction in support tickets</p>
                    </div>
                  </div>
                </div>
              )}

              {expandedService.id === 'team-training' && (
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold mb-3">CloserCoach for Public Adjusters</h3>
                    <p className="mb-3">Public adjusters needed better training methods to improve their client closing rates and sales techniques.</p>
                    <p className="mb-3"><strong>Solution:</strong> CloserCoach - AI-powered training with voice scenarios and real-time feedback.</p>
                    <div className="bg-green-50 p-4 rounded">
                      <p className="font-bold">Results:</p>
                      <p>• Voice-based practice scenarios</p>
                      <p>• Real-time AI feedback</p>
                      <p>• 35% increase in close rates</p>
                    </div>
                  </div>
                </div>
              )}

              {expandedService.id === 'ongoing-support' && (
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold mb-3">Continuous Partnership Success</h3>
                    <p className="mb-3">Long-term clients benefit from our ongoing optimization and support to ensure their systems evolve with their business.</p>
                    <p className="mb-3"><strong>Solution:</strong> Monthly reviews, performance monitoring, and continuous improvements.</p>
                    <div className="bg-indigo-50 p-4 rounded">
                      <p className="font-bold">Support Services:</p>
                      <p>• Monthly optimization reviews</p>
                      <p>• Performance monitoring and adjustments</p>
                      <p>• New feature implementation</p>
                      <p>• Team refresher training</p>
                    </div>
                  </div>
                </div>
              )}
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
