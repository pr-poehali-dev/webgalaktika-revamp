import { AnimatedSection } from '@/components/AnimatedSection';
import { RippleButton } from '@/components/RippleButton';
import Icon from '@/components/ui/icon';

interface AboutSectionProps {
  scrollToSection: (id: string) => void;
}

export const AboutSection = ({ scrollToSection }: AboutSectionProps) => {
  return (
    <section id="о нас" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FF00FF]/10 to-[#7B2FFF]/10">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div>
              <p className="text-sm mb-4 tracking-wider uppercase text-[#FF00FF]">
                <Icon name="Star" size={16} className="inline mr-2" />
                WEBGALAKTIKA: где дизайн встречается с инновациями
              </p>
              <h2 className="mb-8 text-4xl md:text-5xl font-bold">
                Откройте для себя <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#00FFFF]">безграничные возможности</span> интерактивного интернета!
              </h2>
              <p className="text-lg mb-8 text-gray-300 leading-relaxed">
                Мы тщательно прорабатываем каждую деталь: от интуитивно понятной навигации до захватывающих визуальных эффектов. Наша команда экспертов превратит вашу идею в цифровой шедевр.
              </p>
              <RippleButton 
                className="bg-gradient-to-r from-[#FF00FF] to-[#7B2FFF] text-white hover:scale-105 transition-all px-8 py-6 rounded-lg text-lg"
                onClick={() => scrollToSection('контакты')}
              >
                <Icon name="MessageCircle" size={20} className="inline mr-2" />
                Узнать больше
              </RippleButton>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] rounded-3xl blur-3xl opacity-30 animate-pulse" />
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 border-2 border-[#FF00FF]/30 hover:scale-105 transition-transform duration-700 cursor-pointer group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="Sparkles" size={120} className="text-white/30 group-hover:rotate-180 transition-transform duration-1000" />
                </div>
                
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#FF00FF] rounded-full blur-3xl animate-pulse" />
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#00FFFF] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
