import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type Lenis from 'lenis'
import Magnetic from './Magnetic'

const LINKS = [
  { num: '01', label: 'About', id: 'about' },
  { num: '02', label: 'Projects', id: 'projects' },
  { num: '03', label: 'Experience', id: 'experience' },
  { num: '04', label: 'Contact', id: 'contact' },
]

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/rajeshalda' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rajeshalda/' },
  { label: 'X / Twitter', href: 'https://x.com/RajeshAlda' },
]

const EASE = [0.76, 0, 0.24, 1] as const

function getLenis(): Lenis | undefined {
  return (window as unknown as { __lenis?: Lenis }).__lenis
}

export default function Menu() {
  const [open, setOpen] = useState(false)
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const lenis = getLenis()
    if (open) lenis?.stop()
    else lenis?.start()
  }, [open])

  const goTo = (id: string) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (!el) return
    // let the overlay start closing before the scroll kicks in
    setTimeout(() => {
      const lenis = getLenis()
      if (lenis) lenis.scrollTo(el, { duration: 1.4 })
      else el.scrollIntoView({ behavior: 'smooth' })
    }, 350)
  }

  const visible = pastHero || open

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed top-5 right-5 sm:right-8 z-[95]"
          >
            <Magnetic strength={0.3}>
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                className="flex items-center gap-3 rounded-full bg-[#E1E0CC] text-black px-5 sm:px-6 py-3 text-[11px] sm:text-xs uppercase tracking-[0.2em]"
              >
                {open ? 'Close' : 'Menu'}
                <span className="flex flex-col gap-[4px]">
                  <span
                    className={`block w-4 h-[1.5px] bg-black transition-transform duration-300 ${
                      open ? 'rotate-45 translate-y-[3px]' : ''
                    }`}
                  />
                  <span
                    className={`block w-4 h-[1.5px] bg-black transition-transform duration-300 ${
                      open ? '-rotate-45 -translate-y-[2.5px]' : ''
                    }`}
                  />
                </span>
              </button>
            </Magnetic>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="fixed inset-0 z-[90] bg-[#0c0c0b] flex flex-col justify-between px-6 sm:px-12 md:px-20 pt-28 pb-10"
          >
            <nav className="flex flex-col">
              {LINKS.map((link, i) => (
                <span key={link.id} className="block overflow-hidden border-b border-[#E1E0CC]/10">
                  <motion.button
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '110%' }}
                    transition={{ duration: 0.7, delay: 0.15 + i * 0.07, ease: EASE }}
                    onClick={() => goTo(link.id)}
                    className="group flex items-baseline gap-4 sm:gap-8 py-4 sm:py-5 text-left w-full"
                  >
                    <span className="text-[11px] sm:text-xs text-[#E1E0CC]/40 tracking-[0.25em]">
                      ({link.num})
                    </span>
                    <span className="text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase tracking-tight text-[#E1E0CC] group-hover:translate-x-4 group-hover:text-[#E1E0CC]/70 transition-all duration-500">
                      {link.label}
                    </span>
                  </motion.button>
                </span>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
            >
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
              <a
                href="mailto:rajeshalda844@gmail.com"
                className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#E1E0CC]/60 hover:text-[#E1E0CC] transition-colors"
              >
                rajeshalda844@gmail.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
