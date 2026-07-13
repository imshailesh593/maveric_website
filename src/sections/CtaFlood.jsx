import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function CtaFlood() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const pct = useTransform(scrollYProgress, [0.1, 0.6], [100, 0])
  const clipPath = useTransform(pct, v => `inset(${v}% 0 0 0)`)

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ minHeight: '80vh' }}>
      {/* Dark base */}
      <div className="absolute inset-0 bg-bg flex flex-col items-center justify-center text-center px-6 z-0">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted mb-6">Ready?</p>
        <h2 className="font-display font-black leading-[0.9] tracking-tight text-white"
          style={{ fontSize: 'clamp(2.8rem, 10vw, 9rem)' }}>
          Let&apos;s build<br />something great.
        </h2>
      </div>

      {/* Cyan flood layer — revealed from bottom on scroll */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ clipPath, background: 'rgb(0,189,217)' }}>
        <p className="font-mono text-xs uppercase tracking-[0.28em] mb-6"
          style={{ color: 'rgba(0,0,0,0.45)' }}>
          Ready?
        </p>
        <h2 className="font-display font-black leading-[0.9] tracking-tight"
          style={{ fontSize: 'clamp(2.8rem, 10vw, 9rem)', color: '#0a0a0a' }}>
          Let&apos;s build<br />something great.
        </h2>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center">
          <a href="/#contact"
            className="px-10 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90"
            style={{ background: '#0a0a0a', color: 'rgb(0,189,217)' }}>
            Start a Project
          </a>
          <a href="mailto:info@mavericinfotech.in"
            className="font-mono text-sm tracking-widest transition-opacity hover:opacity-100"
            style={{ color: 'rgba(0,0,0,0.5)' }}>
            Or email us ↗
          </a>
        </div>
      </motion.div>
    </section>
  )
}
