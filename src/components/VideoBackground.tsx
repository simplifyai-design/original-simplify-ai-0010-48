
import React, { useState, useEffect } from 'react';

const VideoBackground = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
  }, []);

  return (
    <>
      {/* Video Background - only load on desktop or if mobile supports autoplay */}
      {!videoError && !isMobile && (
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="metadata"
          className="fixed top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
          onLoadedData={() => {
            console.log('Video loaded successfully');
            setVideoLoaded(true);
            setVideoError(false);
          }}
          onError={(e) => {
            console.error('Video failed to load, switching to fallback');
            setVideoLoaded(false);
            setVideoError(true);
          }}
          onCanPlay={() => console.log('Video can start playing')}
        >
          <source src="https://simplifyai.design/0617(1).mp4" type="video/mp4" />
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Fallback background for mobile or when video fails */}
      {(isMobile || !videoLoaded || videoError) && (
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 z-0" />
      )}

      {/* Dark overlay for better text readability */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/40 pointer-events-none z-0" />
    </>
  );
};

export default VideoBackground;
