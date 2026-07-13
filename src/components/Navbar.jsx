import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Services',  href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'About',     href: '/#about' },
  { label: 'LocalApex', href: 'https://localapex.mavericinfotech.in', external: true },
  { label: 'Contact',   href: '/#contact' },
]

const leftLinks  = links.slice(0, 2)
const rightLinks = links.slice(2)

function BarLink({ href, label, external, onClick }) {
  if (external) return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}
      className="font-mono text-[13px] uppercase tracking-widest text-white/85 transition-colors hover:text-yellow">
      {label} ↗
    </a>
  )
  return (
    <a href={href} onClick={onClick}
      className="font-mono text-[13px] uppercase tracking-widest text-white/85 transition-colors hover:text-yellow">
      {label}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-white/10 bg-black/70 backdrop-blur-md' : 'border-b border-transparent'
      }`}>
        <div className="mx-auto grid h-16 max-w-site grid-cols-[1fr_auto_1fr] items-center px-5 md:h-20 md:px-8">
          {/* Left links */}
          <div className="flex items-center">
            <nav className="hidden items-center gap-6 md:flex lg:gap-9">
              {leftLinks.map(l => <BarLink key={l.href} {...l} />)}
            </nav>
          </div>

          {/* Centered M badge */}
          <Link to="/" aria-label="Maveric Infotech — home" className="justify-self-center">
            <span className="maveric-logo-badge flex h-14 w-14 items-center justify-center rounded-full bg-black ring-1 ring-white/20 md:h-16 md:w-16">
              <span className="display text-2xl text-white">M</span>
            </span>
          </Link>

          {/* Right links + hamburger */}
          <div className="flex items-center justify-end gap-6 lg:gap-9">
            <nav className="hidden items-center gap-6 md:flex lg:gap-9">
              {rightLinks.map(l => <BarLink key={l.href} {...l} />)}
            </nav>
            <button onClick={() => setOpen(v => !v)} aria-label="Toggle menu" aria-expanded={open}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[7px] md:hidden">
              <span className={`block h-[2px] w-7 bg-white transition-transform duration-300 ${open ? 'translate-y-[9px] rotate-45' : ''}`} />
              <span className={`block h-[2px] w-7 bg-white transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-[2px] w-7 bg-white transition-transform duration-300 ${open ? '-translate-y-[9px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-black px-8 md:hidden">
            <nav>
              <ul className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.li key={l.href}
                    initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
                    transition={{ delay: i * 0.06, duration: 0.35 }}>
                    {l.external
                      ? <a href={l.href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
                          className="display block text-4xl text-white transition-colors hover:text-yellow sm:text-5xl">
                          {l.label} ↗
                        </a>
                      : <a href={l.href} onClick={() => setOpen(false)}
                          className="display block text-4xl text-white transition-colors hover:text-yellow sm:text-5xl">
                          {l.label}
                        </a>
                    }
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="mt-12 flex gap-6">
              {[
                { label: 'LinkedIn', href: 'https://in.linkedin.com/company/maveric-infotech' },
                { label: 'Instagram', href: 'https://www.instagram.com/maveric_infotech' },
                { label: 'Facebook', href: 'https://www.facebook.com/mavericinfotech' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-widest text-grey hover:text-yellow">
                  {s.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
