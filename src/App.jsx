import { useEffect, useState, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useLenis } from './hooks/useLenis'
import FilmGrain from './components/FilmGrain'
import Navbar from './components/Navbar'
import FloatingCTA from './components/FloatingCTA'
import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import StatBand from './sections/StatBand'
import Portfolio from './sections/Portfolio'
import Services from './sections/Services'
import LocalApexShowcase from './sections/LocalApexShowcase'
import CtaFlood from './sections/CtaFlood'
import Footer from './sections/Footer'

const ServicePage     = lazy(() => import('./pages/ServicePage'))
const PrivacyPolicy   = lazy(() => import('./pages/PrivacyPolicy'))
const TermsConditions = lazy(() => import('./pages/TermsAndConditions'))

function HomePage() {
  useLenis()
  return (
    <div className="bg-black min-h-screen">
      <FilmGrain />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <StatBand />
        <Portfolio />
        <Services />
        <LocalApexShowcase />
        <CtaFlood />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services/:slug" element={<Suspense fallback={<div className="bg-black min-h-screen" />}><ServicePage /></Suspense>} />
      <Route path="/privacy-policy" element={<Suspense fallback={<div className="bg-black min-h-screen" />}><PrivacyPolicy /></Suspense>} />
      <Route path="/terms-and-conditions" element={<Suspense fallback={<div className="bg-black min-h-screen" />}><TermsConditions /></Suspense>} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
