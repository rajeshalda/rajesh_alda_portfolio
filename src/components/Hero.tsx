import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Magnetic from './Magnetic'
const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4'

const EASE = [0.76, 0, 0.24, 1] as const

function NameLine({
  text,
  delay,
  className = '',
  started,
}: {
  text: string
  delay: number
  className?: string
  started: boolean
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block leading-[0.82] tracking-[-0.05em] font-extrabold uppercase ${className}`}
        initial={{ y: '110%' }}
        animate={started ? { y: 0 } : {}}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {text}
      </motion.span>
    </span>
  )
}

export default function Hero({ started }: { started: boolean }) {
  const { scrollYProgress } = useScroll()
  const videoY = useTransform(scrollYProgress, [0, 0.25], ['0%', '12%'])
  const fade = useTransform(scrollYProgress, [0, 0.18], [1, 0])

  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      videoRef.current?.pause()
    }
  }, [])

  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      )
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative h-[100svh] overflow-hidden">
      <motion.video
        ref={videoRef}
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-45"
        style={{ y: videoY }}
      />
      <div className="noise-overlay absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black pointer-events-none" />

      {/* top bar */}
      <motion.header
        className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-5 sm:px-8 md:px-12 py-5 text-[11px] sm:text-xs uppercase tracking-[0.2em]"
        initial={{ opacity: 0 }}
        animate={started ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <span>Rajesh Alda&nbsp;©2026</span>
        <span className="hidden md:block text-[#E1E0CC]/60">Ranchi, India — {time} IST</span>
        <Magnetic strength={0.4}>
          <a href="#contact" className="block px-2 py-1 hover:opacity-60 transition-opacity">
            Contact ↗
          </a>
        </Magnetic>
      </motion.header>

      {/* center name */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center px-4"
        style={{ opacity: fade }}
      >
        <motion.p
          className="text-[11px] sm:text-sm uppercase tracking-[0.35em] text-[#E1E0CC]/70 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          Software Engineer
        </motion.p>
        <h1 className="text-center text-[#E1E0CC] text-[18vw] md:text-[15vw]">
          <NameLine text="Rajesh" delay={0.15} started={started} />
          <NameLine text="Alda" delay={0.3} className="outline-text" started={started} />
        </h1>
        <motion.p
          className="mt-8 max-w-md text-center text-[#E1E0CC]/60 text-xs sm:text-sm leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.25, duration: 0.8 }}
        >
          Crafting cloud infrastructure and AI-powered tools —{' '}
          <span className="font-serif-italic text-[#E1E0CC] text-sm sm:text-base">
            Microsoft Azure, Networking &amp; SAP MM.
          </span>
        </motion.p>
      </motion.div>

      {/* bottom bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between px-5 sm:px-8 md:px-12 pb-6 text-[11px] sm:text-xs uppercase tracking-[0.2em]"
        initial={{ opacity: 0 }}
        animate={started ? { opacity: 1 } : {}}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to opportunities
        </span>
        <span className="flex items-center gap-2 text-[#E1E0CC]/60">
          Scroll <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </span>
      </motion.div>
    </section>
  )
}
