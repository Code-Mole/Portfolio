
import ProjectCard from "../components/ProjectCard.jsx"

function Projects() {
  
  const projects = [
    {
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
      image: "/ecommerce.jpg",
      demoLink: "https://ecommerce-demo.com",
      repoLink: "https://github.com/username/ecommerce",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase projects and skills.",
      image: "/portfolio.jpg",
      demoLink: "https://portfolio-demo.com",
      repoLink: "https://github.com/username/portfolio",
    },
  ];

  return (
    <div>
      <a href="/">Go Back</a>
      <section id="projects" className="py-12 bg-gray-100">
        
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Projects