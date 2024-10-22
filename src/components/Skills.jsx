import HtmlIcon from '@mui/icons-material/Html';

// function icon1(){
//   return <HtmlIcon style={{ fontSize: '3rem' }}></HtmlIcon>
// }

const skills = [
  { name: "HTML", level: "90%", icon:<HtmlIcon/> , color: "bg-red-500" },
  { name: "CSS", level: "85%", icon: <HtmlIcon/>, color: "bg-blue-500" },
  { name: "JavaScript", level: "95%", icon: <HtmlIcon/>, color: "bg-yellow-500" },
  { name: "React", level: "90%", icon: <HtmlIcon/>, color: "bg-blue-400" },
  { name: "Node.js", level: "85%", icon: <HtmlIcon/>, color: "bg-green-500" },
  { name: "Express.js", level: "80%", icon: <HtmlIcon/>, color: "bg-gray-800" },
  { name: "MySQL", level: "90%", icon: <HtmlIcon/>, color: "bg-blue-600" },
  { name: "MongoDB", level: "88%", icon: <HtmlIcon/>, color: "bg-green-700" },
  { name: "Python", level: "70%", icon: <HtmlIcon/>, color: "bg-yellow-700" },
  { name: "Photoshop", level: "75%", icon: <HtmlIcon/>, color: "bg-stone-500" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 shadow-lg rounded-lg dark:bg-slate-800  bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 dark:text-slate-400">My Skills</h2>
        <div className="w-20 h-1 bg-indigo-200 rounded-full mx-auto mb-10 relative bottom-6"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="p-6 dark:bg-slate-700 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 animate-bounce">
              <div className="flex justify-center items-center text-5xl mb-4">
               
                <div className='animate-spin font-semibold text-slate-300'>{skill.icon}</div>
              </div>
              <h3 className="text-xl font-semibold dark:text-slate-200 mb-4">{skill.name}</h3>
              <div className="relative h-2 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className={`${skill.color} h-full rounded-full `}
                  style={{ width: skill.level }}
                ></div>
              </div>
              <p className="mt-2 text-sm font-medium dark:text-slate-500">{skill.level} Proficiency</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
