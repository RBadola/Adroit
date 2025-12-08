import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMenu } from 'react-icons/hi'
import { FaAngleDown } from 'react-icons/fa'

const groupA = [
  { to: '/about', label: 'About Adroit Travels' },
  { to: '/career', label: 'Career' },
  { to: '/', label: 'News & Press' },
  { to: '/', label: 'Blogs' },
  { to: '/', label: 'Media Library' },
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

  // trigger refs
  const companyRef = useRef(null)
  const informationRef = useRef(null)
  const servicesRef = useRef(null)

  // menu refs (NEW)
  const companyMenuRef = useRef(null)
  const informationMenuRef = useRef(null)
  const servicesMenuRef = useRef(null)

  // compute fixed positions
  const companyPos = useFixedDropdownPosition(open === 'company' ? 'company' : null, companyRef, 680, 320, 14)
  const infoPos = useFixedDropdownPosition(open === 'information' ? 'information' : null, informationRef, 560, 260, 14)
  const servicesPos = useFixedDropdownPosition(open === 'services' ? 'services' : null, servicesRef, 640, 300, 14)

  // Close on outside click (outside of the active trigger+menu), and on Escape
  useEffect(() => {
    function targetInside(el) {
      return el && (el.contains ? el.contains(lastEventTarget) : false)
    }

    let lastEventTarget = null

    function onPointerDown(e) {
      lastEventTarget = e.target
      if (!open) return

      // figure out the active refs
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
      if (e.key === 'Escape') setOpen(null)
    }

    document.addEventListener('pointerdown', onPointerDown, true) // capture = true to run before focus changes
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('pointerdown', onPointerDown, true)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header className="bg-white shadow-sm relative">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex flex-col items-center ">
          <img
            src={"/logo.png"}
            alt="Adroit Travels logo"
            className="w-20 h-auto mb-4 object-contain"
          />
          <p className="text-xs text-gray-500">Visa support · Appointments · Guidance</p>
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
                className="w-[680px] bg-white rounded-xl shadow-xl p-6 grid grid-cols-2 gap-4"
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
                className="w-[560px] bg-white rounded-xl shadow-xl p-6 grid grid-cols-2 gap-4"
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
                className="w-[640px] bg-white rounded-xl shadow-xl p-6 grid grid-cols-2 gap-4"
              >
                {servicesGroup.map((g, i) => (
                  <Link key={i} to={g.to} className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 block" onClick={() => setOpen(null)}>
                    {g.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

        <Link to="/#countries" className="text-gray-700" onClick={() => setOpen(null)}>
  Countries
</Link>
          <div className="flex items-center gap-3">
            <Link to="/signup" className="px-4 py-2 rounded-md bg-saffron text-white font-semibold" onClick={() => setOpen(null)}>
              Create Profile
            </Link>
          </div>
        </nav>

        <button className="md:hidden p-2 rounded-md border" onClick={() => setOpen(null)}>
          <HiOutlineMenu size={20} />
        </button>
      </div>
    </header>
  )
}
