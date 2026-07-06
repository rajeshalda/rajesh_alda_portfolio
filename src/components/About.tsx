import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView, MotionValue } from 'framer-motion'

const BODY_TEXT =
  'I work at NathCorp Pvt. Ltd. in Ranchi as a Software Engineer, contributing to projects across cloud computing, networking, and enterprise solutions. Certified in Microsoft Azure Fundamentals, Azure Virtual Desktop Specialty, and CCNA — backed by MCA and BCA degrees and hands-on SAP MM training. When I am not shipping, I am cooking, gaming, or chasing whatever technology is next.'

const STATS = [
  { value: '3+', label: 'Certifications' },
  { value: '4', label: 'Projects shipped' },
  { value: '2026', label: 'Currently building' },
]

function Word({
  word,
  index,
  total,
  progress,
}: {
  word: string
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const start = index / total
  const opacity = useTransform(progress, [start - 0.08, start + 0.04], [0.15, 1])
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.28em]">
      {word}
    </motion.span>
  )
}

export default function About() {
  const bodyRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: bodyRef,
    offset: ['start 0.85', 'end 0.35'],
  })
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  const words = BODY_TEXT.split(' ')

  return (
    <section id="about" className="relative bg-black py-24 sm:py-32 md:py-44 px-5 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-y-12 md:gap-x-10">
        <div ref={headRef} className="col-span-12 md:col-span-4">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#E1E0CC]/50"
          >
            (01) — About me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-3xl sm:text-4xl leading-tight"
          >
            Engineer by trade,
            <br />
            <span className="font-serif-italic">explorer by nature.</span>
          </motion.h2>
        </div>

        <div className="col-span-12 md:col-span-8">
          <p
            ref={bodyRef}
            className="text-xl sm:text-2xl md:text-[2rem] leading-snug text-[#E1E0CC]"
          >
            {words.map((word, i) => (
              <Word key={i} word={word} index={i} total={words.length} progress={scrollYProgress} />
            ))}
          </p>

          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-[#E1E0CC]/10 pt-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-3xl sm:text-5xl font-light">{stat.value}</p>
                <p className="mt-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#E1E0CC]/50">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
