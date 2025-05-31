
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ChevronDown, Brain, BarChart3, Target, Settings, Zap, GraduationCap, Shield, ArrowDown } from 'lucide-react';

const Index = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

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
      icon: Brain,
      title: "AI Strategy Consultation",
      description: "One-on-one advisory sessions to identify automation opportunities and select the right AI tools for your business. Get expert guidance on what to automate and which tools to use. Perfect for business owners ready to leverage AI but unsure where to start.",
      tags: ["1-2 Hour Sessions", "$125/hour", "Automation Roadmap"],
      gradient: "from-blue-500 to-indigo-600",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "AI Strategy",
      examples: [
        "Helped a dental practice automate appointment reminders, saving 15 hours/week",
        "Designed AI customer service strategy for e-commerce store",
        "Created automation roadmap for accounting firm"
      ]
    },
    {
      icon: BarChart3,
      title: "Automation Assessment",
      description: "Comprehensive analysis of your current processes to identify automation opportunities that will deliver the highest ROI.",
      tags: ["Process Analysis", "ROI Projections", "Priority Ranking"],
      gradient: "from-emerald-500 to-green-600",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "Assessment",
      examples: [
        "Identified $50K annual savings for manufacturing client",
        "Discovered 40% time reduction opportunity in order processing",
        "Mapped 15 automation opportunities for healthcare provider"
      ]
    },
    {
      icon: Target,
      title: "AI Tool Selection",
      description: "Expert guidance on choosing the right AI tools and platforms for your specific business needs and budget.",
      tags: ["Vendor Comparison", "Budget Planning", "Integration Guide"],
      gradient: "from-purple-500 to-violet-600",
      imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "Tool Selection",
      examples: [
        "🤖 ConfirmAI - AI voice assistant that automatically calls and confirms appointments",
        "842 Appointments Confirmed This Week",
        "94% Success Rate, 10+ Hours Saved Weekly"
      ]
    },
    {
      icon: Settings,
      title: "Custom Implementation",
      description: "Hands-on development and deployment of automation solutions, from simple workflows to complex AI integrations.",
      tags: ["Full Development", "API Integration", "Custom Solutions"],
      gradient: "from-amber-500 to-orange-600",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "Implementation",
      examples: [
        "📏 MeasurePro - Professional window measurement tool for contractors",
        "✓ Voice recording during measurements",
        "✓ Instant PDF estimates, 75% reduction in quote time"
      ]
    },
    {
      icon: Zap,
      title: "Process Optimization",
      description: "Streamline your workflows, eliminate bottlenecks, and create scalable systems that grow with your business.",
      tags: ["Workflow Design", "Efficiency Gains", "Scalable Systems"],
      gradient: "from-cyan-500 to-blue-600",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "Optimization",
      examples: [
        "Reduced order processing time from 45 min to 5 min",
        "Automated inventory management for retail chain",
        "Created self-service customer portal reducing support tickets by 60%"
      ]
    },
    {
      icon: GraduationCap,
      title: "Team Training",
      description: "Empower your team with the knowledge and skills to effectively use and maintain your new automation tools.",
      tags: ["Custom Videos", "Live Sessions", "Documentation"],
      gradient: "from-emerald-500 to-teal-600",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "Training",
      examples: [
        "🎯 CloserCoach - AI-powered training for public adjusters",
        "✓ Voice-based practice scenarios",
        "✓ Real-time feedback, 35% increase in close rates"
      ]
    },
    {
      icon: Shield,
      title: "Ongoing Support",
      description: "Continuous optimization and support to ensure your automation solutions evolve with your business needs.",
      tags: ["Monthly Retainer", "Priority Support", "Continuous Improvement"],
      gradient: "from-indigo-500 to-purple-600",
      imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      fallbackText: "Support",
      examples: [
        "Monthly optimization reviews",
        "Performance monitoring and adjustments",
        "New feature implementation",
        "Team refresher training"
      ]
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
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
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

                    <button
                      onClick={() => toggleService(index)}
                      className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      View Examples
                      <ChevronDown className={`w-5 h-5 transition-transform ${expandedService === index ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedService === index && (
                      <div className="pt-4 border-t border-gray-200 space-y-2 animate-in slide-in-from-top duration-300">
                        {service.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="text-sm text-gray-600">
                            {example.startsWith('🤖') || example.startsWith('📏') || example.startsWith('🎯') ? (
                              <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-3 rounded-lg">
                                <div className="font-semibold text-purple-800">{example}</div>
                              </div>
                            ) : example.startsWith('✓') ? (
                              <div className="flex items-center gap-2">
                                <span className="text-green-500">✓</span>
                                {example.substring(2)}
                              </div>
                            ) : (
                              <div>• {example}</div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

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
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h2>
          
          <Card className="max-w-lg mx-auto bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0 shadow-2xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Strategic Consulting</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">$125</span>
                <span className="text-xl opacity-90">/hour</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center justify-center gap-2">
                  <span className="text-green-300">✓</span>
                  Expert AI Strategy Guidance
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="text-green-300">✓</span>
                  Custom Automation Roadmap
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="text-green-300">✓</span>
                  Tool Selection & Planning
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="text-green-300">✓</span>
                  Implementation Support
                </li>
              </ul>
              <Button size="lg" variant="secondary" asChild className="w-full">
                <a href="#contact">Schedule Consultation</a>
              </Button>
            </CardContent>
          </Card>
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
