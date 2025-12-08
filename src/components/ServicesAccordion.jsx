import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { FiChevronDown } from "react-icons/fi"

/*
  Compact Services Accordion:
  - Header row fixed/compact height when closed (~72px)
  - Image moved into header so closed card stays short
  - Click anywhere on the card header toggles
  - Body animates open/closed
  - Using provided uploaded image for thumbnails
*/

const items = [
  {
    id: "01",
    title: "Visa Consultancy",
    body:
      "Adroit Travels consultancy service ensures smooth visa processing. Our professionals guide you with accurate documentation checks and application best-practices.",
    image: "/Travel (7).jpg"
  },
  {
    id: "02",
    title: "Cross-border Visa Processing",
    body:
      "We support cross-border visa logistics including document handling and embassy submission coordination so clients can focus on travel plans.",
    image: "/Travel (4).jpg"
  },
  {
    id: "03",
    title: "Visa Processing in India",
    body:
      "Full-service visa processing inside India — we screen your documents, prepare your application and submit on your behalf through authorized channels.",
    image: "/Travel (2).png"
  },
  {
    id: "04",
    title: "E-Visa Processing",
    body:
      "Assistance with e-visa forms, uploads and tracking for countries that allow electronic visas for Indian applicants.",
    image: "/Travel (1).png"
  }
]

function Collapsible({ isOpen, children }) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.32 }}
          className="overflow-hidden"
        >
          <div className="pt-4">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState(-1)

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i))

  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">Adroit Travels Service</p>
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="text-[#1c4dde]">Services</span> offered by Adroit Travels
        </h2>
      </div>

      <div className="space-y-6">
        {items.map((item, i) => {
          const isOpen = openIndex === i

          return (
            <article
              key={item.id}
              className={`bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden`}
            >
              {/* Header - compact fixed height */}
              <header
                className="flex items-center justify-between px-5 md:px-6 py-4 md:py-3 cursor-pointer"
                onClick={() => toggle(i)}
                role="button"
                aria-expanded={isOpen}
                aria-controls={`service-body-${i}`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 font-medium md:text-lg">{item.id}</span>
                  <h3 className="text-lg md:text-xl font-semibold text-[#0b2466]">{item.title}</h3>
                </div>

                <div className="flex items-center gap-4">
                  {/* thumbnail kept small so header remains short */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 md:w-16 md:h-16 object-contain rounded-md"
                    onClick={(e) => e.stopPropagation()} // prevent toggling when clicking image
                  />

                  <FiChevronDown
                    className={`text-gray-500 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                    size={20}
                    aria-hidden
                  />
                </div>
              </header>

              {/* Collapsible body */}
              <Collapsible isOpen={isOpen}>
                <div id={`service-body-${i}`} className="px-5 md:px-6 pb-6 md:pb-8">
                  <p className="text-gray-600 leading-relaxed">{item.body}</p>

                  <div className="mt-5">
                    <a
                      href={`/services/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-block px-6 py-3 border border-[#1c2b5a] rounded-lg text-[#1c2b5a] font-semibold hover:bg-[#1c2b5a] hover:text-white transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Service Details
                    </a>
                  </div>
                </div>
              </Collapsible>
            </article>
          )
        })}
      </div>

      <div className="flex justify-center mt-12">
        <a
          href="/services"
          style={{color:"white"}}
          className="px-8 py-3 rounded-lg bg-[#23336f]  text-white font-semibold hover:bg-[#153ab0] transition"
        >
          View All Services
        </a>
      </div>
    </section>
  )
}
