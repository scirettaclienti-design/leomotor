import React from 'react';
import { motion } from 'framer-motion';

const profiles = [
  {
    title: "Privati",
    desc: "Sistemi di mobilità flessibile e premium. Accesso garantito a vetture in condizioni di eccellenza totale."
  },
  {
    title: "Aziende",
    desc: "Gestione veicoli per collaboratori e mezzi di altissima rappresentanza per il leadership team."
  },
  {
    title: "Professionisti",
    desc: "Soluzioni continuative e strategiche pensate per eliminare l'immobilizzazione del capitale e i costi imprevisti."
  }
];

const TargetAudience: React.FC = () => {
  return (
    <section className="w-full bg-[#050505] py-32 px-6 md:px-12 border-b border-[#111]">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row">
        
        {/* Title Block */}
        <div className="lg:w-1/3 flex flex-col border-l border-[#222] pl-8 mb-16 lg:mb-0">
          <span className="text-[#a89050] font-sans tracking-[0.3em] text-[9px] uppercase font-bold mb-4 block">
            Target
          </span>
          <h2 className="text-white font-display text-3xl uppercase tracking-widest font-light">
            A chi è <br/>
            <span className="text-gray-500 font-elegant italic lowercase tracking-normal">rivolto</span>
          </h2>
        </div>

        {/* Matrix Block */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#222] border-y md:border-y-0 md:border-y-none border-[#222]">
          {profiles.map((prof, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="py-10 md:py-0 px-8 flex flex-col justify-start"
            >
              <h3 className="text-white font-sans text-[10px] tracking-[0.3em] font-bold uppercase mb-4 text-[#a89050]">
                {prof.title}
              </h3>
              <p className="text-gray-400 font-sans text-xs tracking-wide leading-relaxed font-light">
                {prof.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TargetAudience;
