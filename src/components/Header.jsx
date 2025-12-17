import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMenu } from 'react-icons/hi'
import { FaAngleDown } from 'react-icons/fa'

const groupA = [
  { to: '/about', label: 'About Adroit Travels' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/', label: 'Business Networks' }
]

const servicesGroup = [
  { to: '/services/Visa-Application-Assistance', label: 'Visa Application Assistance' },
  { to: '/services/Work-Visa-Consultants', label: 'Work Visa Consultants' },
  { to: '/services/B2B-Partnering', label: 'B2B Partnering' }
]

export default function Header() {
  const [open, setOpen] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const headerRef = useRef(null)

  // Close on outside click or Escape
  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpen(null)
        setMobileMenuOpen(false)
      }
    }
    function handleEsc(event) {
      if (event.key === 'Escape') {
        setOpen(null)
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return (
    <header ref={headerRef} className="bg-[#fff] shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between py-3 sm:py-4">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center">
          <img src="/logo.png" alt="Logo" className="w-16 sm:w-20 h-auto mb-1 object-contain" />
          <p className="text-[10px] text-gray-500 hidden sm:block">Visa support · Guidance</p>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          
          {/* Company Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(open === 'company' ? null : 'company')}
              className={`flex items-center gap-2 font-medium transition ${open === 'company' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Company <FaAngleDown className={`transition-transform ${open === 'company' ? 'rotate-180' : ''}`} />
            </button>

            {open === 'company' && (
              <div className="absolute top-full left-0 mt-4 w-[400px] bg-[#fff] rounded-xl shadow-2xl border border-gray-100 p-4 grid grid-cols-1 gap-2">
                {groupA.map((g, i) => (
                  <Link key={i} to={g.to} className="p-3 rounded-lg hover:bg-blue-50 transition block text-gray-700" onClick={() => setOpen(null)}>
                    {g.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(open === 'services' ? null : 'services')}
              className={`flex items-center gap-2 font-medium transition ${open === 'services' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Services <FaAngleDown className={`transition-transform ${open === 'services' ? 'rotate-180' : ''}`} />
            </button>

            {open === 'services' && (
              <div className="absolute top-full right-0 md:left-1/2 md:-translate-x-1/2 mt-4 w-[600px] max-w-[90vw] bg-[#fff] rounded-xl shadow-2xl border border-gray-100 p-6 grid grid-cols-2 gap-4">
                {servicesGroup.map((g, i) => (
                  <Link key={i} to={g.to} className="p-4 rounded-lg bg-gray-50 hover:bg-blue-50 border border-transparent hover:border-blue-100 transition block text-gray-700 font-medium" onClick={() => setOpen(null)}>
                    {g.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className="CTA" style={{padding:'10px'}}>
            Contact Us
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <HiOutlineMenu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white p-4 space-y-4 shadow-xl">
          <div className="font-bold text-gray-400 text-xs uppercase tracking-widest">Company</div>
          {groupA.map((g, i) => (
            <Link key={i} to={g.to} className="block py-1 text-lg text-gray-800" onClick={() => setMobileMenuOpen(false)}>{g.label}</Link>
          ))}
          <div className="h-px bg-gray-100" />
          <div className="font-bold text-gray-400 text-xs uppercase tracking-widest">Services</div>
          {servicesGroup.map((g, i) => (
            <Link key={i} to={g.to} className="block py-1 text-lg text-gray-800" onClick={() => setMobileMenuOpen(false)}>{g.label}</Link>
          ))}
        </div>
      )}
    </header>
  )
}