import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiCheckCircle } from "react-icons/fi"

const items = [
  {
    id: "01",
    title: "Visa Application Assitance",
    body: "We function as your dedicated visa processing department. This service covers comprehensive document submission, biometrics scheduling, and full coordination with Embassies/Consulates (similar to VFS/BLS centers), ensuring high-volume, error-free client processing for your recruitment or education agency.",
    image: "/Travel (7).jpg", slug: "Visa-Application-Assistance",
  },
  {
    id: "02",
    title: "Work Visas Consultants",
    body: "Expert consultation and hands-on preparation for complex, long-term visa categories (e.g., Work Permits, Skilled Worker, Residence). Our consultants manage the specific requirements and legal complexities associated with permanent and employment-based immigration applications, often referenced by agencies like Continental Immigration.",
    image: "/Travel (4).jpg",slug: "Work-Visa-Consultants",
  },
  {
    id: "03",
    title: "B2B Partnering",
    body: "A dedicated partnership solution where we provide compliant document checking, application pre-vetting, and regulatory guidance. We reduce your operational risk and liability by ensuring all client files meet stringent embassy requirements before submission, aligning with rigorous B2B standards.",
    slug: "B2B-Partnering",
    image: "/Travel (2).png",
  }
]

// Framer Motion Variants for Staggered Entrance
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}


export default function ServicesHorizontal() {
  // Start with the first item active
  const [active, setActive] = useState(0)

  // Get the content of the currently active item
  const activeItem = items[active];

  return (
    <section className="container py-10 sm:py-14">

      {/* Section Header */}
      <div className="text-center mb-10">
        <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide mb-1">
          Adroit Travels Service
        </p>

        <h2 className="text-3xl sm:text-4xl font-extrabold px-4">
          <span className="text-blue-900">Services</span> offered by Adroit Travels
        </h2>
      </div>

      {/* NEW UI → HORIZONTAL MASTER-DETAIL LAYOUT */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* === COLUMN 1: MASTER LIST (Vertical Controls) === */}
        <motion.ul
          className="space-y-3 lg:col-span-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {items.map((item, i) => (
            <motion.li
              key={item.id}
              variants={itemVariants}
              onClick={() => setActive(i)}
              className={`
                p-4 sm:p-5 rounded-xl  cursor-pointer transition-all duration-300
                ${i === active
                  ? 'bg-[#151236] text-[#fff] shadow-lg border-[#1c4dde]'
                  : 'bg-white text-gray-800 hover:bg-gray-50 border-gray-200'
                }
              `}
            >
              <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                {item.title}
              </h3>
              <p className={`text-sm mt-1 ${i === active ? 'text-white/80' : 'text-gray-500'}`}>
                {item.body.split('. ')[0] + '.'} {/* Show snippet */}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        {/* === COLUMN 2 & 3: DETAIL PANEL (Expanded Content) === */}
        <div className="lg:col-span-2 relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeItem && (
              <motion.div
                key={activeItem.id} // Key ensures re-mount and transition on content change
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-2xl  h-full"
              >
                <div className="flex flex-col sm:flex-row gap-6 mb-6 items-center ">

                  {/* Image */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-gray-50 rounded-lg p-2">
                    <img
                      src={activeItem.image}
                      alt={activeItem.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title & Status */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0b2466] mb-2">
                      {activeItem.title}
                    </h3>
                    <div className="text-sm font-medium text-green-600 flex items-center gap-1">
                      <FiCheckCircle size={18} /> Fully Managed Service
                    </div>
                  </div>
                </div>

                {/* Full Body Content */}
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg border-t py-4 mt-4">
                  {activeItem.body}
                </p>

                {/* Call to Action */}
                <a
                  href={`/services/${activeItem.slug}`}
                // className="mt-6 inline-block px-6 py-3 rounded-lg text-[#1c4dde] font-semibold hover:bg-[#1c4dde] hover:text-white transition"
                >
                  <button
                    className="my-3 CTA"
                  >

                    View Full Service
                  </button>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Button */}
      {/* <div className="flex justify-center mt-12">
        <a 
          style={{color:"white"}}
          href="/services" 
          className="px-7 py-3 rounded-lg bg-[#23336f] text-white font-semibold hover:bg-[#153ab0] transition"
        >
          View All Services
        </a>
      </div> */}
    </section>
  )
}