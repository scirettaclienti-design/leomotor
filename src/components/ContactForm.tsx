import React, { useState } from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact-form" className="w-full bg-[#050505] py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* Architectural Left Column */}
        <div className="lg:w-1/3 flex flex-col border-l border-[#a89050]/50 pl-8 h-fit">
          <ShieldCheck size={24} className="text-[#a89050] mb-8 opacity-80" />
          <h2 className="text-white font-display text-3xl uppercase tracking-widest font-light mb-4">
            Richiedi <br/><span className="text-[#a89050] font-elegant italic lowercase tracking-normal">assegnazione</span>
          </h2>
          <p className="text-gray-400 font-sans tracking-wide text-xs leading-relaxed max-w-xs">
             Modulo di pre-qualificazione tecnica e accreditamento. Le richieste verranno processate dai nostri funzionari commerciali entro 2 ore operative.
          </p>
        </div>

        {/* Tactical CRM Block */}
        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit} className="w-full bg-[#020202] border border-[#222] p-8 md:p-12 flex flex-col gap-10">
            
            {status === 'success' ? (
              <div className="flex flex-col items-start py-20">
                <div className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center mb-6">
                  <ShieldCheck size={20} className="text-emerald-500" />
                </div>
                <h3 className="text-white font-display text-xl tracking-widest uppercase mb-4">Pratica Acquisita</h3>
                <p className="text-gray-400 font-light text-sm max-w-md">
                  La tua richiesta è stata registrata in priorità nei nostri sistemi direzionali. Un functionary dedicato ti contatterà per finalizzare l'onboarding.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-gray-500 text-[8px] tracking-[0.3em] uppercase font-bold">Ragione Sociale / Nominativo</label>
                    <input required type="text" className="w-full bg-[#050505] border border-[#222] p-4 text-white focus:outline-none focus:border-[#a89050] transition-colors font-light text-xs" placeholder="Es. Mario Rossi / Azienda Spa" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-gray-500 text-[8px] tracking-[0.3em] uppercase font-bold">Email Corporate</label>
                    <input required type="email" className="w-full bg-[#050505] border border-[#222] p-4 text-white focus:outline-none focus:border-[#a89050] transition-colors font-light text-xs" placeholder="direzione@azienda.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#111] pt-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-gray-500 text-[8px] tracking-[0.3em] uppercase font-bold">Tipologia Inquadramento</label>
                    <select className="w-full bg-[#050505] border border-[#222] p-4 text-white focus:outline-none focus:border-[#a89050] transition-colors font-light text-xs appearance-none cursor-pointer">
                      <option>Azienda Strutturata</option>
                      <option>Professionista / P.IVA</option>
                      <option>Utente Privato</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-gray-500 text-[8px] tracking-[0.3em] uppercase font-bold">Categoria Target</label>
                    <select className="w-full bg-[#050505] border border-[#222] p-4 text-white focus:outline-none focus:border-[#a89050] transition-colors font-light text-xs appearance-none cursor-pointer">
                      <option>Executive / Alta Rappresentanza</option>
                      <option>Premium SUV / Space</option>
                      <option>Urban / Business Mobility</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-gray-500 text-[8px] tracking-[0.3em] uppercase font-bold">Orizzonte Temporale</label>
                    <select className="w-full bg-[#050505] border border-[#222] p-4 text-white focus:outline-none focus:border-[#a89050] transition-colors font-light text-xs appearance-none cursor-pointer">
                      <option>Mandato Lungo (12-36 mesi)</option>
                      <option>Assegnazione Media (Mensile)</option>
                      <option>Assegnazione Spot (1-7 Giorni)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-3 border-t border-[#111] pt-8">
                  <label className="text-gray-500 text-[8px] tracking-[0.3em] uppercase font-bold">Specifiche Tecniche o Note Istituzionali</label>
                  <textarea rows={3} className="w-full bg-[#050505] border border-[#222] p-4 text-white focus:outline-none focus:border-[#a89050] transition-colors font-light text-xs resize-none" placeholder="Dati operativi aggiuntivi..." />
                </div>

                <div className="mt-4 flex justify-start">
                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="border border-[#a89050] hover:bg-[#a89050] text-[#a89050] hover:text-black font-sans uppercase tracking-[0.2em] text-[10px] px-8 py-4 transition-all duration-300 font-bold flex items-center gap-3 group"
                  >
                    {status === 'submitting' ? 'Elaborazione in corso...' : 'Invia Richiesta Esclusiva'}
                    {!status && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                </div>
              </>
            )}

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
