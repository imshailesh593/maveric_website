import { useRef } from 'react'
import {
  motion, useScroll, useVelocity, useSpring, useTransform,
  useMotionValue, useAnimationFrame,
} from 'framer-motion'

const items = [
  'WEB DEVELOPMENT', 'MOBILE APPS', 'E-COMMERCE', 'SEO & GROWTH',
  'CYBERSECURITY', 'WORDPRESS', 'IT CONSULTANCY', 'UI/UX DESIGN',
]

const wrap = (min, max, v) => {
  const range = max - min
  return ((((v - min) % range) + range) % range) + min
}

function Set() {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} className="display flex items-center text-3xl text-white/90 md:text-5xl">
          <span className="px-8">{item}</span>
          <span className="text-yellow">✦</span>
        </span>
      ))}
    </>
  )
}

export default function Marquee() {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 })
  const velocityFactor = useTransform(smoothVelocity, [0, 2000], [0, 1.2], { clamp: false })
  const x = useTransform(baseX, v => `${wrap(-25, 0, v)}%`)
  const dir = useRef(1)

  useAnimationFrame((_t, delta) => {
    let moveBy = dir.current * -1.5 * (delta / 1000)
    const vf = velocityFactor.get()
    if (vf < 0) dir.current = -1
    else if (vf > 0) dir.current = 1
    moveBy += moveBy * Math.abs(vf)
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="overflow-hidden border-y py-6" style={{ borderColor: '#2a2a2a', background: '#0f0f0f' }}>
      <motion.div style={{ x }} className="flex w-max">
        <Set /><Set /><Set /><Set />
      </motion.div>
    </div>
  )
}
