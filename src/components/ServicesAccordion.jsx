import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiChevronRight, FiX } from "react-icons/fi"

const items = [
  {
    id: "01",
    title: "Visa Consultancy",
    body:
      "Adroit Travels consultancy service ensures smooth visa processing. Our professionals guide you with accurate documentation checks and application best-practices.",
    image: "/Travel (7).jpg",
  },
  {
    id: "02",
    title: "Cross-border Visa Processing",
    body:
      "We support cross-border visa logistics including document handling and embassy submission coordination so clients can focus on travel plans.",
    image: "/Travel (4).jpg",
  },
  {
    id: "03",
    title: "Visa Processing in India",
    body:
      "Full-service visa processing inside India — we screen your documents, prepare your application and submit on your behalf through authorized channels.",
    image: "/Travel (2).png",
  },
  {
    id: "04",
    title: "E-Visa Processing",
    body:
      "Assistance with e-visa forms, uploads and tracking for countries that allow electronic visas for Indian applicants.",
    image: "/Travel (1).png",
  },
]

export default function ServicesAccordion() {
  const [active, setActive] = useState(null)

  const openCard = (i) => setActive(i)
  const closeCard = () => setActive(null)

  return (
    <section className="container py-10 sm:py-14">
      {/* Section Header */}
      <div className="text-center mb-10">
        <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide mb-1">
          Adroit Travels Service
        </p>

        <h2 className="text-3xl sm:text-4xl font-extrabold px-4">
          <span className="text-[#1c4dde]">Services</span> offered by Adroit Travels
        </h2>
      </div>

      {/* NEW UI → CARD GRID */}
      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden group relative flex flex-col sm:flex-row"
          >
            {/* Left Image (big) */}
            <div className="w-full sm:w-1/3 h-40 sm:h-auto flex items-center justify-center bg-gray-50 p-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
              />
            </div>

            {/* Right Content */}
            <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <span className="text-[#1c4dde] font-bold text-lg">{item.id}</span>
                <h3 className="text-[1.15rem] sm:text-xl font-semibold text-[#0b2466] mt-1 leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Button */}
              <button
                onClick={() => openCard(i)}
                className="mt-4 flex items-center gap-2 text-[#1c2b5a] font-semibold hover:text-[#1c4dde] transition"
              >
                View Details
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* EXPANDED OVERLAY PANEL */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center px-4 z-[100]"
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl max-w-xl w-full p-6 relative"
            >
              {/* Close Button */}
              <button
                onClick={closeCard}
                className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
              >
                <FiX size={24} />
              </button>

              {/* Image */}
              <div className="w-full flex justify-center mb-4">
                <img
                  src={items[active].image}
                  alt={items[active].title}
                  className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#0b2466] mb-3">
                {items[active].title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {items[active].body}
              </p>

              <a
                href={`/services/${items[active].title.toLowerCase().replace(/\s+/g, "-")}`}
                className="mt-6 inline-block px-6 py-3 border border-[#1c2b5a] rounded-lg text-[#1c2b5a] font-semibold hover:bg-[#1c2b5a] hover:text-white transition"
              >
                View Service Details
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Button */}
      <div className="flex justify-center mt-12">
        <a 
        style={{color:"white"}}
          href="/services" 
          className="px-7 py-3 rounded-lg bg-[#23336f] text-white font-semibold hover:bg-[#153ab0] transition"
        >
          View All Services
        </a>
      </div>
    </section>
  )
}
