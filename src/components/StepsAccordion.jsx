import React, { useState } from "react"
import { FiChevronDown } from "react-icons/fi"

export default function StepsAccordion({ title = "Process of getting this service", steps = [] }) {
  const [open, setOpen] = useState(null)
  return (
    <section className="container py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-extrabold">
          {title}
        </h2>
        <button
          type="button"
          onClick={() => setOpen(open === "all" ? null : "all")}
          className="px-3 py-1 border rounded-md text-sm hover:bg-gray-50"
        >
          {open === "all" ? "Close all" : "Open all"}
        </button>
      </div>

      <div className="divide-y rounded-xl border bg-white">
        {steps.map((s, i) => {
          const isOpen = open === "all" || open === i
          return (
            <button
              key={i}
              onClick={() => setOpen(isOpen && open !== "all" ? null : i)}
              className="w-full text-left p-5 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-[#eef3ff] text-[#1c4dde] font-bold grid place-items-center">
                    {String(i + 1)}
                  </span>
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                </div>
                <FiChevronDown
                  className={`transition ${isOpen ? "rotate-180" : ""}`}
                />
              </div>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
