import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    name: 'Ravindra Deopa',
    role: 'Youtuber & Auto-Journalist',
    quote: 'Best web designing & tech support! Highly recommended!',
    rating: 5,
  },
  {
    name: 'Katraj Dairy',
    role: 'Pune Zillha Sahakari Dudh Utpadak Sangh Limited',
    quote: 'Best digital marketing agency we have ever worked with!',
    rating: 5,
  },
  {
    name: 'Omkar Khulpe',
    role: 'Owner, Infinix Animation & VFX',
    quote: 'Best Dynamic website with top class support!',
    rating: 5,
  },
  {
    name: 'Govind Basil',
    role: 'Sadguru Developers, Pune',
    quote: 'Best Digital Marketing Agency! Amazing leads generation — our business has grown significantly since partnering with Maveric.',
    rating: 5,
  },
]

const clientLogos = [
  { name: 'Automate India', url: 'https://automateindia.com' },
  { name: 'Toppers Group', url: 'https://toppersgroup.in' },
  { name: 'Red Carpet Advent', url: 'https://redcarpetadvent.com' },
  { name: 'Man & Motor', url: 'https://manandmotor.com' },
  { name: 'Sai Samrat News', url: 'https://saisamratnews.com' },
  { name: 'Sparky Tech', url: 'https://sparkytechindia.com' },
  { name: 'Opava Autos', url: 'https://opavautos.com' },
  { name: 'Hindu Vadhu Var Mandal', url: 'https://hinduvadhuvarmandal.in' },
  { name: 'Dnyanprasad Academy', url: 'https://dnyanprasadacademy.in' },
  { name: 'Brilliants Academy', url: 'https://brilliantsacademy.in' },
  { name: 'Setsque', url: 'http://setsque.com' },
  { name: 'CarNewsLine', url: 'https://carnewsline.com' },
  { name: 'Ekvira Foundation', url: 'https://ekvirafoundation.com' },
  { name: 'Gangaram DPL', url: 'https://gangaramdpl.com' },
  { name: 'Spruce Up Industries', url: 'https://spruce-up.com' },
  { name: 'Jodidaar', url: 'https://jodidaar.com' },
  { name: 'Pranshakti', url: 'https://pranshakti.in' },
  { name: 'Mahatma Phule College', url: 'https://mahatmaphulecoed.com' },
  { name: 'Liflic Natural', url: 'https://liflic.in' },
  { name: 'The Trip Times', url: 'https://thetriptimes.in' },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const headRef = useRef(null)
  const inView = useInView(headRef, { once: true })

  return (
    <section id="testimonials" className="section-pad overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-accent text-sm tracking-widest uppercase"
          >
            Client Love
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display font-bold text-4xl md:text-5xl text-white mt-3"
          >
            Don't Take Our <span className="text-gradient">Word for It</span>
          </motion.h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass rounded-2xl border border-border p-6 hover:border-accent/20 transition-colors"
            >
              <StarRating count={t.rating} />
              <p className="text-white/80 leading-relaxed mb-5 text-sm">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-purple flex items-center justify-center font-bold text-bg text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-muted text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client logo marquee */}
        <div className="relative overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: [0, -(clientLogos.length * 180)] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          >
            {[...clientLogos, ...clientLogos].map((client, i) => (
              <a
                key={i}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-bold text-sm tracking-widest text-muted/40 hover:text-white/70 transition-colors whitespace-nowrap"
              >
                {client.name}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
