// src/components/ServiceCard.jsx
import React from "react"
import { Link } from "react-router-dom"

export default function ServiceCard({ id, title, blurb, image, slug }) {
  return (
    <article className="relative bg-white rounded-2xl border border-[#e6f0ff] p-6 shadow-sm hover:shadow-md transition hover:-translate-y-1">
      {/* faint big number */}
      <span
        aria-hidden
        className="absolute text-[4rem] font-extrabold text-gray-200 right-4 bottom-2 select-none"
        style={{ opacity: 0.18 }}
      >
        {id}
      </span>

      <div className="flex items-start gap-5">
        <div className="w-24 h-24 rounded-xl bg-white p-3 shadow-sm border border-[#f0f6ff]">
          <img src={image} alt={title} className="w-full h-full object-contain" />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-[#0b2466]">{title}</h3>
          <p className="mt-2 text-gray-600">{blurb}</p>

          <Link
            to={slug}
            className="mt-4 inline-block px-5 py-2 rounded-md border border-[#1c2b5a] text-[#1c2b5a] font-semibold hover:bg-[#1c2b5a] hover:text-white transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  )
}
