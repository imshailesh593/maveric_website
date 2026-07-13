import { useState } from 'react'
import { Link } from 'react-router-dom'

const serviceLinks = [
  { label: 'Web Development',  href: '/services/web-development' },
  { label: 'Mobile Apps',      href: '/services/mobile-apps' },
  { label: 'E-Commerce',       href: '/services/ecommerce' },
  { label: 'SEO & Growth',     href: '/services/seo' },
  { label: 'Cybersecurity',    href: '/services/cybersecurity' },
  { label: 'WordPress',        href: '/services/wordpress' },
  { label: 'IT Consultancy',   href: '/services/consultancy' },
]

const companyLinks = [
  { label: 'About Us',           href: '/#about' },
  { label: 'Portfolio',          href: '/#portfolio' },
  { label: 'LocalApex',          href: 'https://localapex.mavericinfotech.in', external: true },
  { label: 'Privacy Policy',     href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
]

export default function Footer() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = form
    const mailto = `mailto:info@mavericinfotech.in?subject=Enquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.location.href = mailto
    setSent(true)
  }

  return (
    <footer style={{ background: 'rgb(0,189,217)', color: '#0a0a0a' }}>
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

          {/* Left: brand + links */}
          <div>
            {/* Logo wordmark */}
            <a href="/" className="inline-flex items-center gap-3 mb-10">
              <img
                src="https://mavericinfotech.in/wp-content/uploads/2024/12/Untitled-design-4.png"
                alt="Maveric Infotech"
                className="h-12 w-auto object-contain"
                style={{ filter: 'brightness(0)' }}
                onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'block' }}
              />
              <span className="font-display font-black text-2xl tracking-tight hidden" style={{ color: '#0a0a0a' }}>
                MAVERIC INFOTECH
              </span>
            </a>

            <p className="font-sans text-base mb-12 max-w-sm" style={{ color: 'rgba(0,0,0,0.55)' }}>
              Building digital products that grow businesses since 2014. Based in Pandharpur, Maharashtra.
            </p>

            <div className="grid grid-cols-2 gap-10">
              {/* Services */}
              <div>
                <p className="font-mono text-xs uppercase tracking-widest mb-5" style={{ color: 'rgba(0,0,0,0.4)' }}>
                  Services
                </p>
                <ul className="space-y-3">
                  {serviceLinks.map(l => (
                    <li key={l.label}>
                      <Link to={l.href}
                        className="text-sm font-medium transition-opacity hover:opacity-70"
                        style={{ color: '#0a0a0a' }}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <p className="font-mono text-xs uppercase tracking-widest mb-5" style={{ color: 'rgba(0,0,0,0.4)' }}>
                  Company
                </p>
                <ul className="space-y-3">
                  {companyLinks.map(l => (
                    <li key={l.label}>
                      {l.external
                        ? <a href={l.href} target="_blank" rel="noopener noreferrer"
                            className="text-sm font-medium transition-opacity hover:opacity-70"
                            style={{ color: '#0a0a0a' }}>
                            {l.label} ↗
                          </a>
                        : <a href={l.href}
                            className="text-sm font-medium transition-opacity hover:opacity-70"
                            style={{ color: '#0a0a0a' }}>
                            {l.label}
                          </a>
                      }
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-8" style={{ color: 'rgba(0,0,0,0.4)' }}>
              Get in touch
            </p>
            {sent ? (
              <div className="flex flex-col items-start gap-3">
                <span className="font-display font-black text-4xl" style={{ color: '#0a0a0a' }}>
                  We&apos;ll be in touch.
                </span>
                <p className="text-base" style={{ color: 'rgba(0,0,0,0.55)' }}>
                  Your email client opened — hit send and we&apos;ll reply within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-widest mb-2"
                      style={{ color: 'rgba(0,0,0,0.45)' }}>Your Name</label>
                    <input
                      type="text" required value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl font-sans text-sm outline-none transition-all"
                      style={{ background: 'rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.15)', color: '#0a0a0a' }}
                      placeholder="Rahul Sharma"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-widest mb-2"
                      style={{ color: 'rgba(0,0,0,0.45)' }}>Email</label>
                    <input
                      type="email" required value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl font-sans text-sm outline-none transition-all"
                      style={{ background: 'rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.15)', color: '#0a0a0a' }}
                      placeholder="rahul@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-widest mb-2"
                    style={{ color: 'rgba(0,0,0,0.45)' }}>What do you need?</label>
                  <textarea
                    required rows={5} value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl font-sans text-sm outline-none resize-none transition-all"
                    style={{ background: 'rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.15)', color: '#0a0a0a' }}
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button type="submit"
                  className="px-8 py-3.5 rounded-full font-semibold text-sm transition-opacity hover:opacity-85"
                  style={{ background: '#0a0a0a', color: 'rgb(0,189,217)' }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(0,0,0,0.12)' }}>
          <span className="font-mono text-xs" style={{ color: 'rgba(0,0,0,0.45)' }}>
            © {new Date().getFullYear()} Maveric Infotech. All rights reserved.
          </span>
          <div className="flex gap-5">
            {[
              { label: 'LinkedIn', href: 'https://in.linkedin.com/company/maveric-infotech' },
              { label: 'Instagram', href: 'https://www.instagram.com/maveric_infotech' },
              { label: 'Facebook', href: 'https://www.facebook.com/mavericinfotech' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs transition-opacity hover:opacity-60"
                style={{ color: 'rgba(0,0,0,0.55)' }}>
                {s.label}
              </a>
            ))}
          </div>
          <span className="font-mono text-xs" style={{ color: 'rgba(0,0,0,0.35)' }}>
            Made with ♥ in India
          </span>
        </div>
      </div>
    </footer>
  )
}
