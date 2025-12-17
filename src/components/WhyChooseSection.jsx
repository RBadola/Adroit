import { motion } from "motion/react"

export default function WhyChooseSection({ heading, image, points = [], copy }) {
  return (
    <section className="container py-12 overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-extrabold text-center mb-8"
      >
        {heading}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image from Left */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="rounded-2xl bg-[#eef6ff] p-6"
        >
          <img src={image} alt="" className="w-full h-auto object-contain" />
        </motion.div>

        {/* Content from Right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.p 
            variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
            className="text-gray-700 leading-relaxed"
          >
            {copy}
          </motion.p>
          <ul className="mt-6 space-y-3">
            {points.map((p, i) => (
              <motion.li
                key={i}
                variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                className="flex gap-3 items-start rounded-lg bg-white shadow-sm border p-3 hover:border-blue-300 transition-colors"
              >
                <span className="mt-1 block w-2 h-2 rounded-full bg-[#1c4dde]" />
                <span className="text-gray-800">{p}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}