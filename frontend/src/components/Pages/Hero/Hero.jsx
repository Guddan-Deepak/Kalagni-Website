// components/Hero.jsx
import React from 'react';
import kalagniLogo from '../../../assets/logo.jpg';
import heroBg from '../../../assets/home/Picture3.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen min-w-[100vw] flex items-center justify-center overflow-hidden bg-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url(${heroBg})`,
          filter: "contrast(1.1) saturate(1.15)"
        }}
      />

      {/* Pastel gradient overlay */}
      <div className="
    absolute inset-0
    bg-gradient-to-b
    from-purple-100/60
    via-pink-100/50
    to-blue-100/60
    animate-gradient-shift
  " />

      {/* Floating light orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl animate-float-slow mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300/40 rounded-full blur-3xl animate-float-slower mix-blend-screen"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">

        {/* Heading */}
        <h1 className="text-7xl md:text-9xl font-bold mb-2 tracking-tighter animate-fade-in-up">
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient-text">
            Arts
          </span>
        </h1>

        <h1 className="text-7xl md:text-9xl font-bold mb-8 tracking-tighter leading-none animate-fade-in-up delay-100">
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient-text">
            Committee
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-light tracking-wide mb-12 animate-fade-in-up delay-200">
          Celebrating Creativity in All Forms
        </p>

        {/* Scroll indicator */}
        <div className="text-gray-500 text-sm tracking-widest uppercase font-medium animate-bounce-slow">
          Scroll down to explore →
        </div>
      </div>
    </section>

  );
};

export default Hero;