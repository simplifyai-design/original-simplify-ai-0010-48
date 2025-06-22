import React, { useState, useEffect } from 'react';
import Chatbot from '@/components/Chatbot/Chatbot';
import VideoBackground from '@/components/VideoBackground';
import HeroSection from '@/components/HeroSection';
import QuotesCarousel from '@/components/QuotesCarousel';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // The parent div is no longer needed here as App.tsx provides the main container
    <>
      <VideoBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center p-4 z-10 my-0 pb-16">
        <div className="bg-[#000a0e]/50 px-4 py-4 my-2 rounded-lg">
          <HeroSection />
          <QuotesCarousel />
        </div>
      </section>

      <Chatbot />
    </>
  );
};

export default Index;