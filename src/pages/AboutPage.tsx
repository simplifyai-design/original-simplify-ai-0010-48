
import React from 'react';
import AboutSection from '@/components/AboutSection';
import Chatbot from '@/components/Chatbot/Chatbot';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Add padding top to account for fixed header */}
      <div className="pt-20">
        <AboutSection />
      </div>

      <Chatbot />
    </div>
  );
};

export default AboutPage;
