const About = () => {
    return (
      <section id="about" className="py-12  text-center">
        <div className="container mx-auto shadow-lg rounded-lg  bg-gray-100 relative">
          <h2 className="text-5xl mb-10 font-bold">About Me</h2>
          <div className="w-20 h-1 bg-indigo-200 rounded-full mx-auto mb-10 relative bottom-6"></div>
          <p className="mt-4 max-w-2xl md:max-w-6xl mx-auto md:text-xl text-gray-500 text-left">
            <span className="inline-block mb-5 ">I’m currently working as a Junior Software Engineer (Infrastructure) at Rose Rocket, where I specialize in building and maintaining the core infrastructure that powers logistics technology. My role involves optimizing system performance, ensuring high availability, and collaborating with cross-functional teams to deliver scalable, reliable solutions that support complex business needs.</span>
            <span className="inline-block mb-5 ">My journey began with a passion for software development, which led me to learn a wide range of technologies, including React, Node.js, Express.js, MongoDB, and more. Throughout this process, I honed my skills in full-stack development and cloud infrastructure, preparing me for real-world challenges.</span>
            <span className="inline-block mb-5 ">Thanks to Juno's guidance, I learned how to effectively showcase my projects, skills, and experiences, allowing me to connect with potential employers and ultimately land my dream role at Rose Rocket. It’s been an incredible journey of growth, both technically and professionally, and I’m excited to continue expanding my knowledge in infrastructure and backend systems.</span>
            <span className="inline-block mb-5 ">I’m committed to continuously improving and contributing to innovative projects that push the boundaries of technology, while also sharing my story and helping others along the way.</span>
          </p>
          <div className="mt-8 flex justify-center">
            <img
              className=" mb-14 rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg"
              src="/mole.jpg"
              alt="Asanga Emmanuel"
            />
          </div>
        </div>
      </section>
    );
  };
  export default About;