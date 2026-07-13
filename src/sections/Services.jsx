import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  { n: '01', title: 'Web Development',  desc: 'Custom, blazing-fast websites and web apps engineered for performance, SEO, and conversions.', slug: 'web-development' },
  { n: '02', title: 'Mobile Apps',      desc: 'Native and cross-platform apps that users love — built fast and shipped to both stores.',       slug: 'mobile-apps' },
  { n: '03', title: 'E-Commerce',       desc: 'Online stores built to sell — seamless checkout, smart product flows, and real revenue.',         slug: 'ecommerce' },
  { n: '04', title: 'SEO & Growth',     desc: 'From keyword research to technical audits — we get you to page one and keep you there.',          slug: 'seo' },
  { n: '05', title: 'Social Media',     desc: 'Campaigns that build your brand, grow your audience, and turn followers into customers.',          slug: 'social-media' },
  { n: '06', title: 'Cybersecurity',    desc: 'Audits, pentesting, and hardening that protect your business before attackers strike.',            slug: 'cybersecurity' },
  { n: '07', title: 'WordPress',        desc: 'Pixel-perfect WordPress sites that are fast, secure, and easy for your team to manage.',           slug: 'wordpress' },
  { n: '08', title: 'IT Consultancy',   desc: 'Strategic technology guidance that aligns your IT investments with your business goals.',          slug: 'consultancy' },
]

export default function Services() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="services" className="bg-paper px-6 py-24 text-black md:px-10 md:py-32">
      <div className="mx-auto max-w-site">
        <div ref={headRef} className="mb-16 max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }} animate={headInView ? { opacity: 1 } : {}}
            className="font-mono text-xs uppercase tracking-widest text-red">
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }} animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="display mt-4 text-5xl md:text-7xl">
            End-to-end digital services.
          </motion.h2>
        </div>

        <div className="divide-y border-y" style={{ borderColor: 'rgba(0,0,0,0.1)', '--tw-divide-color': 'rgba(0,0,0,0.1)' }}>
          {services.map((s, i) => (
            <motion.div key={s.n}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.32, delay: i * 0.04 }}>
              <Link to={`/services/${s.slug}`}
                className="group grid grid-cols-1 gap-4 py-8 transition-colors hover:bg-black hover:px-6 hover:text-white md:grid-cols-12 md:items-center md:py-10">
                <span className="font-mono text-sm text-red md:col-span-1">{s.n}</span>
                <h3 className="display text-3xl md:col-span-4 md:text-4xl">{s.title}</h3>
                <p className="font-body text-base text-black/60 group-hover:text-white/70 md:col-span-6 md:col-start-7">
                  {s.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
