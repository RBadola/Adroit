// src/pages/About.jsx
import React from "react"
import { Link } from "react-router-dom"
import { FiHome, FiChevronRight } from "react-icons/fi"
import { FaUsers } from "react-icons/fa"

// ---- Replace these with your real illustrations later ----
const HERO_ART   = "/Travel (1).jpg"
const WHAT_ART_1 = "/Travel (6).jpg"
const WHAT_ART_2 = "/Travel (7).jpg"
const MISSION_1  = "/Travel (5).jpg"
const MISSION_2  = "/Travel (8).jpg"
const MISSION_3  = "/Travel (2).png"
const MISSION_4  = "/Travel (1).png"
const CTA_LEFT   = "/Travel (3).jpg"
const CTA_RIGHT  = "/Travel (4).jpg"
// ---------------------------------------------------------

export default function About() {
  return (
    <main className="bg-white text-[#0b1c3d]">
      {/* HERO */}
      <section className="relative overflow-hidden" style={{color:"white"}}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f55c0] to-[#1a47a6]" />
        <div
          className="absolute inset-0 opacity-20"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 1px 1px, rgba(255,255,255,.6) 1px, transparent 0)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="relative z-10 text-white">
          <div className="container py-10 md:py-14">
            <nav className="flex items-center gap-2 text-white/90 text-sm mb-5">
              <FiHome />
              <Link to="/" className="hover:underline">Home</Link>
              <FiChevronRight className="opacity-70" />
              <span>About</span>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                  About Adroit Travels
                </h1>
                <p className="mt-4 text-white/95 leading-relaxed">
                  Welcome to Adroit Travels—your India-focused visa & travel partner.
                  We simplify complex requirements using modern tooling, clear instructions,
                  and locally relevant guidance. From document strategy to appointments and
                  checklists, we keep your journey effortless and efficient.
                </p>
              </div>
              <div className="md:col-span-1">
                <div className="rounded-xl bg-white p-4 shadow-md ring-1 ring-white/40">
                  <img src={HERO_ART} alt="" className="w-full h-44 md:h-48 object-contain rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* white seam */}
        <div className="relative z-0 h-6 bg-white rounded-t-[2rem] mt-6 mx-auto w-[96%]" />
      </section>

      {/* WHAT IS / INTRO CONTENT */}
      <section className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* left collage */}
          <div className="lg:col-span-1 grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden">
              <img src={WHAT_ART_1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={WHAT_ART_2} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 rounded-2xl bg-white border shadow-sm p-4">
              <img src={HERO_ART} alt="" className="w-full h-36 object-contain" />
            </div>
          </div>

          {/* right copy */}
          <div className="lg:col-span-2">
            <article className="rounded-2xl bg-white border shadow-sm p-6">
              <h2 className="text-xl font-bold">What is <span className="text-[#1a47a6]">Adroit Travels</span>?</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Adroit Travels is an India-first visa support and travel facilitation brand.
                We blend local know-how with global standards to make visa processing genuinely
                simpler. Our consultants evaluate your profile, craft a clear strategy, and
                guide you through forms, checklists, packaging, and submissions—so your file
                communicates exactly what missions want to see.
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                With routes across 180+ countries and deep familiarity with Indian centres
                (VFS, BLS, TLS, embassies), we help you avoid common pitfalls and keep
                timelines realistic. No hype—just reliable execution.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* STATS + WHAT WE DO */}
      <section className="container py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* stats cards */}
          <div className="grid grid-cols-3 gap-4">
            <StatCard label="Countries Info" value="185+" />
            <StatCard label="Organizations Relying" value="1,000+" />
            <StatCard label="Travellers Served" value="3.2M+" />
          </div>

          {/* what we do */}
          <div className="lg:col-span-2 rounded-2xl bg-white border shadow-sm p-6">
            <h3 className="text-xl font-bold">What We Do?</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              We deliver end-to-end visa help for Indian travellers—consultation, checklist design,
              documentation, forms & uploads, appointment planning, packaging and submission coaching.
              Where e-visa routes exist, we take care of the portal, photo/scan validations, payments,
              and downloads. For legalisation, we plan apostille/attestation sequences, prepare
              enclosures and manage logistics with care.
            </p>
            <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-2">
              <li>India-specific checklists and embassy-grade packaging.</li>
              <li>Proactive slot strategy for VFS/BLS/TLS & consulates.</li>
              <li>Interview and risk prep for tricky profiles or past refusals.</li>
              <li>Clear, realistic timelines—no surprises.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <article>
            <h4 className="text-sm text-gray-500">Our Journey</h4>
            <h3 className="text-2xl font-extrabold">Our <span className="text-[#1a47a6]">Mission</span></h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              To remove stress from visa & document workflows in India by designing precise,
              human-friendly processes—and to ensure every traveller is confident in their file.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <RoundedImage src={MISSION_1} />
              <RoundedImage src={MISSION_2} />
              <RoundedImage src={MISSION_3} />
              <RoundedImage src={MISSION_4} />
            </div>
          </article>

          <article>
            <h4 className="text-sm text-gray-500">Our Journey</h4>
            <h3 className="text-2xl font-extrabold">Our <span className="text-[#1a47a6]">Vision</span></h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              A borderless, predictable experience for international travel—powered by
              clarity, ethics, and modern tools. We believe Indian applicants should
              always know “what, why, and when” at each step.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <RoundedImage src={MISSION_2} />
              <RoundedImage src={MISSION_3} />
              <RoundedImage src={MISSION_4} />
              <RoundedImage src={MISSION_1} />
            </div>
          </article>
        </div>
      </section>

      {/* CORPORATE CLIENTS STRIP (placeholder logos) */}
      <section className="py-12 bg-[#f8fafc]">
        <div className="container">
          <h4 className="text-sm text-gray-500 text-center">Our Journey</h4>
          <h3 className="text-xl md:text-2xl font-extrabold text-center">Our Corporate Clients</h3>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="h-14 rounded-xl bg-white border shadow-sm grid place-items-center">
                <span className="text-gray-400 text-sm flex items-center gap-2">
                  <FaUsers /> Logo {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section className="container py-14">
        <div className="rounded-2xl border bg-white shadow-sm p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <img src={CTA_LEFT} alt="" className="md:col-span-1 w-full object-contain" />
            <div className="md:col-span-3">
              <h2 className="text-2xl md:text-3xl font-extrabold">
                Get Adroit Travels <span className="text-[#1a47a6]">Free Appointment</span>
              </h2>
              <p className="mt-3 text-gray-700">
                Pick a slot, share your profile, and we’ll map your best route—online or in person.
              </p>
              <div className="mt-5 flex gap-3 flex-wrap">
                <Link
                  to="/appointments"
                  className="px-5 py-3 rounded-xl bg-[#1a47a6] text-white font-semibold hover:brightness-95"
                >
                  Book Appointment
                </Link>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-xl border font-semibold hover:bg-gray-50"
                >
                  Ask Question
                </a>
              </div>
            </div>
            <img src={CTA_RIGHT} alt="" className="md:col-span-1 w-full object-contain" />
          </div>
        </div>
      </section>
    </main>
  )
}

/* --------- small helpers --------- */

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl bg-white border shadow-sm p-5 text-center">
      <div className="text-3xl font-extrabold text-[#1a47a6]">{value}</div>
      <div className="text-xs uppercase tracking-wide text-gray-500 mt-1">{label}</div>
    </div>
  )
}

function RoundedImage({ src }) {
  return (
    <div className="rounded-2xl overflow-hidden h-28">
      <img src={src} alt="" className="w-full h-full object-fill object-top" />
    </div>
  )
}
