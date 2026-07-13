import { useRef, useState, useCallback } from 'react'
import { motion, useInView, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'

const categories = ['All', 'SaaS', 'Corporate', 'LMS / Portal', 'E-Commerce', 'Matrimonial', 'Media', 'Auto', 'Travel']

const projects = [
  { id: 0,  title: 'LocalApex',               category: 'SaaS',        year: 2026, industry: 'Local SEO SaaS',            stack: 'FastAPI + React + Flutter', url: 'https://localapex.mavericinfotech.in', color: '#6e76d6', tags: ['SaaS', 'Google Business Profile', 'SEO', 'FastAPI', 'Flutter'], live: true },
  { id: 1,  title: 'Automate India',         category: 'Corporate',    year: 2022, industry: 'Automation / B2B',    stack: 'WordPress',    url: 'https://automateindia.com',      color: '#00BDD9', tags: ['WordPress', 'Corporate', 'SEO'],        live: true },
  { id: 2,  title: 'Dnyanprasad Academy',    category: 'LMS / Portal', year: 2022, industry: 'Education',            stack: 'WordPress',    url: 'https://dnyanprasadacademy.in',  color: '#FF7A00', tags: ['WordPress', 'Education', 'Classes'],    live: true },
  { id: 3,  title: 'Brilliants Academy',     category: 'LMS / Portal', year: 2022, industry: 'Education',            stack: 'WordPress',    url: 'https://brilliantsacademy.in',   color: '#00BDD9', tags: ['WordPress', 'Classes', 'Custom'],       live: true },
  { id: 4,  title: 'Toppers Group',          category: 'LMS / Portal', year: 2022, industry: 'Ed-Tech',              stack: 'Custom Dev',   url: 'https://toppersgroup.in',        color: '#FF7A00', tags: ['LMS', 'Custom Dev', 'Portal'],          live: true },
  { id: 5,  title: 'Red Carpet Advent',      category: 'Corporate',    year: 2023, industry: 'Events & Luxury',      stack: 'Dynamic Site', url: 'https://redcarpetadvent.com',    color: '#00BDD9', tags: ['Dynamic', 'Events', 'Luxury'],          live: true },
  { id: 6,  title: 'Man & Motor',            category: 'Auto',         year: 2022, industry: 'Automobile Blog',      stack: 'WordPress',    url: 'https://manandmotor.com',        color: '#FF7A00', tags: ['WordPress', 'Blog', 'Autos'],           live: true },
  { id: 7,  title: 'Sai Samrat News',        category: 'Media',        year: 2022, industry: 'News Portal',          stack: 'WordPress',    url: 'https://saisamratnews.com',      color: '#00BDD9', tags: ['News Portal', 'WordPress', 'Media'],    live: true },
  { id: 8,  title: 'Sparky Tech India',      category: 'Corporate',    year: 2022, industry: 'Tech Services',        stack: 'WordPress',    url: 'https://sparkytechindia.com',    color: '#FF7A00', tags: ['WordPress', 'Corporate', 'Tech'],       live: true },
  { id: 9,  title: 'OpavaAutos',            category: 'Auto',         year: 2023, industry: 'Automobile',           stack: 'WordPress',    url: 'https://opavautos.com',          color: '#00BDD9', tags: ['WordPress', 'Automobile', 'Inventory'], live: true },
  { id: 10, title: 'Hindu Vadhu Var Mandal', category: 'Matrimonial',  year: 2023, industry: 'Matrimonial Portal',   stack: 'Custom',       url: 'https://hinduvadhuvarmandal.in', color: '#FF7A00', tags: ['Matrimonial', 'Custom', 'Portal'],       live: true },
  { id: 11, title: 'Setsque',                category: 'Corporate',    year: 2022, industry: 'Business',             stack: 'Dynamic Site', url: 'http://setsque.com',             color: '#00BDD9', tags: ['Dynamic', 'WordPress', 'Business'],      live: true },
  { id: 12, title: 'CarNewsLine',            category: 'Auto',         year: 2023, industry: 'Automotive News',      stack: 'WordPress',    url: 'https://carnewsline.com',        color: '#FF7A00', tags: ['WordPress', 'News', 'Automotive'],      live: true },
  { id: 13, title: 'Ekvira Foundation',      category: 'Corporate',    year: 2022, industry: 'NGO / Women Empowerment', stack: 'WordPress', url: 'https://ekvirafoundation.com',   color: '#00BDD9', tags: ['NGO', 'WordPress', 'Maharashtra'],      live: true },
  { id: 14, title: 'Gangaram DPL',           category: 'E-Commerce',   year: 2023, industry: 'Indian Grocery',          stack: 'WooCommerce',  url: 'https://gangaramdpl.com',           color: '#FF7A00', tags: ['WooCommerce', 'Grocery', 'E-Commerce'],  live: true },
  { id: 15, title: 'Spruce Up Industries',   category: 'Corporate',    year: 2024, industry: 'Industrial / Manufacturing', stack: 'WordPress',    url: 'https://spruce-up.com',             color: '#00BDD9', tags: ['WordPress', 'Industrial', 'Corporate'],  live: true },
  { id: 16, title: 'Sandipani Academy',      category: 'LMS / Portal', year: 2024, industry: 'Education',                 stack: 'WordPress',    url: 'https://sandipani.co',              color: '#FF7A00', tags: ['WordPress', 'Education', 'Academy'],     live: true },
  { id: 17, title: 'FramesFlick',            category: 'Media',        year: 2024, industry: 'Photography / Media',       stack: 'WordPress',    url: 'https://framesflick.com',           color: '#00BDD9', tags: ['WordPress', 'Photography', 'Media'],     live: true },
  { id: 18, title: 'Jodidaar',               category: 'Matrimonial',  year: 2023, industry: 'Matrimonial App',           stack: 'Flutter + Laravel', url: 'https://jodidaar.com',       color: '#FF7A00', tags: ['Flutter', 'Laravel', 'Matrimonial'],     live: true },
  { id: 19, title: 'Pranshakti',             category: 'Corporate',    year: 2024, industry: 'Health & Nutrition',        stack: 'WordPress',    url: 'https://pranshakti.in',             color: '#00BDD9', tags: ['WordPress', 'Health', 'Nutrition'],      live: true },
  { id: 20, title: 'Dibi Digital',           category: 'Corporate',    year: 2024, industry: 'Digital Agency',            stack: 'WordPress',    url: 'https://dibi.digital',              color: '#FF7A00', tags: ['WordPress', 'Digital', 'Agency'],        live: true },
  { id: 21, title: 'Mahatma Phule College',  category: 'LMS / Portal', year: 2023, industry: 'College of Education',      stack: 'WordPress',    url: 'https://mahatmaphulecoed.com',      color: '#00BDD9', tags: ['WordPress', 'Education', 'College'],     live: true },
  { id: 22, title: 'Liflic Natural',         category: 'E-Commerce',   year: 2024, industry: 'Natural / Organic Products',stack: 'WooCommerce',  url: 'https://liflic.in',                 color: '#FF7A00', tags: ['WooCommerce', 'Organic', 'Health'],      live: true },
  { id: 23, title: 'The Trip Times',         category: 'Travel',       year: 2024, industry: 'Travel & Tourism',          stack: 'WordPress',    url: 'https://thetriptimes.in',           color: '#00BDD9', tags: ['WordPress', 'Travel', 'Tourism'],        live: true },
]

// ── 3D Tilt Wrapper ───────────────────────────────────────────────────────

function TiltCard({ color, children }) {
  const ref = useRef(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)

  const springConfig = { stiffness: 200, damping: 22, mass: 0.5 }
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-8, 8]), springConfig)
  const scale   = useSpring(1, { stiffness: 300, damping: 25 })

  const onMouseMove = useCallback((e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width  - 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5
    rawX.set(x)
    rawY.set(y)
    glowX.set((x + 0.5) * 100)
    glowY.set((y + 0.5) * 100)
  }, [rawX, rawY, glowX, glowY])

  const onMouseEnter = useCallback(() => scale.set(1.02), [scale])

  const onMouseLeave = useCallback(() => {
    rawX.set(0)
    rawY.set(0)
    glowX.set(50)
    glowY.set(50)
    scale.set(1)
  }, [rawX, rawY, glowX, glowY, scale])

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
        transformPerspective: 800,
      }}
      className="relative"
    >
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, ${color}35 0%, transparent 65%)`
          ),
        }}
      />
      <motion.div
        className="absolute -inset-px rounded-2xl pointer-events-none z-0"
        style={{
          boxShadow: useTransform(
            [rotateX, rotateY],
            ([rx, ry]) =>
              `${-ry * 1.5}px ${rx * 1.5}px 30px ${color}25, 0 20px 40px rgba(0,0,0,0.4)`
          ),
        }}
      />
      {children}
    </motion.div>
  )
}

// ── Project Card ─────────────────────────────────────────────────────────

function NameCard({ project }) {
  const domain = project.url ? new URL(project.url).hostname : ''

  return (
    <div
      className="group relative rounded-2xl border border-white/7 bg-[var(--card-bg)] overflow-hidden hover:border-white/14 transition-all duration-300 flex flex-col"
      data-cursor
    >
      {/* Thin top accent line */}
      <div className="h-[2px] w-full shrink-0"
        style={{ background: `linear-gradient(90deg, ${project.color}cc 0%, ${project.color}22 60%, transparent 100%)` }} />

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Industry + Live */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-mono tracking-[0.18em] uppercase font-medium"
            style={{ color: project.color }}>
            {project.industry}
          </span>
          {project.live && (
            <span className="flex items-center gap-1.5 text-[10px] font-mono text-green-400/80">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Live
            </span>
          )}
        </div>

        {/* Project name */}
        <h3 className="font-display font-bold text-[1.35rem] leading-snug text-white mb-4 flex-1">
          {project.title}
        </h3>

        {/* Chips row */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-white/45">
            {project.stack}
          </span>
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-white/45">
            {project.year}
          </span>
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-white/45">
            {project.category}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-white/6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400/70 shrink-0" />
          <span className="text-[10px] font-mono text-white/30 truncate">{domain}</span>
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[10px] font-mono text-white/25 hover:text-accent transition-colors shrink-0"
          >
            ↗
          </a>
        )}
      </div>

      {/* Hover overlay */}
      {project.url && (
        <div className="absolute inset-0 rounded-2xl bg-[#0a0a0a]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250 z-10 backdrop-blur-sm">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="px-6 py-2.5 rounded-full text-sm font-semibold border text-white hover:text-bg transition-all"
            style={{ borderColor: project.color, background: 'transparent' }}
            onMouseEnter={(e) => e.currentTarget.style.background = project.color}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
          >
            Visit Live Site ↗
          </a>
        </div>
      )}
    </div>
  )
}

// ── Project Card with animation ───────────────────────────────────────────

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard color={project.color}>
        <NameCard project={project} />
      </TiltCard>
    </motion.div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const headRef = useRef(null)
  const inView = useInView(headRef, { once: true })

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="section-pad max-w-7xl mx-auto px-6 relative">
      <div ref={headRef} className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="font-mono text-accent text-sm tracking-widest uppercase"
        >
          Our Work
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-display font-bold text-4xl md:text-5xl text-white mt-3"
        >
          120+ Projects Delivered.{' '}
          <span className="text-gradient">A Few We're Proud Of.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="text-muted mt-3 max-w-xl mx-auto text-sm"
        >
          Websites built, launched, and live — across industries and scale.
        </motion.p>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mt-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-gradient-to-r from-accent to-purple text-bg font-semibold'
                  : 'glass border border-border text-muted hover:text-white hover:border-accent/30'
              }`}
            >
              {cat}
              {cat === 'All' && (
                <span className="ml-1.5 text-[10px] opacity-60">{projects.length}</span>
              )}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a href="#contact" className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all">
          Have a project in mind? Let's talk →
        </a>
      </motion.div>
    </section>
  )
}
