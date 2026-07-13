import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

const WORDS = [
  ['WE BUILD', 'APPS'],
  ['WE CRAFT', 'WEBSITES'],
  ['WE SHIP', 'PRODUCTS'],
  ['WE GROW', 'BRANDS'],
  ['WE WRITE', 'CODE'],
]

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -140])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % WORDS.length), 1800)
    return () => clearInterval(t)
  }, [])

  return (
    <section ref={ref} id="home"
      className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-bg">

      {/* Radial accent glow */}
      <div aria-hidden className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 20%, rgba(0,189,217,0.07) 0%, transparent 70%)' }} />

      {/* Subtle grid */}
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      {/* Cycling headline */}
      <motion.div style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 px-6 text-center">

        <AnimatePresence mode="wait">
          <motion.h1
            key={idx}
            initial={{ opacity: 0, y: 70, filter: 'blur(14px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -55, filter: 'blur(14px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="select-none font-display font-black leading-[0.86] tracking-tight"
            style={{ fontSize: 'clamp(3rem, 13.5vw, 11rem)' }}>
            <span className="block text-white">{WORDS[idx][0]}</span>
            <span className="block text-accent">{WORDS[idx][1]}</span>
          </motion.h1>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-8 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
          12+ Years &nbsp;·&nbsp; 100+ Projects &nbsp;·&nbsp; 50+ Active Clients
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.9, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.32em] text-muted">
        Scroll
      </motion.div>
    </section>
  )
}
