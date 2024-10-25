import { useState,useEffect } from "react";
import ProjectCard from "../components/ProjectCard.jsx"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import WestIcon from '@mui/icons-material/West';

function Projects() {

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
  
  const projects = [
    {
      title: "E-commerce Website (Amazon Clone)",
      description: "A full-stack e-commerce platform built with React, Node.js, and firestore. this project is still under development.I am trying to add more features to the web app",
      image: "/amazon.png",
      repoLink: "https://github.com/Code-Mole/AmazonClone.git",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase projects and skills.",
      image: "/portfolio.png",
      repoLink: "https://github.com/username/portfolio",
    },
    {
      title: "An online book store web App",
      description: "A full stack project which was created using Next.js , vanillia Css , node.js , Express.js for backend logics and MongoDB for storage(Database). This was created to help people get access to books online to read without necessarily going to the labrary.",
      image: "/bookstore.png",
      repoLink: "https://github.com/Code-Mole/OnlineBookStore.git",
    },
    {
      title: "To-Do-App",
      description: "An application the help you list add your daily tasks, from this you can tick them as done when they are completed. This tool was created using Html and Css with Javascript",
      image: "/todo.png",
      repoLink: "https://github.com/Code-Mole/To-Do-App.git",
    },
    {
      title: "An online Course System",
      description: "A full stack project. MERN (MongoDB,Express.Js,React and Node.Js) where the tools used in developing the system.The system has courses which individuals can register and learn from.I and my Team(course mates) put this together.",
      image: "/onlinecourse.png",
      repoLink: "https://github.com/Code-Mole/Online_Course_System.git",
    },
    {
      title: "An online Course System dashboard",
      description: "This was created for the adminstration of our online course system",
      image: "/dashboard.png",
      repoLink: "https://github.com/Code-Mole/Online_Course_System_Dashboard.git",
    },
    {
      title: "PassWord Generator",
      description: "A javascript  project.This was created purposely up-skill my understanding in Javascript logics.",
      image: "/password.png",
      repoLink: "https://github.com/Code-Mole/password-generator-tool.git",
    },
    {
      title: "Password-Strength-Test",
      description: "This access individuals to test thier passwords strength.",
      image: "/test.png",
      repoLink: "https://github.com/Code-Mole/Password-strength.git",
    },
    {
      title: "Web Scraper tool",
      description: "A tool which is use to scrape for information in any website.",
      image: "/webscrapper.png",
      repoLink: "https://github.com/Code-Mole/Wed_scraper.git",
    },
    {
      title: "devjobs website",
      description: "A frontend project which I was asked to build before I will be accepted in a partcular team.",
      image: "/devjobs.png",
      repoLink: "https://github.com/Code-Mole/devjobs-web-app.git",
    },
    {
      title: "Calculator web App",
      description: "Calculator to access people to perform basic mathematical operations.",
      image: "/calculator.png",
      repoLink: "https://github.com/Code-Mole/Calculator.git",
    },
    {
      title: "To-do Mobile App",
      description: "A to-do-app for adding tasks which needs your attention.This was built using React Native to a mobile App",
      image: "/To-do.jpg",
      repoLink: "https://github.com/Code-Mole/TodoApp.git",
    },
    {
      title: "Css manipulations",
      description: "A html and css project.This was created purposely up-skill my understanding in css position.",
      image: "/css.png",
      repoLink: "https://github.com/Code-Mole/Question.git",
    },
  ];

  return (
   
        
      <div className="  ">
      <div  className="py-12 dark:bg-slate-900 bg-gray-100 md:px-12">
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
        <h2 className="text-3xl font-bold text-center dark:text-slate-500">Projects</h2>
        <p className="text-center dark:text-slate-400 w-[90%] md:w-[70%] mx-auto mt-4 text-gray-700 py-5">Throughout my software engineering journey, I’ve developed a range of projects that highlight my skills in full-stack development, infrastructure optimization, and building applications with a strong user focus.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Projects