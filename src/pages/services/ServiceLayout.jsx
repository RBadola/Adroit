import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FiHome, FiChevronRight } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import { motion } from "motion/react"

export default function ServiceLayout({ title, children, heroImg }) {
  const [imgSrc, setImgSrc] = useState(heroImg || "/Travel (4).jpg")

  // Animation Variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  }

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  return (
    <div className="bg-white">
      <header className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f55c0] to-[#1a47a6]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(1px 1px at 1px 1px, rgba(255,255,255,.6) 1px, transparent 0)", backgroundSize: "18px 18px" }} />

        <motion.div 
          className="relative z-10 container py-10 md:py-14 text-[#fff]"
          variants={containerVars}
          initial="hidden"
          animate="visible"
        >
          {/* Breadcrumb */}
          <motion.nav variants={itemVars} className="flex items-center gap-2 text-white/90 text-sm mb-6">
            <FiHome className="shrink-0" />
            <Link to="/" className="hover:underline">Home</Link>
            <FiChevronRight className="opacity-70" />
            <Link to="/services" className="hover:underline">Services</Link>
            <FiChevronRight className="opacity-70" />
            <span className="truncate">{title}</span>
          </motion.nav>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-2">
              <motion.h1 variants={itemVars} className="text-3xl md:text-4xl font-extrabold leading-tight">
                {title}
              </motion.h1>
              <motion.div variants={itemVars} className="mt-5 space-y-3 text-white/95 leading-relaxed">
                <p>Applying for a visa and getting approval can be tougher than it looks...</p>
                <p>We help you arrange every required document tailored for Indian applicants...</p>
              </motion.div>
            </div>

            <div className="md:col-span-1">
              <motion.div 
                variants={itemVars} 
                whileHover={{ scale: 1.02 }}
                className="rounded-xl bg-white p-3 shadow-md ring-1 ring-white/50"
              >
                <img src={imgSrc} alt="" className="w-full h-44 md:h-48 object-cover rounded-lg" onError={() => setImgSrc("/Travel (4).jpg")} />
              </motion.div>

              <motion.div variants={itemVars}>
                <Link to="/appointments" className="mt-4 block w-full rounded-xl border border-white bg-[#fff] text-indigo-900 font-semibold text-center py-3 shadow-sm hover:bg-blue-50 transition" style={{color: "#1a47a6"}}>
                  Book Appointment
                </Link>
              </motion.div>

              <motion.a variants={itemVars} href="https://wa.me/919811038434" target="_blank" rel="noreferrer" className="mt-3 flex items-center justify-center gap-3 rounded-xl border border-white/80 py-3 text-white hover:bg-white/10 transition">
                <span className="inline-flex items-center justify-center rounded-full bg-white text-green-600 w-6 h-6"><FaWhatsapp /></span>
                <span className="font-medium">Ask Question</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
        <div className="relative z-0 h-6 bg-white rounded-t-[2rem] mt-6 mx-auto w-[96%]" />
      </header>
      <section className="container py-10">{children}</section>
    </div>
  )
}