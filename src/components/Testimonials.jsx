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
      avatar: "/jane.jpg",
      text: "Working with Asanga was a pleasure. He delivered top-notch code and was always proactive.",
    },
    {
      name: "Addo Michael ",
      job: "works in Botech development 360",
      avatar: "/mike.mhtml",
      text: "Emmanuel Asanga has this collabrative abilities. He makes his intention known and clear. He is cool to work with.",
    },
    {
      name: "raff ",
      job: "works in Botech development 360",
      avatar: "/raff.JPG",
      text: "Emmanuel Asanga has this collabrative abilities. He makes his intention known and clear. He is cool to work with.",
    },
    {
      name: "Ernest ",
      job: "works in Botech development 360",
      avatar: "/ernest.JPG",
      text: "Emmanuel Asanga has this collabrative abilities. He makes his intention known and clear. He is cool to work with.",
    },
  ];
  return (
    <section id="testimonials" className="py-12 mt-10 rounded-lg dark:bg-slate-800 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold dark:text-slate-400">Testimonials</h2>
        <div className="w-20 h-1 bg-indigo-200 rounded-full mx-auto mb-10 relative top-2"></div>
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