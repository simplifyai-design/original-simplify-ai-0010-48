*/
import React, { useRef, useEffect } from 'react';
import { websites } from '@/data/websites'; // Assuming your data is here
import { ArrowUpRight } from 'lucide-react';

interface WebsiteShowcaseProps {
  onClose: () => void;
}

const WebsiteShowcase: React.FC<WebsiteShowcaseProps> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Click outside to close logic
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div ref={modalRef} className="bg-slate-900 border border-blue-500/30 rounded-2xl max-w-4xl w-full p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">Website Portfolio</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">&times;</button>
        </div>
        <p className="text-slate-300 mb-8">
          Explore our collection of custom websites and web applications built for various industries and business needs.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-h-[60vh] overflow-y-auto pr-4">
          {websites.map((site) => (
            <a
              key={site.title}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 p-6 rounded-lg border border-transparent hover:border-blue-500/50 transition-all group"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-white">{site.title}</h3>
                <ArrowUpRight className="text-slate-400 group-hover:text-blue-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <p className="text-slate-400">{site.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsiteShowcase;
