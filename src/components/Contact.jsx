import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9k1iomq', 'template_rgplwgg', form.current, {
        publicKey: 'j8AJVovn29iHAP6Fb',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    e.target.reset();

  };
  return (
    <section id="contact" className="py-12 mb-20 dark:bg-slate-800 mt-10 bg-gray-100 shadow-lg rounded-lg ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold dark:text-slate-400">Get in Touch</h2>
        <div className="w-20 h-1 bg-indigo-200 rounded-full mx-auto mb-10 relative top-2"></div>
        <p className="mt-4 dark:text-slate-500 text-gray-600">
          I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="mt-8 max-w-xl mx-auto">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-left font-medium dark:text-slate-200 ml-6">Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                className=" focus:ring-offset-4 ring-offset-transparent mt-2 p-3 dark:bg-slate-600 dark:border-none mx-5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-left font-medium dark:text-slate-200 ml-6">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="mt-2 p-3 rounded-md border border-gray-300
                dark:bg-slate-600 dark:border-none mx-5 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-4 ring-offset-transparent "
                
                placeholder="Your email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-left font-medium dark:text-slate-200 ml-6 " >Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className=" focus:ring-offset-4 ring-offset-transparent  placeholder:text-slate-400 mt-2 p-3 rounded-md border border-gray-300 
                dark:bg-slate-600 dark:border-none mx-5
                focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                value="send"
                className="w-[92%] m-5 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all  duration-300"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-8">
            <h3 className="text-xl font-bold dark:text-slate-400">Connect with me</h3>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://github.com/Code-Mole" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="fab fa-github text-2xl text-blue-700 hover:text-blue-500"></GitHubIcon>
              </a>
              <a href="https://www.linkedin.com/in/emmanuel-asanga-526412286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app " target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="fab fa-linkedin text-2xl text-blue-700 hover:text-blue-500"></LinkedInIcon>
              </a>
              <a href="https://x.com/mole_asangabia" target="_blank" rel="noopener noreferrer">
                <XIcon className="fab fa-twitter text-2xl text-blue-700 hover:text-blue-500"></XIcon>
              </a>
              <a href="mailto:emmanuelasanga46@gmail.com">
                <EmailIcon className="fas fa-envelope text-2xl text-blue-700 hover:text-blue-500"></EmailIcon>
              </a>
            </div>
            <h1 className='font-semibold mt-4 font-serif dark:text-slate-400'>OR</h1>
            <p className='dark:text-slate-500'>
              <CallIcon></CallIcon> : +233542369646/+233503822323
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
