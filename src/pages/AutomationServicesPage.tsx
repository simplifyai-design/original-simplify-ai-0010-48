import React from 'react';
import { Link } from 'react-router-dom';

const AutomationServicesPage = () => {
  return (
    <div className="py-20 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Automation & AI Solutions
      </h1>
      <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
        Detailed packages and information about our automation services are coming soon.
      </p>
      <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
        Book a Free Consultation
      </Link>
    </div>
  );
};

export default AutomationServicesPage;