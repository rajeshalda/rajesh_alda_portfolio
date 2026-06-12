import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/rajeshalda' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rajeshalda/' },
  { label: 'X / Twitter', href: 'https://x.com/RajeshAlda' },
]

export default function Footer() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      )
    update()
    const id = setInterval(update, 30000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer id="contact" className="relative bg-black pt-24 sm:pt-32 md:pt-44 px-5 sm:px-8 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#E1E0CC]/50">
          (04) — Contact
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-[13vw] md:text-[10vw] font-extrabold uppercase tracking-tight leading-[0.85]"
        >
          Let's work
          <br />
          <span className="font-serif-italic font-normal normal-case">together</span>
          <span className="outline-text">.</span>
        </motion.h2>

        <motion.a
          href="mailto:rajeshalda844@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="group mt-12 inline-flex items-center gap-3 rounded-full border border-[#E1E0CC]/30 px-7 sm:px-9 py-4 sm:py-5 text-sm sm:text-base uppercase tracking-[0.15em] hover:bg-[#E1E0CC] hover:text-black transition-colors duration-400"
        >
          rajeshalda844@gmail.com
          <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
        </motion.a>

        <div className="mt-20 sm:mt-28 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-[#E1E0CC]/10 pt-8 pb-10">
          <div className="flex gap-6 sm:gap-8">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener"
                className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#E1E0CC]/60 hover:text-[#E1E0CC] transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col md:items-end gap-1 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#E1E0CC]/40">
            <span>Ranchi, India — {time} IST</span>
            <span>© 2022–2026 Rajesh Alda. Designed &amp; built with care.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
