import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import * as THREE from 'three'

const FLOATING_ICONS = [
  { slug: 'react',             color: '#61DAFB', label: 'React',       x: 4,  y: 10, depth: 0.35, size: 64, rotate: 15,  floatDur: 3.2, floatDelay: 0.0  },
  { slug: 'tailwindcss',       color: '#06B6D4', label: 'Tailwind',    x: 3,  y: 35, depth: 0.4,  size: 52, rotate: 12,  floatDur: 3.5, floatDelay: 0.2  },
  { slug: 'typescript',        color: '#3178C6', label: 'TypeScript',  x: 5,  y: 58, depth: 0.45, size: 56, rotate: -8,  floatDur: 3.0, floatDelay: 0.8  },
  { slug: 'wordpress',         color: '#21759B', label: 'WordPress',   x: 4,  y: 80, depth: 0.4,  size: 54, rotate: -15, floatDur: 3.4, floatDelay: 0.3  },
  { slug: 'vuedotjs',          color: '#4FC08D', label: 'Vue',         x: 17, y: 20, depth: 0.3,  size: 50, rotate: -10, floatDur: 2.5, floatDelay: 1.0  },
  { slug: 'nextdotjs',         color: '#FFFFFF', label: 'Next.js',     x: 19, y: 48, depth: 0.3,  size: 52, rotate: 15,  floatDur: 3.7, floatDelay: 1.0  },
  { slug: 'docker',            color: '#2496ED', label: 'Docker',      x: 15, y: 70, depth: 0.45, size: 52, rotate: -6,  floatDur: 3.6, floatDelay: 0.9  },
  { slug: 'mysql',             color: '#4479A1', label: 'MySQL',       x: 30, y: 5,  depth: 0.3,  size: 54, rotate: 10,  floatDur: 3.1, floatDelay: 1.2  },
  { slug: 'figma',             color: '#F24E1E', label: 'Figma',       x: 50, y: 3,  depth: 0.25, size: 52, rotate: -18, floatDur: 2.5, floatDelay: 1.5  },
  { slug: 'amazonwebservices', color: '#FF9900', label: 'AWS',         x: 68, y: 5,  depth: 0.45, size: 50, rotate: -5,  floatDur: 3.3, floatDelay: 0.7  },
  { slug: 'php',               color: '#777BB4', label: 'PHP',         x: 83, y: 14, depth: 0.6,  size: 52, rotate: -20, floatDur: 3.8, floatDelay: 0.6  },
  { slug: 'firebase',          color: '#FFCA28', label: 'Firebase',    x: 94, y: 30, depth: 0.5,  size: 52, rotate: -5,  floatDur: 2.7, floatDelay: 0.9  },
  { slug: 'mongodb',           color: '#47A248', label: 'MongoDB',     x: 91, y: 52, depth: 0.45, size: 50, rotate: -10, floatDur: 2.9, floatDelay: 1.9  },
  { slug: 'git',               color: '#F05032', label: 'Git',         x: 93, y: 73, depth: 0.5,  size: 50, rotate: 10,  floatDur: 2.7, floatDelay: 1.8  },
  { slug: 'redux',             color: '#764ABC', label: 'Redux',       x: 79, y: 28, depth: 0.4,  size: 50, rotate: 16,  floatDur: 3.0, floatDelay: 1.1  },
  { slug: 'flutter',           color: '#54C5F8', label: 'Flutter',     x: 81, y: 55, depth: 0.55, size: 58, rotate: -12, floatDur: 2.8, floatDelay: 0.5  },
  { slug: 'swift',             color: '#F05138', label: 'Swift',       x: 77, y: 78, depth: 0.3,  size: 52, rotate: 8,   floatDur: 3.2, floatDelay: 1.6  },
  { slug: 'python',            color: '#3776AB', label: 'Python',      x: 27, y: 90, depth: 0.4,  size: 54, rotate: -8,  floatDur: 3.1, floatDelay: 0.4  },
  { slug: 'android',           color: '#3DDC84', label: 'Android',     x: 46, y: 93, depth: 0.35, size: 56, rotate: 8,   floatDur: 3.3, floatDelay: 0.7  },
  { slug: 'nodedotjs',         color: '#339933', label: 'Node.js',     x: 63, y: 90, depth: 0.2,  size: 54, rotate: 5,   floatDur: 2.9, floatDelay: 1.7  },
  { slug: 'laravel',           color: '#FF2D20', label: 'Laravel',     x: 48, y: 82, depth: 0.25, size: 52, rotate: 18,  floatDur: 2.6, floatDelay: 1.4  },
  { slug: 'javascript',        color: '#F7DF1E', label: 'JS',          x: 96, y: 60, depth: 0.25, size: 54, rotate: 8,   floatDur: 3.6, floatDelay: 1.1  },
  { slug: 'html5',             color: '#E34F26', label: 'HTML5',       x: 1,  y: 50, depth: 0.3,  size: 50, rotate: 12,  floatDur: 2.8, floatDelay: 1.3  },
  { slug: 'graphql',           color: '#E10098', label: 'GraphQL',     x: 65, y: 80, depth: 0.2,  size: 46, rotate: 14,  floatDur: 3.5, floatDelay: 1.4  },
  { slug: 'kotlin',            color: '#7F52FF', label: 'Kotlin',      x: 32, y: 78, depth: 0.2,  size: 46, rotate: -18, floatDur: 2.9, floatDelay: 0.5  },
]

