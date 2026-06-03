import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STARS = Array.from({ length: 160 }, () => ({
  x: Math.random() * 100, y: Math.random() * 100,
  r: Math.random() * 1.6 + 0.3,
  dur: 1.5 + Math.random() * 2.5, del: Math.random() * 3,
}))

const SPEED_LINES = Array.from({ length: 50 }, () => ({
  x: Math.random() * 100, y: Math.random() * 75,
  h: 2 + Math.random() * 4,
  dur: 0.5 + Math.random() * 0.6, del: Math.random() * 0.5,
  streak: 45 + Math.random() * 80,
}))

const ICONS = [
  { slug: 'react',             color: '#61DAFB', label: 'React',      x: 3,  y: 7,  size: 62, d: 0.0  },
  { slug: 'flutter',           color: '#54C5F8', label: 'Flutter',    x: 85, y: 5,  size: 58, d: 0.15 },
  { slug: 'typescript',        color: '#3178C6', label: 'TypeScript', x: 1,  y: 36, size: 56, d: 0.3  },
  { slug: 'javascript',        color: '#F7DF1E', label: 'JS',         x: 89, y: 32, size: 54, d: 0.45 },
  { slug: 'nextdotjs',         color: '#FFFFFF', label: 'Next.js',    x: 3,  y: 64, size: 54, d: 0.6  },
  { slug: 'laravel',           color: '#FF2D20', label: 'Laravel',    x: 84, y: 60, size: 54, d: 0.75 },
  { slug: 'nodedotjs',         color: '#339933', label: 'Node.js',    x: 26, y: 3,  size: 52, d: 0.9  },
  { slug: 'mongodb',           color: '#47A248', label: 'MongoDB',    x: 63, y: 2,  size: 52, d: 1.05 },
  { slug: 'firebase',          color: '#FFCA28', label: 'Firebase',   x: 2,  y: 80, size: 50, d: 1.2  },
  { slug: 'android',           color: '#3DDC84', label: 'Android',    x: 86, y: 78, size: 50, d: 1.35 },
  { slug: 'figma',             color: '#F24E1E', label: 'Figma',      x: 46, y: 85, size: 48, d: 1.5  },
  { slug: 'docker',            color: '#2496ED', label: 'Docker',     x: 92, y: 46, size: 48, d: 1.65 },
  { slug: 'python',            color: '#3776AB', label: 'Python',     x: 1,  y: 52, size: 48, d: 1.8  },
  { slug: 'tailwindcss',       color: '#06B6D4', label: 'Tailwind',   x: 16, y: 88, size: 46, d: 1.95 },
  { slug: 'mysql',             color: '#4479A1', label: 'MySQL',      x: 74, y: 88, size: 46, d: 2.1  },
  { slug: 'amazonwebservices', color: '#FF9900', label: 'AWS',        x: 91, y: 18, size: 44, d: 2.25 },
  { slug: 'php',               color: '#777BB4', label: 'PHP',        x: 1,  y: 20, size: 44, d: 2.4  },
  { slug: 'git',               color: '#F05032', label: 'Git',        x: 78, y: 3,  size: 44, d: 2.55 },
]

