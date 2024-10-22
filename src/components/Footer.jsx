import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';


const Footer = () => {
  return (
    <footer className="bg-slate-200 text-gray-400 py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="#about" className="px-3 hover:text-slate-600">About</a>
          <a href="#projects" className="px-3 hover:text-slate-600">Projects</a>
          <a href="#contact" className="px-3 hover:text-slate-600">Contact</a>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="  text-2xl hover:text-blue-500"></GitHubIcon>
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="fab fa-linkedin text-2xl hover:text-blue-500"></LinkedInIcon>
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
            <XIcon className="fab fa-twitter text-2xl hover:text-blue-500"></XIcon>
          </a>
        </div>

        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Asanga Emmanuel. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;