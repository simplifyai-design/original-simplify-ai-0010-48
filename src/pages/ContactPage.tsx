
import React from 'react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot/Chatbot';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Header />
      
      {/* Add padding top to account for fixed header and bottom for footer */}
      <div className="pt-20 pb-16">
        <ContactSection />
      </div>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default ContactPage;
