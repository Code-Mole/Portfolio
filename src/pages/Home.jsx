
import Testimonial from '../components/Testimonials.jsx';
import Contact from '../components/Contact.jsx';
import Skills from '../components/Skills.jsx';
import About from '../components/About.jsx';
import HeroSection from '../components/HeroSection.jsx';


function Home() {  
  return (
    <div className="bg-gray-100 dark:bg-slate-800 flex  justify-center items-center   text-center">
      <div className="w-[90%] mx-auto">
        {/* Sections */}
        <HeroSection />
        <About />
        <Skills/>
        <Testimonial/>
        <Contact/>

     </div>
  </div>
  )
}

export default Home