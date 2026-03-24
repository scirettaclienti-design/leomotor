import React from 'react';
import { motion } from 'framer-motion';

const Metrics: React.FC = () => {
  return (
    <section className="w-full bg-[#020202] py-24 px-6 md:px-12 border-b border-[#111]">
      <div className="max-w-[1400px] mx-auto border border-[#222] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#222] bg-[#050505]">
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center py-16"
        >
          <div className="text-white font-display text-5xl font-light mb-3 flex items-start">
            06
          </div>
          <p className="text-gray-500 font-sans tracking-[0.3em] text-[9px] uppercase font-bold">
            Vetture gestite
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center justify-center py-16"
        >
          <div className="text-white font-display text-5xl font-light mb-3 flex items-start">
            100<span className="text-[#a89050] font-sans text-2xl font-bold ml-1">%</span>
          </div>
          <p className="text-gray-500 font-sans tracking-[0.3em] text-[9px] uppercase font-bold">
            Clientela corporate
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center py-16"
        >
          <div className="text-white font-display text-5xl font-light mb-3 flex items-start text-gray-400">
            0<span className="text-gray-600 font-sans text-2xl font-bold ml-1">%</span>
          </div>
          <p className="text-gray-500 font-sans tracking-[0.3em] text-[9px] uppercase font-bold">
            Disponibilità attuale
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Metrics;
