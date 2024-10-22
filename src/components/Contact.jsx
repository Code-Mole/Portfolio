import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <section id="contact" className="py-12 mb-20 bg-gray-100 shadow-lg rounded-lg ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <div className="w-20 h-1 bg-indigo-200 rounded-full mx-auto mb-10 relative top-2"></div>
        <p className="mt-4 text-gray-600">
          I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="mt-8 max-w-xl mx-auto">
          <form action="https://formspree.io/f/{YOUR_FORM_ID}" method="POST" className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-left font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-left font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="_replyto"
                className="mt-2 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-left font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="mt-2 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-8">
            <h3 className="text-xl font-bold">Connect with me</h3>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="fab fa-github text-2xl text-gray-800 hover:text-blue-500"></GitHubIcon>
              </a>
              <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="fab fa-linkedin text-2xl text-blue-700 hover:text-blue-500"></LinkedInIcon>
              </a>
              <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
                <XIcon className="fab fa-twitter text-2xl text-blue-500 hover:text-blue-600"></XIcon>
              </a>
              <a href="mailto:youremail@example.com">
                <EmailIcon className="fas fa-envelope text-2xl text-gray-600 hover:text-blue-500"></EmailIcon>
              </a>
            </div>
            <h1 className='font-semibold mt-4 font-serif'>OR</h1>
            <p>
              <CallIcon></CallIcon> : +233542369646/+233503822323
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
