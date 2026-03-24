import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="w-full bg-[#020202] py-32 px-6 md:px-12 border-b border-[#111]">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

        <div className="lg:w-1/3 flex flex-col border-l border-[#222] pl-8">
          <span className="text-[#a89050] font-sans tracking-[0.3em] text-[9px] uppercase font-bold mb-4 block">
            Endorsements
          </span>
          <h2 className="text-white font-display text-3xl uppercase tracking-widest font-light">
            La voce <br/><span className="text-gray-500 font-elegant italic lowercase tracking-normal">del club</span>
          </h2>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          
          <div className="flex flex-col border-l border-[#222] pl-8">
            <p className="text-white font-sans text-sm tracking-wide font-light leading-loose mb-8">
              "LEO MOTOR ha ridefinito il concetto di mobilità per il nostro board direttivo. Veicoli ed esecuzioni impeccabili e tempistiche perfette. Un vero standard corporate."
            </p>
            <div className="flex flex-col mt-auto">
              <span className="text-[#a89050] font-sans text-[9px] tracking-[0.3em] uppercase mb-1">A. Rossi</span>
              <span className="text-gray-500 font-sans text[10px] tracking-widest italic lowercase">CEO Finanza Milano</span>
            </div>
          </div>

          <div className="flex flex-col border-l border-[#222] pl-8">
            <p className="text-white font-sans text-sm tracking-wide font-light leading-loose mb-8">
              "Discrezione assoluta ed esecuzione sartoriale. L'unica scelta percorribile per i nostri spostamenti di rappresentanza e operazioni ad alto livello formale."
            </p>
            <div className="flex flex-col mt-auto">
              <span className="text-[#a89050] font-sans text-[9px] tracking-[0.3em] uppercase mb-1">M. Bianchi</span>
              <span className="text-gray-500 font-sans text[10px] tracking-widest italic lowercase">Studio Legale Associato V.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
