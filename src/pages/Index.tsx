import { useState, useEffect } from 'react';
import { StarField } from '@/components/StarField';
import { FloatingPlanet } from '@/components/FloatingPlanet';
import { InteractiveParticles } from '@/components/InteractiveParticles';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A1F] via-[#1a0a2e] to-[#0A0A1F] text-white overflow-x-hidden">
      <StarField />
      <InteractiveParticles />
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <FloatingPlanet color="#FF00FF" size={120} x={8} y={15} delay={0} />
        <FloatingPlanet color="#7B2FFF" size={80} x={88} y={20} delay={2} />
        <FloatingPlanet color="#00FFFF" size={100} x={80} y={65} delay={4} />
        <FloatingPlanet color="#FF00FF" size={90} x={5} y={70} delay={1} />
      </div>

      <div
        className="fixed w-12 h-12 rounded-full pointer-events-none z-50 mix-blend-screen transition-all duration-200"
        style={{
          background: 'radial-gradient(circle, rgba(255,0,255,0.6), rgba(123,47,255,0.3), transparent)',
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
        }}
      />

      <Navigation 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      <HeroSection scrollY={scrollY} scrollToSection={scrollToSection} />

      <ProjectsSection />

      <AboutSection scrollToSection={scrollToSection} />

      <ProcessSection />

      <ContactSection />

      <Footer />

      <style>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) rotateX(0deg);
          }
          50% {
            transform: translateY(-30px) rotateX(5deg);
          }
        }

        @keyframes float-planet {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -20px);
          }
        }

        @keyframes text-glow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(255,0,255,0.3), 0 0 40px rgba(123,47,255,0.2);
          }
          50% {
            text-shadow: 0 0 40px rgba(255,0,255,0.6), 0 0 80px rgba(123,47,255,0.4);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255,0,255,0.5), 0 0 40px rgba(123,47,255,0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(255,0,255,0.8), 0 0 80px rgba(123,47,255,0.6);
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-planet {
          animation: float-planet 10s ease-in-out infinite;
        }

        .animate-text-glow {
          animation: text-glow 4s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-ripple {
          animation: ripple 0.6s ease-out;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #0A0A1F;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #FF00FF, #7B2FFF);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #FF00FF, #00FFFF);
        }
      `}</style>
    </div>
  );
}