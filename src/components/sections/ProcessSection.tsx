import { AnimatedSection } from '@/components/AnimatedSection';
import { Card3D } from '@/components/Card3D';
import Icon from '@/components/ui/icon';

export const ProcessSection = () => {
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

  return (
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
  );
};
