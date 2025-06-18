
import React from 'react';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-12 md:py-20 relative z-10 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-bold text-center mb-8 md:mb-12 text-white text-3xl md:text-5xl">Investment Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-gray-900 rounded-lg p-6 md:p-8 border-2 border-transparent hover:border-purple-800 transition-colors bg-slate-700">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-violet-300">Strategy Session</h3>
            <p className="text-3xl md:text-4xl font-bold text-blue-200">$125/hour</p>
            <ul className="mt-6 space-y-2 text-sm md:text-base">
              <li className="mt-6">✓ 1-2 hour sessions</li>
              <li>✓ Automation roadmap</li>
              <li>✓ Tool recommendations</li>
            </ul>
          </div>
          <div className="border-2 border-purple-800 text-white rounded-lg p-6 md:p-8 relative bg-slate-800">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-800 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold">Most Popular</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-300">Custom Projects</h3>
            <p className="text-3xl md:text-4xl font-bold">Quoted</p>
            <div className="mt-6 text-sm md:text-base">
              <p>Simple: $2,500-5,000</p>
              <p>Medium: $5,000-15,000</p>
              <p>Complex: $15,000+</p>
            </div>
          </div>
          <div className="text-white rounded-lg p-6 md:p-8 border-2 border-transparent hover:border-purple-800 transition-colors bg-slate-900">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-300">Ongoing Support</h3>
            <p className="text-3xl md:text-4xl font-bold">Monthly</p>
            <div className="mt-6 text-sm md:text-base">
              <p>Basic: $500/month</p>
              <p>Active: $1,500/month</p>
              <p>Complex: $3,000+/month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
