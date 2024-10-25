import { Outlet } from "react-router-dom";
import { useState,useEffect } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AboutNavbar from "../components/AboutNavbar";
import WestIcon from '@mui/icons-material/West';

const DetailedAboutme = () => {

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
    return (
        <div className="   shadow-lg rounded-lg dark:bg-slate-900  bg-gray-100 relative py-12">
        <div className="px-10 md:px-28  flex justify-between items-center">
          

      <a href="/" className="dark:text-slate-400 md:text-2xl  transition hover:scale-110 flex justify-center items-center gap-2">          <WestIcon className="md:text-2xl 
      text-ms
      text-blue-600 transition hover:scale-110 hover:text-slate-400"/> Go Back</a>
        
      <div>
      {
            themeIcon ? <DarkModeIcon onClick={toggleTheme} className="text-gray-900 hover:text-slate-600"/> : <LightModeIcon onClick={toggleTheme} className="text-yellow-400 hover:text-slate-600"/>
          }
      </div>
      </div>
          <h2 className="text-5xl mb-10 font-bold text-center dark:text-slate-400">About Me</h2>
          <div className="w-20 h-1 bg-indigo-200 rounded-full mx-auto mb-10 relative bottom-6"></div>
          <p className="mt-4 max-w-2xl md:max-w-6xl mx-auto md:text-xl text-gray-500 text-left px-8">
          I'm Asanga Emmanuel, a Junior Software Engineer (Infrastructure) at Xcelsz with a passion for building scalable, high-performance applications. I specialize in React, Node.js, Express.js, MongoDB, MySQL, and more, with a strong focus on optimizing systems and improving infrastructure.

          At Xcelsz, I work on enhancing platform reliability and scalability while collaborating with cross-functional teams to solve complex challenges. I’m constantly learning, exploring new technologies, and pushing my skills to the next level.

Let’s connect if you’re looking for an engineer who’s driven to create impactful, efficient solutions!
          </p>
          <div className="mt-8 md:flex gap-4 pl-10 lg:pl-52">
            <img
              className=" mb-14 mx-auto md:mx-0 rounded-2xl w-72 flex justify-center items-center  h-60 md:w-96 md:h-96 object-cover shadow-lg hover:shadow-slate-500"
              src="/mole1.JPG"
              alt="Asanga Emmanuel"
            />
            <div className="">
              <AboutNavbar/>
              <Outlet />
            </div>
          </div>
        </div>
   
    );
  };
  export default DetailedAboutme;