import React from 'react';

export const Demo = () => {
  return (
    <section id="demo" className="py-16 hero-background">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-crimson mb-4 text-center font-primary">
          See DarkGPT in Action
        </h2>
        <h3 className="text-2xl text-white mb-8 text-center font-secondary">
          Experience the power of AI-driven cybersecurity
        </h3>
        <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            controlsList="nodownload noremoteplayback"
          >
            <source src="/darkgpt-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};