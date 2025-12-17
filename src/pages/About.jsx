// src/pages/About.jsx
import React from "react"
import { Link } from "react-router-dom"
import { FiHome, FiChevronRight } from "react-icons/fi"
import { FaUsers } from "react-icons/fa"
import { motion } from "motion/react"

// ---- Assets ----
const HERO_ART   = "/Travel (1).jpg"
const WHAT_ART_1 = "/Travel (6).jpg"
const WHAT_ART_2 = "/Travel (7).jpg"
const CTA_LEFT   = "/Travel (3).jpg"
const CTA_RIGHT  = "/Travel (4).jpg"

// ---- Animation Variants ----
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

export default function About() {
  return (
    <main className="bg-white text-[#0b1c3d] overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden" style={{ color: "white" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f55c0] to-[#1a47a6]" />
        <div
          className="absolute inset-0 opacity-20"
          aria-hidden
          style={{
            backgroundImage: "radial-gradient(1px 1px at 1px 1px, rgba(255,255,255,.6) 1px, transparent 0)",
            backgroundSize: "18px 18px",
          }}
        />

        <motion.div 
          className="relative z-10 container py-10 md:py-14"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.nav variants={fadeInUp} className="flex items-center gap-2 text-white/90 text-sm mb-5">
            <FiHome />
            <Link to="/" className="hover:underline">Home</Link>
            <FiChevronRight className="opacity-70" />
            <span>About</span>
          </motion.nav>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold">
                About Adroit Travels
              </motion.h1>
              <motion.p variants={fadeInUp} className="mt-4 text-white/95 leading-relaxed">
                Adroit Travels is a B2B-focused visa processing and mobility support company,
                built to serve recruitment agencies, education consultants, and corporate
                mobility teams. We operate as a silent backend partner—handling compliance,
                documentation, and embassy coordination.
              </motion.p>
            </div>

            <motion.div 
              variants={fadeInUp}
              className="md:col-span-1"
            >
              <div className="rounded-xl bg-white p-4 shadow-md ring-1 ring-white/40">
                <img src={HERO_ART} alt="" className="w-full h-44 md:h-48 object-cover rounded-lg" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="relative z-0 h-6 bg-white rounded-t-[2rem] mt-6 mx-auto w-[96%]" />
      </section>

      {/* WHAT IS / INTRO CONTENT */}
      <section className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Collage - Animated from Left */}
          <motion.div 
            className="lg:col-span-1 grid grid-cols-2 gap-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img src={WHAT_ART_1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img src={WHAT_ART_2} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 rounded-2xl bg-white border shadow-sm p-4">
              <img src={HERO_ART} alt="" className="w-full h-36 object-contain" />
            </div>
          </motion.div>

          {/* Right Copy - Animated from Right */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <article className="rounded-2xl bg-white border shadow-sm p-6">
              <h2 className="text-xl font-bold">
                What is <span className="text-[#1a47a6]">Adroit Travels</span>?
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Adroit Travels is a professional visa processing partner designed specifically
                for B2B operations. We work behind the scenes for agencies and enterprises that
                move people across borders.
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Unlike traditional consultants, we focus on operational precision. Our clients rely on us not
                just for approvals—but for predictability, speed, and reduced operational risk.
              </p>
            </article>
          </motion.div>
        </div>
      </section>

      {/* STATS + WHAT WE DO */}
      <section className="container py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            className="grid grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <StatCard label="Countries" value="185+" />
            <StatCard label="Partners" value="1,000+" />
            <StatCard label="Processed" value="3.2M+" />
          </motion.div>

          <motion.div 
            className="lg:col-span-2 rounded-2xl bg-white border shadow-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold">What We Do for Our Clients</h3>
            <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              {[
                "Country-specific compliance audits.",
                "Document structuring & SOPs.",
                "Appointment coordination.",
                "High-volume processing.",
                "Clear tracking & reporting."
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <motion.section 
        className="container py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.article variants={fadeInUp} className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100">
            <h4 className="text-sm text-gray-500 uppercase tracking-widest">Our Purpose</h4>
            <h3 className="text-2xl font-extrabold mt-1">Our <span className="text-[#1a47a6]">Mission</span></h3>
            <p className="mt-3 text-gray-700 leading-relaxed">To become the most reliable visa processing backend for B2B mobility partners.</p>
          </motion.article>

          <motion.article variants={fadeInUp} className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100">
            <h4 className="text-sm text-gray-500 uppercase tracking-widest">Our Direction</h4>
            <h3 className="text-2xl font-extrabold mt-1">Our <span className="text-[#1a47a6]">Vision</span></h3>
            <p className="mt-3 text-gray-700 leading-relaxed">To set the standard for transparent, scalable, and data-driven visa workflows.</p>
          </motion.article>
        </div>
      </motion.section>

      {/* CORPORATE CLIENTS STRIP */}
      <section className="py-12 bg-[#f8fafc]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h4 className="text-sm text-gray-500">Trusted By</h4>
            <h3 className="text-xl md:text-2xl font-extrabold">Recruitment & Mobility Partners</h3>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.05 } }
            }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                className="h-16 rounded-xl bg-white border border-gray-100 shadow-sm grid place-items-center grayscale hover:grayscale-0 transition-all cursor-default"
              >
                <span className="text-gray-400 text-sm font-medium flex items-center gap-2">
                  <FaUsers className="text-blue-500" /> Partner Agency
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section className="container py-14">
        <motion.div 
          className="rounded-3xl border bg-white shadow-xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center relative z-10">
            <img src={CTA_LEFT} alt="" className="md:col-span-1 w-full object-contain hidden md:block" />

            <div className="md:col-span-3 text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-extrabold">
                Start a <span className="text-[#1a47a6]">B2B Partnership</span>
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Discuss your visa volumes and target countries. We’ll design a processing workflow tailored to your business.
              </p>

              <div className="mt-8 flex gap-4 flex-wrap justify-center md:justify-start">
                <Link to="/appointments" className="px-8 py-4 rounded-2xl bg-[#1a47a6] text-white font-bold shadow-lg hover:shadow-blue-200 transition-all">
                  Book Partnership Call
                </Link>
                <a href="https://wa.me/919811038434" className="px-8 py-4 rounded-2xl border-2 border-gray-200 font-bold hover:bg-gray-50 transition-all">
                  WhatsApp Us
                </a>
              </div>
            </div>

            <img src={CTA_RIGHT} alt="" className="md:col-span-1 w-full object-contain hidden md:block" />
          </div>
        </motion.div>
      </section>
    </main>
  )
}

function StatCard({ label, value }) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
      }}
      className="rounded-2xl bg-white border shadow-sm p-4 text-center hover:shadow-md transition-shadow"
    >
      <div className="text-2xl md:text-3xl font-extrabold text-[#1a47a6]">{value}</div>
      <div className="text-[10px] uppercase tracking-tighter text-gray-500 mt-1 font-bold">
        {label}
      </div>
    </motion.div>
  )
}