
import React, { useState, useEffect } from 'react';
import Chatbot from '@/components/Chatbot/Chatbot';
import Header from '@/components/Header';
import VideoBackground from '@/components/VideoBackground';
import HeroSection from '@/components/HeroSection';
import QuotesCarousel from '@/components/QuotesCarousel';
import ServicesSection from '@/components/ServicesSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import PricingSection from '@/components/PricingSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <VideoBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center p-4 z-10 my-0">
        <Header />
        <HeroSection />
        <QuotesCarousel />
      </section>

      <ServicesSection />
      <HowWeWorkSection />
      <PricingSection />
      <AboutSection /> 
      <ContactSection />
      <Footer />

      {/* ============== Add The Chatbot Component Here ============== */}
      <Chatbot />

    </div>
  );
};

export default Index;
