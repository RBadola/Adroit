// src/pages/services/ServiceLayout.jsx
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FiHome, FiChevronRight } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"

export default function ServiceLayout({ title, children, heroImg }) {
  // fallback if hero image fails
  const [imgSrc, setImgSrc] = useState(
    heroImg || "/Travel (4).jpg"
  )

  return (
    <div className="bg-white" >
      {/* HERO */}
      <header className="relative overflow-hidden" style={{color:"white"}}>
        {/* gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f55c0] to-[#1a47a6]" />

        {/* subtle dotted path overlay (inline SVG as bg) */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 1px 1px, rgba(255,255,255,.6) 1px, transparent 0)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* content area */}
        <div className="relative z-10 text-white">
          <div className="container py-10 md:py-14">
            {/* breadcrumb */}
            <nav className="flex items-center gap-2 text-white/90 text-sm mb-6">
              <FiHome className="shrink-0" />
              <Link to="/" className="hover:underline">Home</Link>
              <FiChevronRight className="opacity-70" />
              <Link to="/services" className="hover:underline">Services</Link>
              <FiChevronRight className="opacity-70" />
              <span className="truncate">{title}</span>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
              {/* left copy */}
              <div className="md:col-span-2">
                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  {title}
                </h1>
                <div className="mt-5 space-y-3 text-white/95 leading-relaxed">
                  <p>
                    Applying for a visa and getting approval can be tougher than it looks.
                    Authorities evaluate profiles closely based on documents, forms and history.
                  </p>
                  <p>
                    We help you arrange every required document and present a clean, consistent
                    application — tailored for Indian applicants and embassy norms.
                  </p>
                </div>
              </div>

              {/* right illustration + CTAs */}
              <div className="md:col-span-1">
                <div className="rounded-xl bg-white p-3 shadow-md ring-1 ring-white/50">
                  <img
                    src={imgSrc}
                    alt=""
                    className="w-full h-44 md:h-48 object-contain rounded-lg"
                    onError={() =>
                      setImgSrc("/Travel (4).jpg")
                    }
                  />
                </div>

                <Link
                  to="/appointments" style={{color:"white"}}
                  className="mt-4 block w-full rounded-xl border border-white bg-white text-[#1a47a6] font-semibold text-center py-3 shadow-sm hover:shadow-md transition"
                >
                  Book Appointment
                </Link>

                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 flex items-center justify-center gap-3 rounded-xl border border-white/80 py-3 text-white hover:bg-white/10 transition"
                >
                  <span className="inline-flex items-center justify-center rounded-full bg-white text-green-600 w-6 h-6">
                    <FaWhatsapp />
                  </span>
                  <span className="font-medium">Ask Question</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* soft handoff into the page (no wave SVG) */}
        <div className="relative z-0 h-6 bg-white rounded-t-[2rem] mt-6 mx-auto w-[96%]" />
      </header>

      {/* PAGE BODY */}
      <section className="container py-10">
        {children}
      </section>
    </div>
  )
}
