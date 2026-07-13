import { useRef } from 'react'
import { motion, useScroll, useVelocity, useAnimationFrame, useTransform, useMotionValue, wrap } from 'framer-motion'

const ITEMS = [
  'WEB DEVELOPMENT', '✦', 'MOBILE APPS', '✦', 'E-COMMERCE', '✦',
  'SEO & GROWTH', '✦', 'CYBERSECURITY', '✦', 'WORDPRESS', '✦',
  'IT CONSULTANCY', '✦', 'UI/UX DESIGN', '✦',
]

function MarqueeTrack({ baseVelocity = 80 }) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const velocityFactor = useTransform(scrollVelocity, [-1600, 0, 1600], [-6, 0, 6], { clamp: false })
  const directionFactor = useRef(1)
  const x = useTransform(baseX, v => `${wrap(-50, 0, v)}%`)

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)
    if (velocityFactor.get() < 0) directionFactor.current = -1
    else if (velocityFactor.get() > 0) directionFactor.current = 1
    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  const doubled = [...ITEMS, ...ITEMS]

  return (
    <motion.div style={{ x }} className="flex gap-12 whitespace-nowrap will-change-transform">
      {doubled.map((item, i) => (
        <span key={i}
          className={item === '✦'
            ? 'text-accent text-xl'
            : 'font-display font-black text-white/10 text-3xl tracking-widest uppercase'}>
          {item}
        </span>
      ))}
    </motion.div>
  )
}

export default function Marquee() {
  return (
    <section className="py-10 overflow-hidden border-y border-border select-none" aria-hidden="true">
      <div className="relative flex overflow-hidden py-2">
        <MarqueeTrack baseVelocity={60} />
        <MarqueeTrack baseVelocity={60} />
      </div>
    </section>
  )
}
