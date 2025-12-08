import React from "react"
import { Link } from "react-router-dom"

export default function AppointmentBanner({
  title = "Get an Appointment",
  subtitle = "Choose an online or physical appointment to start your service.",
  artLeft = "/mnt/data/d267613c-eb7c-4e75-89d2-68cc86d6c093.png",
  artRight = "/mnt/data/118c4ae7-52ee-4870-a7f3-c5a4c24229f7.png"
}) {
  return (
    <section className="container py-12">
      <div className="rounded-2xl border bg-white shadow-sm p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <img src={artLeft} alt="" className="md:col-span-1 w-full object-contain" />
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-extrabold">{title}</h2>
            <p className="mt-3 text-gray-700">{subtitle}</p>

            <div className="mt-5 flex gap-3 flex-wrap">
              <Link
                to="/appointments" style={{color:"white"}}
                className="px-5 py-3 rounded-xl bg-[#1c4dde] text-white font-semibold hover:brightness-95"
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
          <img src={artRight} alt="" className="md:col-span-1 w-full object-contain" />
        </div>
      </div>
    </section>
  )
}
