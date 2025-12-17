import { motion } from "motion/react"

export default function IncludedGrid({ heading, items = [] }) {
  return (
    <section className="container py-12">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-2xl md:text-3xl font-extrabold text-center mb-8"
      >
        {heading}
      </motion.h2>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          show: { transition: { staggerChildren: 0.15 } }
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {items.map((it, idx) => (
          <motion.article 
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="relative bg-white rounded-2xl border border-[#e6f0ff] p-6 shadow-sm overflow-hidden"
          >
            <span className="absolute text-[4rem] md:text-[5rem] font-extrabold text-gray-200 right-5 bottom-2 select-none opacity-20 z-0">
              {String(idx + 1).padStart(2, "0")}
            </span>

            <div className="flex items-start gap-5 relative z-10">
              <div className="w-24 h-24 shrink-0 rounded-xl bg-white p-3 shadow-sm border border-[#f0f6ff]">
                <img src={it.img} alt="" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0b2466]">{it.title}</h3>
                <p className="mt-2 text-gray-600">{it.desc}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}