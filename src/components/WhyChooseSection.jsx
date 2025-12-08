import React from "react"

export default function WhyChooseSection({ heading, image, points = [], copy }) {
  return (
    <section className="container py-12">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">
        {heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="rounded-2xl bg-[#eef6ff] p-6">
          <img src={image} alt="" className="w-full h-auto object-contain" />
        </div>

        <div>
          <p className="text-gray-700 leading-relaxed">{copy}</p>
          <ul className="mt-6 space-y-3">
            {points.map((p, i) => (
              <li
                key={i}
                className="flex gap-3 items-start rounded-lg bg-white shadow-sm border p-3"
              >
                <span className="mt-1 block w-2 h-2 rounded-full bg-[#1c4dde]" />
                <span className="text-gray-800">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
