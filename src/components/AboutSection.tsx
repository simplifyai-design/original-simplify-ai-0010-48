
import React, { useState } from 'react';
import { Play } from 'lucide-react';

const AboutSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <section id="about" className="py-20 px-6 bg-slate-950 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* Your Headshot Image with Play Button */}
        <div className="md:w-1/3 flex-shrink-0 relative">
          <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-slate-700 relative group cursor-pointer" onClick={handlePlayVideo}>
            <img 
              src="https://assets.simplifyai.design/BAHeadshot.png" 
              alt="Brandon, Founder of SimplifyAI Design" 
              className="w-full h-full object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
              <div className="bg-white/90 rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-slate-900 ml-1" fill="currentColor" />
              </div>
            </div>
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

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={handleCloseVideo}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={handleCloseVideo}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold"
            >
              ×
            </button>
            <video 
              src="https://pub-2318b5cce7c14fd9968cc87f77eed0bc.r2.dev/Brandon%20Video2.mp4"
              controls
              autoPlay
              className="w-full rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
