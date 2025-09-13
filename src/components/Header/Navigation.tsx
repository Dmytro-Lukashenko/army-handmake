const Navigation = () => (
  <nav className="hidden md:flex items-center space-x-6">
    <a href="#general-info" className="text-black font-semibold hover:text-gray-300 transition-colors">
      Загальна інформація
    </a>
    <a href="#structure" className="text-black font-semibold hover:text-gray-300 transition-colors">
      Структура
    </a>
    <a href="#specialists" className="text-black font-semibold hover:text-gray-300 transition-colors">
      Спеціалісти
    </a>
    <a href="#histories" className="text-black font-semibold hover:text-gray-300 transition-colors">
      Історії пацієнтів
    </a>
    <a href="#help" className="text-black font-semibold hover:text-gray-300 transition-colors">
      Допомогти
    </a>
    <a href="#contacts" className="text-black font-semibold hover:text-gray-300 transition-colors">
      Контакти
    </a>
  </nav>
);

export default Navigation;