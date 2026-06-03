import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const threats = ['SQL Injection', 'XSS Attack', 'CSRF Token', 'Brute Force', 'DDoS Probe']

export default function CybersecurityAnimation() {
  const [blocked, setBlocked] = useState([])
  const [scanLine, setScanLine] = useState(0)

  useEffect(() => {
    let i = 0
    const add = () => {
      setBlocked((b) => [...b.slice(-3), threats[i % threats.length]])
      i++
      setTimeout(add, 900)
    }
    const t = setTimeout(add, 600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setScanLine((s) => (s + 1) % 100)
    }, 40)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-28 flex gap-2">
      {/* Shield */}
      <div className="w-24 flex items-center justify-center">
        <div className="relative">
          <svg viewBox="0 0 60 70" width="60" height="70">
            {/* Shield path */}
            <motion.path
              d="M30 2 L56 12 L56 35 Q56 55 30 68 Q4 55 4 35 L4 12 Z"
              fill="none"
              stroke="url(#shield-g)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
            {/* Shield fill */}
            <path
              d="M30 2 L56 12 L56 35 Q56 55 30 68 Q4 55 4 35 L4 12 Z"
              fill="rgba(0,212,255,0.05)"
            />
            {/* Scan line */}
            <motion.line
              x1="6"
              y1={scanLine * 0.6 + 5}
              x2="54"
              y2={scanLine * 0.6 + 5}
              stroke="#00BDD9"
              strokeWidth="0.5"
              strokeOpacity="0.6"
            />
            {/* Lock icon */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, type: 'spring' }}
              transform="translate(18, 22)"
            >
              <rect x="4" y="9" width="16" height="11" rx="2" fill="#00BDD9" fillOpacity="0.8" />
              <path d="M8 9 L8 6 Q8 2 12 2 Q16 2 16 6 L16 9" fill="none" stroke="#00BDD9" strokeWidth="1.5" />
              <circle cx="12" cy="14.5" r="2" fill="#0a0a0a" />
            </motion.g>
            <defs>
              <linearGradient id="shield-g" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00BDD9" />
                <stop offset="100%" stopColor="#FF7A00" />
              </linearGradient>
            </defs>
          </svg>

          {/* Pulse rings */}
          {[1, 2].map((ring) => (
            <motion.div
              key={ring}
              className="absolute inset-0 rounded-full border border-cyan-400/30"
              animate={{ scale: [1, 1.4 + ring * 0.2], opacity: [0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: ring * 0.5, ease: 'easeOut' }}
            />
          ))}
        </div>
      </div>

      {/* Threat log */}
      <div className="flex-1 flex flex-col gap-1 justify-center overflow-hidden">
        <div className="text-[7px] font-mono text-white/30 mb-0.5 flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          FIREWALL ACTIVE
        </div>
        {blocked.map((threat, i) => (
          <motion.div
            key={`${threat}-${i}`}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-red-500/10 border border-red-500/20"
          >
            <span className="text-[9px]">🛡</span>
            <span className="text-[8px] font-mono text-red-400 truncate">{threat}</span>
            <span className="ml-auto text-[7px] font-bold text-green-400">BLOCKED</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
