import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Signup from './pages/SignUp'

// Lazy loaded pages
const About = lazy(() => import('./pages/About'))
// const Career = lazy(() => import('./pages/Careers'))
const News = lazy(() => import('./pages/News'))
const Blogs = lazy(() => import('./pages/Blogs'))
// const MediaLibrary = lazy(() => import('./pages/MediaLibrary'))
// const Contact = lazy(() => import('./pages/Contact'))
// const BusinessNetwork = lazy(() => import('./pages/BusinessNetwork'))

// const FindVisaRequirements = lazy(() => import('./pages/FindVisaRequirements'))
// const Embassies = lazy(() => import('./pages/Embassies'))
// const ExploreCountries = lazy(() => import('./pages/ExploreCountries'))
// const ExploreVisaFees = lazy(() => import('./pages/ExploreVisaFees'))

// Service detail pages
import VisaConsultancy from "./pages/services/VisaConsultancy"
import CrossBorderProcessing from "./pages/services/CrossBorderProcessing"
import VisaProcessingIndia from "./pages/services/VisaProcessingIndia"
import EVisaProcessing from "./pages/services/EVisaProcessing"
import DocumentLegalization from "./pages/services/DocumentLegalization"
import ExpressConsultation from "./pages/services/ExpressConsultation"
import Careers from './pages/Careers'
import Contact from './pages/Contact'
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="grow">
        <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/visa-consultancy" element={<VisaConsultancy />} />
            <Route path="/services/cross-border-visa-processing" element={<CrossBorderProcessing />} />
            <Route path="/services/visa-processing-in-india" element={<VisaProcessingIndia />} />
            <Route path="/services/e-visa-processing" element={<EVisaProcessing />} />
            <Route path="/services/document-legalization" element={<DocumentLegalization />} />
            <Route path="/services/express-consultation" element={<ExpressConsultation />} />
            {/* Company menu */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Careers />} />
            <Route path="/news" element={<News />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </div>
  )
}
