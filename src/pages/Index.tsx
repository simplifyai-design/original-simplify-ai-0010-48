
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ChevronDown, Brain, BarChart3, Target, Settings, Zap, GraduationCap, Shield } from 'lucide-react';

const Index = () => {
  const [expandedService, setExpandedService] = useState<any>(null);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configuration
    const PARTICLE_COUNT = 40;
    const MAX_LINK_DISTANCE = 120;
    const PARTICLE_SPEED = 0.3;
    const MOUSE_REPEL_RADIUS = 100;
    const MOUSE_REPEL_STRENGTH = 0.3; 

    let particles: any[] = [];
    const mouse = { x: null as number | null, y: null as number | null };

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() * 2 - 1) * PARTICLE_SPEED;
        this.speedY = (Math.random() * 2 - 1) * PARTICLE_SPEED;
        this.color = `rgba(37, 99, 235, ${Math.random() * 0.5 + 0.2})`;
      }

      update() {
        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
        
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < MOUSE_REPEL_RADIUS) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (MOUSE_REPEL_RADIUS - distance) / MOUSE_REPEL_RADIUS;
            this.x += forceDirectionX * force * MOUSE_REPEL_STRENGTH;
            this.y += forceDirectionY * force * MOUSE_REPEL_STRENGTH;
          }
        }
        
        this.x += this.speedX;
        this.y += this.speedY;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    const init = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
      }
    };

    // Connect particles
    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < MAX_LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${1 - distance / MAX_LINK_DISTANCE})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      connectParticles();
      requestAnimationFrame(animate);
    };

    // Event listeners
    const handleResize = () => {
      setCanvasSize();
      init();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    // Start
    setCanvasSize();
    init();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      description: 'Our end-to-end consulting drives real transformation. We've helped clients achieve incredible results, including a 60% reduction in administrative work for a major healthcare provider, with a full return on investment in just 6 months.',
      gradient: 'from-orange-500 to-red-600',
      tags: ['End-to-End', 'Strategic Planning', 'Full Implementation'],
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dbebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
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
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Particle Canvas */}
      <canvas 
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center p-4 z-10">
        {/* Header/Navbar */}
        <header className="absolute top-0 left-0 right-0 p-6 z-20" style={{ textShadow: '0px 2px 10px rgba(0, 0, 0, 0.5)' }}>
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tighter">SimplifyAI.design</h1>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="hover:text-blue-400 transition-colors">Solutions</a>
              <a href="#how-we-work" className="hover:text-blue-400 transition-colors">Platform</a>
              <a href="#pricing" className="hover:text-blue-400 transition-colors">Resources</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Company</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Get Started
            </Button>
          </nav>
        </header>

        {/* Hero Content */}
        <main className="text-center z-20" style={{ textShadow: '0px 2px 10px rgba(0, 0, 0, 0.5)' }}>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Drive Growth with <span className="text-blue-400">AI-Powered Automation</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-8">
            You don't need to be an AI expert—that's our job. We dive deep into your business goals to build the custom automations that deliver maximum impact. Our commitment: to deliver powerful results, greater efficiency, and the freedom you deserve to live your life.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105" asChild>
              <a href="#contact">Request a Demo</a>
            </Button>
            <Button className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105" asChild>
              <a href="#services">Learn More</a>
            </Button>
          </div>
        </main>
      </section>

      {/* Services Section */}
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
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-600 shadow-lg cursor-pointer bg-gray-700/50 backdrop-blur-sm hover:border-orange-500/50"
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
                  <CardTitle className="text-lg text-white group-hover:text-orange-400 transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-600 text-gray-200 text-xs px-2 py-1 rounded-full group-hover:bg-purple-800 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-orange-400 font-semibold hover:text-orange-300 transition-colors">
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
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 overflow-y-auto" onClick={() => setExpandedService(null)}>
          <div className="min-h-screen px-4 py-8">
            <div className="bg-gray-700 text-white rounded-lg max-w-4xl mx-auto p-8 border border-orange-500/30" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setExpandedService(null)} className="float-right text-2xl hover:text-orange-400 transition-colors">✕</button>
              <h2 className="text-3xl font-bold mb-6 text-orange-400">{expandedService.title}</h2>
              {expandedService.expandedContent}
            </div>
          </div>
        </div>
      )}

      {/* How We Work Section */}
      <section id="how-we-work" className="py-20 px-6 bg-gray-700 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">How We Work</h2>
            <p className="text-xl text-gray-300">Simple, transparent, results-driven</p>
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
                <div className="w-20 h-20 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-800 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Investment Options</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white text-gray-900 rounded-lg p-8 border-2 border-transparent hover:border-orange-500 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">Strategy Session</h3>
              <p className="text-4xl font-bold">$125/hour</p>
              <ul className="mt-6 space-y-2">
                <li>✓ 1-2 hour sessions</li>
                <li>✓ Automation roadmap</li>
                <li>✓ Tool recommendations</li>
              </ul>
            </div>
            <div className="border-2 border-purple-800 bg-gray-700 text-white rounded-lg p-8 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-800 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Custom Projects</h3>
              <p className="text-4xl font-bold">Quoted</p>
              <p className="mt-6">Simple: $2,500-5,000</p>
              <p>Medium: $5,000-15,000</p>
              <p>Complex: $15,000+</p>
            </div>
            <div className="bg-gray-600 text-white rounded-lg p-8 border-2 border-transparent hover:border-purple-800 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Ongoing Support</h3>
              <p className="text-4xl font-bold">Monthly</p>
              <p className="mt-6">Basic: $500/month</p>
              <p>Active: $1,500/month</p>
              <p>Full: $3,000+/month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-700 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Get Started Today</h2>
            <p className="text-xl text-gray-300">Ready to transform your business with AI automation?</p>
          </div>

          <Card className="shadow-xl border-gray-500 bg-gray-800/50 backdrop-blur-sm border-orange-500/30">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-gray-700 border-gray-500 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-gray-700 border-gray-500 text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="company" className="text-white">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="mt-1 bg-gray-700 border-gray-500 text-white"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-white">Tell us about your automation needs</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-1 bg-gray-700 border-gray-500 text-white"
                    placeholder="Describe your current challenges and automation goals..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg py-6 bg-orange-500 text-white hover:bg-orange-600">
                  Schedule Free Consultation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6 border-t border-gray-600 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-8">
            <a href="#services" className="hover:text-orange-400 transition-colors">Services</a>
            <a href="#how-we-work" className="hover:text-orange-400 transition-colors">How We Work</a>
            <a href="#pricing" className="hover:text-orange-400 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
          </div>
          <p className="text-gray-400">© 2024 SimplifyAI.design. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
