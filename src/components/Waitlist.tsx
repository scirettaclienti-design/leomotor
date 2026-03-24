import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Waitlist: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgRef.current) return;
    
    // Slow pulsing 3D-like background effect using GSAP
    gsap.to(bgRef.current.children, {
      y: 'random(-50, 50)',
      x: 'random(-50, 50)',
      scale: 'random(0.8, 1.2)',
      rotation: 'random(-20, 20)',
      opacity: 'random(0.3, 0.7)',
      duration: 10,
      ease: 'sine.inOut',
      stagger: {
        each: 2,
        repeat: -1,
        yoyo: true
      }
    });
  }, []);

  return (
    <section className="relative w-full h-[80vh] bg-black overflow-hidden flex items-center justify-center border-t border-[#1a1a1a]">
      {/* Blurred Bokeh Background */}
      <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none opacity-80 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-[100px] opacity-60" />
        <div className="absolute top-1/2 right-1/4 w-[30rem] h-[30rem] bg-amber-600 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-[#333333] rounded-full blur-[80px] opacity-90" />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tighter">
          Join the Waitlist
          <span className="block text-gold text-2xl md:text-3xl mt-2 font-light tracking-wide">for 2026</span>
        </h2>
        
        <p className="text-gray-400 mb-12 font-light tracking-widest uppercase">
          Strictly reserved access. Invitations are highly limited.
        </p>

        <form className="flex flex-col md:flex-row gap-4 justify-center items-center" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="ENTER VIP EMAIL" 
            className="w-full md:w-96 bg-black/50 border border-gold/30 px-6 py-4 text-white text-sm tracking-widest uppercase focus:outline-none focus:border-gold transition-colors backdrop-blur-md"
            required
          />
          <button 
            type="button" 
            className="w-full md:w-auto bg-gold text-black font-bold uppercase tracking-widest text-sm px-10 py-4 hover:bg-white transition-colors duration-500"
          >
            Request Invitation
          </button>
        </form>
      </div>
    </section>
  );
};

export default Waitlist;
