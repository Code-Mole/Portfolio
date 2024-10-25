
import { Link } from 'react-scroll';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';


const Footer = () => {
  return (
    <footer className="  bg-slate-200 text-gray-400 py-8">
      <div className="container  text-center">
        <div className="mb-4">
        <Link to="about" 
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
             className="px-3 hover:text-slate-600 cursor-pointer">about</Link>
          <Link to="testimonials" 
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
             className="px-3 hover:text-slate-600 cursor-pointer">testimonials</Link>
          <Link to="contact" 
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
             className="px-3 hover:text-slate-600 cursor-pointer">Contact</Link>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://github.com/Code-Mole" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="  text-2xl hover:text-blue-500"></GitHubIcon>
          </a>
          <a href="https://www.linkedin.com/in/emmanuel-asanga-526412286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="fab fa-linkedin text-2xl hover:text-blue-500"></LinkedInIcon>
          </a>
          <a href="https://x.com/mole_asangabia" target="_blank" rel="noopener noreferrer">
            <XIcon className="fab fa-twitter text-2xl hover:text-blue-500"></XIcon>
          </a>
        </div>

        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Asanga Emmanuel. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;