function FloatingIcons() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 })
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const unsubX = springX.on('change', (v) => setPos(p => ({ ...p, x: v })))
    const unsubY = springY.on('change', (v) => setPos(p => ({ ...p, y: v })))
    const onMove = (e) => {
      mouseX.set((e.clientX / window.innerWidth  - 0.5) * 80)
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 80)
    }
    window.addEventListener('mousemove', onMove)
    return () => { window.removeEventListener('mousemove', onMove); unsubX(); unsubY() }
  }, [mouseX, mouseY, springX, springY])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.18] md:opacity-100 floating-icons-layer">
      {FLOATING_ICONS.map((icon, i) => (
        <motion.div
          key={icon.slug}
          className="absolute"
          initial={{ opacity: 0, scale: 0, rotate: icon.rotate }}
          animate={{ opacity: 1, scale: 1, rotate: icon.rotate }}
          transition={{ delay: 0.8 + i * 0.07, duration: 0.7, ease: 'backOut' }}
          style={{ left: `${icon.x}%`, top: `${icon.y}%`, x: pos.x * icon.depth, y: pos.y * icon.depth }}
        >
          <motion.div
            className="flex flex-col items-center gap-1.5"
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: icon.floatDur, delay: icon.floatDelay, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="absolute rounded-3xl blur-2xl"
              style={{ width: icon.size + 24, height: icon.size + 24, background: icon.color, opacity: 0.22, top: -12, left: -12 }} />
            <motion.div
              className="relative rounded-2xl flex items-center justify-center"
              animate={{ boxShadow: [`0 0 0px ${icon.color}00`, `0 0 24px ${icon.color}55`, `0 0 0px ${icon.color}00`] }}
              transition={{ duration: icon.floatDur, delay: icon.floatDelay, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: icon.size, height: icon.size, background: `linear-gradient(135deg, ${icon.color}12, ${icon.color}06)`, border: `1px solid ${icon.color}40`, backdropFilter: 'blur(10px)' }}
            >
              <img
                src={`https://cdn.simpleicons.org/${icon.slug}/${icon.color.replace('#','')}`}
                alt={icon.label}
                width={icon.size * 0.52} height={icon.size * 0.52}
                style={{ opacity: 0.9, filter: `drop-shadow(0 0 8px ${icon.color}99)` }}
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </motion.div>
            <span className="text-[10px] font-mono tracking-widest font-medium" style={{ color: icon.color, opacity: 0.65 }}>
              {icon.label}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    const count = 1500
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
      const isCyan = Math.random() > 0.5
      if (isCyan) { colors[i * 3] = 0; colors[i * 3 + 1] = 0.74; colors[i * 3 + 2] = 0.85 }
      else        { colors[i * 3] = 1; colors[i * 3 + 1] = 0.48; colors[i * 3 + 2] = 0 }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    const material = new THREE.PointsMaterial({ size: 0.008, vertexColors: true, transparent: true, opacity: 0.35 })
    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    let mX = 0, mY = 0
    const onMove = (e) => { mX = (e.clientX / window.innerWidth - 0.5) * 0.5; mY = (e.clientY / window.innerHeight - 0.5) * 0.5 }
    window.addEventListener('mousemove', onMove)

    let animId
    const animate = () => {
      animId = requestAnimationFrame(animate)
      if (document.hidden) return
      particles.rotation.y += 0.0005
      particles.rotation.x += 0.0002
      camera.position.x += (mX - camera.position.x) * 0.03
      camera.position.y += (-mY - camera.position.y) * 0.03
      camera.lookAt(scene.position)
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight) }
    window.addEventListener('resize', onResize)

    return () => { cancelAnimationFrame(animId); window.removeEventListener('mousemove', onMove); window.removeEventListener('resize', onResize); renderer.dispose(); geometry.dispose(); material.dispose() }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.5 }} />
}

