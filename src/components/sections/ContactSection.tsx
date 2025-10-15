import { AnimatedSection } from '@/components/AnimatedSection';
import { Card3D } from '@/components/Card3D';
import { RippleButton } from '@/components/RippleButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export const ContactSection = () => {
  return (
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
  );
};
