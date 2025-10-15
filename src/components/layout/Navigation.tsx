import { RippleButton } from '@/components/RippleButton';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (id: string) => void;
}

export const Navigation = ({ isMenuOpen, setIsMenuOpen, scrollToSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-md bg-black/80 border-b border-[#00FF41]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 hover:scale-105 transition-transform cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-[#C5E11D] flex items-center justify-center p-2">
              <img 
                src="https://cdn.poehali.dev/files/fbeb2eff-89d9-4c41-a52b-8e4e05e28488.png" 
                alt="WebGalaktika" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl tracking-wider font-galaktika">WEBGALAKTIKA</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {['Главная', 'Проекты', 'О нас', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-[#00FF41] transition-all hover:-translate-y-0.5 relative group"
              >
                {item}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00FF41] to-[#00CC33] scale-x-0 group-hover:scale-x-100 transition-transform" />
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <RippleButton 
              className="bg-gradient-to-r from-[#00FF41] to-[#00CC33] text-white hover:scale-105 transition-all px-6 py-5 rounded-lg hover:shadow-lg hover:shadow-[#00FF41]/50"
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
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-[#00FF41]/10 animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            {['Главная', 'Проекты', 'О нас', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left text-lg hover:text-[#00FF41] transition-colors py-2"
              >
                {item}
              </button>
            ))}
            <RippleButton 
              className="w-full bg-gradient-to-r from-[#00FF41] to-[#00CC33] text-white py-5 rounded-lg mt-4"
              onClick={() => scrollToSection('контакты')}
            >
              Заказать сайт
            </RippleButton>
          </div>
        </div>
      )}
    </nav>
  );
};