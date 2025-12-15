import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMenu } from 'react-icons/hi'
import { FaAngleDown } from 'react-icons/fa'

const groupA = [
  { to: '/about', label: 'About Adroit Travels' },

  { to: '/contact', label: 'Contact Us' },
  { to: '/', label: 'Business Networks' }
]

const groupB = [
  { to: '/', label: 'Find VISA Requirements' },
  { to: '/', label: 'Embassies and Consulates' },
  { to: '/countries', label: 'Explore Countries' },
  { to: '/', label: 'Explore Visa Fees' }
]

const servicesGroup = [
  { to: '/services/visa-consultancy', label: 'Visa Consultancy' },
  { to: '/services/cross-border-visa-processing', label: 'Cross-Border Visa Processing' },
  { to: '/services/visa-processing-in-india', label: 'Visa Processing in India' },
  { to: '/services/e-visa-processing', label: 'E-Visa Processing' },
  { to: '/services/express-consultation', label: 'Express Consultation' },
  { to: '/services/document-legalization', label: 'Document Legalization' }
]

function useFixedDropdownPosition(openKey, triggerRef, menuWidth = 640, menuHeight = 300, offsetY = 12) {
  const [style, setStyle] = useState({ top: 0, left: 0, transformOrigin: 'left top', visibility: 'hidden' })

  useEffect(() => {
    if (!openKey || !triggerRef.current) {
      setStyle(s => ({ ...s, visibility: 'hidden' }))
      return
    }

    function compute() {
      const triggerRect = triggerRef.current.getBoundingClientRect()
      const vw = window.innerWidth
      const vh = window.innerHeight

      let left = triggerRect.left
      let transformOrigin = 'left top'

      if (left + menuWidth > vw - 12) {
        left = Math.max(triggerRect.right - menuWidth, 12)
        transformOrigin = 'right top'
      }

      left = Math.max(12, Math.min(left, vw - menuWidth - 12))

      let top = triggerRect.bottom + offsetY
      if (top + menuHeight > vh - 12) {
        top = Math.max(12, triggerRect.top - offsetY - menuHeight)
        transformOrigin = transformOrigin.replace('top', 'bottom')
      }

      setStyle({
        top: Math.max(8, top + window.scrollY),
        left: left + window.scrollX,
        transformOrigin,
        visibility: 'visible'
      })
    }

    compute()
    window.addEventListener('resize', compute)
    window.addEventListener('scroll', compute, { passive: true })
    return () => {
      window.removeEventListener('resize', compute)
      window.removeEventListener('scroll', compute)
    }
  }, [openKey, triggerRef, menuWidth, menuHeight, offsetY])

  return style
}

