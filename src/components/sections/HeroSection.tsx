import { AnimatedSection } from '@/components/AnimatedSection';
import { RippleButton } from '@/components/RippleButton';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import Icon from '@/components/ui/icon';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface HeroSectionProps {
  scrollY: number;
  scrollToSection: (id: string) => void;
}

export const HeroSection = ({ scrollY, scrollToSection }: HeroSectionProps) => {
  const stats = [
    { value: 150, suffix: '+', label: 'Проектов' },
    { value: 98, suffix: '%', label: 'Довольных клиентов' },
    { value: 5, suffix: ' лет', label: 'На рынке' },
    { value: 24, suffix: '/7', label: 'Поддержка' }
  ];

  return (
    <section id="главная" className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <AnimatedSection>
          <h1 className="mb-8 animate-text-glow">
            <span className="block text-4xl md:text-6xl lg:text-7xl mb-4">
              Ваш сайт – это не просто
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl mb-4">
              визитка, это{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#00FFFF]">целая</span>
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl">
              вселенная!
            </span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Забудьте о скучных сайтах! WEBGALAKTIKA перенесет ваш бизнес в новую эру веб-дизайна. Мы создаем не просто страницы, а целые интерактивные миры с потрясающим 3D-дизайном.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <RippleButton 
              className="bg-gradient-to-r from-[#FF00FF] to-[#7B2FFF] text-white hover:scale-105 transition-all px-8 py-6 rounded-lg text-lg hover:shadow-2xl hover:shadow-[#FF00FF]/50"
              onClick={() => scrollToSection('проекты')}
            >
              <Icon name="Sparkles" size={20} className="inline mr-2" />
              Создать свой мир
            </RippleButton>
            
            <RippleButton 
              variant="outline"
              className="border-2 border-[#FF00FF] text-[#FF00FF] hover:bg-[#FF00FF]/10 px-8 py-6 rounded-lg text-lg"
              onClick={() => scrollToSection('о нас')}
            >
              <Icon name="Play" size={20} className="inline mr-2" />
              Смотреть демо
            </RippleButton>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="transform transition-all group-hover:scale-110">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  <p className="text-gray-400 mt-2">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.8}>
          <div
            className="mt-20 relative"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          >
            <div className="relative animate-float-slow group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-[#FF00FF]/20 hover:shadow-[#FF00FF]/40 transition-all duration-500 border-2 border-[#FF00FF]/20">
                <div className="aspect-video bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-[#FF00FF] rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#00FFFF] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                  <Icon name="Sparkles" size={80} className="text-white/50 animate-pulse" />
                </div>
                
                <div className="absolute top-4 right-4 flex gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="w-3 h-3 rounded-full bg-[#FF00FF] animate-pulse cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>3D анимации</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="w-3 h-3 rounded-full bg-[#00FFFF] animate-pulse cursor-pointer" style={{ animationDelay: '0.5s' }} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Интерактивность</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="w-3 h-3 rounded-full bg-[#7B2FFF] animate-pulse cursor-pointer" style={{ animationDelay: '1s' }} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Современный дизайн</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
