import React from "react"
import { sampleCountries } from "../data/countries"

export default function CountriesGrid() {
  const limitedCountries = sampleCountries.slice(0, 8)

  return (
    <div id="countries" className="container py-10">
      <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Find the gateway of 180+ countries
      </h3>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {limitedCountries.map((c, idx) => (
          <div
            key={idx}
            className="
              bg-white rounded-xl shadow-sm border 
              hover:shadow-md hover:-translate-y-[2px]
              transition-all duration-200 overflow-hidden cursor-pointer
            "
          >
            {/* Flag Section */}
            <div className="w-full h-28 flex items-center justify-center bg-gray-50 border-b">
              <img
                src={c.flag}
                alt={c.name}
                className="w-16 h-12 object-contain rounded-md"
              />
            </div>

            {/* Content Section */}
            <div className="px-5 py-4 text-center">
              <h4 className="font-semibold text-lg">{c.name}</h4>
              <p className="text-gray-500 text-sm mt-1">
                {c.services.length} Services Available
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <a
          href="/explore-countries"
          className="
            px-6 py-3 rounded-md text-white font-semibold bg-saffron 
            hover:bg-saffron/90 transition
          "
        >
          View All Countries
        </a>
      </div>
    </div>
  )
}
