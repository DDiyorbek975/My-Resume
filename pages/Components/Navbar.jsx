import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Хук для управления бургер-меню

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Переключаем видимость меню
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Логотип */}
        <div className="text-[30px] font-[600]">Diyorbek</div>

        {/* Бургер-меню для мобильных устройств */}
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-3xl focus:outline-none">
            {isOpen ? "✕" : "☰"} {/* Иконка меняется */}
          </button>
        </div>

        {/* Ссылки для десктопа */}
        <div className={`hidden md:flex gap-[20px] text-[20px]`}>
          <a href="/" className="relative pb-2 hover:text-gray-400">
            <span className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-gray-400 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100">
              About
            </span>
          </a>
          <a href="/" className="relative pb-2 hover:text-gray-400">
            <span className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-gray-400 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100">
              Skills
            </span>
          </a>
          <a href="/" className="relative pb-2 hover:text-gray-400">
            <span className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-gray-400 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100">
              Projects
            </span>
          </a>
          <a href="/" className="relative pb-2 hover:text-gray-400">
            <span className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-gray-400 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100">
              Contact
            </span>
          </a>
        </div>

        {/* Выпадающее меню для мобильных устройств */}
      </div>

      {/* Ссылки для мобильных устройств */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 text-[20px]">
          <a href="/" className="hover:text-gray-400">About</a>
          <a href="/" className="hover:text-gray-400">Skills</a>
          <a href="/" className="hover:text-gray-400">Projects</a>
          <a href="/" className="hover:text-gray-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


