*/
import React, { useRef, useEffect } from 'react';
import { websites } from '@/data/websites'; 
import { ArrowUpRight, X } from 'lucide-react';

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
      <div ref={modalRef} className="bg-slate-900 border border-blue-500/30 rounded-2xl max-w-4xl w-full p-8 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
          <X size={24} />
        </button>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-b
