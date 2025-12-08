import React from "react"
import { motion } from "motion/react"

/*
  VisaSteps.jsx
  - Uses uploaded image path as illustration:
    /mnt/data/d267613c-eb7c-4e75-89d2-68cc86d6c093.png
  - TailwindCSS classes — adjust colors to match your theme tokens if needed.
*/

const steps = [
  {
    id: "01",
    title: "Create Adroit Travels Account",
    desc: "Open an account on the Adroit Travels portal to get started with online visa processing. Fill basic profile details and verify your contact.",
    img: "/Travel (1).png"
  },
  {
    id: "02",
    title: "Upload Your Documents",
    desc: "Upload scanned copies of the required documents (passport, photos, invitation letters etc.) and check your personalized checklist.",
    img: "/Travel (2).jpg"
  },
  {
    id: "03",
    title: "Embassy Approval",
    desc: "We submit the completed application to the embassy or consulate and track the process on your behalf until a decision is received.",
    img: "/Travel (2).png"
  },
  {
    id: "04",
    title: "Get Your Visa",
    desc: "Once approved, receive the visa copy via your profile/email or pick it up from our center — depending on the embassy rules.",
    img: "/Travel (7).jpg"
  }
]

export default function VisaSteps() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm text-gray-400 uppercase tracking-wide">Visa Steps</p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Get your <span className="text-[#0b6cf6]">Visa</span> within <span className="text-[#0b6cf6]">4 Steps</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {steps.map((s, idx) => (
            <article
              key={s.id}
              className="relative overflow-visible bg-white rounded-2xl border border-[#e6f0ff] p-6 md:p-8 shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
              aria-labelledby={`step-${s.id}`}
            >
              {/* big faded number */}
              <span
                aria-hidden
                className="absolute text-[5.5rem] md:text-[6rem] font-extrabold text-gray-200 right-6 bottom-3 pointer-events-none select-none"
                style={{ opacity: 0.18 }}
              >
                {s.id}
              </span>

              <div className="flex items-start gap-6">
                {/* image block with cutout-like left shape */}
                <div className="flex-shrink-0 relative">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-lg bg-white p-3 shadow-sm border border-[#f0f6ff]">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* small decorative notch to mimic cutout (optional) */}
                  <div className="absolute -left-6 -bottom-4 w-12 h-8 bg-white rounded-tr-full shadow-sm" />
                </div>

                <div className="flex-1">
                  <h3 id={`step-${s.id}`} className="text-xl font-semibold text-[#0b2466]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-gray-600 max-w-xl">{s.desc}</p>

                  <div className="mt-4">
                    <a
                      href="/services"
                      className="inline-block px-5 py-2 rounded-md border border-[#cfe3ff] text-[#0b2466] font-medium hover:bg-[#eef6ff] transition"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