export default function Header() {
  const [open, setOpen] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // trigger refs
  const companyRef = useRef(null)
  const informationRef = useRef(null)
  const servicesRef = useRef(null)

  // menu refs (NEW)
  const companyMenuRef = useRef(null)
  const informationMenuRef = useRef(null)
  const servicesMenuRef = useRef(null)
  const mobileMenuRef = useRef(null)

  // compute fixed positions - use responsive widths that adapt to screen size
  const companyPos = useFixedDropdownPosition(open === 'company' ? 'company' : null, companyRef, 680, 320, 14)
  const infoPos = useFixedDropdownPosition(open === 'information' ? 'information' : null, informationRef, 560, 260, 14)
  const servicesPos = useFixedDropdownPosition(open === 'services' ? 'services' : null, servicesRef, 640, 300, 14)

  // Close on outside click (outside of the active trigger+menu), and on Escape
  // Handles both desktop dropdowns and mobile menu
  useEffect(() => {
    function onPointerDown(e) {
      // Handle mobile menu outside click
      if (mobileMenuOpen) {
        // Check if click is outside mobile menu
        const mobileMenuButton = document.querySelector('[aria-label="Toggle menu"]')
        const clickedInsideMobileMenu = 
          (mobileMenuRef.current && mobileMenuRef.current.contains(e.target)) ||
          (mobileMenuButton && mobileMenuButton.contains(e.target))
        
        if (!clickedInsideMobileMenu) {
          setMobileMenuOpen(false)
          setOpen(null) // Also close any open dropdowns
        }
        return
      }

      // Handle desktop dropdowns outside click
      if (!open) return

      // Check if click is inside mobile menu - if so, don't close desktop dropdown
      if (mobileMenuRef.current && mobileMenuRef.current.contains(e.target)) {
        return
      }

      // figure out the active refs for desktop dropdowns
      const pairs = {
        company: [companyRef.current, companyMenuRef.current],
        information: [informationRef.current, informationMenuRef.current],
        services: [servicesRef.current, servicesMenuRef.current]
      }

      const [triggerEl, menuEl] = pairs[open] || []

      const clickedInsideActive =
        (triggerEl && triggerEl.contains(e.target)) ||
        (menuEl && menuEl.contains(e.target))

      if (!clickedInsideActive) {
        setOpen(null)
      }
    }

    function onKeyDown(e) {
      if (e.key === 'Escape') {
        if (mobileMenuOpen) {
          setMobileMenuOpen(false)
        }
        if (open) {
          setOpen(null)
        }
      }
    }

    document.addEventListener('pointerdown', onPointerDown, true) // capture = true to run before focus changes
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('pointerdown', onPointerDown, true)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, mobileMenuOpen])

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container flex items-center justify-between py-3 sm:py-4">
        <Link to="/" className="flex flex-col items-center">
          <img
            src={"/logo.png"}
            alt="Adroit Travels logo"
            className="w-16 sm:w-20 h-auto mb-2 sm:mb-4 object-contain"
          />
          <p className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">Visa support · Appointments · Guidance</p>
        </Link>

        <nav className="hidden md:flex items-center gap-6 relative">
          {/* Company */}
          <div className="relative">
            <button
              ref={companyRef}
              onClick={() => setOpen(open === 'company' ? null : 'company')}
              className="flex items-center gap-2 text-gray-700"
              aria-expanded={open === 'company'}
              aria-controls="menu-company"
            >
              Company <FaAngleDown />
            </button>

            {open === 'company' && (
              <div
                id="menu-company"
                role="menu"
                ref={companyMenuRef}
                style={{
                  position: 'fixed',
                  top: companyPos.top,
                  left: companyPos.left,
                  transformOrigin: companyPos.transformOrigin,
                  visibility: companyPos.visibility,
                  zIndex: 60,
                  backgroundColor:"white"
                }}
                className="w-[680px] max-w-[calc(100vw-24px)] bg-white rounded-xl shadow-xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
              >
                {groupA.map((g, i) => (
                  <Link key={i} to={g.to} className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 block" onClick={() => setOpen(null)}>
                    {g.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Information */}
          <div className="relative">
            <button
              ref={informationRef}
              onClick={() => setOpen(open === 'information' ? null : 'information')}
              className="flex items-center gap-2 text-gray-700"
              aria-expanded={open === 'information'}
              aria-controls="menu-information"
            >
              Information <FaAngleDown />
            </button>

            {open === 'information' && (
              <div
                id="menu-information"
                role="menu"
                ref={informationMenuRef}
                style={{
                  position: 'fixed',
                  top: infoPos.top,
                  left: infoPos.left,
                  transformOrigin: infoPos.transformOrigin,
                  visibility: infoPos.visibility,
                  zIndex: 60,
                  backgroundColor:"white"
                }}
                className="w-[560px] max-w-[calc(100vw-24px)] bg-white rounded-xl shadow-xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
              >
                {groupB.map((g, i) => (
                  <Link key={i} to={g.to} className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 block" onClick={() => setOpen(null)}>
                    {g.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services */}
          <div className="relative">
            <button
              ref={servicesRef}
              onClick={() => setOpen(open === 'services' ? null : 'services')}
              className="flex items-center gap-2 text-gray-700"
              aria-expanded={open === 'services'}
              aria-controls="menu-services"
            >
              Services <FaAngleDown />
            </button>

            {open === 'services' && (
              <div
                id="menu-services"
                role="menu"
                ref={servicesMenuRef}
                style={{
                  position: 'fixed',
                  top: servicesPos.top,
                  left: servicesPos.left,
                  transformOrigin: servicesPos.transformOrigin,
                  visibility: servicesPos.visibility,
                  zIndex: 60,
                  backgroundColor:"white"
                }}
                className="w-[640px] max-w-[calc(100vw-24px)] bg-white rounded-xl shadow-xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
              >
                {servicesGroup.map((g, i) => (
                  <Link key={i} to={g.to} className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 block" onClick={() => setOpen(null)}>
                    {g.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

  
          <div className="flex items-center gap-3">
            <Link to="/contact" className="px-4 py-2 rounded-md bg-saffron text-white font-semibold" onClick={() => setOpen(null)}>
              Contact Us
            </Link>
          </div>
        </nav>

        <button 
          className="md:hidden p-2 rounded-md border" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <HiOutlineMenu size={20} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden border-t bg-white shadow-lg">
          <div className="container py-4 space-y-4">
            {/* Mobile Company Menu */}
            <div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setOpen(open === 'company' ? null : 'company')
                }}
                className="flex items-center justify-between w-full text-left text-gray-700 font-medium py-2"
              >
                Company <FaAngleDown className={open === 'company' ? 'rotate-180' : ''} />
              </button>
              {open === 'company' && (
                <div className="mt-2 pl-4 space-y-2">
                  {groupA.map((g, i) => (
                    <Link 
                      key={i} 
                      to={g.to} 
                      className="block py-2 text-sm text-gray-600 hover:text-gray-900" 
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpen(null)
                        setMobileMenuOpen(false)
                      }}
                    >
                      {g.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Information Menu */}
            <div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setOpen(open === 'information' ? null : 'information')
                }}
                className="flex items-center justify-between w-full text-left text-gray-700 font-medium py-2"
              >
                Information <FaAngleDown className={open === 'information' ? 'rotate-180' : ''} />
              </button>
              {open === 'information' && (
                <div className="mt-2 pl-4 space-y-2">
                  {groupB.map((g, i) => (
                    <Link 
                      key={i} 
                      to={g.to} 
                      className="block py-2 text-sm text-gray-600 hover:text-gray-900" 
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpen(null)
                        setMobileMenuOpen(false)
                      }}
                    >
                      {g.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Services Menu */}
            <div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setOpen(open === 'services' ? null : 'services')
                }}
                className="flex items-center justify-between w-full text-left text-gray-700 font-medium py-2"
              >
                Services <FaAngleDown className={open === 'services' ? 'rotate-180' : ''} />
              </button>
              {open === 'services' && (
                <div className="mt-2 pl-4 space-y-2">
                  {servicesGroup.map((g, i) => (
                    <Link 
                      key={i} 
                      to={g.to} 
                      className="block py-2 text-sm text-gray-600 hover:text-gray-900" 
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpen(null)
                        setMobileMenuOpen(false)
                      }}
                    >
                      {g.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Create Profile Button */}
            <Link 
              to="/contact" 
              className="block w-full text-center px-4 py-2 rounded-md bg-saffron text-white font-semibold"
              onClick={(e) => {
                e.stopPropagation()
                setMobileMenuOpen(false)
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
