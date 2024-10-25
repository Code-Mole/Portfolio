
function Education() {

    const education=[
        {
        id:1,
        school_Name:"University of Energy and Natural Resourses (UENR)",
        program_Name:"BSc.Computer Science",
        location:"Sunyani"
        },
        {
        id:2,
        school_Name:"Bolgatanga Senior High School (BIG BOSS)",
        program_Name:"General Science",
        location:"Bolga-Winkogo"
        },
        {
        id:3,
        school_Name:"JHS and Basic school",
        program_Name:"All basic courses",
        location:"Bolga-Sumbrungu"
        },
       
]

  return (
    <div className="px-8 py-4 text-slate-400">
        <h1 className="text-lg text-slate-700 dark:text-slate-300 uppercase   pb-1">Education</h1>
        {
            education.map((education)=><div className="text-slate-500" key={education.id}>
                <h2 className="md:text-2xl">{education.school_Name}</h2>
                <h3 className="text-sm text-slate-400">{education.program_Name}</h3>
                <p className="border-b border-slate-500 pb-2 text-xs text-slate-400">{education.location}</p>
            </div>)
        }
    </div>
  )
}

export default Education