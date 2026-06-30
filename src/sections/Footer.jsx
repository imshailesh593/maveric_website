import { motion } from 'framer-motion'

const serviceLinks = [
  { label: 'Web Development',  href: '/services/web-development' },
  { label: 'Mobile Apps',      href: '/services/mobile-app-development' },
  { label: 'E-Commerce',       href: '/services/e-commerce' },
  { label: 'SEO & Growth',     href: '/services/seo-growth' },
  { label: 'Cybersecurity',    href: '/services/cybersecurity' },
]

const companyLinks = [
  { label: 'About Us',   href: '/#about' },
  { label: 'Portfolio',  href: '/#portfolio' },
  { label: 'Contact',    href: '/#contact' },
]

const legalLinks = [
  { label: 'Privacy Policy',    href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center mb-4">
              <img
                src="https://mavericinfotech.in/wp-content/uploads/2024/12/Untitled-design-4.png"
                alt="Maveric Infotech"
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextSibling.style.display = 'block'
                }}
              />
              <span className="font-display font-bold text-lg hidden">
                <span className="text-white">MAVERIC</span>
                <span className="text-gradient"> INFOTECH</span>
              </span>
            </a>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Building digital products that grow businesses since 2014.
            </p>
            <div className="flex gap-3">
              {[
                { label: 'in', href: 'https://in.linkedin.com/company/maveric-infotech' },
                { label: 'tw', href: 'https://twitter.com' },
                { label: 'ig', href: 'https://www.instagram.com/maveric_infotech' },
                { label: 'fb', href: 'https://www.facebook.com/mavericinfotech' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg glass border border-border flex items-center justify-center text-muted hover:text-white hover:border-accent/30 transition-all text-xs font-mono"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-muted text-sm hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-muted text-sm hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-muted text-sm hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-muted text-sm">
            © {new Date().getFullYear()} Maveric Infotech. All rights reserved.
          </span>
          <span className="text-muted text-sm font-mono">
            Made with ♥ in India
          </span>
        </div>
      </div>
    </footer>
  )
}
