import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WORDS = ['Hello', 'नमस्ते', 'Bonjour', 'こんにちは', 'Hola', 'Welcome']

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const start = performance.now()
    const DURATION = 2200

    let raf: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION, 1)
      // ease-out so the counter decelerates near 100
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * 100))
      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setExiting(true)
        setTimeout(onDone, 900)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  useEffect(() => {
    const interval = setInterval(
      () => setWordIndex((i) => Math.min(i + 1, WORDS.length - 1)),
      360
    )
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      animate={exiting ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={wordIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="font-serif-italic text-3xl sm:text-5xl text-[#E1E0CC]"
        >
          {WORDS[wordIndex]}
        </motion.span>
      </AnimatePresence>
      <span className="absolute bottom-8 right-8 text-[#E1E0CC]/60 text-5xl sm:text-7xl font-light tabular-nums">
        {count}
      </span>
    </motion.div>
  )
}
