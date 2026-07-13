import PubityBtn from '../components/PubityBtn'

const cards = [
  {
    title: 'OUR MISSION',
    icon: '🎯',
    desc: 'Building digital products that grow businesses — since 2014, right out of Pandharpur, Maharashtra.',
    href: '/#about',
    back: 'LEARN MORE →',
  },
  {
    title: 'LOCALAPEX',
    icon: '📍',
    desc: 'Our flagship SaaS: a complete Google Business Profile management platform for local businesses.',
    href: 'https://localapex.mavericinfotech.in',
    external: true,
    back: 'LAUNCH APP →',
  },
  {
    title: 'CASE STUDIES',
    icon: '📊',
    desc: '120+ delivered projects across web, mobile, e-commerce, and portals — all live and running.',
    href: '/#portfolio',
    back: 'VIEW WORK →',
  },
  {
    title: 'WORK WITH US',
    icon: '🚀',
    desc: 'Free consultation, no commitment. Tell us what you need and we will tell you how to get there.',
    href: '/#contact',
    back: "LET'S GO →",
  },
]

export default function LocalApexShowcase() {
  return (
    <section id="localapex" className="watermark-bg px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-site">
        <div className="grid gap-px border md:grid-cols-2 lg:grid-cols-4"
          style={{ borderColor: '#2a2a2a', background: '#2a2a2a' }}>
          {cards.map(c => (
            <div key={c.title} className="flex flex-col justify-between bg-black p-8 md:p-10">
              {/* Icon */}
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border-2 text-3xl"
                style={{ borderColor: 'rgb(0,189,217)' }}>
                {c.icon}
              </div>
              {/* Text */}
              <div>
                <h3 className="display text-2xl text-yellow md:text-3xl">{c.title}</h3>
                <p className="mt-3 font-body text-sm text-white/50">{c.desc}</p>
              </div>
              {/* CTA */}
              <div className="mt-8">
                {c.external
                  ? <a href={c.href} target="_blank" rel="noopener noreferrer">
                      <PubityBtn label="Find Out More" href={c.href} backLabel={c.back} />
                    </a>
                  : <PubityBtn label="Find Out More" href={c.href} backLabel={c.back} />
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