export default function RocketIntro({ onComplete }) {
  const [phase, setPhase] = useState('boot')
  const doneRef = useRef(false)

  const finish = () => { if (!doneRef.current) { doneRef.current = true; onComplete() } }
  const skip   = () => { setPhase('exit'); setTimeout(finish, 850) }

  useEffect(() => {
    const ts = [
      setTimeout(() => setPhase('idle'),   400),
      setTimeout(() => setPhase('launch'), 1400),
      setTimeout(() => setPhase('space'),  3400),
      setTimeout(() => setPhase('exit'),   6800),
      setTimeout(finish,                   7600),
    ]
    return () => ts.forEach(clearTimeout)
  }, [])

  const launching = phase === 'launch'
  const inSpace   = phase === 'space' || phase === 'exit'

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 110%, #0e0424 0%, #020209 55%, #000003 100%)' }}
      animate={phase === 'exit' ? { opacity: 0, scale: 1.06 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.85 }}
    >
      {/* Stars */}
      <div className="absolute inset-0">
        {STARS.map((s, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.r, height: s.r }}
            animate={
              launching
                ? { scaleY: [1, 55, 1], opacity: [0.5, 1, 0.4], y: ['0%', '18%', '0%'] }
                : { opacity: [0.15, 0.9, 0.15] }
            }
            transition={
              launching
                ? { duration: 2.0, ease: 'easeIn' }
                : { duration: s.dur, repeat: Infinity, delay: s.del, repeatType: 'mirror' }
            }
          />
        ))}
      </div>

      {/* Speed lines during launch */}
      <AnimatePresence>
        {launching && SPEED_LINES.map((l, i) => (
          <motion.div
            key={`sl-${i}`}
            className="absolute"
            style={{
              left: `${l.x}%`, top: `${l.y}%`,
              width: 1, height: l.h,
              background: 'linear-gradient(to bottom, rgba(180,180,255,0.9), transparent)',
              transformOrigin: 'top center',
            }}
            initial={{ scaleY: 1, opacity: 0, y: 0 }}
            animate={{ scaleY: l.streak, opacity: [0, 0.8, 0.8, 0], y: '85vh' }}
            exit={{ opacity: 0 }}
            transition={{ duration: l.dur, delay: l.del, repeat: Infinity, repeatDelay: 0.2 }}
          />
        ))}
      </AnimatePresence>

      {/* Ground rocket — flies off screen */}
      {!inSpace && (
        <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: 32 }}>
          <motion.div
            animate={
              phase === 'boot'   ? { y: 380, opacity: 0 }  :
              phase === 'idle'   ? { y: 0,   opacity: 1 }  :
              /* launch */         { y: -1600, opacity: 1, transition: { duration: 2.2, ease: [0.08, 0, 0.38, 0] } }
            }
            transition={phase !== 'launch' ? { duration: 0.8, ease: 'backOut' } : undefined}
          >
            <motion.div
              animate={
                phase === 'idle'
                  ? { x: [0, -0.6, 0.6, -0.4, 0] }
                  : launching
                  ? { x: [0, -2, 1.5, -1, 2, 0], y: [0, 1, -0.5, 0.8, 0] }
                  : {}
              }
              transition={{ duration: phase === 'idle' ? 0.55 : 0.16, repeat: Infinity }}
            >
              <RocketSVG launching={launching} inSpace={false} />
              <Flame phase={phase} />
            </motion.div>
          </motion.div>
        </div>
      )}

      {/* Space rocket — drops in from top */}
      {inSpace && (
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '4vh' }}>
          <motion.div
            initial={{ y: -120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'backOut' }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <RocketSVG launching={false} inSpace />
              <Flame phase="space" />
            </motion.div>
          </motion.div>
        </div>
      )}

      {/* Orbit rings */}
      {inSpace && (
        <motion.div
          className="absolute pointer-events-none"
          style={{ left: '50%', top: '4vh', transform: 'translate(-50%, 55px)' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.4 }}
        >
          {[190, 310, 450].map((size, i) => (
            <motion.div
              key={size}
              className="absolute rounded-full"
              style={{
                width: size, height: size, top: -size / 2, left: -size / 2,
                border: `1px solid rgba(${i === 0 ? '0,212,255' : i === 1 ? '123,47,255' : '255,255,255'},0.13)`,
              }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 20 + i * 10, repeat: Infinity, ease: 'linear' }}
            />
          ))}
        </motion.div>
      )}

      {/* Tech icons */}
      {inSpace && ICONS.map((icon) => (
        <motion.div
          key={icon.slug}
          className="absolute flex flex-col items-center gap-1.5"
          style={{ left: `${icon.x}%`, top: `${icon.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: icon.d, duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <motion.div
            className="flex flex-col items-center gap-1.5"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.2 + icon.d * 0.25, repeat: Infinity, ease: 'easeInOut', delay: icon.d * 0.4 }}
          >
            <div className="relative">
              <div className="absolute rounded-2xl blur-xl opacity-20"
                style={{ width: icon.size + 20, height: icon.size + 20, background: icon.color, top: -10, left: -10 }} />
              <motion.div
                className="relative rounded-2xl flex items-center justify-center"
                animate={{ boxShadow: [`0 0 0px ${icon.color}00`, `0 0 20px ${icon.color}55`, `0 0 0px ${icon.color}00`] }}
                transition={{ duration: 3.2 + icon.d * 0.25, repeat: Infinity, ease: 'easeInOut', delay: icon.d * 0.4 }}
                style={{
                  width: icon.size, height: icon.size,
                  background: `linear-gradient(135deg, ${icon.color}16, ${icon.color}06)`,
                  border: `1px solid ${icon.color}45`,
                  backdropFilter: 'blur(10px)',
                }}
              >
                <img
                  src={`https://cdn.simpleicons.org/${icon.slug}/${icon.color.replace('#', '')}`}
                  alt={icon.label}
                  width={icon.size * 0.52} height={icon.size * 0.52}
                  style={{ opacity: 0.9, filter: `drop-shadow(0 0 8px ${icon.color}88)` }}
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </motion.div>
            </div>
            <span className="text-[10px] font-mono tracking-wider font-medium" style={{ color: icon.color, opacity: 0.65 }}>
              {icon.label}
            </span>
          </motion.div>
        </motion.div>
      ))}

      {/* Headline */}
      {inSpace && (
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          style={{ paddingTop: 180 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="font-mono text-xs tracking-[0.3em] uppercase text-white/35 mb-3"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }}
          >
            A World of Possibilities
          </motion.p>

          {/* Maveric Infotech — the hero */}
          <motion.h2
            className="font-display font-bold text-center leading-none tracking-tight"
            style={{
              fontSize: 'clamp(2.8rem, 8vw, 6rem)',
              background: 'linear-gradient(135deg, #00BDD9 0%, #ffffff 45%, #FF7A00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.05, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            Maveric Infotech
          </motion.h2>

          <motion.p
            className="text-white/35 text-sm mt-5 font-mono tracking-[0.25em]"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}
          >
            Design · Development · Strategy
          </motion.p>
          <motion.div
            className="mt-7 flex gap-2 flex-wrap justify-center"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.8 }}
          >
            {['Web Apps', 'Mobile', 'E-Commerce', 'SEO', 'Cloud'].map((tag, i) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono" style={{
                background: i % 2 === 0 ? 'rgba(0,189,217,0.1)' : 'rgba(255,122,0,0.1)',
                border: `1px solid ${i % 2 === 0 ? 'rgba(0,189,217,0.25)' : 'rgba(255,122,0,0.25)'}`,
                color: i % 2 === 0 ? '#00BDD9' : '#FF7A00',
              }}>{tag}</span>
            ))}
          </motion.div>
        </motion.div>
      )}

      {/* Skip */}
      {phase !== 'boot' && phase !== 'exit' && (
        <motion.button
          className="absolute bottom-8 right-8 font-mono text-xs tracking-widest text-white/30 hover:text-white/70 transition-colors px-3 py-2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          onClick={skip}
        >
          SKIP →
        </motion.button>
      )}
    </motion.div>
  )
}

