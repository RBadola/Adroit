import React from "react"
import { sampleCountries } from "../data/countries"

export default function CountriesGrid() {
  const limitedCountries = sampleCountries.slice(0, 8)

  return (
    <div id="countries" className="container py-8 sm:py-10">
      <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center px-4">
        Find the gateway of 180+ countries
      </h3>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {limitedCountries.map((c, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 border rounded-lg bg-white shadow-sm transition-all duration-300 
                       hover:shadow-lg hover:border-saffron hover:scale-[1.03] cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold">{c.name}</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Available Services: {c.services.length}
                </p>
              </div>

              {/* Flag */}
              <img
                className="w-14 h-12 bg-gray-100 rounded-md object-cover"
                src={c.flag}
                alt={c.name}
              />
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-6 sm:mt-8">
        <a
          href="/explore-countries"
          className="px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-white font-semibold rounded-md bg-saffron hover:bg-saffron/90 transition"
        >
          View All Countries
        </a>
      </div>
    </div>
  )
}
