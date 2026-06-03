import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useLenis } from './hooks/useLenis'
import RocketIntro from './components/RocketIntro'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import FloatingCTA from './components/FloatingCTA'
import LeadPopup from './components/LeadPopup'
import Hero from './sections/Hero'
import TechStack from './sections/TechStack'
import Services from './sections/Services'
import MobileShowcase from './sections/MobileShowcase'
import Portfolio from './sections/Portfolio'
import About from './sections/About'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import ServicePage from './pages/ServicePage'

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
      {!introDone && <RocketIntro onComplete={handleIntroDone} />}
      <div className="bg-bg min-h-screen">
        <Cursor />
        <Navbar />
        <main>
          <Hero />
          <TechStack />
          <Services />
          <MobileShowcase />
          <Portfolio />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
      <AnimatePresence>
        {showLead && <LeadPopup onClose={() => setShowLead(false)} />}
      </AnimatePresence>
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services/:slug" element={<ServicePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
