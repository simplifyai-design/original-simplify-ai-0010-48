
import React from 'react';
import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot/Chatbot';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Header />
      
      {/* Add padding top to account for fixed header */}
      <div className="pt-20">
        <ServicesSection />
        <HowWeWorkSection />
        <PricingSection />
      </div>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default ServicesPage;
