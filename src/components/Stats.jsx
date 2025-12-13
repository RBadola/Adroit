
import React from 'react'

export default function Stats(){
  return (
    <div className="container py-8 sm:py-12" style={{color:"white"}}>
      <div className="bg-[#151236] text-white rounded-lg p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-extrabold">185+</div>
          <div className="text-xs sm:text-sm mt-1">Countries Visa Information</div>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-extrabold">1,000+</div>
          <div className="text-xs sm:text-sm mt-1">Organizations Relying on Us</div>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-extrabold">3.2M+</div>
          <div className="text-xs sm:text-sm mt-1">Travelers Served from India</div>
        </div>
      </div>
    </div>
  )
}
