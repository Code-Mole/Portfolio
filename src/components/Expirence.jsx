import { NavLink } from "react-router-dom"

function Expirence() {

    const experiences=[
        {
        id:1,
        Company_Name:"Botech development 360 LTD",
        Role:"Full Stack Developer",
        Time:"6 months"
        },
        {
        id:2,
        Company_Name:"Xcelsz",
        Role:"Full Stack Developer",
        Time:"current as intern"
        },
        {
        id:2,
        Company_Name:"Tuuli development",
        Role:"Frontend Developer",
        Time:"current"
        },
        
]

  return (
    <div className="px-8 py-4 text-slate-400">
        <h1 className="text-lg text-slate-700 dark:text-slate-300 uppercase   pb-1">Experience</h1>
        {
            experiences.map((experience)=><div className="text-slate-500" key={experiences.id}>
                <h2 className="md:text-2xl">{experience.Company_Name}</h2>
                <h3 className="text-sm text-slate-400">{experience.Role}</h3>
                <p className="border-b border-slate-500 pb-2 text-xs text-slate-400">{experience.Time}</p>
            </div>)
        }

    </div>
  )
}

export default Expirence