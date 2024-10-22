import React from 'react'

function TestimonentCard({testimonial}) {
  return (
    <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md">
    <div className="flex items-center space-x-4">
      <img src={testimonial.name} alt={testimonial.name} className="w-12 h-12 rounded-full dark:text-slate-300" />
      <div>
        <h4 className="dark:text-slate-200 text-lg font-bold">{testimonial.name}</h4>
        <p className="text-sm dark:text-slate-300 text-gray-500">{testimonial.job}</p>
      </div>
    </div>
    <p className="mt-4 text-gray-600 dark:text-slate-500">{testimonial.text}</p>
  </div>
  )
}

export default TestimonentCard