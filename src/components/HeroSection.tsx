import React from 'react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  return <main style={{
    textShadow: '0px 2px 10px rgba(0, 0, 0, 0.8)'
  }} className="text-center z-20 px-4 my-2 py-[8px]">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4">
        Stop Drowning in Manual Work. <br />
        <span className="text-blue-400">Start Automating Your Business.</span>
      </h1>
      <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 mb-6 px-2">
        You don't need to be an expert—that's our job. We are an automation
        consulting firm that designs and builds custom AI solutions to solve your
        most expensive business problems.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4 px-4 mb-4">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105 w-full sm:w-auto" asChild>
          <a href="#contact">Book a Free Strategy Call</a>
        </Button>
        <Button className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105 w-full sm:w-auto" asChild>
          <a href="#services">Learn More</a>
        </Button>
      </div>
    </main>;
};
export default HeroSection;