import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/* ── LocalApex feature cards (one per GBP API scope) ─────────────────── */
const features = [
  {
    icon: '📍',
    title: 'Profile Sync',
    badge: 'Read + Write',
    badgeColor: 'bg-blue-500/15 text-blue-400',
    desc: 'Read and update business name, address, phone, website, hours, categories, and SEO description directly on Google Business Profile.',
    api: 'mybusinessbusinessinformation.googleapis.com',
  },
  {
    icon: '⭐',
    title: 'Review Management',
    badge: 'Read + Reply',
    badgeColor: 'bg-yellow-500/15 text-yellow-400',
    desc: 'Fetch all Google reviews, display ratings and sentiment analysis, draft AI-assisted replies, and publish responses directly to Google.',
    api: 'mybusiness.googleapis.com/v4/reviews',
  },
  {
    icon: '🖼️',
    title: 'Photo Manager',
    badge: 'Read + Upload',
    badgeColor: 'bg-pink-500/15 text-pink-400',
    desc: 'List existing GBP photos with view counts and categories, upload new photos (interior, exterior, product, team), and delete outdated media.',
    api: 'mybusiness.googleapis.com/v4/media',
  },
  {
    icon: '📊',
    title: 'Performance Insights',
    badge: 'Read only',
    badgeColor: 'bg-green-500/15 text-green-400',
    desc: 'Pull daily performance metrics: profile views, map views, discovery searches, direct searches, calls, direction requests, and website clicks.',
    api: 'businessprofileperformance.googleapis.com',
  },
  {
    icon: '❓',
    title: 'Q&A Management',
    badge: 'Read + Answer',
    badgeColor: 'bg-purple-500/15 text-purple-400',
    desc: 'Fetch all customer questions posted on the Google listing and publish business answers directly from the LocalApex dashboard.',
    api: 'mybusiness.googleapis.com/v4/questions',
  },
  {
    icon: '🔔',
    title: 'Notification Settings',
    badge: 'Read + Write',
    badgeColor: 'bg-orange-500/15 text-orange-400',
    desc: "View and update Google's notification preferences for new reviews, Q&A, and profile edits — so the right team members are always alerted.",
    api: 'mybusinessnotifications.googleapis.com',
  },
  {
    icon: '📅',
    title: 'Booking & CTA Links',
    badge: 'Read + Write',
    badgeColor: 'bg-teal-500/15 text-teal-400',
    desc: 'Manage Place Action links — booking, reservation, and ordering URLs that appear as call-to-action buttons on the Google Business listing.',
    api: 'mybusinessplaceactions.googleapis.com',
  },
  {
    icon: '✅',
    title: 'Verification Status',
    badge: 'Read + Initiate',
    badgeColor: 'bg-emerald-500/15 text-emerald-400',
    desc: 'Check whether each business location is verified on Google, view available verification methods, and initiate the verification flow when needed.',
    api: 'mybusinessverifications.googleapis.com',
  },
]

/* ── Data commitment points ───────────────────────────────────────────── */
const commitments = [
  'We request only the business.manage OAuth scope — no access to personal Google accounts, Gmail, Drive, Calendar, or any other Google service.',
  'OAuth is granted exclusively by business owners who have actively signed up for LocalApex and explicitly authorised the connection.',
  'Access tokens are stored encrypted and are used solely to deliver the features the user has accessed within LocalApex.',
  'We never share Google API data with third parties, use it for advertising, or transfer it outside the contracted service.',
  'Users can revoke access at any time from their Google Account → Security → Third-party apps, or from within LocalApex settings.',
  'LocalApex complies fully with the Google API Services User Data Policy and the Limited Use requirements for restricted scopes.',
]

