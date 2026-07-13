import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import WebDevAnimation from '../components/animations/WebDevAnimation'
import MobileAppAnimation from '../components/animations/MobileAppAnimation'
import MarketingAnimation from '../components/animations/MarketingAnimation'
import EcommerceAnimation from '../components/animations/EcommerceAnimation'
import SEOAnimation from '../components/animations/SEOAnimation'
import CybersecurityAnimation from '../components/animations/CybersecurityAnimation'
import WordPressAnimation from '../components/animations/WordPressAnimation'
import ConsultancyAnimation from '../components/animations/ConsultancyAnimation'

const services = [
  {
    title: 'Web Development',
    desc: 'Custom, blazing-fast websites and web apps engineered for performance, SEO, and conversions.',
    tags: ['React', 'Next.js', 'Laravel'],
    color: '#00BDD9',
    Animation: WebDevAnimation,
  },
  {
    title: 'Mobile Apps',
    desc: 'Native and cross-platform apps that users love — built fast and shipped to both stores.',
    tags: ['Flutter', 'React Native', 'iOS / Android'],
    color: '#FF7A00',
    Animation: MobileAppAnimation,
  },
  {
    title: 'E-Commerce',
    desc: 'Online stores built to sell — seamless checkout, smart product flows, and real revenue.',
    tags: ['WooCommerce', 'Shopify', 'Custom'],
    color: '#00BDD9',
    Animation: EcommerceAnimation,
  },
  {
    title: 'SEO & Growth',
    desc: 'From keyword research to technical audits — we get you to page one and keep you there.',
    tags: ['On-Page', 'Technical SEO', 'Content'],
    color: '#FF7A00',
    Animation: SEOAnimation,
  },
  {
    title: 'Social Media & Marketing',
    desc: 'Campaigns that build your brand, grow your audience, and turn followers into customers.',
    tags: ['Instagram', 'LinkedIn', 'Paid Ads'],
    color: '#00BDD9',
    Animation: MarketingAnimation,
  },
  {
    title: 'Cybersecurity',
    desc: 'Audits, pentesting, and hardening that protect your business before attackers strike.',
    tags: ['Audits', 'SSL / TLS', 'Firewall'],
    color: '#FF7A00',
    Animation: CybersecurityAnimation,
  },
  {
    title: 'WordPress',
    desc: 'Pixel-perfect WordPress sites that are fast, secure, and easy for your team to manage.',
    tags: ['Custom Themes', 'Plugins', 'WP Speed'],
    color: '#00BDD9',
    Animation: WordPressAnimation,
  },
  {
    title: 'IT Consultancy',
    desc: 'Technology strategy and hands-on guidance to modernise your stack and scale confidently.',
    tags: ['Strategy', 'Cloud', 'Integration'],
    color: '#FF7A00',
    Animation: ConsultancyAnimation,
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { Animation, color, title, desc, tags } = service

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-white/7 bg-[var(--card-bg)] overflow-hidden flex flex-col hover:border-white/14 transition-all duration-300"
      data-cursor
    >
      {/* Thin top accent line */}
      <div className="h-[2px] w-full shrink-0"
        style={{ background: `linear-gradient(90deg, ${color}cc 0%, ${color}22 60%, transparent 100%)` }} />

      {/* Animation preview */}
      <div className="relative overflow-hidden">
        <Animation />
        {/* Subtle vignette at bottom of animation */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[var(--card-bg)] to-transparent pointer-events-none" />
      </div>

      {/* Text */}
      <div className="flex flex-col flex-1 p-5 pt-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-bold text-[0.95rem] text-white leading-snug">{title}</h3>
          <span
            className="text-lg shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0"
            style={{ color }}
          >↗</span>
        </div>
        <p className="text-white/45 text-[0.8rem] leading-relaxed mb-4 flex-1">{desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/8 border border-white/12 text-white/70">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true })

  return (
    <section id="services" className="section-pad max-w-7xl mx-auto px-6">
      <div ref={headRef} className="text-center mb-14">
        <motion.span
          initial={{ opacity: 0 }}
          animate={headInView ? { opacity: 1 } : {}}
          className="font-mono text-accent text-sm tracking-widest uppercase"
        >
          What We Do
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-display font-bold text-4xl md:text-5xl text-white mt-3"
        >
          Everything Your Business{' '}
          <span className="text-gradient">Needs to Grow Online</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white/45 mt-4 max-w-xl mx-auto text-sm leading-relaxed"
        >
          From your first website to a full digital presence — strategy, design, development, and marketing under one roof.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <ServiceCard key={s.title} service={s} index={i} />
        ))}
      </div>
    </section>
  )
}
