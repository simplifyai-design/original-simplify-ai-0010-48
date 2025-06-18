import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-950 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* Your Headshot Image */}
        <div className="md:w-1/3 flex-shrink-0">
          <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-slate-700">
            <img 
              src="https://assets.simplifyai.design/BAHeadshot.png" 
              alt="Brandon, Founder of SimplifyAI Design" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Your Philosophy / Story */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Philosophy: Better Systems, Better Life.
          </h2>
          <div className="text-lg text-slate-300 space-y-6">
            <p>
              My process begins with a simple question: "What's keeping you awake at night?"
            </p>
            <p>
              After directing HR and IT operations for 17 years at a Big Four accounting firm, I learned that the best technology is useless if it doesn't solve a real human problem. I don't sell pre-packaged solutions; I partner with you to truly understand your business's unique challenges and design systems that bring you peace of mind.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutSection;
