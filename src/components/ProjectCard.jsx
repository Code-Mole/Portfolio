
const ProjectCard = ({project})=>{
    return(
        <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg mx-5 overflow-hidden hover:shadow-slate-500">
    <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold dark:text-slate-300">{project.title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{project.description}</p>
      <div className="mt-4">
        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="ml-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-blue-100">
          GitHub Repo
        </a>
      </div>
    </div>
  </div>
    )
}

export default ProjectCard;