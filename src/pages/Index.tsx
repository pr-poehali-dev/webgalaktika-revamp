import { useState, useEffect } from 'react';
import { StarField } from '@/components/StarField';
import { FloatingPlanet } from '@/components/FloatingPlanet';
import { InteractiveParticles } from '@/components/InteractiveParticles';
import { MatrixRain } from '@/components/MatrixRain';
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
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-x-hidden">
      <MatrixRain />
      <StarField />
      <InteractiveParticles />
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <FloatingPlanet color="#00FF41" size={120} x={8} y={15} delay={0} />
        <FloatingPlanet color="#00CC33" size={80} x={88} y={20} delay={2} />
        <FloatingPlanet color="#39FF14" size={100} x={80} y={65} delay={4} />
        <FloatingPlanet color="#00FF41" size={90} x={5} y={70} delay={1} />
      </div>

      <div
        className="fixed w-12 h-12 rounded-full pointer-events-none z-50 mix-blend-screen transition-all duration-200"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 65, 0.6), rgba(0, 204, 51, 0.3), transparent)',
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
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #000;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #00FF41, #00CC33);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #00FF41, #39FF14);
        }
      `}</style>
    </div>
  );
}