/* ── SEO audit score items ────────────────────────────────────────────── */
const auditItems = [
  { label: 'Business description ≥ 150 chars',  weight: 15 },
  { label: 'Primary category set',               weight: 10 },
  { label: 'Service items listed',               weight: 8  },
  { label: 'Business hours configured',          weight: 8  },
  { label: 'Website linked',                     weight: 5  },
  { label: 'Phone number listed',                weight: 4  },
  { label: 'Google review count',                weight: 15 },
  { label: 'Average star rating',                weight: 12 },
  { label: 'Review response rate',               weight: 10 },
  { label: 'Photos uploaded',                    weight: 8  },
  { label: 'Cover & logo photos set',            weight: 5  },
  { label: 'Q&A answered',                       weight: 4  },
  { label: 'Booking / CTA links added',          weight: 4  },
]

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ── Google logo SVG ─────────────────────────────────────────────────── */
function GoogleLogo({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

export default function GoogleIntegration() {
  return (
    <section id="google-integration" className="section-pad relative overflow-hidden">
      {/* ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-20">

        {/* ── 1. Product intro ──────────────────────────────────────────── */}
        <div>
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-border glass">
              <GoogleLogo />
              <span className="font-mono text-accent text-xs tracking-widest uppercase">Google Business Profile Integration</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-5">
              LocalApex — Google Business Profile<br className="hidden md:block" /> Management Platform
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              LocalApex is a SaaS product built by Maveric Infotech that gives local businesses a single
              dashboard to manage every aspect of their Google Business Profile — reviews, photos,
              insights, profile, Q&amp;A, verification, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <a
                href="https://localapex.mavericinfotech.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-bg text-sm font-semibold hover:bg-accent/90 transition-colors"
              >
                Open LocalApex →
              </a>
              <a
                href="https://localapex.mavericinfotech.in/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border glass text-muted text-sm font-semibold hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="https://localapex.mavericinfotech.in/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border glass text-muted text-sm font-semibold hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </FadeIn>

          {/* App description block */}
          <FadeIn delay={0.1}>
            <div className="glass rounded-2xl border border-border p-8 grid md:grid-cols-3 gap-8 text-center">
              {[
                { value: '8',   label: 'Google APIs integrated',        icon: '🔌' },
                { value: '13',  label: 'SEO audit checks per listing',  icon: '🎯' },
                { value: '100%', label: 'Google Limited Use compliant',  icon: '🔒' },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-3xl mb-1">{s.icon}</div>
                  <div className="font-display font-bold text-3xl text-white mb-1">{s.value}</div>
                  <div className="text-muted text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* ── 2. What the app does (8 GBP API features) ────────────────── */}
        <div>
          <FadeIn className="mb-8">
            <h3 className="font-display font-bold text-2xl text-white">
              How LocalApex Uses the Google Business Profile API
            </h3>
            <p className="text-muted mt-2 max-w-2xl">
              LocalApex integrates with 8 Google Business Profile APIs. Each feature below
              corresponds directly to a Google API scope the application uses, and the specific
              business problem it solves for the user.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={0.05 * i}>
                <div className="glass rounded-2xl border border-border p-5 h-full flex flex-col">
                  <div className="text-2xl mb-3">{f.icon}</div>
                  <div className="flex items-start gap-2 mb-2 flex-wrap">
                    <h4 className="font-semibold text-white text-sm">{f.title}</h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${f.badgeColor}`}>
                      {f.badge}
                    </span>
                  </div>
                  <p className="text-muted text-xs leading-relaxed flex-1">{f.desc}</p>
                  <div className="mt-4 pt-3 border-t border-border">
                    <code className="text-[9px] text-accent/70 font-mono break-all leading-tight">{f.api}</code>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ── 3. SEO Audit feature ──────────────────────────────────────── */}
        <FadeIn>
          <div className="glass rounded-2xl border border-border p-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-3xl">🎯</span>
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-1">Local SEO Audit</h3>
                <p className="text-muted text-sm leading-relaxed">
                  LocalApex reads GBP data across all 8 APIs to run a 13-point audit scoring each
                  business listing on the 3 factors Google uses for local ranking:
                  <strong className="text-white"> Relevance</strong> (profile completeness),
                  <strong className="text-white"> Prominence</strong> (review signals), and
                  <strong className="text-white"> Activity</strong> (listing freshness).
                  The result is a score 0–100 with a grade A–F and a prioritised action list that
                  links directly to the relevant management feature.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {auditItems.map(item => (
                <div key={item.label} className="flex items-center gap-2 text-xs text-muted bg-white/[0.03] rounded-lg px-3 py-2">
                  <span className="text-accent font-bold shrink-0">✓</span>
                  <span>{item.label}</span>
                  <span className="ml-auto text-accent font-mono text-[10px] shrink-0">{item.weight}pt</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ── 4. OAuth scope disclosure ─────────────────────────────────── */}
        <FadeIn>
          <div className="glass rounded-2xl border border-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <GoogleLogo className="w-7 h-7" />
              <h3 className="font-display font-bold text-xl text-white">OAuth Scope Requested</h3>
            </div>
            <div className="bg-white/[0.04] rounded-xl border border-border p-4 mb-6 font-mono text-sm text-accent">
              https://www.googleapis.com/auth/business.manage
            </div>
            <p className="text-muted text-sm leading-relaxed mb-4">
              LocalApex requests the <code className="text-accent text-xs">business.manage</code> scope
              during the Google OAuth flow. This scope is the minimum required to read and write
              data across the Google Business Profile APIs listed above. No other Google scopes are
              requested. The connection is initiated only when a user explicitly clicks
              "Import from Google" inside the LocalApex dashboard and completes Google's own OAuth
              consent screen.
            </p>
            <p className="text-muted text-sm leading-relaxed">
              <strong className="text-white">When access is used:</strong> API calls are made only
              when the user navigates to a feature inside LocalApex (e.g. opens the Reviews tab,
              requests an insights refresh, or saves a profile change). No background crawling or
              batch processing of Google data occurs without an explicit user action.
            </p>
          </div>
        </FadeIn>

        {/* ── 5. Data commitment ────────────────────────────────────────── */}
        <FadeIn>
          <div className="glass rounded-2xl border border-border p-8">
            <h3 className="font-semibold text-white mb-6">Data Protection &amp; Our Commitments</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {commitments.map((point, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-muted">
                  <span className="text-accent font-bold mt-0.5 shrink-0">✓</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-6 flex flex-wrap items-center gap-4 text-xs text-muted">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                Google API Services User Data Policy compliant
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                Limited Use requirements met
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                OAuth tokens encrypted at rest (AES-256)
              </span>
              <a
                href="https://localapex.mavericinfotech.in/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-accent underline hover:no-underline"
              >
                Full Privacy Policy →
              </a>
            </div>
          </div>
        </FadeIn>

        {/* ── 6. App screenshots placeholder / CTA ──────────────────────── */}
        <FadeIn>
          <div className="glass rounded-2xl border border-border overflow-hidden">
            <div className="p-8 border-b border-border">
              <h3 className="font-display font-bold text-xl text-white mb-2">Try LocalApex</h3>
              <p className="text-muted text-sm max-w-xl">
                LocalApex is live and available for local businesses across India. Connect your
                Google Business Profile and get your first SEO audit in under 2 minutes.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
              {[
                { icon: '🔐', step: '1', title: 'Create account', desc: 'Register at localapex.mavericinfotech.in — 14-day free trial, no card needed.' },
                { icon: '🔗', step: '2', title: 'Connect Google', desc: 'Click "Import from Google" and authorise with your Google Business Profile account.' },
                { icon: '📊', step: '3', title: 'Manage & grow', desc: 'See your SEO audit score, reply to reviews, upload photos, and track insights.' },
              ].map(s => (
                <div key={s.step} className="p-6">
                  <div className="text-2xl mb-3">{s.icon}</div>
                  <div className="text-xs font-mono text-accent mb-1">STEP {s.step}</div>
                  <h4 className="font-semibold text-white text-sm mb-2">{s.title}</h4>
                  <p className="text-muted text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="p-6 bg-white/[0.02] flex flex-wrap gap-3">
              <a
                href="https://localapex.mavericinfotech.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-bg text-sm font-semibold hover:bg-accent/90 transition-colors"
              >
                Get started free →
              </a>
              <a
                href="https://localapex.mavericinfotech.in/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-muted text-sm font-semibold hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="https://localapex.mavericinfotech.in/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-muted text-sm font-semibold hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
