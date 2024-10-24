import React, { useState,useEffect } from 'react';
import { Link } from 'react-scroll';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [themeIcon,setThemeIcon] = useState(false);
   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

   useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme); // Persist the theme in localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setThemeIcon(!themeIcon)
  };


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <div className="md:hidden ">  
      <button
        onClick={toggleMenu}
        className="text-3xl focus:outline-none z-20 relative"
        aria-label="Toggle Menu"
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />} 
      </button>


      <div
        className={`fixed inset-0 bg-slate-300 dark:bg-slate-800 text-white transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col items-center justify-center space-y-6`}
      >
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          onClick={toggleMenu}
          className="text-2xl cursor-pointer hover:text-slate-600"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          onClick={toggleMenu}
          className="text-2xl cursor-pointer hover:text-slate-600"
        >
          About
        </Link>
        <a href="/projects"   className="text-2xl cursor-pointer hover:text-slate-600">Projects</a>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          onClick={toggleMenu}
          className="text-2xl cursor-pointer hover:text-slate-600"
        >
          Contact
        </Link>
        {
            themeIcon ? <DarkModeIcon onClick={toggleTheme} className="text-gray-900 hover:text-slate-600"/> : <LightModeIcon onClick={toggleTheme} className="text-yellow-400 hover:text-slate-600"/>
          }
      </div>
    </div>
  );
};

export default HamburgerMenu;
