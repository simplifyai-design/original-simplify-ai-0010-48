
import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Workflow, Zap, Clock, TrendingUp, Shield } from 'lucide-react';

const AutomationCard = ({ icon, title, description, features }: any) => (
  <div className="bg-slate-800/50 p-8 rounded-2xl border border-blue-500/20 shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300">
    <div className="bg-blue-500/20 p-4 rounded-full mb-6 w-fit">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-slate-300 mb-6">{description}</p>
    <ul className="space-y-2">
      {features.map((feature: string, index: number) => (
        <li key={index} className="flex items-center text-slate-300">
          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const AutomationServicesPage = () => {
  const automationServices = [
    {
      icon: <Bot size={32} className="text-blue-300" />,
      title: "AI Chatbots & Virtual Assistants",
      description: "Intelligent conversational interfaces that handle customer inquiries, support tickets, and lead qualification 24/7.",
      features: [
        "Custom chatbot development",
        "Natural language processing",
        "Multi-platform deployment",
        "Analytics and reporting"
      ]
    },
    {
      icon: <Workflow size={32} className="text-blue-300" />,
      title: "Business Process Automation",
      description: "Streamline your workflows and eliminate repetitive tasks with intelligent automation solutions.",
      features: [
        "Workflow optimization",
        "Data entry automation",
        "Document processing",
        "Task scheduling"
      ]
    },
    {
      icon: <Zap size={32} className="text-blue-300" />,
      title: "Integration & API Solutions",
      description: "Connect your existing tools and systems for seamless data flow and enhanced productivity.",
      features: [
        "Third-party integrations",
        "Custom API development",
        "Data synchronization",
        "System migrations"
      ]
    },
    {
      icon: <Clock size={32} className="text-blue-300" />,
      title: "Scheduling & Appointment Systems",
      description: "Automated booking systems that handle appointments, meetings, and resource management.",
      features: [
        "Online booking portals",
        "Calendar integrations",
        "Automated reminders",
        "Resource management"
      ]
    },
    {
      icon: <TrendingUp size={32} className="text-blue-300" />,
      title: "Marketing Automation",
      description: "Intelligent marketing workflows that nurture leads and engage customers at scale.",
      features: [
        "Email marketing automation",
        "Lead scoring systems",
        "Social media automation",
        "Campaign optimization"
      ]
    },
    {
      icon: <Shield size={32} className="text-blue-300" />,
      title: "Security & Monitoring",
      description: "Automated security protocols and monitoring systems to protect your digital assets.",
      features: [
        "Automated backups",
        "Security monitoring",
        "Threat detection",
        "Compliance reporting"
      ]
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Automation & AI Solutions
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          Transform your business operations with intelligent automation that saves time, reduces costs, and scales with your growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            Start Your Automation Journey
          </Link>
          <Link to="/services" className="border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            View All Services
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {automationServices.map((service, index) => (
          <AutomationCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            features={service.features}
          />
        ))}
      </div>

      {/* Benefits Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          Why Choose Our Automation Solutions?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-400 mb-2">80%</div>
            <div className="text-slate-300">Average time savings on manual tasks</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-slate-300">Continuous operation without breaks</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-400 mb-2">ROI</div>
            <div className="text-slate-300">Positive return on investment within months</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationServicesPage;
