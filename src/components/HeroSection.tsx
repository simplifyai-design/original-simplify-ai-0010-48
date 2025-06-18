import React from 'react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  return <main style={{
    textShadow: '0px 2px 10px rgba(0, 0, 0, 0.8)'
  }} className="text-center z-20 bg-[#000a0e]/[0.66]">
      <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
        Drive Growth with <span className="text-blue-400">AI-Powered Automation</span>
      </h2>
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-8">
        You don't need to be an AI expert—that's our job. We dive deep into your business goals to build the custom automations that deliver maximum impact. Our commitment: to deliver powerful results, greater efficiency, and the freedom you deserve to live your life.
      </p>
      <div className="flex justify-center space-x-4">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105" asChild>
          <a href="#contact">Request a Demo</a>
        </Button>
        <Button className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105" asChild>
          <a href="#services">Learn More</a>
        </Button>
      </div>
    </main>;
};
export default HeroSection;