import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import DetailedAboutme from "./pages/DetailedAboutme.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Education from "./components/Education.jsx";
import Expirence from "./components/Expirence.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";


function App() {
 
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<DetailedAboutme />}>
        <Route index element={<Education/>}/>
        <Route path="expirence" element={<Expirence/>}/>
        <Route path="education" element={<Education/>}/>
        </Route> 
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
