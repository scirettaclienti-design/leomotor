import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface CarCardProps {
  id: number;
  name: string;
  image: string;
  category: string;
}

const CarCard: React.FC<CarCardProps> = ({ name, image, category }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(card, {
        rotationY: x * 0.05,
        rotationX: -y * 0.05,
        transformPerspective: 1000,
        ease: 'power2.out',
        duration: 0.5
      });
      
      gsap.to(imageRef.current, {
        scale: 1.05,
        x: x * -0.02,
        y: y * -0.02,
        ease: 'power2.out',
        duration: 0.5
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        ease: 'power3.out',
        duration: 0.8
      });
      gsap.to(imageRef.current, {
        scale: 1,
        x: 0,
        y: 0,
        ease: 'power3.out',
        duration: 0.8
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef} 
      className="group relative w-full h-[450px] md:h-[600px] rounded-sm overflow-hidden bg-[#111] border border-[#222] cursor-not-allowed"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          ref={imageRef}
          src={image} 
          alt={name}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end translate-z-10" style={{ transform: 'translateZ(50px)' }}>
        <p className="text-gold text-xs tracking-[0.2em] mb-2 uppercase">{category}</p>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 uppercase tracking-wider">{name}</h3>
        
        {/* Status Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-red-900/40 border border-red-500/50 backdrop-blur-md self-start">
          <span className="w-2 h-2 rounded-full bg-red-500 mr-3 animate-pulse"></span>
          <span className="text-red-200 text-xs font-semibold tracking-widest uppercase">SOLD OUT</span>
        </div>
      </div>

      {/* Central "Unavailable" Overlay on Hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm" style={{ transform: 'translateZ(70px)' }}>
        <div className="px-6 py-3 border-y border-gold text-gold text-sm tracking-[0.3em] font-light uppercase">
          Booked by Private Member
        </div>
      </div>
    </div>
  );
};

export default CarCard;