function StatCounter({ value, suffix, label, icon }) {
  const numRef  = useRef(null)
  const wrapRef = useRef(null)
  const inView  = useInView(wrapRef, { once: true, margin: '0px 0px -20px 0px' })

  useEffect(() => {
    if (!inView) return
    const obj = { val: 0 }
    gsap.to(obj, {
      val: value, duration: 2.2, ease: 'power2.out',
      onUpdate: () => { if (numRef.current) numRef.current.textContent = Math.floor(obj.val) + suffix },
    })
  }, [inView, value, suffix])

  return (
    <div ref={wrapRef} className="flex flex-col items-center gap-1.5">
      <span className="text-xl mb-0.5">{icon}</span>
      <span ref={numRef} className="font-display font-bold text-3xl md:text-4xl text-gradient">0{suffix}</span>
      <span className="text-muted text-xs font-mono tracking-wide">{label}</span>
    </div>
  )
}

const stats = [
  { value: 10,  suffix: '+', label: 'Years in Business',   icon: '🏆' },
  { value: 120, suffix: '+', label: 'Projects Delivered',  icon: '🚀' },
  { value: 98,  suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
  { value: 50,  suffix: '+', label: 'Happy Clients',       icon: '🤝' },
]

const TRUSTED_BY = ['Wellenzi', 'Automate India', 'MyGodesi', 'Red Carpet Advent', 'Toppers Group', 'Man & Motor', 'Katraj Dairy']

const titleVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const wordVariant = {
  hidden:   { y: 80, opacity: 0 },
  visible:  { y: 0,  opacity: 1, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <ParticleCanvas />
      <FloatingIcons />

      {/* Mobile readability overlay */}
      <div className="absolute inset-0 pointer-events-none md:hidden"
        style={{ background: 'radial-gradient(ellipse 90% 70% at 50% 45%, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.6) 55%, transparent 100%)' }} />

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass border border-white/10 text-sm font-mono mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
          <span className="text-white/60">India's Trusted Digital Agency</span>
          <span className="text-white/20">·</span>
          <span className="text-accent">Est. 2014</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="font-display font-bold text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight mb-6"
        >
          <motion.span variants={wordVariant} className="block text-white">We Build</motion.span>
          <motion.span variants={wordVariant} className="block text-gradient">Digital Products</motion.span>
          <motion.span variants={wordVariant} className="block text-white">That Grow Businesses.</motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          From custom websites and mobile apps to SEO, marketing, and cybersecurity —
          Maveric Infotech is the full-stack digital partner your business deserves.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-6"
        >
          <a href="#contact"
            className="px-8 py-3.5 rounded-full font-semibold bg-gradient-to-r from-accent to-purple text-bg text-sm hover:scale-105 transition-transform glow-cyan inline-flex items-center gap-2">
            Start a Project
            <span className="text-bg/70">→</span>
          </a>
          <a href="#portfolio"
            className="px-8 py-3.5 rounded-full font-semibold glass border border-white/10 text-white text-sm hover:border-accent/40 hover:text-accent transition-all">
            View Our Work
          </a>
        </motion.div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-16"
        >
          <span className="text-white/25 text-xs font-mono tracking-widest uppercase">Trusted by</span>
          {TRUSTED_BY.map((name) => (
            <span key={name} className="text-white/35 text-xs font-medium hover:text-white/60 transition-colors">{name}</span>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 glass rounded-2xl border border-white/6 overflow-hidden"
        >
          {stats.map((s, i) => (
            <div key={s.label} className={`p-6 ${i < 3 ? 'border-r border-white/6' : ''} ${i < 2 ? 'border-b border-white/6 md:border-b-0' : ''}`}>
              <StatCounter {...s} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/25 text-[10px] font-mono tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-accent/60 to-transparent"
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
