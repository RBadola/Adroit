import React from "react"

/*
  Uses the images you uploaded in the conversation.
  The build pipeline / dev server should serve these paths:
  - /mnt/data/3b7064bf-aba5-47dd-b03d-dc79f9b962ab.png   (large illustration)
  - /mnt/data/2c64e091-d1ee-4c7b-b31f-0abffe8508ce.png   (small overlay illustration)
*/

export default function WhyChoose() {
  return (
    <section aria-labelledby="why-heading" className="py-16 bg-white">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left artwork with decorative white border */}
        <div className="relative flex justify-center lg:justify-start">
          <div
            className="relative rounded-2xl bg-white p-6"
            style={{
              boxShadow: "0 10px 30px rgba(15, 17, 40, 0.06)",
              maxWidth: 520,
              width: "100%",
            }}
          >
            {/* main illustration */}
            <img
              src={"/Travel (2).jpg"}
              alt="travel illustration"
              className="w-full h-auto rounded-lg"
            />

            {/* small overlaid artwork at bottom-right (like screenshot) */}
            <div className="absolute right-6 -bottom-8 w-36 h-36 rounded-md bg-white p-2 shadow-md">
              <img
                src={"/Travel (5).jpg"}
                alt="small travel tile"
                className="w-full h-full object-contain"
              />
            </div>

            {/* subtle decorative white stroke on left (mimics the cut-corner artwork) */}
            <div
              aria-hidden
              className="hidden md:block"
              style={{
                position: "absolute",
                left: -18,
                top: 12,
                width: 48,
                height: 48,
                borderRadius: "999px",
                background: "white",
                boxShadow: "0 0 0 6px rgba(255,255,255,1)",
              }}
            />
          </div>
        </div>

        {/* Right text content */}
        <div>
          <p className="text-sm text-gray-400 uppercase tracking-wide mb-3">Adroit Travels Service</p>

          <h2 id="why-heading" className="text-3xl sm:text-4xl font-extrabold leading-tight mb-6">
            Why choose <span className="text-[#163f9a]">Adroit Travels</span> for your{" "}
            <span className="text-[#0b6cf6]">visa processing</span> needs?
          </h2>

          <div className="text-gray-600 space-y-5 text-base">
            <p>
              Many visa processing providers lack proper security and reliable systems, which can increase the risk of
              application errors or rejections. Adroit Travels follows strict checklists and secure submission processes
              to reduce that risk and keep your application on track.
            </p>

            <p>
              With deep experience in Indian visa policy and extensive partnerships with embassies and service partners,
              Adroit Travels offers transparent, reliable service from start to finish. We support applicants across a
              wide variety of visa types and provide clear guidance at each step.
            </p>

            <p>
              Start your visa journey with a trusted partner — we provide tailored assistance, document checks, and
              fast appointment options so you get through the process with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
