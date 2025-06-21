
import React from 'react';
import { X } from 'lucide-react';

interface Website {
  title: string;
  url: string;
  description: string;
}

interface WebsiteShowcaseProps {
  website: Website;
  onClose: () => void;
}

const WebsiteShowcase = ({ website, onClose }: WebsiteShowcaseProps) => {
  return (
    <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white rounded-lg overflow-hidden">
        <div className="flex items-center justify-between p-4 bg-slate-800 text-white">
          <div>
            <h3 className="text-lg font-semibold">{website.title}</h3>
            <p className="text-sm text-gray-300">{website.description}</p>
            <p className="text-xs text-cyan-400 mt-1">{website.url}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <iframe
          src={website.url}
          className="w-full h-full border-0"
          title={website.title}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-navigation"
          onError={(e) => {
            console.log('Iframe failed to load:', website.url);
          }}
        />
      </div>
    </div>
  );
};

export default WebsiteShowcase;
