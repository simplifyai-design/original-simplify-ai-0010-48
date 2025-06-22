
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-8 px-6 border-t border-gray-600 z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-8 mb-4">
          <Link to="/services" className="hover:text-orange-400 transition-colors">Services</Link>
          <Link to="/websites" className="hover:text-orange-400 transition-colors">Websites</Link>
          <Link to="/about" className="hover:text-orange-400 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link>
        </div>
        <p className="text-gray-400">© 2024 SimplifyAI.design. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
