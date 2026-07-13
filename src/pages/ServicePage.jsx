import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getService } from '../data/servicesData'
import Navbar from '../components/Navbar'
import Cursor from '../components/Cursor'
import Footer from '../sections/Footer'
import FloatingCTA from '../components/FloatingCTA'
import WebMockup from '../components/service-mockups/WebMockup'
import MobileMockup from '../components/service-mockups/MobileMockup'
import SEOMockup from '../components/service-mockups/SEOMockup'
import SecurityMockup from '../components/service-mockups/SecurityMockup'
import GenericMockup from '../components/service-mockups/GenericMockup'

function Mockup({ type }) {
  if (type === 'web')        return <WebMockup />
  if (type === 'mobile')     return <MobileMockup />
  if (type === 'seo')        return <SEOMockup />
  if (type === 'security')   return <SecurityMockup />
  return <GenericMockup type={type} />
}

export default function ServicePage() {
  const { slug } = useParams()
  const service = getService(slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!service) return <Navigate to="/" replace />

  const { title, tagline, description, longDesc, color, icon, features, process, stack, stats, mockup } = service

  return (
    <div className="bg-bg min-h-screen">
      <Cursor />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-15"
          style={{ background: color }} />

        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-xs font-mono text-white/30 mb-8">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span>Services</span>
            <span>/</span>
            <span style={{ color }}>{title}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-xs font-mono mb-6"
                style={{ borderColor: `${color}40`, color, background: `${color}10` }}>
                <span>{icon}</span>
                Maveric Infotech · Service
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-4">
                {tagline}
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/55 text-lg leading-relaxed mb-8">
                {description}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }} className="flex gap-3 flex-wrap">
                <Link to="/#contact"
                  className="px-7 py-3 rounded-full font-semibold text-sm text-bg hover:opacity-90 transition-opacity"
                  style={{ background: `linear-gradient(135deg, ${color}, #FF7A00)` }}>
                  Get a Free Quote →
                </Link>
                <Link to="/"
                  className="px-7 py-3 rounded-full font-semibold text-sm text-white glass border border-white/10 hover:border-accent/40 transition-colors">
                  ← Back to Home
                </Link>
              </motion.div>

              {/* Stats if available */}
              {stats && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                  className="flex gap-6 mt-10">
                  {stats.map(s => (
                    <div key={s.label}>
                      <div className="font-display font-bold text-2xl" style={{ color }}>{s.value}</div>
                      <div className="text-[11px] text-white/40 font-mono">{s.label}</div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Mockup */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}>
              <Mockup type={mockup} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Long description */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-white/50 text-lg leading-relaxed max-w-3xl">{longDesc}</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color }}>What's Included</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2">
              Everything You Need to Succeed
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="rounded-2xl p-6 flex flex-col gap-3"
                style={{ background: 'var(--card-bg)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="text-3xl">{f.icon}</div>
                <h3 className="font-semibold text-white text-base">{f.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color }}>How We Work</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2">Our Process</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-0">
            {process.map((p, i) => (
              <motion.div key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 relative">
                {/* Connector line */}
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-px"
                    style={{ background: `linear-gradient(90deg, ${color}40, transparent)` }} />
                )}
                <div className="flex flex-col items-start md:items-center text-left md:text-center px-4 py-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm mb-4 relative z-10"
                    style={{ background: `${color}18`, border: `2px solid ${color}40`, color }}>
                    {p.step}
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1">{p.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color }}>Technology Stack</span>
            <h2 className="font-display font-bold text-2xl text-white mt-2">Tools & Technologies We Use</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {stack.map((tech, i) => (
              <motion.span key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 rounded-full text-sm font-mono"
                style={{ background: `${color}10`, border: `1px solid ${color}25`, color: 'rgba(255,255,255,0.7)' }}>
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/45 mb-8 max-w-xl mx-auto">
              Talk to our team about your project — free consultation, no commitment.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://wa.me/919552302834?text=Hi%20Maveric%2C%20I%27d%20like%20to%20discuss%20a%20project"
                target="_blank" rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full font-semibold text-sm text-bg hover:opacity-90 transition-opacity"
                style={{ background: `linear-gradient(135deg, ${color}, #FF7A00)` }}>
                WhatsApp Us Now
              </a>
              <Link to="/#contact"
                className="px-8 py-3.5 rounded-full font-semibold text-sm text-white glass border border-white/10 hover:border-accent/40 transition-colors">
                Fill Contact Form
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  )
}