function RocketSVG({ launching, inSpace }) {
  return (
    <motion.svg
      width="90" height="175" viewBox="0 0 90 175" fill="none"
      animate={
        launching
          ? { filter: ['drop-shadow(0 0 8px #00BDD980)', 'drop-shadow(0 0 22px #FF7A0090)', 'drop-shadow(0 0 10px #00BDD970)'] }
          : inSpace
          ? { filter: 'drop-shadow(0 0 12px #00BDD950)' }
          : { filter: 'drop-shadow(0 0 6px #00BDD930)' }
      }
      transition={{ duration: 0.55, repeat: launching ? Infinity : 0 }}
    >
      <defs>
        <linearGradient id="ri-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#2d2d52"/>
          <stop offset="100%" stopColor="#18182e"/>
        </linearGradient>
        <linearGradient id="ri-nose" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#00BDD9"/>
          <stop offset="100%" stopColor="#FF7A00"/>
        </linearGradient>
        <linearGradient id="ri-fin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#FF7A00" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#18182e" stopOpacity="0.8"/>
        </linearGradient>
        <radialGradient id="ri-window" cx="40%" cy="35%" r="65%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.95"/>
          <stop offset="35%"  stopColor="#00BDD9" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#FF7A00" stopOpacity="0.2"/>
        </radialGradient>
      </defs>

      {/* Body */}
      <path d="M45 30 C31 52, 24 78, 24 124 L66 124 C66 78, 59 52, 45 30Z"
        fill="url(#ri-body)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      {/* Nose cone */}
      <path d="M45 8 C42 22, 30 40, 24 64 L66 64 C60 40, 48 22, 45 8Z"
        fill="url(#ri-nose)"/>
      {/* Body highlight */}
      <path d="M45 30 C43 52, 41 78, 40 124 L43 124 C44 78, 47 52, 47 30Z"
        fill="white" opacity="0.07"/>
      {/* Nose highlight */}
      <path d="M45 8 C44 22, 40 40, 37 64 L41 64 C44 40, 46 22, 46 8Z"
        fill="white" opacity="0.12"/>

      {/* Porthole */}
      <circle cx="45" cy="90" r="14" fill="#060612" stroke="#00BDD9" strokeWidth="1.5"/>
      <circle cx="45" cy="90" r="10" fill="url(#ri-window)"/>
      <circle cx="40" cy="85" r="3.5" fill="white" opacity="0.55"/>
      <circle cx="45" cy="90" r="14" fill="none" stroke="#00BDD9" strokeWidth="0.5" opacity="0.4"/>

      {/* Left fin */}
      <path d="M24 105 L5 142 L26 124 Z" fill="url(#ri-fin)"/>
      {/* Right fin */}
      <path d="M66 105 L85 142 L64 124 Z" fill="url(#ri-fin)"/>

      {/* Side thrusters */}
      <rect x="17" y="110" width="7" height="12" rx="2" fill="#12122a"/>
      <rect x="66" y="110" width="7" height="12" rx="2" fill="#12122a"/>

      {/* Main nozzle */}
      <ellipse cx="45" cy="126" rx="21" ry="7"   fill="#12122a"/>
      <ellipse cx="45" cy="128" rx="14" ry="4.5" fill="#080818"/>
      <ellipse cx="45" cy="129" rx="8"  ry="2.5" fill="#040410"/>

      {/* Panel lines */}
      <line x1="24" y1="98"  x2="66" y2="98"  stroke="#00BDD9" strokeWidth="0.6" opacity="0.35"/>
      <line x1="26" y1="112" x2="64" y2="112" stroke="#FF7A00" strokeWidth="0.6" opacity="0.25"/>

      {/* Badge */}
      <text x="45" y="78" textAnchor="middle" fontSize="7" fontFamily="monospace" fill="#00BDD9" opacity="0.5">M</text>
    </motion.svg>
  )
}

