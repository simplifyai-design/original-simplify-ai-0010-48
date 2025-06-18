
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6 border-t border-gray-600 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a href="#services" className="hover:text-orange-400 transition-colors">Services</a>
          <a href="#how-we-work" className="hover:text-orange-400 transition-colors">How We Work</a>
          <a href="#pricing" className="hover:text-orange-400 transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
        </div>
        <p className="text-gray-400">© 2024 SimplifyAI.design. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
