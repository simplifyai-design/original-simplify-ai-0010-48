
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import VideoBackground from '@/components/VideoBackground';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import PricingSection from '@/components/PricingSection';
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
      <section className="relative min-h-screen flex flex-col justify-center items-center p-4 z-10">
        <Header />
        <HeroSection />
      </section>

      <ServicesSection />
      <HowWeWorkSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
