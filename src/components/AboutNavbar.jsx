import { NavLink } from "react-router-dom"

function AboutNavbar() {
  return (
    <div className="flex items-center justify-center gap-16 px-8 text-slate-500 border-b border-b-slate-300 pb-2 md:gap-44">
        <NavLink to="education" className=" active:text-blue-400 hover:scale-110 hover:text-blue-400">
        Education
        </NavLink>
        <NavLink to="expirence" className="active:text-blue-400 hover:text-blue-400 hover:scale-110">
        Experience
        </NavLink>
    </div>
  )
}

export default AboutNavbar