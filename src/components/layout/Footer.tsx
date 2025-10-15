export const Footer = () => {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-[#00FF41]/20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0 hover:scale-105 transition-transform cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00FF41] to-[#00CC33] animate-pulse-glow group-hover:animate-spin" />
            <span className="text-lg tracking-wider font-bold">WEBGALAKTIKA</span>
          </div>

          <p className="text-gray-400 text-sm">
            © 2025 WEBGALAKTIKA. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};