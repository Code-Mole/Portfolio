import React from 'react'

function ParticleContainer() {
  return (
    <div className="fixed top-0 left-0  w-full h-full z-50 pointer-events-none  overflow-hidden">
    
    <div className="absolute top-10 left-0 w-2 h-2 bg-blue-500 rounded-full animate-floatDiagonal opacity-60 delay-100"></div>


 
    <div className="absolute top-30 left-0 w-10 h-10 bg-purple-500 rounded-full animate-floatWave opacity-50 delay-400"></div>

   
    <div className="absolute left-40 top-0 w-3 h-3 bg-purple-500 rounded-full animate-drop opacity-70"></div>

 
    <div className="absolute top-32 left-0 w-4 h-4 bg-indigo-500 rounded-full animate-floatDiagonal opacity-80 delay-300"></div>


    <div className="absolute left-48 md:left-[40rem] top-0 w-2 h-2 bg-yellow-500 rounded-full animate-drop opacity-90"></div>

    <div className="absolute left-60 md:left-[70rem] top-0 w-5 h-5 bg-green-300 rounded-full animate-drop opacity-90"></div>

    <div className="absolute top-50 left-0 w-5 h-5 bg-green-500 rounded-full animate-floatWave opacity-50 delay-500"></div>

    <div className="absolute top-60 left-0 w-2 h-2 bg-red-500 rounded-full animate-floatZigZag opacity-40 delay-150"></div>

    <div className="absolute top-70 left-0 w-5 h-5 bg-yellow-500 rounded-full animate-floatDiagonal opacity-90 delay-250"></div>
  </div>
  )
}

export default ParticleContainer