// components/Hero.jsx
import React, { useEffect, useState } from 'react';
import kalagniLogo from '../assets/logo.jpg';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/30 to-pink-900/20 animate-gradient-shift"></div>
      
      {/* Floating orbs for ambient effect */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float-slower"></div>
      
      {/* Main content */}
      <div 
        className="relative z-10 text-center px-6"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        {/* Logo with subtle animation */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={kalagniLogo} 
            alt="Kalagni Logo" 
            className="w-48 h-48 mx-auto rounded-full object-cover shadow-2xl ring-4 ring-purple-500/30 hover:ring-purple-400/50 transition-all duration-500 hover:scale-105"
          />
        </div>
        
        {/* Heading with gradient text */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-text">
            Kalagni
          </span>
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light tracking-wide animate-fade-in-up-delay">
          Where creativity ignites and art comes alive
        </p>
        
        {/* Subtle scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <svg 
            className="w-6 h-6 text-purple-400/50" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;