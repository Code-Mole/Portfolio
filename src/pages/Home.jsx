
import Testimonial from '../components/Testimonials.jsx';
import Contact from '../components/Contact.jsx';
import Skills from '../components/Skills.jsx';
import About from '../components/About.jsx';
import HeroSection from '../components/HeroSection.jsx';
import Navbar from "../components/Navbar.jsx"


function Home() {  
  return (
    <>
    <Navbar/>
    <div className="scroll-smooth bg-gray-100 dark:bg-slate-900 flex  justify-center items-center   text-center">
      <div className="w-[90%] mx-auto">
        {/* Sections */}
        <HeroSection />
        <About />
        <Skills/>
        <Testimonial/>
        <Contact/>

     </div>
  </div>
  </>
  )
}

export default Home