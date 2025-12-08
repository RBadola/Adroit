import React from "react"

export default function IncludedGrid({ heading = "What is included in this service", items = [] }) {
  return (
    <section className="container py-12">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">
        {heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((it, idx) => (
          <article key={idx} className="relative bg-white rounded-2xl border border-[#e6f0ff] p-6 shadow-sm">
            <span
              aria-hidden
              className="absolute text-[4rem] md:text-[5rem] font-extrabold text-gray-200 right-5 bottom-2 select-none"
              style={{ opacity: 0.2 }}
            >
              {String(idx + 1).padStart(2, "0")}
            </span>

            <div className="flex items-start gap-5">
              <div className="w-24 h-24 rounded-xl bg-white p-3 shadow-sm border border-[#f0f6ff]">
                <img src={it.img} alt={it.title} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0b2466]">{it.title}</h3>
                <p className="mt-2 text-gray-600">{it.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
