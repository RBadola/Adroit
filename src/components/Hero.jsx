
import React from 'react'
import { motion } from 'motion/react'

export default function Hero(){
  return (
    <section className="bg-[url('/mnt/data/118c4ae7-52ee-4870-a7f3-c5a4c24229f7.png')] bg-no-repeat bg-right bg-contain bg-[length:0px_0px] md:bg-[length:auto]">
      <div className="container py-8 sm:py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        <div>
          <motion.h2 
            initial={{y:20,opacity:0}} 
            animate={{y:0,opacity:1}} 
            transition={{duration:0.6}} 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
          >
            India Visa Processing Support
          </motion.h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl">
            Adroit Travels helps Indian applicants and residents navigate visa requirements, appointments and document checklists across 180+ countries. Fast, reliable, and locally focused.
          </p>

          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-md bg-saffron text-white font-semibold text-sm sm:text-base">
              Book Appointment
            </button>
            <button className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-md border text-sm sm:text-base">
              E-Visa Service
            </button>
          </div>
        </div>

        <div className="h-48 sm:h-64 md:h-96 flex items-center justify-center mt-4 md:mt-0">
          <img src={'/Travel (7).jpg'} alt="hero illustration" className="max-h-full w-full object-contain rounded-lg" />
        </div>
      </div>
    </section>
  )
}
