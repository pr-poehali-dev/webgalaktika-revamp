import { useEffect, useRef } from 'react';

interface Rotating3DLogoProps {
  scrollY: number;
}

export const Rotating3DLogo = ({ scrollY }: Rotating3DLogoProps) => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!logoRef.current) return;

    const rotation = scrollY * 0.5;
    const scale = Math.max(0.5, 1 - scrollY / 1000);
    const opacity = Math.max(0, 1 - scrollY / 800);

    logoRef.current.style.transform = `
      perspective(1000px) 
      rotateY(${rotation}deg) 
      rotateX(${rotation * 0.3}deg)
      scale(${scale})
    `;
    logoRef.current.style.opacity = `${opacity}`;
  }, [scrollY]);

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
      <div
        ref={logoRef}
        className="relative transition-all duration-100 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative w-64 h-64">
          <div 
            className="absolute inset-0 rounded-full bg-[#C5E11D] flex items-center justify-center shadow-2xl"
            style={{ 
              boxShadow: '0 0 80px rgba(197, 225, 29, 0.6), 0 0 120px rgba(197, 225, 29, 0.4)',
              transform: 'translateZ(50px)'
            }}
          >
            <img 
              src="https://cdn.poehali.dev/files/fbeb2eff-89d9-4c41-a52b-8e4e05e28488.png" 
              alt="WebGalaktika 3D" 
              className="w-48 h-48 object-contain"
            />
          </div>

          <div 
            className="absolute inset-4 rounded-full bg-[#C5E11D]/30 blur-xl"
            style={{ transform: 'translateZ(-20px)' }}
          />

          <div 
            className="absolute inset-8 rounded-full bg-[#C5E11D]/20 blur-2xl"
            style={{ transform: 'translateZ(-40px)' }}
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border-2 border-[#C5E11D]/20"
                style={{
                  transform: `translateZ(${-60 - i * 15}px) scale(${1 + i * 0.1})`,
                  animation: `pulse 3s ease-in-out infinite ${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
