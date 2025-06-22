
import React from 'react';
import ContactSection from '@/components/ContactSection';
import Chatbot from '@/components/Chatbot/Chatbot';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Add padding top to account for fixed header and bottom for footer */}
      <div className="pt-20 pb-16">
        <ContactSection />
      </div>

      <Chatbot />
    </div>
  );
};

export default ContactPage;
