import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Selezione",
    subtitle: "Identità Visiva",
    desc: "Identificazione del modello dal nostro portfolio riservato. Accesso esclusivo alle configurazioni di massimo livello della Ghost Fleet."
  },
  {
    num: "02",
    title: "Analisi & Semplificazione",
    subtitle: "Burocrazia Annullata",
    desc: "Valutazione rapida del profilo cliente. Nessuna trafila documentale standard: godrai di un iter snello, pre-approvato per aziende e professionisti."
  },
  {
    num: "03",
    title: "Assegnazione Blindata",
    subtitle: "Privacy & Sicurezza",
    desc: "Il tuo profilo viene elaborato in un ambiente chiuso, garantendo la totale privacy dei tuoi dati corporate. La flotta viene posizionata esattamente dove richiesto."
  }
];

const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="how-it-works" className="w-full bg-[#020202] py-32 md:py-48 px-6 md:px-12 border-b border-[#111]">
      <div className="max-w-[1000px] mx-auto flex flex-col relative" ref={containerRef}>
        
        <div className="text-center mb-24 md:mb-32">
          <span className="text-[#a89050] font-sans tracking-[0.3em] text-[10px] uppercase font-bold mb-6 block">
            Il Sistema LEO MOTOR
          </span>
          <h2 className="text-white font-display text-3xl md:text-5xl uppercase tracking-widest font-light">
            Semplificazione <span className="text-gray-600 font-elegant italic lowercase tracking-normal px-2">&amp;</span> Sicurezza
          </h2>
        </div>

        {/* Vertical Pipeline */}
        <div className="relative pl-8 md:pl-0">
          
          {/* SVG Line Background */}
          <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-[#111]" />
          
          {/* SVG Animated Line */}
          <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px flex justify-center">
             <motion.div 
               className="w-px bg-gradient-to-b from-[#D4AF37] to-white origin-top shadow-[0_0_15px_rgba(212,175,55,0.6)]"
               style={{ scaleY: scrollYProgress, height: '100%' }}
             />
          </div>

          <div className="flex flex-col gap-24 md:gap-40 relative z-10 py-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20%' }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col md:flex-row items-center w-full relative ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Timeline Node */}
                  <div className="absolute left-[11px] md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#050505] border border-[#a89050] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.4)] transition-all duration-500 hover:scale-150 hover:bg-[#a89050]" />

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pl-20 text-left' : 'md:pr-20 text-left md:text-right'}`}>
                    <span className="text-[#a89050] font-sans text-[10px] mb-4 font-mono tracking-[0.3em] block uppercase">{step.num} // {step.subtitle}</span>
                    <h3 className="text-white font-display text-xl md:text-2xl tracking-[0.2em] uppercase mb-4 font-light">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 font-sans text-xs md:text-sm tracking-widest leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>

                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
