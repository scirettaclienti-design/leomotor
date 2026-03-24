import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(logoRef.current, 
      { opacity: 0, scale: 0.92, filter: 'blur(12px)' },
      { 
        opacity: 1, 
        scale: 1, 
        filter: 'blur(0px)',
        duration: 2.8, 
        ease: 'power3.out' 
      }
    );

    gsap.fromTo(textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 2, delay: 0.8, ease: 'power2.out' }
    );
  }, { scope: containerRef });

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" ref={containerRef} className="relative w-full h-[90vh] bg-[#050505] flex items-center justify-center overflow-hidden border-b border-[#111]">
      
      {/* Absolute strict architectural grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full max-w-[1400px] mx-auto border-x border-[#333] grid grid-cols-4 divide-x divide-[#222]" />
      </div>

      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, rgba(30,30,30,0.4) 0%, #050505 70%)'
      }} />

      <div className="max-w-[1400px] w-full px-6 md:px-12 flex flex-col items-center relative z-10 pt-20">
        <img 
          ref={logoRef}
          src="/LOGO.png" 
          alt="LEO MOTOR AUTO" 
          className="w-[280px] md:w-[360px] object-contain mb-16 opacity-90 mix-blend-screen" 
        />

        <div ref={textRef} className="flex flex-col items-center text-center">
          <h1 className="text-white font-display text-2xl md:text-3xl tracking-[0.3em] font-light mb-4 uppercase">
            L'Eccellenza <span className="text-[#a89050] font-elegant italic normal-case tracking-normal">in movimento</span>
          </h1>
          
          <div className="w-px h-16 bg-[#333] mx-auto mb-8" />
          
          <div className="border border-[#222] px-8 py-3 bg-[#0a0a0a] flex items-center gap-4 mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a89050] animate-pulse" />
            <p className="text-gray-400 font-sans tracking-[0.2em] text-[9px] md:text-[10px] uppercase">
              Flotta 2024-2025 interamente assegnata. Nuove disponibilità su richiesta.
            </p>
          </div>

          <button 
            onClick={scrollToForm}
            className="text-[#a89050] hover:text-white border-b border-[#a89050]/30 hover:border-white font-sans uppercase tracking-[0.2em] text-[10px] pb-1 transition-all duration-300 flex items-center gap-3 group"
          >
            Richiedi disponibilità
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;
