
import ProjectCard from "../components/ProjectCard.jsx"

function Projects() {
  
  const projects = [
    {
      title: "E-commerce Website (Amazon Clone)",
      description: "A full-stack e-commerce platform built with React, Node.js, and firestore. this project is still under development.I am trying to add more features to the web app",
      image: "/amazon.png",
      repoLink: "https://github.com/username/ecommerce",
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
      repoLink: "https://github.com/username/portfolio",
    },
    {
      title: "To-Do-App",
      description: "An application the help you list add your daily tasks, from this you can tick them as done when they are completed. This tool was created using Html and Css with Javascript",
      image: "/todo.png",
      repoLink: "https://github.com/username/portfolio",
    },
    {
      title: "An online Course System",
      description: "A full stack project. MERN (MongoDB,Express.Js,React and Node.Js) where the tools used in developing the system.The system has courses which individuals can register and learn from.I and my Team(course mates) put this together.",
      image: "/onlinecourse.png",
      repoLink: "https://github.com/username/portfolio",
    },
    {
      title: "An online Course System dashboard",
      description: "This was created for the adminstration of our online course system",
      image: "/dashboard.png",
      repoLink: "https://github.com/username/portfolio",
    },
    {
      title: "PassWord Generator",
      description: "A javascript  project.This was created purposely up-skill my understanding in Javascript logics.",
      image: "/password.png",
      repoLink: "https://github.com/username/portfolio",
    },
    {
      title: "Password-Strength-Test",
      description: "A personal portfolio website to showcase projects and skills.",
      image: "/test.png",
      demoLink: "https://portfolio-demo.com",
      repoLink: "https://github.com/username/portfolio",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase projects and skills.",
      image: "/webscrapper.png",
      demoLink: "https://portfolio-demo.com",
      repoLink: "https://github.com/username/portfolio",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase projects and skills.",
      image: "/devjobs.png",
      demoLink: "https://portfolio-demo.com",
      repoLink: "https://github.com/username/portfolio",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase projects and skills.",
      image: "/calculator.png",
      repoLink: "https://github.com/username/portfolio",
    },
    {
      title: "To-do Mobile App",
      description: "A personal portfolio website to showcase projects and skills.",
      image: "/expo.PNG",
      repoLink: "https://github.com/username/portfolio",
    },
    {
      title: "Css manipulations",
      description: "A html and css project.This was created purposely up-skill my understanding in css position.",
      image: "/css.png",
      repoLink: "https://github.com/username/portfolio",
    },
  ];

  return (
   
        
      <div className="container mx-auto ">
      <a href="/">Go Back</a>
      <div  className="py-12 bg-gray-100 md:px-12">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
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