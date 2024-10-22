import React from "React"

const ProjectCard = ({project})=>{
    return(
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="mt-2 text-gray-600">{project.description}</p>
      <div className="mt-4">
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Live Demo
        </a>
        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="ml-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg">
          GitHub Repo
        </a>
      </div>
    </div>
  </div>
    )
}

export default ProjectCard;