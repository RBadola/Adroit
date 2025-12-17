import React from "react"
import WhyChooseSection from "./WhyChooseSection"
import { motion } from 'framer-motion';
import { FiCheckCircle, FiGlobe, FiUsers } from 'react-icons/fi'; // Using relevant icons

export default function WhyChoose() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        type: "spring", 
        stiffness: 100 
      }
    }
  };
  return (
   <section aria-labelledby="why-heading" className="py-16 bg-white text-blue-900">
 
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left artwork with decorative white border (keeping existing structure) */}
        <motion.div
          className="relative flex justify-center lg:justify-start"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          // Adjusted transition for a faster, snappier reveal
          transition={{ duration: 0.8, type: "spring", stiffness: 150 }} 
          viewport={{ once: true, amount: 0.5 }}
        >
          <div
            className="relative rounded-2xl bg-white p-6 border border-t-4 border-t-indigo-900 border-r-4 border-r-indigo-900   "
            style={{
              boxShadow: "0 10px 30px rgba(15, 17, 40, 0.06)",
              maxWidth: 520,
              width: "100%",
            }}
          >
            {/* main illustration */}
            <img
              src={"/Travel (6).jpg"}
              alt="travel illustration"
              className="w-full h-auto rounded-lg "
            />

            <div className="absolute right-3 sm:right-6 -bottom-6 sm:-bottom-8 w-24 h-24 sm:w-36 sm:h-36 ">
              <img
                src={"/Travel (5).jpg"}
                alt="small travel tile"
                className="w-full object-cover rotate-10 shadow-md rounded-md slow-bounce-box"
              />
            </div>

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
        </motion.div>
        
        {/* Right text content - Problem / Solution */}
        <div>
          <p className="text-sm text-gray-400 uppercase tracking-wide mb-3">The Adroit Solution</p>

          <h2 
            id="why-heading" 
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4 sm:mb-6"
          >
            Visa complexity is <span className="text-[#23336f]">slowing down your business.</span>
          </h2>

          <div className="text-gray-600 space-y-5 text-sm sm:text-base">
            
            {/* --- PROBLEM LIST --- */}
            <p className="font-semibold text-gray-800">
              Recruitment and education agencies across India, Nepal, and Bangladesh lose time, clients, and revenue due to:
            </p>
            
            <ul className="space-y-2 ml-5 list-disc list-outside">
              <li className="text-red-600">Constantly changing immigration rules</li>
              <li className="text-red-600">Frequent documentation errors</li>
              <li className="text-red-600">Delays caused by manual follow-ups</li>
              <li className="text-red-600">Lack of transparent status tracking</li>
              <li className="text-red-600">High rejection rates affecting placement commitments</li>
            </ul>

            {/* --- SOLUTION --- */}
            <h3 className="text-lg font-bold text-[#23336f] pt-2">Adroit Travels solves these problems for you.</h3>

            <p>
              Our experts streamline the entire process with a structured, compliant, and fully managed visa workflow. We become your silent backend team—reducing your workload and increasing your placement success.
            </p>
            
            {/* Kept the closing paragraph for stronger messaging */}
            <p className="italic text-gray-500">
              We help your agency deliver error-free visa outcomes without operational stress or compliance risks. You can focus on placing candidates, onboarding students, and growing your business.
            </p>

          </div>
        </div>
      </div>
         <section className="py-16 bg-gray-50">
      <motion.div
        className="container max-w-5xl mx-auto text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide mb-2">
          Your Local, Global Partner
        </p>
        
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Built for Agencies in <span className="text-[#1c4dde]">India, Nepal & Bangladesh</span>
        </h2>
        
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          We deeply understand the challenges of regional recruitment and education consultants 
          ⁠— shifting regulations, country-specific nuances, operational bottlenecks, and client expectations.
        </p>

        {/* Core Value Props (Horizontal/Grid Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          
          {/* Card 1: Regional Understanding */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#1c4dde] flex flex-col items-center">
            <FiGlobe size={36} className="text-[#1c4dde] mb-3" />
            <h3 className="text-xl font-bold mb-2">Local Market Adaptability</h3>
            <p className="text-sm text-gray-600">
              Expertise in region-specific documentation, language requirements, and local political factors that affect visa outcomes.
            </p>
          </div>
          
          {/* Card 2: Compliance */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#1c4dde] flex flex-col items-center">
            <FiCheckCircle size={36} className="text-[#1c4dde] mb-3" />
            <h3 className="text-xl font-bold mb-2">Global Compliance Standards</h3>
            <p className="text-sm text-gray-600">
              We ensure all applications adhere to stringent international embassy guidelines, mitigating compliance risks for your agency.
            </p>
          </div>
          
          {/* Card 3: Partnership Focus */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#1c4dde] flex flex-col items-center">
            <FiUsers size={36} className="text-[#1c4dde] mb-3" />
            <h3 className="text-xl font-bold mb-2">Partnering for Scalability</h3>
            <p className="text-sm text-gray-600">
              Our team scales with your placement volume, offering dedicated support to agencies of every size, from startup to enterprise.
            </p>
          </div>
          
        </div>

        {/* Bottom CTA (Optional, but good practice) */}
        <div className="mt-12">
            <button className="CTA"
                 >
                Start Your B2B Partnership Today
            </button>
        </div>
      </motion.div>
    </section>
    </section>
  )
}
