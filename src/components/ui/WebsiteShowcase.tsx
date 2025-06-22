import React from 'react';
import { X } from 'lucide-react';

// Define the shape of the website data we expect
interface Website {
  url: string;
  title: string;
  description: string;
}

// Define the props for our component
interface WebsiteShowcaseProps {
  website: Website | null;
  onClose: () => void;
}

const WebsiteShowcase: React.FC<WebsiteShowcaseProps> = ({ website, onClose }) => {
  if (!website) {
    return null; // Don't render anything if no website is selected
  }

  return (
    <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="relative w-full max-w-6xl h-full max-h-[90vh] bg-slate-800 rounded-lg overflow-hidden flex flex-col shadow-2xl border border-slate-700"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="flex items-center justify-between p-4 bg-slate-900 text-white border-b border-slate-700 flex-shrink-0">
          <div>
            <h3 className="text-lg font-semibold">{website.title}</h3>
            <p className="text-sm text-gray-400">{website.description}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white rounded-full p-2 transition-colors"
            aria-label="Close website preview"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="w-full h-full flex-grow bg-white">
          <iframe
            src={website.url}
            className="w-full h-full border-0"
            title={website.title}
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        </div>
      </div>
    </div>
  );
};

export default WebsiteShowcase;