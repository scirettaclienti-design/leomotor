import React, { useState } from 'react';
import CarDrawer, { type CarSpecs } from './CarDrawer';
import { motion } from 'framer-motion';

export type VehicleStatus = 'NON DISPONIBILE - BOOKED' | 'PRENOTATA - BOOKED';

export interface OperationalCarSpecs extends CarSpecs {
  utilizzo: string;
}

const carsData: OperationalCarSpecs[] = [
  { id: 1, name: 'Fiat Panda Hybrid', category: 'Urban / Business', utilizzo: 'Città', status: 'NON DISPONIBILE - BOOKED', image: '/cars/panda_black.png', engine: '1.0 Hybrid 70cv', hp: '70 CV', torque: '92 Nm', acceleration: '13.9s', topSpeed: '164 km/h' },
  { id: 2, name: "Fiat 600e 'La Prima'", category: 'Electric', utilizzo: 'Città / Medio raggio', status: 'NON DISPONIBILE - BOOKED', image: '/cars/fiat600_black.png', engine: '100% Elettrico', hp: '156 CV', torque: '260 Nm', acceleration: '9.0s', topSpeed: '150 km/h' },
  { id: 3, name: 'Maserati Grecale Modena', category: 'Premium SUV', utilizzo: 'Rappresentanza', status: 'PRENOTATA - BOOKED', image: '/cars/grecale_black.png', engine: '2.0L L4 MHEV', hp: '330 CV', torque: '450 Nm', acceleration: '5.3s', topSpeed: '240 km/h' },
  { id: 4, name: 'Audi Q3 40 TFSI', category: 'Business SUV', utilizzo: 'Rappresentanza / Lungo termine', status: 'NON DISPONIBILE - BOOKED', image: '/cars/audi_q3_blue.png', engine: '2.0 TFSI quattro', hp: '190 CV', torque: '320 Nm', acceleration: '7.3s', topSpeed: '222 km/h' },
  { id: 5, name: 'Maserati Quattroporte S Q4', category: 'Premium Executive', utilizzo: 'Manageriale', status: 'PRENOTATA - BOOKED', image: '/cars/quattroporte_white.png', engine: 'V6 3.0 Bi-Turbo', hp: '430 CV', torque: '580 Nm', acceleration: '4.8s', topSpeed: '288 km/h' },
  { id: 6, name: 'Mercedes-Benz GLE 350d 4MATIC', category: 'Premium SUV', utilizzo: 'Lungo termine', status: 'NON DISPONIBILE - BOOKED', image: '/cars/mercedes_gle_white.png', engine: 'Diesel 3.0 L6', hp: '272 CV', torque: '600 Nm', acceleration: '6.6s', topSpeed: '226 km/h' },
];

const GhostFleet: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<CarSpecs | null>(null);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'NON DISPONIBILE - BOOKED': return 'text-red-500 bg-red-500/10 border-red-500/20';
      case 'PRENOTATA - BOOKED': return 'text-amber-500 bg-amber-500/10 border-amber-500/20';
      default: return 'text-gray-500 bg-gray-500/10 border-gray-500/20';
    }
  };

  return (
    <section id="fleet" className="w-full bg-[#050505] py-32 md:py-48 px-6 md:px-12 relative overflow-hidden border-b border-[#111]">
      
      {/* Structural Header Grid */}
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row mb-24 lg:mb-40">
        <div className="lg:w-1/3 flex flex-col border-l border-[#222] pl-8">
          <span className="text-[#a89050] font-sans tracking-[0.3em] text-[9px] uppercase font-bold mb-4 block">
            Collezione Operativa
          </span>
          <h2 className="text-white font-display text-3xl uppercase tracking-widest font-light">
            La nostra <br/>
            <span className="text-gray-500 font-elegant italic lowercase tracking-normal">flotta</span>
          </h2>
        </div>

        <div className="lg:w-2/3 flex flex-col justify-end pt-12 lg:pt-0">
          <div className="border border-[#222] px-6 py-4 bg-[#0a0a0a] max-w-sm ml-auto">
            <p className="text-gray-400 font-sans tracking-[0.2em] text-[9px] uppercase leading-relaxed">
              La selezione attuale è interamente in gestione. Nuove assegnazioni disponibili su richiesta formale.
            </p>
          </div>
        </div>
      </div>

      {/* Asymmetrical Exhibition Layout with Strict Styling */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-24 max-w-[1400px] mx-auto pb-32">
        {carsData.map((car, index) => {
          const isEven = index % 2 !== 0;
          
          return (
            <motion.div 
              key={car.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedCar(car)}
              className={`group cursor-none flex flex-col relative ${isEven ? 'lg:mt-32' : ''}`}
            >
              
              <div className="w-full h-[450px] md:h-[550px] relative overflow-hidden bg-[#0a0a0a] border border-[#1a1a1a]">
                <motion.img 
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, margin: '-20%' }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000 grayscale-[50%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/20 pointer-events-none" />
                
                <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
                  <span className={`px-3 py-1.5 border backdrop-blur-md font-sans tracking-[0.2em] text-[8px] uppercase font-bold ${getStatusColor(car.status)}`}>
                    {car.status}
                  </span>
                </div>
              </div>

              {/* Strict Left-Aligned Plaque */}
              <div className="w-[90%] md:w-[80%] -mt-16 p-8 flex flex-col relative z-10 transition-all duration-700 ease-out group-hover:-translate-y-2 bg-[#050505] border border-[#222] self-start ml-4 md:ml-8 shadow-2xl">
                
                <h3 className="text-white font-display text-xl tracking-widest uppercase mb-6">
                  {car.name}
                </h3>
                
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center border-b border-[#222] pb-3">
                    <span className="text-gray-500 font-sans text-[8px] tracking-[0.3em] uppercase">Categoria</span>
                    <span className="text-white font-sans text-[9px] tracking-[0.2em] uppercase">{car.category}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#222] pb-3">
                    <span className="text-gray-500 font-sans text-[8px] tracking-[0.3em] uppercase">Utilizzo Ideale</span>
                    <span className="text-[#a89050] font-sans text-[9px] tracking-[0.2em] uppercase">{car.utilizzo}</span>
                  </div>
                </div>

                <div className="mt-8 flex justify-end items-center">
                  <span className="text-gray-500 font-sans text-[9px] tracking-[0.3em] uppercase group-hover:text-white transition-colors">Visualizza Specifiche &nbsp; →</span>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

      <CarDrawer 
        car={selectedCar} 
        isOpen={!!selectedCar} 
        onClose={() => setSelectedCar(null)} 
      />
    </section>
  );
};

export default GhostFleet;
