
import React from 'react';
import { X } from 'lucide-react';

interface WebsiteShowcaseProps {
  onClose: () => void;
}

const WebsiteShowcase = ({ onClose }: WebsiteShowcaseProps) => {
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
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">E-commerce Platform</h3>
              <p className="text-slate-300 text-sm mb-3">
                A modern online store with custom features and seamless checkout experience.
              </p>
              <div className="bg-slate-600 h-32 rounded flex items-center justify-center text-slate-400">
                Website Preview
              </div>
            </div>
            
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Professional Services</h3>
              <p className="text-slate-300 text-sm mb-3">
                Clean, professional design with integrated booking and client management.
              </p>
              <div className="bg-slate-600 h-32 rounded flex items-center justify-center text-slate-400">
                Website Preview
              </div>
            </div>
            
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Restaurant Chain</h3>
              <p className="text-slate-300 text-sm mb-3">
                Multi-location restaurant website with online ordering and reservations.
              </p>
              <div className="bg-slate-600 h-32 rounded flex items-center justify-center text-slate-400">
                Website Preview
              </div>
            </div>
            
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Tech Startup</h3>
              <p className="text-slate-300 text-sm mb-3">
                Modern SaaS landing page with interactive demos and user onboarding.
              </p>
              <div className="bg-slate-600 h-32 rounded flex items-center justify-center text-slate-400">
                Website Preview
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteShowcase;
