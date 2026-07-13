import { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useLenis } from './hooks/useLenis'
import Cursor from './components/Cursor'
import FilmGrain from './components/FilmGrain'
import Navbar from './components/Navbar'
import FloatingCTA from './components/FloatingCTA'
import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import Services from './sections/Services'
import LocalApexShowcase from './sections/LocalApexShowcase'
import Portfolio from './sections/Portfolio'
import About from './sections/About'
import CtaFlood from './sections/CtaFlood'
import Footer from './sections/Footer'

// Heavy components — code split and lazy loaded
const RocketIntro       = lazy(() => import('./components/RocketIntro'))
const LeadPopup         = lazy(() => import('./components/LeadPopup'))
const ServicePage       = lazy(() => import('./pages/ServicePage'))
const PrivacyPolicy     = lazy(() => import('./pages/PrivacyPolicy'))
const TermsConditions   = lazy(() => import('./pages/TermsAndConditions'))

function HomePage({ onIntroDone }) {
  useLenis()
  // Skip intro if navigating directly to a section (e.g. /#about from a service page)
  const [introDone, setIntroDone] = useState(
    () => !!window.location.hash || !!sessionStorage.getItem('intro_done')
  )
  const [showLead, setShowLead] = useState(false)

  const handleIntroDone = () => {
    setIntroDone(true)
    sessionStorage.setItem('intro_done', '1')
    onIntroDone?.()
  }

  // Scroll to hash section after content is ready
  useEffect(() => {
    if (!introDone) return
    const hash = window.location.hash
    if (!hash) return
    const t = setTimeout(() => {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 300)
    return () => clearTimeout(t)
  }, [introDone])

  useEffect(() => {
    if (!introDone) return
    if (sessionStorage.getItem('lead_shown')) return
    const t = setTimeout(() => {
      setShowLead(true)
      sessionStorage.setItem('lead_shown', '1')
    }, 2000)
    return () => clearTimeout(t)
  }, [introDone])

  return (
    <>
      {!introDone && <Suspense fallback={null}><RocketIntro onComplete={handleIntroDone} /></Suspense>}
      <div className="bg-bg min-h-screen">
        <FilmGrain />
        <Cursor />
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <LocalApexShowcase />
          <Portfolio />
          <About />
          <CtaFlood />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
      <AnimatePresence>
        {showLead && <Suspense fallback={null}><LeadPopup onClose={() => setShowLead(false)} /></Suspense>}
      </AnimatePresence>
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services/:slug" element={<Suspense fallback={<div className="bg-bg min-h-screen" />}><ServicePage /></Suspense>} />
      <Route path="/privacy-policy" element={<Suspense fallback={<div className="bg-bg min-h-screen" />}><PrivacyPolicy /></Suspense>} />
      <Route path="/terms-and-conditions" element={<Suspense fallback={<div className="bg-bg min-h-screen" />}><TermsConditions /></Suspense>} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
