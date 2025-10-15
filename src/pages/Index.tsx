import { useState, useEffect } from 'react';
import { StarField } from '@/components/StarField';
import { FloatingPlanet } from '@/components/FloatingPlanet';
import { Card3D } from '@/components/Card3D';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { RippleButton } from '@/components/RippleButton';
import { InteractiveParticles } from '@/components/InteractiveParticles';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

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

  const projects = [
    {
      title: 'Проект X',
      description: 'Мы создали портал, который не просто информирует, а погружает пользователей в мир бренда с помощью уникальных 3D-элементов и геймификации.',
      icon: 'Box',
      color: '#FF00FF'
    },
    {
      title: 'Проект Y',
      description: 'Забудьте о скучных каталогах! Этот проект позволяет покупателям "потрогать" товары в 3D, вращать их и рассматривать со всех сторон',
      icon: 'Package',
      color: '#7B2FFF'
    },
    {
      title: 'Проект Z',
      description: 'Сайт, который не просто представляет компанию, а рассказывает ее историю через интерактивные анимации и динамические переходы.',
      icon: 'Rocket',
      color: '#00FFFF'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Идея и Концепция',
      description: 'Обсуждаем ваши мечты, цели и формируем уникальную концепцию будущего сайта. Здесь рождается магия',
      icon: 'Lightbulb'
    },
    {
      number: '2',
      title: 'Дизайн и Разработка',
      description: 'Наши дизайнеры и разработчики превращают концепцию в интерактивный дизайн с 3D-элементами и логической архитектурой',
      icon: 'Code'
    },
    {
      number: '3',
      title: 'Запуск и Поддержка',
      description: 'Ваш сайт готов к покорению интернета! Мы запускаем его и обеспечиваем полную техническую поддержку, чтобы все работало как часы',
      icon: 'Zap'
    }
  ];

  const stats = [
    { value: 150, suffix: '+', label: 'Проектов' },
    { value: 98, suffix: '%', label: 'Довольных клиентов' },
    { value: 5, suffix: ' лет', label: 'На рынке' },
    { value: 24, suffix: '/7', label: 'Поддержка' }
  ];

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

      <nav className="fixed top-0 w-full z-40 backdrop-blur-md bg-[#0A0A1F]/80 border-b border-[#FF00FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 hover:scale-105 transition-transform cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF00FF] to-[#7B2FFF] animate-pulse-glow group-hover:animate-spin" />
              <span className="text-xl tracking-wider font-bold">WEBGALAKTIKA</span>
            </div>

            <div className="hidden md:flex space-x-8">
              {['Главная', 'Проекты', 'О нас', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-[#FF00FF] transition-all hover:-translate-y-0.5 relative group"
                >
                  {item}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF00FF] to-[#7B2FFF] scale-x-0 group-hover:scale-x-100 transition-transform" />
                </button>
              ))}
            </div>

            <div className="hidden md:block">
              <RippleButton 
                className="bg-gradient-to-r from-[#FF00FF] to-[#7B2FFF] text-white hover:scale-105 transition-all px-6 py-5 rounded-lg hover:shadow-lg hover:shadow-[#FF00FF]/50"
                onClick={() => scrollToSection('контакты')}
              >
                Заказать сайт
              </RippleButton>
            </div>

            <button 
              className="md:hidden hover:scale-110 transition-transform"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#0A0A1F]/95 backdrop-blur-lg border-t border-[#FF00FF]/10 animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {['Главная', 'Проекты', 'О нас', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-lg hover:text-[#FF00FF] transition-colors py-2"
                >
                  {item}
                </button>
              ))}
              <RippleButton 
                className="w-full bg-gradient-to-r from-[#FF00FF] to-[#7B2FFF] text-white py-5 rounded-lg mt-4"
                onClick={() => scrollToSection('контакты')}
              >
                Заказать сайт
              </RippleButton>
            </div>
          </div>
        )}
      </nav>

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

      <section id="проекты" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="mb-20 text-center">
              <h2 className="mb-6 text-5xl md:text-6xl font-bold">
                Наши <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#00FFFF]">веб-шедевры</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Посмотрите, как мы воплощаем в жизнь самые смелые идеи и превращаем обычные сайты в захватывающие цифровые приключения.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <Card3D>
                  <div className="group cursor-pointer h-full">
                    <div className="relative h-full bg-gradient-to-br from-[#1a0a2e]/80 to-[#0A0A1F]/80 backdrop-blur-sm p-8 rounded-2xl border-2 border-[#FF00FF]/20 hover:border-[#FF00FF]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF00FF]/30 overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF00FF]/20 to-transparent rounded-bl-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                      
                      <div className="relative mb-6">
                        <div 
                          className="w-16 h-16 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                          style={{ 
                            background: `linear-gradient(135deg, ${project.color}, ${project.color}88)`,
                            boxShadow: `0 0 30px ${project.color}40`
                          }}
                        >
                          <Icon name={project.icon as any} size={32} />
                        </div>
                      </div>
                      
                      <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-[#FF00FF] transition-colors">{project.title}</h3>
                      <p className="text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="mt-6 flex items-center text-[#FF00FF] opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm font-semibold">Подробнее</span>
                        <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card3D>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5}>
            <div className="text-center mt-16">
              <RippleButton 
                variant="outline"
                className="border-2 border-[#FF00FF] text-[#FF00FF] hover:bg-[#FF00FF] hover:text-white px-8 py-6 rounded-lg text-lg transition-all hover:scale-105"
              >
                <Icon name="Grid3x3" size={20} className="inline mr-2" />
                Все проекты
              </RippleButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

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

      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <p className="text-sm text-[#FF00FF] mb-4 tracking-wider uppercase">Наш путь к вашему идеальному сайту</p>
              <h2 className="mb-6 text-4xl md:text-5xl font-bold">
                Как мы создаем вашу<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#00FFFF]">цифровую галактику</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Мы делаем процесс создания сайта максимально прозрачным и увлекательным. От идеи до запуска — каждый шаг с нами будет простым и понятным.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <Card3D>
                  <div className="bg-gradient-to-br from-[#1a0a2e]/80 to-[#0A0A1F]/80 backdrop-blur-sm p-8 rounded-2xl border-2 border-[#FF00FF]/20 hover:border-[#FF00FF]/50 transition-all duration-500 h-full group cursor-pointer relative overflow-hidden">
                    <div className="absolute top-0 right-0 text-9xl font-bold text-[#FF00FF]/5 group-hover:text-[#FF00FF]/10 transition-colors">
                      {step.number}
                    </div>
                    
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF00FF] to-[#7B2FFF] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#FF00FF]/50">
                        <Icon name={step.icon as any} size={28} />
                      </div>
                    </div>
                    
                    <h3 className="mb-4 text-xl font-bold text-white group-hover:text-[#FF00FF] transition-colors">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card3D>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="mb-4 text-4xl md:text-5xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#00FFFF]">Свяжитесь с нами</span>
              </h2>
              <p className="text-xl text-gray-300">
                Готовы создать свою цифровую вселенную? Напишите нам!
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card3D>
              <div className="bg-gradient-to-br from-[#1a0a2e]/80 to-[#0A0A1F]/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border-2 border-[#FF00FF]/20 hover:border-[#FF00FF]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF00FF]/20">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="group">
                    <label className="block mb-2 text-gray-300 group-hover:text-[#FF00FF] transition-colors">
                      <Icon name="User" size={16} className="inline mr-2" />
                      Ваше имя
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Иван Иванов"
                      className="bg-white/5 border-[#FF00FF]/20 focus:border-[#FF00FF] text-white placeholder:text-gray-500 h-12 hover:border-[#FF00FF]/40 transition-colors"
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block mb-2 text-gray-300 group-hover:text-[#FF00FF] transition-colors">
                      <Icon name="Mail" size={16} className="inline mr-2" />
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="ivan@example.com"
                      className="bg-white/5 border-[#FF00FF]/20 focus:border-[#FF00FF] text-white placeholder:text-gray-500 h-12 hover:border-[#FF00FF]/40 transition-colors"
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block mb-2 text-gray-300 group-hover:text-[#FF00FF] transition-colors">
                      <Icon name="MessageSquare" size={16} className="inline mr-2" />
                      Сообщение
                    </label>
                    <Textarea 
                      placeholder="Расскажите о вашем проекте..."
                      rows={5}
                      className="bg-white/5 border-[#FF00FF]/20 focus:border-[#FF00FF] text-white placeholder:text-gray-500 hover:border-[#FF00FF]/40 transition-colors resize-none"
                    />
                  </div>

                  <RippleButton 
                    className="w-full bg-gradient-to-r from-[#FF00FF] to-[#7B2FFF] text-white py-6 rounded-xl hover:scale-105 transition-all text-lg"
                  >
                    <Icon name="Send" size={20} className="inline mr-2" />
                    Отправить сообщение
                  </RippleButton>
                </form>
              </div>
            </Card3D>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="mt-12 flex justify-center gap-6">
              {[
                { icon: 'Github', color: '#FF00FF' },
                { icon: 'Twitter', color: '#7B2FFF' },
                { icon: 'Linkedin', color: '#00FFFF' },
                { icon: 'Instagram', color: '#FF00FF' }
              ].map((social, index) => (
                <button
                  key={index}
                  className="w-12 h-12 rounded-full border-2 border-[#FF00FF]/20 hover:border-[#FF00FF] flex items-center justify-center hover:scale-110 transition-all hover:shadow-lg group"
                  style={{ ['--hover-color' as any]: social.color }}
                >
                  <Icon 
                    name={social.icon as any} 
                    size={20} 
                    className="text-gray-400 group-hover:text-[#FF00FF] transition-colors" 
                  />
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-[#FF00FF]/20">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0 hover:scale-105 transition-transform cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF00FF] to-[#7B2FFF] animate-pulse-glow group-hover:animate-spin" />
              <span className="text-lg tracking-wider font-bold">WEBGALAKTIKA</span>
            </div>

            <p className="text-gray-400 text-sm">
              © 2025 WEBGALAKTIKA. Все права защищены.
            </p>
          </div>
        </div>
      </footer>

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
