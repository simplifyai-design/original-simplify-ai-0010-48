
import React from 'react';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot/Chatbot';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Header />
      
      {/* Add padding top to account for fixed header */}
      <div className="pt-20">
        <AboutSection />
      </div>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default AboutPage;
