
import React from 'react';

interface ServiceModalProps {
  service: {
    id: string;
    title: string;
    expandedContent: React.ReactNode;
  };
  onClose: () => void;
}

const ServiceModal = ({ service, onClose }: ServiceModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 rounded-lg max-w-4xl w-full max-h-96 overflow-y-auto">
        {service.expandedContent}
        <div className="p-6 pt-0">
          <button
            onClick={onClose}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
