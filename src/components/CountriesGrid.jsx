import React from "react"
import { motion } from "framer-motion"
import { sampleCountries } from "../data/countries"

// --- 1. Define Animation Variants ---

const containerVariants = {
  // The 'hidden' state before scrolling into view
  hidden: {},
  // The 'visible' state when the grid is in view
  visible: {
    transition: {
      // Stagger the animation of children by 0.1 seconds
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: {
    y: 50, // Start 50px below the final position (slide up)
    opacity: 0
  },
  visible: {
    y: 0, // End at the final position
    opacity: 1, // End fully visible
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}


export default function CountriesGrid() {
  // Limiting to 10 countries to better demonstrate the 5-column grid with a staggered effect
  const limitedCountries = sampleCountries.slice(0, 10)

  return (
    <div id="countries" className="container py-10 text-blue-900">
      <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Find the gateway to your destination
      </h3>

      {/* Grid container with motion properties */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Triggers the animation when the component scrolls into view
        viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the grid is visible, runs once
      >
        {limitedCountries.map((c, idx) => (
          // Individual card with motion properties
          <motion.div
            key={idx}
            variants={itemVariants} // Applies the slide-up/fade-in animation
            className="group
              bg-white rounded-xl shadow-lg relative 
              hover:shadow-xl hover:-translate-y-1 z-50
              transition-all duration-300  cursor-pointer overflow-hidden hover:text-white text-blue-900
            "
            style={{'*:hover':""}}
          >
            <div className="absolute bg-[#1c398e] -z-10 w-full h-full top-50 left-0 group-hover:top-0 transition-all duration-200 rounded ">

            </div>
            {/* Flag Section */}
            <div className="w-full h-28 flex items-center justify-center bg-gray-50 group-hover:bg-transparent p-4">
              <img
                src={c.flag}
                alt={c.name}
                className="w-full h-full object-contain rounded-md"
              />
            </div>

            {/* Content Section */}
            <div className="px-5 py-4 text-center group-hover:text-amber-50">
              <h4 className="font-semibold text-lg text-white">{c.name}</h4>
              <p className="text-gray-500 group-hover:text-amber-50 text-sm mt-1">
                {c.services.length} Services Available
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      {/* <div className="flex justify-center mt-10">
        <a
          href="/explore-countries"
          className="
            px-6 py-3 rounded-md text-white font-semibold bg-saffron 
            hover:bg-saffron/90 transition
          "
        >
          View All Countries
        </a>
      </div> */}
    </div>
  )
}