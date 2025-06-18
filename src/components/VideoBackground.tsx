
import React, { useState } from 'react';

const VideoBackground = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <>
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        preload="none"
        className="fixed top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
        onLoadedData={() => {
          console.log('Video loaded successfully');
          setVideoLoaded(true);
        }}
        onError={(e) => {
          console.error('Video failed to load:', e);
          setVideoLoaded(false);
        }}
        onCanPlay={() => console.log('Video can start playing')}
        onLoadStart={() => console.log('Video loading started')}
      >
        <source src="https://pub-2318b5cce7c14fd9968cc87f77eed0bc.r2.dev/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback background if video fails */}
      {!videoLoaded && (
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 z-0" />
      )}

      {/* Dark overlay for better text readability */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 pointer-events-none z-0" />
    </>
  );
};

export default VideoBackground;
