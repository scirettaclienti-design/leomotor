import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ClubEthos: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.ethos-element', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
      y: 30,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'power3.out'
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full bg-[#050505] py-32 md:py-48 px-6 md:px-12 border-b border-[#111]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        
        {/* Architectural Sidebar */}
        <div className="md:col-span-4 flex flex-col justify-start border-l border-[#222] pl-8">
          <span className="ethos-element text-[#a89050] font-sans tracking-[0.3em] text-[9px] uppercase font-bold mb-4 block">
            Positioning
          </span>
          <h2 className="ethos-element text-white font-display text-3xl md:text-4xl uppercase font-light tracking-widest leading-snug">
            Non un <span className="text-gray-500 font-elegant italic lowercase tracking-normal">noleggio.</span><br/>
            Un sistema.
          </h2>
        </div>
        
        {/* Main Content */}
        <div className="md:col-span-8 flex flex-col justify-center">
          <p className="ethos-element text-gray-400 font-sans tracking-wide text-sm md:text-base leading-relaxed font-light max-w-2xl">
            LEO MOTOR AUTO sviluppa soluzioni di mobilità premium attraverso un modello di gestione e assegnazione veicoli su richiesta. Abbandoniamo le logiche del noleggio tradizionale per abbracciare un approccio curatoriale e istituzionale. Ogni richiesta viene analizzata, validata e gestita in modo dedicato per garantire standard altissimi e continuità operativa ai nostri partner corporate.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ClubEthos;
