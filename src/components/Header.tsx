
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 p-2 md:p-3 z-20 bg-slate-900/90 backdrop-blur-sm" style={{
      textShadow: '0px 2px 10px rgba(0, 0, 0, 0.8)'
    }}>
      <nav className="container mx-auto flex justify-between items-center bg-[#000a0e]/[0.46] py-2 px-3 md:py-2 rounded-lg">
        <Link to="/" className="font-bold tracking-tighter text-green-600 text-xl md:text-3xl">
          SimplifyAI.design
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/services" className="hover:text-blue-400 transition-colors text-sm">Services</Link>
          <Link to="/websites" className="hover:text-blue-400 transition-colors text-sm">Websites</Link>
          <Link to="/about" className="hover:text-blue-400 transition-colors text-sm">About</Link>
          <Link to="/contact" className="hover:text-blue-400 transition-colors text-sm">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
