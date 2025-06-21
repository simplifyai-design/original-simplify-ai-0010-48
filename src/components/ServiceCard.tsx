
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    gradient: string;
    tags: string[];
    imageUrl: string;
    fallbackText: string;
  };
  onClick: () => void;
}

const ServiceCard = ({ service, onClick }: ServiceCardProps) => {
  return (
    <Card
      onClick={onClick}
      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-600 shadow-lg cursor-pointer backdrop-blur-sm hover:border-emerald-500/50 flex flex-col h-full bg-slate-900"
    >
      <div
        className={`h-48 bg-gradient-to-br ${service.gradient} relative overflow-hidden rounded-t-lg`}
      >
        <img
          src={service.imageUrl}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-lg font-semibold transform transition-transform duration-300 group-hover:scale-105">{service.fallbackText}</span>
        </div>
      </div>
      
      <CardHeader className="flex-grow">
        <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
        <CardDescription className="text-gray-300 text-sm leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 bg-gray-800 text-emerald-400 text-xs rounded-full border border-emerald-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center text-emerald-400 text-sm font-medium group-hover:text-emerald-300 transition-colors">
          Learn More
          <ChevronDown className="ml-1 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
