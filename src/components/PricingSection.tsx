
import React from 'react';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-800 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Investment Options</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white text-gray-900 rounded-lg p-8 border-2 border-transparent hover:border-orange-500 transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-orange-600">Strategy Session</h3>
            <p className="text-4xl font-bold">$125/hour</p>
            <ul className="mt-6 space-y-2">
              <li>✓ 1-2 hour sessions</li>
              <li>✓ Automation roadmap</li>
              <li>✓ Tool recommendations</li>
            </ul>
          </div>
          <div className="border-2 border-purple-800 bg-gray-700 text-white rounded-lg p-8 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-800 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Custom Projects</h3>
            <p className="text-4xl font-bold">Quoted</p>
            <p className="mt-6">Simple: $2,500-5,000</p>
            <p>Medium: $5,000-15,000</p>
            <p>Complex: $15,000+</p>
          </div>
          <div className="bg-gray-600 text-white rounded-lg p-8 border-2 border-transparent hover:border-purple-800 transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Ongoing Support</h3>
            <p className="text-4xl font-bold">Monthly</p>
            <p className="mt-6">Basic: $500/month</p>
            <p>Active: $1,500/month</p>
            <p>Complex: $3,000+/month</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
