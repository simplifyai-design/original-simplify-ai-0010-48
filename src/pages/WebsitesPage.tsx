*/
import React, { useState } from 'react';
import WebsiteShowcase from '@/components/ui/WebsiteShowcase'; 

const TierCard = ({ title, description, features }: {title: string, description: string, features: string[]}) => (
  <div className="bg-slate-800/50 p-8 rounded-2xl border border-blue-500/20 shadow-lg h-full flex flex-col">
    <h3 className="text-2xl font-bold text-blue-300 mb-4">{title}</h3>
    <p className="text-slate-300 mb-6">{description}</p>
    <ul className="text-slate-300 space-y-2 list-disc list-inside mb-6 flex-grow">
      {features.map(feature => <li key={feature}>{feature}</li>)}
    </ul>
    <a href="/contact" className="mt-auto block text-center bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
      Get Started
    </a>
  </div>
);


const WebsiteServicesPage = () => {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  return (
    <div className="py-20 px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Websites That Work as Hard as You Do</h1>
        <p className="text-xl text-slate-300">
          We build beautiful, high-performance websites designed to be the engine of your business growth. Explore our packages below.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
        <TierCard 
          title="The Essential Launchpad"
          description="Perfect for new businesses or those needing a professional online presence quickly. We build a sleek, modern, single-page website that clearly communicates your value."
          features={["Responsive one-page design", "Mobile-first layout", "Contact form integration", "Basic SEO setup", "Professional copywriting"]}
        />
        <TierCard 
          title="The Growth Engine"
          description="Our most popular package for businesses ready to scale. We expand your site into a multi-page platform designed to attract and convert customers through targeted content."
          features={["Multi-page site architecture", "Blog setup", "Advanced SEO optimization", "Direct calendar booking integration", "Everything in Launchpad"]}
        />
        <TierCard 
          title="The Custom Platform"
          description="For businesses with unique needs. We go beyond a standard website to build a full-featured web application or e-commerce platform with custom functionality."
          features={["E-commerce integration", "Custom interactive features", "AI Chatbot integration", "User accounts & dashboards", "Everything in Growth Engine"]}
        />
      </div>

      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Our Work in Action</h2>
        <button 
          onClick={() => setIsPortfolioOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
        >
          View Our Website Portfolio
        </button>
      </div>

      {isPortfolioOpen && (
        <WebsiteShowcase onClose={() => setIsPortfolioOpen(false)} />
      )}
    </div>
  );
};

export default WebsiteServicesPage;
```tsx
/*
