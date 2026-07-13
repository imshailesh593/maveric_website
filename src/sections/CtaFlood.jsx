import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import PubityBtn from '../components/PubityBtn'

function Content({ dark }) {
  return (
    <div className="mx-auto flex max-w-site flex-col items-center px-6 py-32 text-center md:py-44">
      <span className={`font-mono text-xs uppercase tracking-widest ${dark ? 'text-black/60' : 'text-yellow'}`}>
        Ready when you are
      </span>
      <h2 className={`display mt-5 text-5xl md:text-7xl lg:text-8xl ${dark ? 'text-black' : 'text-white'}`}>
        Let&apos;s build<br />something great.
      </h2>
      <p className={`mt-6 max-w-md font-body text-base ${dark ? 'text-black/70' : 'text-white/50'}`}>
        Big ideas, engineered to perform. Tell us what your business needs next.
      </p>
      <div className="mt-10">
        <PubityBtn label="Start a Project" href="/#contact" backLabel="LET'S GO →" />
      </div>
    </div>
  )
}

export default function CtaFlood() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end 0.4'] })
  const clip = useTransform(scrollYProgress, [0, 0.85], ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)'])

  return (
    <section id="cta-flood" ref={ref} className="relative overflow-hidden bg-black">
      {/* Base: white text on black */}
      <div className="pointer-events-none"><Content /></div>
      {/* Flood: dark text on cyan, clips up on scroll */}
      <motion.div
        style={{ clipPath: clip, WebkitClipPath: clip, background: 'rgb(0,189,217)' }}
        className="absolute inset-0">
        <Content dark />
      </motion.div>
    </section>
  )
}
