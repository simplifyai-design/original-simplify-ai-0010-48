import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Our Philosophy: Better Systems, Better Life.
        </h2>
        <div className="text-lg text-slate-300 space-y-6">
          <p>
            My process begins with a simple question: "What's keeping you awake at night?"
          </p>
          <p>
            After directing Human Capital Management and IT Opeartions of a national practice for over twenty years at a Big Four accounting firm, I learned that the best technology is useless if it doesn't solve a real human problem. I don't sell pre-packaged solutions; I partner with you to truly understand your business's unique challenges and design systems that bring you peace of mind.
          </p>
          <p>
            Holding a Master's in Organizational Development and Adult Education, my passion isn't just implementing tools; it's educating my clients on what's possible. I speak both languages fluently—business operations and technology—allowing me to bridge the gap between your goals and the custom-built solutions required to achieve them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
