import React from 'react';
import { Button } from '@/components/ui/button';
const Header = () => {
  return <header className="absolute top-0 left-0 right-0 p-6 z-20" style={{
    textShadow: '0px 2px 10px rgba(0, 0, 0, 0.8)'
  }}>
      <nav className="container mx-auto flex justify-between items-center bg-[#000a0e]/[0.46] rounded-md py-[2px]">
        <h1 className="text-2xl font-bold tracking-tighter text-green-600">SimplifyAI.design</h1>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#services" className="hover:text-blue-400 transition-colors">Solutions</a>
          <a href="#how-we-work" className="hover:text-blue-400 transition-colors">Platform</a>
          <a href="#pricing" className="hover:text-blue-400 transition-colors">Resources</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Company</a>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
          Get Started
        </Button>
      </nav>
    </header>;
};
export default Header;