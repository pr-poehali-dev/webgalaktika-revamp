import { AnimatedSection } from '@/components/AnimatedSection';
import { Card3D } from '@/components/Card3D';
import { RippleButton } from '@/components/RippleButton';
import Icon from '@/components/ui/icon';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Проект X',
      description: 'Мы создали портал, который не просто информирует, а погружает пользователей в мир бренда с помощью уникальных 3D-элементов и геймификации.',
      icon: 'Box',
      color: '#00FF41'
    },
    {
      title: 'Проект Y',
      description: 'Забудьте о скучных каталогах! Этот проект позволяет покупателям "потрогать" товары в 3D, вращать их и рассматривать со всех сторон',
      icon: 'Package',
      color: '#00CC33'
    },
    {
      title: 'Проект Z',
      description: 'Сайт, который не просто представляет компанию, а рассказывает ее историю через интерактивные анимации и динамические переходы.',
      icon: 'Rocket',
      color: '#39FF14'
    }
  ];

  return (
    <section id="проекты" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-5xl md:text-6xl font-bold">
              Наши <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF41] to-[#39FF14]">веб-шедевры</span>
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
                  <div className="relative h-full bg-gradient-to-br from-black/80 to-black/80 backdrop-blur-sm p-8 rounded-2xl border-2 border-[#00FF41]/20 hover:border-[#00FF41]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00FF41]/30 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00FF41]/20 to-transparent rounded-bl-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                    
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
                    
                    <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-[#00FF41] transition-colors">{project.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mt-6 flex items-center text-[#00FF41] opacity-0 group-hover:opacity-100 transition-opacity">
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
              className="border-2 border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41] hover:text-white px-8 py-6 rounded-lg text-lg transition-all hover:scale-105"
            >
              <Icon name="Grid3x3" size={20} className="inline mr-2" />
              Все проекты
            </RippleButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};