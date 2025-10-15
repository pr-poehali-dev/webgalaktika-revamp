export const Footer = () => {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-[#00FF41]/20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0 hover:scale-105 transition-transform cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-[#C5E11D] flex items-center justify-center">
              <img 
                src="https://cdn.poehali.dev/files/fbeb2eff-89d9-4c41-a52b-8e4e05e28488.png" 
                alt="WebGalaktika" 
                className="w-7 h-7 object-contain"
              />
            </div>
            <span className="text-lg tracking-wider font-galaktika">WEBGALAKTIKA</span>
          </div>

          <p className="text-gray-400 text-sm">
            © 2025 WEBGALAKTIKA. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};