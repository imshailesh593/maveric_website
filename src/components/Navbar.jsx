import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const serviceLinks = [
  { label: 'Web Development',     slug: 'web-development',  icon: '🌐' },
  { label: 'Mobile Apps',         slug: 'mobile-apps',      icon: '📱' },
  { label: 'E-Commerce',          slug: 'ecommerce',        icon: '🛒' },
  { label: 'SEO & Growth',        slug: 'seo',              icon: '📈' },
  { label: 'Social Media',        slug: 'social-media',     icon: '📣' },
  { label: 'Cybersecurity',       slug: 'cybersecurity',    icon: '🔒' },
  { label: 'WordPress',           slug: 'wordpress',        icon: '⚙️' },
  { label: 'IT Consultancy',      slug: 'consultancy',      icon: '💡' },
]

export default function Navbar() {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const closeTimer = useRef(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    gsap.fromTo(navRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 })
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMenuOpen(false); setServicesOpen(false) }, [location])

  const navHref = (anchor) => isHome ? anchor : `/${anchor}`

  return (
    <nav ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 glass border-b border-border' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="https://mavericinfotech.in/wp-content/uploads/2024/12/Untitled-design-4.png"
            alt="Maveric Infotech" className="h-14 w-auto object-contain"
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'block' }} />
          <span className="font-display font-bold text-xl tracking-tight hidden">
            <span className="text-white">MAVERIC</span><span className="text-gradient"> INFOTECH</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          <a href="/#home" className="text-sm text-muted hover:text-white transition-colors font-medium">Home</a>

          {/* Services dropdown */}
          <div className="relative"
            onMouseEnter={() => { clearTimeout(closeTimer.current); setServicesOpen(true) }}
            onMouseLeave={() => { closeTimer.current = setTimeout(() => setServicesOpen(false), 180) }}>
            <button className="text-sm text-muted hover:text-white transition-colors font-medium flex items-center gap-1">
              Services
              <motion.span animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-[10px]">▾</motion.span>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-2xl overflow-hidden shadow-2xl"
                  style={{ width: 520, background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.09)' }}>
                  <div className="p-2 grid grid-cols-2 gap-0.5">
                    {serviceLinks.map((s) => (
                      <Link key={s.slug} to={`/services/${s.slug}`}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group">
                        <span className="text-xl shrink-0">{s.icon}</span>
                        <span className="text-sm text-white/70 group-hover:text-white transition-colors font-medium">{s.label}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-white/6 px-4 py-3 flex items-center justify-between">
                    <span className="text-xs text-white/30 font-mono">All 8 services · Maveric Infotech</span>
                    <a href="/#contact" className="text-xs text-accent font-mono hover:underline">Get Free Audit →</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/#portfolio" className="text-sm text-muted hover:text-white transition-colors font-medium">Portfolio</a>
          <a href="/#about" className="text-sm text-muted hover:text-white transition-colors font-medium">About</a>
          <a href="/#contact" className="text-sm text-muted hover:text-white transition-colors font-medium">Contact</a>
        </div>

        {/* CTA */}
        <a href="/#contact"
          className="hidden md:flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-accent to-purple text-bg hover:opacity-90 transition-opacity">
          Get Free Audit
        </a>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }} className="md:hidden glass border-t border-border mt-2">
            <div className="flex flex-col px-6 py-4 gap-2">
              <a href="/#home" onClick={() => setMenuOpen(false)} className="text-muted hover:text-white transition-colors py-2">Home</a>

              {/* Mobile services toggle */}
              <button onClick={() => setMobileServicesOpen(v => !v)}
                className="flex items-center justify-between text-muted hover:text-white transition-colors py-2 w-full">
                Services
                <motion.span animate={{ rotate: mobileServicesOpen ? 180 : 0 }} className="text-[10px]">▾</motion.span>
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }} className="overflow-hidden pl-3 border-l border-white/10">
                    {serviceLinks.map(s => (
                      <Link key={s.slug} to={`/services/${s.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-2.5 py-2 text-sm text-white/60 hover:text-white transition-colors">
                        <span>{s.icon}</span>{s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <a href="/#portfolio" onClick={() => setMenuOpen(false)} className="text-muted hover:text-white transition-colors py-2">Portfolio</a>
              <a href="/#about" onClick={() => setMenuOpen(false)} className="text-muted hover:text-white transition-colors py-2">About</a>
              <a href="/#contact" onClick={() => setMenuOpen(false)} className="text-muted hover:text-white transition-colors py-2">Contact</a>
              <a href="/#contact" onClick={() => setMenuOpen(false)}
                className="mt-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-accent to-purple text-bg text-center">
                Get Free Audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
