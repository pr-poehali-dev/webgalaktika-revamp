export const Footer = () => {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-[#00FF41]/20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0 hover:scale-105 transition-transform cursor-pointer">
            <img 
              src="https://cdn.poehali.dev/files/64e8e098-d330-4720-86e3-24b2d1b0c081.png" 
              alt="WebGalaktika" 
              className="h-10 w-auto"
            />
          </div>

          <p className="text-gray-400 text-sm">
            © 2025 WEBGALAKTIKA. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};