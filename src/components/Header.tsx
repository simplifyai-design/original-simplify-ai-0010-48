
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 p-3 md:p-6 z-20" style={{
      textShadow: '0px 2px 10px rgba(0, 0, 0, 0.8)'
    }}>
      <nav className="container mx-auto flex justify-between items-center bg-[#000a0e]/[0.46] py-2 px-3 md:py-[2px] rounded-lg">
        <h1 className="font-bold tracking-tighter text-green-600 text-xl md:text-3xl">SimplifyAI.design</h1>
        <div className="hidden lg:flex items-center space-x-6">
          <a href="#services" className="hover:text-blue-400 transition-colors text-sm">Solutions</a>
          <a href="#how-we-work" className="hover:text-blue-400 transition-colors text-sm">Platform</a>
          <a href="#pricing" className="hover:text-blue-400 transition-colors text-sm">Resources</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors text-sm">Company</a>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded-lg transition-colors text-xs md:text-sm">
          Get Started
        </Button>
      </nav>
    </header>
  );
};

export default Header;
