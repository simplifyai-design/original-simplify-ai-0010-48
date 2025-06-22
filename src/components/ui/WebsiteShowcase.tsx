
import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Website } from '../../data/websites';

interface WebsiteShowcaseProps {
  website: Website;
  onClose: () => void;
}

const WebsiteShowcase = ({ website, onClose }: WebsiteShowcaseProps) => {
  const handleVisitWebsite = () => {
    window.open(website.url, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{website.title}</h2>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-slate-300 mb-6">{website.description}</p>
          
          <div className="bg-slate-700/50 p-6 rounded-lg mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-blue-300">Website Preview</h3>
              <button
                onClick={handleVisitWebsite}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Visit Website <ExternalLink size={16} />
              </button>
            </div>
            
            <div className="bg-slate-600 h-64 rounded flex items-center justify-center text-slate-400 mb-4">
              <iframe
                src={website.url}
                className="w-full h-full rounded"
                title={website.title}
                onError={() => {
                  // Fallback if iframe fails
                }}
              />
            </div>
            
            <div className="text-sm text-slate-400">
              URL: <a href={website.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">{website.url}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteShowcase;
