
import React, { useState } from 'react';

const VideoBackground = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <>
      {/* Video Background */}
      {!videoError && (
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
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Fallback background */}
      {(!videoLoaded || videoError) && (
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 z-0" />
      )}

      {/* Dark overlay for better text readability */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/40 pointer-events-none z-0" />
    </>
  );
};

export default VideoBackground;
