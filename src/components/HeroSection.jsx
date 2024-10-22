import { useState,useEffect } from "react";
const HeroSection = () => {

  const professions = ["Web Developer", "UI/UX Designer", "Backend Developer", "Full Stack Developer", " Frontend Developer","Mobile App Developer","Graphic Designer"];
  
  
  const [currentProfession, setCurrentProfession] = useState(0);

  useEffect(() => {
    const professionInterval = setInterval(() => {

      setCurrentProfession((prevProfession) => (prevProfession + 1) % professions.length);
    }, 3000); 

    return () => clearInterval(professionInterval);
  }, [professions.length]);
  return (
    <section id="hereSection" className="mt-28">
      <div className="h-screen bg-gray-100 dark:bg-slate-800 shadow-lg rounded-lg  flex flex-col gap-14 md:flex-row items-center justify-center text-center">
      <div><h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-gray-400">Hi,I`m Asanga Emmanuel</h1>
      <p className="mt-4 text-3xl font-light dark:text-slate-500"> A <span className=" text-4xl text-indigo-500">{professions[currentProfession]}</span></p>

      <p className=" dark:text-gray-300 mt-4 text-lg max-w-2xl">
      I craft innovative, scalable digital solutions designed to optimize business performance and elevate user engagement. My expertise ensures seamless integration of functionality and design, delivering measurable results that drive growth and efficiency.
      </p>
      <div className="mt-8">
        <a href="#projects" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">View My Work</a>
        <a href="#contact" className=" ml-4 px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white ">Hire Me</a>
        <a href="/moleResume.pdf" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md ml-4 hover:bg-blue-600">Download CV</a>
      </div></div>
      <div className="">
        <img src="/mole5.jpg" alt="Asanga Emmanuel" className="animate-pulse  w-48 h-48 md:h-[55vh] md:w-[25rem] rounded-3xl mt-8" />
      </div>
      
    </div>
    </section>
  );
};

export default HeroSection;