function Flame({ phase }) {
  const on  = phase === 'idle' || phase === 'launch' || phase === 'space'
  const big = phase === 'launch'
  const low = phase === 'space'

  return (
    <div className="absolute left-1/2 -translate-x-1/2" style={{ top: 126, width: 0 }}>
      {/* Outer glow halo */}
      <motion.div
        style={{
          position: 'absolute', borderRadius: '50%',
          width:  big ? 110 : low ? 45 : 65,
          height: big ? 110 : low ? 45 : 65,
          top: -18, left: '50%', transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(255,90,0,0.55), transparent 70%)',
        }}
        animate={on ? { opacity: [0.35, 0.75, 0.35], scale: [0.85, 1.35, 0.85] } : { opacity: 0 }}
        transition={{ duration: 0.38, repeat: Infinity }}
      />
      {/* Outer flame */}
      <motion.div
        style={{
          position: 'absolute',
          width:  big ? 42 : low ? 16 : 28,
          height: big ? 130 : low ? 50 : 58,
          left: '50%', transform: 'translateX(-50%)',
          background: 'linear-gradient(to bottom, rgba(255,65,0,1), rgba(255,25,0,0.55), transparent)',
          borderRadius: '50% 50% 56% 56% / 10% 10% 90% 90%',
          filter: 'blur(5px)',
          transformOrigin: 'top center',
        }}
        animate={on ? { scaleY: [1, big ? 2.5 : 1.3, big ? 1.6 : 0.9, big ? 3.0 : 1.4, 1] } : { scaleY: 0 }}
        transition={{ duration: 0.22, repeat: Infinity }}
      />
      {/* Mid flame */}
      <motion.div
        style={{
          position: 'absolute',
          width:  big ? 26 : low ? 9 : 17,
          height: big ? 90 : low ? 34 : 40,
          left: '50%', transform: 'translateX(-50%)',
          background: 'linear-gradient(to bottom, rgba(255,200,0,1), rgba(255,130,0,0.8), transparent)',
          borderRadius: '50% 50% 56% 56% / 10% 10% 90% 90%',
          filter: 'blur(3px)',
          transformOrigin: 'top center',
        }}
        animate={on ? { scaleY: [0.9, big ? 2.1 : 1.1, big ? 1.3 : 0.75, big ? 2.5 : 1.2, 0.9] } : { scaleY: 0 }}
        transition={{ duration: 0.19, repeat: Infinity }}
      />
      {/* White core */}
      <motion.div
        style={{
          position: 'absolute',
          width:  big ? 12 : low ? 5 : 8,
          height: big ? 55 : low ? 22 : 26,
          left: '50%', transform: 'translateX(-50%)',
          background: 'linear-gradient(to bottom, #ffffff, #ffee00)',
          borderRadius: '50% 50% 56% 56% / 10% 10% 90% 90%',
          filter: 'blur(2px)',
          transformOrigin: 'top center',
        }}
        animate={on ? { scaleY: [0.8, big ? 1.9 : 0.9, big ? 1.1 : 0.6, big ? 2.2 : 1.0, 0.8] } : { scaleY: 0 }}
        transition={{ duration: 0.16, repeat: Infinity }}
      />
      {/* Side thruster sparks (launch only) */}
      {big && [-14, 14].map((offset) => (
        <motion.div
          key={offset}
          style={{
            position: 'absolute',
            width: 8, height: 30,
            left: `calc(50% + ${offset}px)`, transform: 'translateX(-50%)',
            background: 'linear-gradient(to bottom, rgba(255,180,0,0.7), transparent)',
            borderRadius: '50% 50% 56% 56% / 10% 10% 90% 90%',
            filter: 'blur(3px)',
            transformOrigin: 'top center',
          }}
          animate={{ scaleY: [0.6, 1.8, 0.8, 2.1, 0.6], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 0.25, repeat: Infinity, delay: Math.abs(offset) * 0.02 }}
        />
      ))}
    </div>
  )
}
