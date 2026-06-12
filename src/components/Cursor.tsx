import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 })
  const [hovering, setHovering] = useState(false)
  const [finePointer, setFinePointer] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    setFinePointer(mq.matches)
    if (!mq.matches) return

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target as HTMLElement
      setHovering(!!target.closest('a, button, [data-cursor]'))
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [x, y])

  if (!finePointer) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-[99] pointer-events-none rounded-full bg-[#E1E0CC] mix-blend-difference"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      animate={{ width: hovering ? 64 : 14, height: hovering ? 64 : 14 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    />
  )
}
