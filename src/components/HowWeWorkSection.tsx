
import React from 'react';

const HowWeWorkSection = () => {
  const steps = [{
    number: "1",
    title: "Understand Your Needs",
    description: "Discovery call or assessment to identify your challenges and goals"
  }, {
    number: "2",
    title: "Design Your Solution",
    description: "Custom strategy and recommendations tailored to your business"
  }, {
    number: "3",
    title: "Deliver Results",
    description: "Implementation and support to ensure successful adoption"
  }];

  return (
    <section id="how-we-work" className="py-20 px-6 bg-gray-700 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">How We Work</h2>
          <p className="text-xl text-gray-300">Simple, transparent, results-driven</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => 
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
