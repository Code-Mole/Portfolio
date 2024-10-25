import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState,useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu.jsx';

const Navbar = () => {
   const [themeIcon,setThemeIcon] = useState(false);
   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

   const navigate = useNavigate();

   useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme); 
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setThemeIcon(!themeIcon)
  };

  const goToProjects = () => {
    navigate('/projects');
  }
  

    return (
   
      <nav className=" bg-slate-200 dark:bg--600 p-4 fixed w-full md:px-40 z-10  ">
      
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-slate-600 text-2xl font-bold cursor-pointer"><Link to="hereSection" 
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
            className="text-gray-400 hover:text-slate-600 active:text-violet-700 cursor-pointer">Code-Mole</Link></div>
          <HamburgerMenu />
          <div className="hidden md:flex space-x-4">
         
            <Link to="hereSection" 
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
            className="text-gray-400 hover:text-slate-600 active:text-violet-700 cursor-pointer">Home</Link>
         
          
              <Link to="about" 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-400 hover:text-slate-600 cursor-pointer">About</Link>
          
            <button onClick={goToProjects}    className="text-gray-400 hover:text-slate-600">Projects</button>
            
            <Link to="contact"  
             spy={true}
             smooth={true}
             offset={-70}
             duration={500}
            className="text-gray-400 hover:text-slate-600 cursor-pointer">Contact</Link>
          
          {
            themeIcon ? <DarkModeIcon onClick={toggleTheme} className="text-gray-900 hover:text-slate-600"/> : <LightModeIcon onClick={toggleTheme} className="text-yellow-400 hover:text-slate-600"/>
          }
          </div>
        </div>
      </nav>
      
    );
  };
  
  export default Navbar;