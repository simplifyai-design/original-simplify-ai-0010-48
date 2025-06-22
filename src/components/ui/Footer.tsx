
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="font-bold text-green-600 text-xl mb-4 block">
              SimplifyAI.design
            </Link>
            <p className="text-slate-300 text-sm">
              Transforming businesses through intelligent web solutions and automation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/website-services" className="hover:text-blue-400 transition-colors">Website Development</Link></li>
              <li><Link to="/automation-services" className="hover:text-blue-400 transition-colors">Automation Solutions</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Strategic Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <p className="text-slate-300 text-sm">
              Ready to transform your business? Let's talk.
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2024 SimplifyAI.design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
