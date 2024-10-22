import React from 'react'

function TestimonentCard({testimonial}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center space-x-4">
      <img src={testimonial.name} alt={testimonial.name} className="w-12 h-12 rounded-full" />
      <div>
        <h4 className="text-lg font-bold">{testimonial.name}</h4>
        <p className="text-sm text-gray-500">{testimonial.job}</p>
      </div>
    </div>
    <p className="mt-4 text-gray-600">{testimonial.text}</p>
  </div>
  )
}

export default TestimonentCard