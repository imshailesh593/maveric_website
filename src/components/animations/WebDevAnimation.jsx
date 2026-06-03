import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState } from 'react'

const codeLines = [
  { text: '<div className="hero">', color: '#FF7A00' },
  { text: '  <h1>Hello World</h1>', color: '#00BDD9' },
  { text: '  <Button glow />', color: '#00BDD9' },
  { text: '</div>', color: '#FF7A00' },
]

function TypedLine({ line, delay }) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let i = 0
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(line.text.slice(0, i + 1))
        i++
        if (i >= line.text.length) clearInterval(interval)
      }, 40)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timer)
  }, [line.text, delay])

  return (
    <div className="font-mono text-[9px] leading-5 whitespace-nowrap" style={{ color: line.color }}>
      {displayed}
      {displayed.length < line.text.length && (
        <span className="inline-block w-1.5 h-3 bg-white/70 animate-pulse ml-0.5 align-middle" />
      )}
    </div>
  )
}

export default function WebDevAnimation() {
  return (
    <div className="w-full h-28 rounded-xl overflow-hidden bg-[#0d0d0d] border border-white/10 flex flex-col">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#1a1a1a] border-b border-white/10 shrink-0">
        <div className="w-2 h-2 rounded-full bg-red-500/80" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
        <div className="w-2 h-2 rounded-full bg-green-500/80" />
        <div className="flex-1 mx-2 h-3 rounded-sm bg-white/10 text-[8px] font-mono text-white/30 flex items-center px-1.5">
          mavericinfotech.in
        </div>
      </div>

      {/* Split: code + preview */}
      <div className="flex flex-1 overflow-hidden">
        {/* Code editor */}
        <div className="flex-1 p-2 border-r border-white/10 overflow-hidden">
          {codeLines.map((line, i) => (
            <TypedLine key={i} line={line} delay={i * 700} />
          ))}
        </div>

        {/* Live preview */}
        <div className="flex-1 p-2 flex flex-col justify-center items-center gap-1.5">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.5, ease: 'backOut' }}
            className="h-3 rounded bg-purple/60 origin-left"
            style={{ width: '70%' }}
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.8, duration: 0.4 }}
            className="h-2 rounded bg-white/20 origin-left"
            style={{ width: '55%' }}
          />
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.4 }}
            className="mt-1 px-2.5 py-1 rounded text-[8px] font-bold"
            style={{ background: 'linear-gradient(90deg, #00BDD9, #FF7A00)', color: '#0a0a0a' }}
          >
            Get Started
          </motion.div>
        </div>
      </div>
    </div>
  )
}
