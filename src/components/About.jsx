import { useNavigate } from "react-router-dom";


const About = () => {
const navigate = useNavigate();

const goToAbout = () => {
  navigate("/about");
}

    return (
      <section id="about" className="py-12  text-center">
        <div className="container mx-auto shadow-lg rounded-lg dark:bg-slate-800  bg-gray-100 relative">
          <h2 className="text-5xl mb-10 font-bold dark:text-gray-400 pt-12">About Me</h2>
          <div className="w-20 h-1 bg-indigo-200 rounded-full mx-auto mb-10 relative bottom-6"></div>
          <p className="mt-4 max-w-2xl md:max-w-6xl mx-auto md:text-xl text-gray-500 dark:text-gray-300 text-left">
            <span className="mx-10 inline-block mb-5 ">I’m currently working as a Junior Software developer (Infrastructure) at Xcelsz, where I specialize in building and maintaining the core infrastructure that powers logistics technology. My role involves optimizing system performance, ensuring high availability, and collaborating with cross-functional teams to deliver scalable, reliable solutions that support complex business needs.</span>
            <span className="mx-10 inline-block mb-5 ">My journey began with a passion for software development, which led me to learn a wide range of technologies, including Html,Css & TailwindCss,JavaScript, React, Node.js, Express.js, MongoDB,MySQL, and more. Throughout this process, I honed my skills in full-stack development and cloud infrastructure, preparing me for real-world challenges.</span>
            <span className="mx-10 inline-block mb-5 ">Thanks to Listowel and CodingBa guidance, I learned how to effectively showcase my projects, skills, and experiences, allowing me to connect with potential employers and ultimately land my dream role at Xcelsz. It’s been an incredible journey of growth, both technically and professionally, and I’m excited to continue expanding my knowledge in infrastructure and backend systems.</span>
            <span className="mx-10 inline-block mb-5 ">I’m committed to continuously improving and contributing to innovative projects that push the boundaries of technology, while also sharing my story and helping others along the way.</span>
          </p>
          <div className="mt-8 flex justify-center ">
            <img
              className="hover:shadow-slate-400 mb-20 rounded-full w-64 h-64 md:w-80 md:h-80 object-cover hover:shadow-2xl hover:animate-spin"
              src="/mole.jpg"
              alt="Asanga Emmanuel"
            />
          </div>
          <div className=" h-12
           animate-bounce">
          <button onClick={goToAbout} className=" ml-4 px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white
           transition-all relative bottom-10 ">Learn more About Me</button>
          </div>
        </div>
      </section>
    );
  };
  export default About;