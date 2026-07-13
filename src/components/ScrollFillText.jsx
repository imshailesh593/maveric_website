import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Unit({ children, progress, range, from, to }) {
  const opacity = useTransform(progress, range, [0.18, 1])
  const color = useTransform(progress, range, [from, to])
  return <motion.span style={{ opacity, color }} className="inline-block">{children}</motion.span>
}

export default function ScrollFillText({
  lines,
  className = '',
  lineClassName = '',
  from = '#4a4a4a',
  to = '#ffffff',
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'start 0.2'] })

  const total = lines.reduce((sum, line) => sum + line.split(' ').length, 0)
  let seen = 0
  const nextRange = () => {
    const start = seen / total
    const end = Math.min(1, (seen + 1.8) / total)
    seen++
    return [start, end]
  }

  return (
    <div ref={ref} className={className} aria-label={lines.join(' ')}>
      {lines.map((line, li) => (
        <p key={li} className={lineClassName} aria-hidden>
          {line.split(' ').map((word, wi) => (
            <span key={wi} className="mr-[0.28em] inline-block">
              <Unit progress={scrollYProgress} range={nextRange()} from={from} to={to}>{word}</Unit>
            </span>
          ))}
        </p>
      ))}
    </div>
  )
}
