import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingCTA() {
  const [open, setOpen] = useState(false)

  const buttons = [
    { label: 'WhatsApp', href: 'https://wa.me/919552302834?text=Hi%20Maveric%2C%20I%27d%20like%20to%20discuss%20a%20project', bg: '#25D366', icon: '💬' },
    { label: 'Call Now', href: 'tel:+919552302834', bg: '#00BDD9', icon: '📞' },
    { label: 'Email Us', href: 'mailto:contact@mavericinfotech.in', bg: '#FF7A00', icon: '✉️' },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open &&
          buttons.map((btn, i) => (
            <motion.a
              key={btn.label}
              href={btn.href}
              target={btn.label === 'WhatsApp' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-3 px-4 py-2.5 rounded-full text-sm font-semibold text-white shadow-lg hover:scale-105 transition-transform"
              style={{ background: btn.bg }}
            >
              <span>{btn.icon}</span>
              {btn.label}
            </motion.a>
          ))}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-purple text-white text-2xl shadow-lg glow-cyan hover:scale-105 transition-transform flex items-center justify-center"
      >
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>
          {open ? '✕' : '💬'}
        </motion.span>
      </motion.button>
    </div>
  )
}
