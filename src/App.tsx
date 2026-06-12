import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Work from './components/Work'
import Experience from './components/Experience'
import Footer from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 })
    let raf: number
    const tick = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = loaded ? '' : 'hidden'
  }, [loaded])

  return (
    <main className="bg-black min-h-screen text-[#E1E0CC]">
      <Cursor />
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      <Hero started={loaded} />
      <Marquee />
      <About />
      <Work />
      <Experience />
      <Footer />
    </main>
  )
}
