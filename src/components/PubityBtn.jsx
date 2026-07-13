import { motion } from 'framer-motion'

export default function PubityBtn({ label = 'Find Out More', href, backLabel = 'LAUNCH →', className = '' }) {
  return (
    <div style={{ perspective: '500px' }} className={`group inline-block ${className}`}>
      <motion.a
        href={href}
        className="relative block overflow-visible px-7 py-4 font-mono text-sm font-bold uppercase tracking-widest text-black"
        style={{
          background: 'rgb(0,189,217)',
          transformOrigin: 'center bottom',
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ rotateX: -22, y: -3 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      >
        <span aria-hidden className="pointer-events-none absolute -right-2 top-0 h-full w-2 bg-black/30 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          style={{ transformOrigin: 'left center', transform: 'rotateY(90deg)' }} />
        <span className="block transition-opacity duration-150 group-hover:opacity-0">{label}</span>
        <span aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center font-bold tracking-widest opacity-0 transition-opacity duration-150 group-hover:opacity-100"
          style={{ color: '#6e76d6' }}>
          {backLabel}
        </span>
      </motion.a>
    </div>
  )
}
