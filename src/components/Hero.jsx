
import React from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="overflow-hidden text-blue-900  ">
      <div className="container py-8 sm:py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
        <div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
          >
            Adroit Travels — Your Trusted Partner for End-to-End Visa Processing          </motion.h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl">
            Reliable, compliant, and scalable visa solutions for recruitment & education agencies.

            We help your agency deliver error-free visa outcomes without operational stress or compliance risks. Our team manages everything—from document vetting to embassy coordination—so you can focus on placing candidates, onboarding students, and growing your business.          </p>

          <div className="mt-4 sm:mt-6 flex flex-col items-center sm:flex-row gap-3 sm:gap-4">
            <a href="tel:+919811038434">
              <button
                className="
                  px-5 sm:px-6 py-2.5 sm:py-4 rounded-xl 
                  bg-[#23336f] text-white font-semibold text-sm sm:text-base 
                  hover:bg-[#16204a] transition-colors duration-300 shadow-xl
                  w-full sm:w-auto 
                "
                style={{ "color": "white" }}
              >
                Call Now
              </button>
            </a>
            <Link to={"/contact"}>
              <button
                className="
                  px-5 sm:px-6 py-2.5 sm:py-3 rounded-md CTA
                   sm:w-auto
                "
              >
                Request B2B Pricing
              </button>
            </Link>
          </div>
        </div>

        <motion.div className="h-48 sm:h-64 md:h-96 flex items-center justify-center mt-4 md:mt-0"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img src={'/Travel (9).jpg'} alt="hero illustration" className="max-h-full w-full object-contain rounded-lg" />
        </motion.div>


      </div>
    </section>
  )
}
