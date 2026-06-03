import { motion } from 'framer-motion'

const row1 = [
  { slug: 'react',       color: '#61DAFB', label: 'React'       },
  { slug: 'nextdotjs',   color: '#FFFFFF', label: 'Next.js'     },
  { slug: 'javascript',  color: '#F7DF1E', label: 'JavaScript'  },
  { slug: 'typescript',  color: '#3178C6', label: 'TypeScript'  },
  { slug: 'tailwindcss', color: '#06B6D4', label: 'Tailwind CSS'},
  { slug: 'flutter',     color: '#54C5F8', label: 'Flutter'     },
  { slug: 'figma',       color: '#F24E1E', label: 'Figma'       },
  { slug: 'html5',       color: '#E34F26', label: 'HTML5'       },
  { slug: 'css3',        color: '#1572B6', label: 'CSS3'        },
]

const row2 = [
  { slug: 'laravel',     color: '#FF2D20', label: 'Laravel'     },
  { slug: 'nodedotjs',   color: '#339933', label: 'Node.js'     },
  { slug: 'php',         color: '#777BB4', label: 'PHP'         },
  { slug: 'mysql',       color: '#4479A1', label: 'MySQL'       },
  { slug: 'mongodb',     color: '#47A248', label: 'MongoDB'     },
  { slug: 'firebase',    color: '#FFCA28', label: 'Firebase'    },
  { slug: 'android',     color: '#3DDC84', label: 'Android'     },
  { slug: 'wordpress',   color: '#21759B', label: 'WordPress'   },
  { slug: 'python',      color: '#3776AB', label: 'Python'      },
]

function TechPill({ tech }) {
  return (
    <div
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border shrink-0 group cursor-default"
      style={{
        background: `${tech.color}08`,
        borderColor: `${tech.color}25`,
      }}
      data-cursor
    >
      <img
        src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`}
        alt={tech.label}
        width={18}
        height={18}
        className="shrink-0 opacity-80 group-hover:opacity-100 transition-opacity"
        style={{ filter: `drop-shadow(0 0 4px ${tech.color}60)` }}
        onError={(e) => { e.currentTarget.style.display = 'none' }}
      />
      <span
        className="text-sm font-medium whitespace-nowrap opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ color: tech.color }}
      >
        {tech.label}
      </span>
    </div>
  )
}

function MarqueeRow({ items, reverse = false, speed = 30 }) {
  const repeated = [...items, ...items, ...items]
  return (
    <div className="relative overflow-hidden py-1">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }} />

      <motion.div
        className="flex gap-3"
        animate={{ x: reverse ? [0, `${100 / 3}%`] : [0, `-${100 / 3}%`] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {repeated.map((tech, i) => (
          <TechPill key={`${tech.slug}-${i}`} tech={tech} />
        ))}
      </motion.div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section className="py-20 overflow-hidden relative">
      {/* Subtle top + bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-accent text-sm tracking-widest uppercase"
        >
          Tech We Master
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display font-bold text-3xl md:text-4xl text-white mt-3"
        >
          Built with the{' '}
          <span className="text-gradient">Right Tools</span>
        </motion.h2>
      </div>

      <div className="flex flex-col gap-4">
        <MarqueeRow items={row1} reverse={false} speed={35} />
        <MarqueeRow items={row2} reverse={true}  speed={28} />
      </div>
    </section>
  )
}
