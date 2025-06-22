
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, BotMessageSquare, BarChart } from 'lucide-react';

const ServiceHubCard = ({ icon, title, description, buttonText, linkTo }: any) => (
  <div className="bg-slate-800/50 p-8 rounded-2xl border border-blue-500/20 shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300 flex flex-col text-center items-center">
    <div className="bg-blue-500/20 p-4 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-slate-300 mb-6 flex-grow">{description}</p>
    <Link to={linkTo} className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
      {buttonText}
    </Link>
  </div>
);

const ServicesPage = () => {
  return (
    <div className="py-20 px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Our Services</h1>
        <p className="text-xl text-slate-300">
          We provide end-to-end solutions designed to solve your biggest business challenges and drive sustainable growth.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <ServiceHubCard
          icon={<Code size={32} className="text-blue-300" />}
          title="Website Design & Development"
          description="From stunning online brochures to full-featured web applications, we build platforms that are designed to perform and impress."
          buttonText="View Website Packages"
          linkTo="/website-services"
        />
        <ServiceHubCard
          icon={<BotMessageSquare size={32} className="text-blue-300" />}
          title="Automation & AI Solutions"
          description="We design and deploy intelligent systems that save you time, reduce costs, and drive business growth by handling your manual work for you."
          buttonText="Explore Automation Packages"
          linkTo="/automation-services"
        />
        <ServiceHubCard
          icon={<BarChart size={32} className="text-blue-300" />}
          title="Strategic Consulting"
          description="Leverage our 20 years of enterprise experience. We partner with you to analyze your business and create a custom roadmap for success."
          buttonText="Book a Free Strategy Call"
          linkTo="/contact"
        />
      </div>
    </div>
  );
};

export default ServicesPage;
