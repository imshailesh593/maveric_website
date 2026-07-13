import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

const words = [
  ['WE BUILD', 'PRODUCTS'],
  ['WE SHIP', 'WEBSITES'],
  ['WE CRAFT', 'MOBILE APPS'],
  ['WE GROW', 'YOUR BRAND'],
  ['WE WRITE', 'CLEAN CODE'],
]

const BG = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2400&auto=format&fit=crop'

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY       = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const bgScale   = useTransform(scrollYProgress, [0, 1], [1.05, 1.2])
  const contentY  = useTransform(scrollYProgress, [0, 1], [0, -120])
  const contentOp = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % words.length), 1600)
    return () => clearInterval(t)
  }, [])

  return (
    <section ref={ref} id="top"
      className="relative flex h-[100svh] min-h-[680px] w-full items-center justify-center overflow-hidden bg-black">
      {/* Parallax background */}
      <motion.img src={BG} alt="" aria-hidden
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />

      {/* Cycling headline */}
      <motion.div style={{ y: contentY, opacity: contentOp }}
        className="relative z-10 px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={idx}
            initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -50, filter: 'blur(8px)' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="display select-none text-yellow"
            style={{ fontSize: 'clamp(3rem, 13.5vw, 11rem)', lineHeight: 0.88 }}>
            {words[idx][0]}
            <br />
            {words[idx][1]}
          </motion.h1>
        </AnimatePresence>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
        Scroll
      </motion.div>
    </section>
  )
}
