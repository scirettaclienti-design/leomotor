import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';

export interface CarSpecs {
  id: number;
  name: string;
  category: string;
  image: string;
  engine: string;
  hp: string;
  torque: string;
  acceleration: string;
  topSpeed: string;
  status: string;
}

interface CarDrawerProps {
  car: CarSpecs | null;
  isOpen: boolean;
  onClose: () => void;
}

const CarDrawer: React.FC<CarDrawerProps> = ({ car, isOpen, onClose }) => {
  const [bookingState, setBookingState] = useState<'idle' | 'form' | 'processing' | 'success'>('idle');

  const handleClose = () => {
    setBookingState('idle');
    onClose();
  };

  const submitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingState('processing');
    setTimeout(() => setBookingState('success'), 2500);
  };

  // Determine pulse color relative to status
  const isAvailable = car?.status === 'PRENOTATA - BOOKED';
  const indicatorColor = isAvailable ? 'bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.8)]' : 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]';
  const textColor = isAvailable ? 'text-amber-100' : 'text-red-100';

  // Telemetry Mathematics
  const parseNum = (str: string) => parseInt(str.replace(/\D/g, '')) || 0;
  const hpPercent = car ? Math.min((parseNum(car.hp) / 500) * 100, 100) : 0;
  const torquePercent = car ? Math.min((parseNum(car.torque) / 700) * 100, 100) : 0;
  const speedPercent = car ? Math.min((parseNum(car.topSpeed) / 320) * 100, 100) : 0;

  return (
    <AnimatePresence>
      {isOpen && car && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
          />

          {/* Ultra-Premium Glassmorphic Drawer Window */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            className="fixed right-0 top-0 bottom-0 w-full md:w-[600px] lg:w-[700px] bg-[#050505] border-l border-[#D4AF37]/20 shadow-2xl flex flex-col z-50"
          >
            {/* Scrollable Main Area */}
            <div className="flex-1 overflow-y-auto">
              {/* Image Header */}
              <div className="relative w-full h-[350px] md:h-[400px] shrink-0 bg-[#111]">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-black/50 pointer-events-none" />
                
                <button 
                  onClick={handleClose}
                  className="absolute top-6 right-6 p-4 bg-black/80 hover:bg-[#D4AF37] border border-white/10 hover:border-transparent rounded-full text-white transition-all hover:rotate-90 z-20"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="px-6 md:px-14 pt-8 md:pt-10 pb-16 flex flex-col bg-[#050505] relative">
                
                <div className="mb-10 border-b border-[#222] pb-8">
                  <span className="text-[#a89050] text-[9px] tracking-[0.3em] uppercase mb-4 font-bold block">
                    {car.category}
                  </span>
                  <h2 className="text-white font-display text-3xl md:text-4xl uppercase tracking-wide font-light">
                    {car.name}
                  </h2>
                </div>

                {/* DYNAMIC CONTENT AREA: SPECS vs BOOKING FORM */}
                <AnimatePresence mode="wait">
                  {bookingState === 'idle' && (
                    <motion.div 
                      key="specs"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex flex-col"
                    >
                      <div className="w-full bg-[#0a0a0a] border border-[#222] p-5 flex items-center justify-between mb-10 rounded-sm shadow-inner">
                        <div className="flex items-center">
                          <div className={`w-2 h-2 rounded-full animate-pulse mr-4 ${indicatorColor}`} />
                          <span className={`font-mono text-[9px] uppercase tracking-[0.2em] font-bold ${textColor}`}>
                            STATUS: {car.status}
                          </span>
                        </div>
                        <span className="text-gray-600 font-mono text-[9px] tracking-widest">ID: LM-{car.id}</span>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#222] border border-[#222]">
                        
                        {/* Grid Item 1: Motore */}
                        <div className="bg-[#050505] p-6 flex flex-col justify-center">
                          <span className="text-gray-500 text-[8px] uppercase tracking-[0.3em] mb-2 font-mono">Motore</span>
                          <span className="text-white text-xs md:text-sm tracking-widest font-light">{car.engine}</span>
                        </div>
                        
                        {/* Grid Item 2: Potenza (Telemetry) */}
                        <div className="bg-[#050505] p-6 flex flex-col justify-center gap-3">
                          <div className="flex justify-between items-center w-full">
                            <span className="text-gray-500 text-[8px] uppercase tracking-[0.3em] font-mono">Potenza</span>
                            <span className="text-white text-xs md:text-sm tracking-widest font-light">{car.hp}</span>
                          </div>
                          <div className="w-full h-0.5 bg-[#222] relative overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }} 
                              animate={{ width: `${hpPercent}%` }} 
                              transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }} 
                              className="absolute left-0 top-0 bottom-0 bg-[#a89050]" 
                            />
                          </div>
                        </div>

                        {/* Grid Item 3: Coppia (Telemetry) */}
                        <div className="bg-[#050505] p-6 flex flex-col justify-center gap-3">
                          <div className="flex justify-between items-center w-full">
                            <span className="text-gray-500 text-[8px] uppercase tracking-[0.3em] font-mono">Coppia</span>
                            <span className="text-white text-xs md:text-sm tracking-widest font-light">{car.torque}</span>
                          </div>
                          <div className="w-full h-0.5 bg-[#222] relative overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }} 
                              animate={{ width: `${torquePercent}%` }} 
                              transition={{ delay: 0.4, duration: 1.2, ease: 'easeOut' }} 
                              className="absolute left-0 top-0 bottom-0 bg-white" 
                            />
                          </div>
                        </div>

                        {/* Grid Item 4: 0-100 */}
                        <div className="bg-[#050505] p-6 flex flex-col justify-center">
                          <span className="text-gray-500 text-[8px] uppercase tracking-[0.3em] mb-2 font-mono">0-100 km/h</span>
                          <span className="text-white text-xs md:text-sm tracking-widest font-light">{car.acceleration}</span>
                        </div>

                        {/* Grid Item 5: V.Max (Telemetry) */}
                        <div className="bg-[#050505] p-6 flex flex-col justify-center gap-3">
                          <div className="flex justify-between items-center w-full">
                            <span className="text-gray-500 text-[8px] uppercase tracking-[0.3em] font-mono">V. Max</span>
                            <span className="text-white text-xs md:text-sm tracking-widest font-light">{car.topSpeed}</span>
                          </div>
                          <div className="w-full h-0.5 bg-[#222] relative overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }} 
                              animate={{ width: `${speedPercent}%` }} 
                              transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }} 
                              className="absolute left-0 top-0 bottom-0 bg-[#D4AF37]" 
                            />
                          </div>
                        </div>

                        {/* Grid Item 6: Segmento */}
                        <div className="bg-[#050505] p-6 flex flex-col justify-center">
                          <span className="text-gray-500 text-[8px] uppercase tracking-[0.3em] mb-2 font-mono">Segmento</span>
                          <span className="text-white text-[9px] tracking-[0.2em] font-light uppercase">{car.category}</span>
                        </div>
                        
                      </div>
                    </motion.div>
                  )}

                  {bookingState === 'form' && (
                    <motion.div 
                      key="form"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex flex-col"
                    >
                      <div className="flex items-center gap-3 mb-8">
                        <ShieldCheck className="text-[#D4AF37]" size={24} />
                        <h3 className="text-xl text-white font-display tracking-widest uppercase">Applicazione Ufficiale</h3>
                      </div>
                      
                      <form id="drawer-form" onSubmit={submitApplication} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-gray-400 text-[10px] tracking-[0.2em] uppercase font-mono">Nome e Cognome / Società</label>
                          <input required type="text" className="w-full bg-[#111] border border-[#333] p-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors font-light" placeholder="Intestatario pratiche" />
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <label className="text-gray-400 text-[10px] tracking-[0.2em] uppercase font-mono">Email Istituzionale</label>
                          <input required type="email" className="w-full bg-[#111] border border-[#333] p-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors font-light" placeholder="ceo@company.com" />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-gray-400 text-[10px] tracking-[0.2em] uppercase font-mono">Periodo Richiesto</label>
                          <select className="w-full bg-[#111] border border-[#333] p-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors font-light appearance-none">
                            <option>Weekend lungo (3 Giorni)</option>
                            <option>Settimanale (7 Giorni)</option>
                            <option>Mensile (Corporate)</option>
                          </select>
                        </div>
                      </form>
                    </motion.div>
                  )}

                  {bookingState === 'processing' && (
                    <motion.div 
                      key="processing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col items-center justify-center py-20"
                    >
                      <div className="w-16 h-16 border-t-2 border-[#D4AF37] border-solid rounded-full animate-spin mb-8" />
                      <h3 className="text-white font-display text-2xl tracking-widest uppercase mb-4 animate-pulse">Criptazione in corso...</h3>
                      <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.2em]">Generazione Hash Bancario</p>
                    </motion.div>
                  )}

                  {bookingState === 'success' && (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-20"
                    >
                      <CheckCircle2 className="text-emerald-500 mb-8" size={64} />
                      <h3 className="text-white font-display text-3xl tracking-widest uppercase mb-4">Pratica Avviata</h3>
                      <p className="text-gray-400 font-light text-sm leading-relaxed max-w-sm">
                        La tua richiesta per la {car.name} è stata sigillata nei nostri sistemi. Un nostro funzionario ti contatterà entro 1 ora lavorativa.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* FIXED ACTION FOOTER (Never scrolls, always visible at bottom) */}
            <div className="w-full bg-[#050505] p-6 md:p-8 border-t border-[#1a1a1a] shadow-[0_-20px_40px_rgba(3,3,3,0.9)] z-20 shrink-0">
              {bookingState === 'idle' && (
                <button 
                  onClick={() => setBookingState('form')}
                  className="w-full flex items-center justify-center gap-4 py-5 md:py-6 bg-[#D4AF37] hover:bg-white text-black transition-colors uppercase tracking-[0.2em] text-[11px] md:text-sm font-bold"
                >
                  Prenota Vettura
                  <ChevronRight size={16} />
                </button>
              )}

              {bookingState === 'form' && (
                <div className="flex gap-4">
                  <button 
                    type="button"
                    onClick={() => setBookingState('idle')}
                    className="w-1/3 py-5 bg-transparent border border-[#333] hover:bg-[#111] text-gray-400 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold transition-all"
                  >
                    Annulla
                  </button>
                  <button 
                    type="submit"
                    form="drawer-form"
                    className="w-2/3 py-5 bg-white hover:bg-[#D4AF37] text-black uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold transition-all"
                  >
                    Invia Richiesta
                  </button>
                </div>
              )}

              {(bookingState === 'processing' || bookingState === 'success') && (
                <button 
                  onClick={handleClose}
                  disabled={bookingState === 'processing'}
                  className={`w-full py-5 border uppercase tracking-[0.2em] text-[11px] md:text-xs font-bold transition-colors ${
                    bookingState === 'processing' 
                      ? 'bg-[#111] border-[#222] text-[#444] cursor-not-allowed' 
                      : 'bg-white hover:bg-gray-200 border-white text-black'
                  }`}
                >
                  {bookingState === 'success' ? 'Chiudi' : 'Attendere...'}
                </button>
              )}
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CarDrawer;
