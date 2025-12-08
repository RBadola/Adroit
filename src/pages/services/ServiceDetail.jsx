import React from "react"
import ServiceLayout from "./ServiceLayout"
import WhyChooseSection from "../../components/WhyChooseSection"
import StepsAccordion from "../../components/StepsAccordion"
import IncludedGrid from "../../components/IncludedGrid"
import AppointmentBanner from "../../components/AppointmentBanner"
import { SERVICE_DETAILS } from "../../data/Services"

export default function ServiceDetail({ slug }) {
  const data = SERVICE_DETAILS[slug]
  if (!data) return null

  return (
    <ServiceLayout title={data.title} heroImg={data.heroImg}>
      {/* Why Choose */}
      <WhyChooseSection
        heading={data.why.heading}
        image={data.why.image}
        points={data.why.points}
        copy={data.why.copy}
      />

      {/* Process Steps */}
      <StepsAccordion
        title={`Process of getting ${data.title} Service`}
        steps={data.steps}
      />

      {/* What's Included */}
      <IncludedGrid
        heading={`What is included in ${data.title} Service?`}
        items={data.included}
      />

      {/* Appointment CTA */}
      <AppointmentBanner
        title={`Get an Appointment to start ${data.title}`}
        subtitle="Pick a slot, share your profile, and we’ll guide the rest. Online and physical appointments available."
      />
    </ServiceLayout>
  )
}
