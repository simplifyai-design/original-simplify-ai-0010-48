
import React, { useState, useEffect } from 'react';

const VideoBackground = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [canAutoplay, setCanAutoplay] = useState(false);

  useEffect(() => {
    // Enhanced mobile detection
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(userAgent) ||
                            window.innerWidth <= 768 ||
                            ('ontouchstart' in window);
      
      console.log('Mobile detection:', isMobileDevice, 'User agent:', userAgent);
      setIsMobile(isMobileDevice);
      
      // Test autoplay capability on mobile
      if (isMobileDevice) {
        const testVideo = document.createElement('video');
        testVideo.muted = true;
        testVideo.playsInline = true;
        testVideo.autoplay = true;
        testVideo.src = 'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMWF2YzEAAAAIZnJlZQAAAFBtZGF0AAAASwSAgAQAABNMQDR7LjL/AAAAKmIjpCKCKAAAAAAAAAAAAAAA////AAAAAEAAAAAAAGWk6L8/////AAAABGQAAAAAAAFub05vAQAAAEVtdmhkAAAAAAAAAAAAAAAAAAAAA+gAAAAAAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAtHRyYWsAAAA...';
        
        const playPromise = testVideo.play();
        if (playPromise) {
          playPromise.then(() => {
            console.log('Autoplay is supported on this mobile device');
            setCanAutoplay(true);
          }).catch(() => {
            console.log('Autoplay is NOT supported on this mobile device');
            setCanAutoplay(false);
          });
        } else {
          setCanAutoplay(false);
        }
      } else {
        setCanAutoplay(true);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show video only if not mobile OR if mobile supports autoplay
  const shouldShowVideo = !isMobile || canAutoplay;

  return (
    <>
      {/* Video Background - only show if conditions are met */}
      {!videoError && shouldShowVideo && (
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
          onPlay={() => console.log('Video started playing')}
          onPause={() => console.log('Video paused')}
        >
          <source src="https://assets.simplifyai.design/0617(2).mp4" type="video/mp4" />
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Animated fallback background with uploaded image */}
      {(!shouldShowVideo || !videoLoaded || videoError) && (
        <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
          {/* Main background image with subtle movement */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-[pan_20s_ease-in-out_infinite_alternate]"
            style={{
              backgroundImage: `url('/lovable-uploads/5fa355f9-d698-429a-9adc-4bdefd6d0042.png')`,
              transform: 'scale(1.1)' // Slight zoom to allow for panning motion
            }}
          />
          
          {/* Animated overlay layers for extra motion */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-cyan-900/30 animate-[slide-horizontal_8s_ease-in-out_infinite_alternate]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent animate-pulse" />
          
          {/* Subtle moving light effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent transform rotate-45 translate-x-full animate-[sweep_12s_ease-in-out_infinite]" />
        </div>
      )}

      {/* Dark overlay for better text readability */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/40 pointer-events-none z-0" />
    </>
  );
};

export default VideoBackground;
