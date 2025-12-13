import React, { useState } from 'react'
import { sampleCountries } from '../data/countries'

const visaCategories = [
  "Business Visit Visa",
  "Conference/Event Visa",
  "Event Visa",
  "Family Visit Visa",
  "Join Family Visa",
  "Study Visa",
  "Tourist Visa",
  "Work Visa",
  "Medical Visa",
  "Transit Visa",
  "Others"
]

export default function SearchBar() {
  const [travelingTo, setTravelingTo] = useState("")
  const [visaCategory, setVisaCategory] = useState("")
  const [openCat, setOpenCat] = useState(false)

  return (
    <div className="container -mt-4 sm:-mt-8">
      <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 sm:p-6 shadow-xl">

        <form className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 items-end md:items-center justify-center">

          {/* Citizen */}
          <div>
            <label className="text-sm text-gray-600">I'm a Citizen of</label>
            <select className="w-full mt-2 p-3 border-2 border-[#23336f] rounded-lg bg-white">
              <option>India</option>
            </select>
          </div>

          {/* Traveling To */}
          <div>
            <label className="text-sm text-gray-600">Traveling to</label>
            <select
              value={travelingTo}
              onChange={(e) => setTravelingTo(e.target.value)}
              className="w-full mt-2 p-3 border-2 border-[#23336f] rounded-lg bg-white"
            >
              <option value="">Select Country</option>
              {sampleCountries.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Visa Category custom dropdown */}
          <div className="relative">
            <label className="text-sm text-gray-600">Visa Category</label>

            <button
              type="button"
              onClick={() => setOpenCat(!openCat)}
              className="w-full mt-2 p-3 border-2 border-[#23336f] rounded-lg bg-white text-left flex justify-between items-center"
            >
              {visaCategory || "Select Visa Category"}

              <svg
                className={`w-4 h-4 transition-all ${openCat ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openCat && (
              <div style={{backgroundColor:"white"}} className="absolute left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-lg max-h-56 overflow-y-auto z-50">
                {visaCategories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => {
                      setVisaCategory(c)
                      setOpenCat(false)
                    }}
                    className="w-full text-left px-4 py-3 bg-white hover:bg-gray-100 border-b last:border-b-0"
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Check button */}

          <div className="flex items-center justify-center" style={{color:"white"}}>
            <button
              type="button"
              className="px-5 py-3 rounded-lg bg-[#23336f] text-white font-semibold hover:bg-[#16204a] transition"
            >
              Check Details
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}
