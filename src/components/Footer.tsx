import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#020202] border-t border-[#111] pt-24 pb-12 px-6 md:px-12 relative z-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
        
        {/* Brand Column */}
        <div className="md:col-span-4 flex flex-col">
          <img src="/LOGO.png" alt="LEO MOTOR AUTO" className="w-40 object-contain mb-6 opacity-80" />
          <p className="text-gray-500 font-sans text-xs tracking-wide leading-relaxed font-light mb-8 max-w-sm">
            Infrastruttura di mobilità premium e gestione asset veicolari di altissima rappresentanza per aziende e istituzioni.
          </p>
        </div>

        <div className="md:col-span-2 hidden md:block" />

        {/* Corporate Details */}
        <div className="md:col-span-3 flex flex-col border-l border-[#222] pl-8">
          <span className="text-[#a89050] font-sans uppercase tracking-[0.3em] font-bold text-[8px] mb-6 block">
            Corporate HQ
          </span>
          <p className="text-gray-400 font-sans text-xs leading-loose font-light">
            LEO MOTOR AUTO S.r.l.<br/>
            Via Turati 29,<br/>
            20121 Milano (MI), Italia<br/>
            P.IVA 12345678901
          </p>
        </div>

        {/* Contact info */}
        <div className="md:col-span-3 flex flex-col border-l border-[#222] pl-8">
          <span className="text-[#a89050] font-sans uppercase tracking-[0.3em] font-bold text-[8px] mb-6 block">
            Direzione Operativa
          </span>
          <p className="text-gray-400 font-sans text-xs leading-loose font-light mb-4 flex flex-col">
            Numero Verde
            <a href="tel:+39800000000" className="text-white hover:text-[#a89050] transition-colors">800.000.000</a>
          </p>
          <p className="text-gray-400 font-sans text-xs leading-loose font-light flex flex-col">
            Infoline Direzionale
            <a href="mailto:corporate@leomotor.it" className="text-white hover:text-[#a89050] transition-colors">corporate@leomotor.it</a>
          </p>
        </div>

      </div>

      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between border-t border-[#111] pt-8">
        <p className="text-gray-600 font-sans text-[8px] tracking-widest uppercase mb-4 md:mb-0">
          © {new Date().getFullYear()} LEO MOTOR AUTO. Tutti i diritti riservati.
        </p>
        
        <div className="flex gap-8">
          <a href="#" className="text-gray-600 hover:text-[#a89050] font-sans text-[8px] tracking-[0.2em] uppercase transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-600 hover:text-[#a89050] font-sans text-[8px] tracking-[0.2em] uppercase transition-colors">
            Termini di Servizio
          </a>
          <a href="#" className="text-gray-600 hover:text-[#a89050] font-sans text-[8px] tracking-[0.2em] uppercase transition-colors">
            Codice Etico
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
