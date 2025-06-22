
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { websites } from '../../data/websites';
import WebsiteShowcase from './WebsiteShowcase';

interface PortfolioModalProps {
  onClose: () => void;
}

const PortfolioModal = ({ onClose }: PortfolioModalProps) => {
  const [selectedWebsite, setSelectedWebsite] = useState<any>(null);

  const handleWebsiteClick = (website: any) => {
    setSelectedWebsite(website);
  };

  const handleCloseWebsite = () => {
    setSelectedWebsite(null);
  };

  if (selectedWebsite) {
    return (
      <WebsiteShowcase
        website={selectedWebsite}
        onClose={handleCloseWebsite}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Our Website Portfolio</h2>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-slate-300 mb-6">
            Explore our collection of websites and web applications built for various industries.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {websites.map((website, index) => (
              <div
                key={index}
                onClick={() => handleWebsiteClick(website)}
                className="bg-slate-700/50 p-4 rounded-lg cursor-pointer hover:bg-slate-600/50 transition-colors border border-slate-600 hover:border-cyan-500"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-blue-300">{website.title}</h3>
                  <span className="text-cyan-400">→</span>
                </div>
                <p className="text-slate-300 text-sm mb-3">{website.description}</p>
                <div className="text-xs text-slate-400">
                  {website.url}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
