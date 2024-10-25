import TestimonialCard from './TestimonentCard.jsx'

function Testimonials() {

  const testimonials = [
    {
      name: "Lapah Npanbi ",
      job: "CEO,Icekidd YT Youtuber",
      avatar: "/icekidd.JPG",
      text: "Asanga is a talented developer with a keen eye for detail. His work on our platform was exceptional.",
    },
    {
      name: "CodingBa",
      job: "CEO, Botech development 360",
      avatar: "/codingba.jpg",
      text: "Working with Asanga was a pleasure. He delivered top-notch code and was always proactive.",
    },
    {
      name: "Addo Michael ",
      job: "works in Botech development 360",
      avatar: "/mike.jpg",
      text: "Emmanuel Asanga ability to pick up new technologies and implement them efficiently is truly impressive. He took on a challenging project where he used React, Node.js, and MongoDB to build a complex dashboard. His attention to detail and focus on delivering a flawless user experience made the final product outstanding.",
    },
    {
      name: "Punobyin Raphael Tibil ",
      job: "Course mate",
      avatar: "/raff.JPG",
      text: "Working with Asanga has been an absolute pleasure. His attention to detail and dedication to delivering high-quality solutions are second to none. He helped us build a responsive, user-friendly platform that exceeded our expectations. His ability to problem-solve and think critically is a major asset, and we can't wait to collaborate with him on future projects.",
    },
    {
      name: "Bawa Ernest Kwame",
      job: "Team mate",
      avatar: "/ernest.JPG",
      text: "Asanga played a key role in optimizing our web infrastructure. His expertise in Node.js and MongoDB ensured that our backend systems ran seamlessly, even under high traffic. His proactive approach and eagerness to tackle challenges head-on made him an invaluable part of our team.",
    },
  ];
  return (
    <section id="testimonials" className="py-12 mt-10 rounded-lg dark:bg-slate-800 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold dark:text-slate-400">Testimonials</h2>
        
        <div className="w-20 h-1 bg-indigo-200 rounded-full mx-auto mb-10 relative top-2"></div>
        <p className='text-xl dark:text-slate-400'>What people say about me 👍</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials