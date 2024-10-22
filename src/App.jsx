import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
 
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/contact" element={<Contact />} /> 
     
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
