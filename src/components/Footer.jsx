import React from "react"
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"
import { Link } from "react-router-dom"

/*
  Using the image you provided for the footer logo / art.
  Local path (will be transformed to a served URL in your build pipeline):
  /mnt/data/f13a5a56-728f-4656-a31b-edbc2f0a2ba4.png
*/

const FooterColumn = ({ title, children }) => (
  <div>
    <h4 className="text-white font-semibold mb-4">{title}</h4>
    <div className="text-sm text-slate-200/90 space-y-3">{children}</div>
  </div>
)

export default function Footer() {
  return (
    <footer className="bg-[#0f1030] text-white mt-8 sm:mt-12" style={{ color: "white" }}>
      <div className="container py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {/* Column 1: Company */}
        <FooterColumn title="Company">
          <Link to="/about" className="block hover:text-white/90 transition">
            About Adroit Travels
          </Link>
          <Link to="/network" className="block hover:text-white/90 transition">
            Business Network
          </Link>
          <Link to="/contact" className="block hover:text-white/90 transition">
            Contact Us
          </Link>
        </FooterColumn>

        <FooterColumn title="Services">
          {/* Links to the B2B slugs we defined earlier */}
          <Link
            to="/services/Visa-Application-Assistance"
            className="block hover:text-white/90 transition"
          >
            Visa Application Assistance
          </Link>
          <Link
            to="/services/Work-Visa-Consultants"
            className="block hover:text-white/90 transition"
          >
            Work Visa Consultants
          </Link>
          <Link
            to="/services/B2B-Partnering"
            className="block hover:text-white/90 transition"
          >
            B2B Partnering
          </Link>
        </FooterColumn>

        {/* Column 4: Logo + Disclaimer */}
        <div className="flex flex-col justify-between sm:col-span-2 lg:col-span-1">
          <div>
            <img
              src={"/logo.png"}
              alt="Adroit Travels logo"
              className="w-16 sm:w-20 h-auto mb-3 sm:mb-4 object-contain"
            />
            <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed">
              <strong>Disclaimer</strong>
              <br />
              Due to periodic changes of information and requirements, Adroit Travels does not guarantee
              visa outcomes. Information provided here is for guidance only — the final decision lies with the
              embassy or consulate of the respective country.
            </p>
          </div>

          <div className="mt-4 sm:mt-6">
            <div className="flex items-start gap-3 sm:gap-4 mb-3">
              <FiMail className="text-slate-200 mt-1 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs text-slate-300">Email</div>
                <a href="mailto:infoadroit19@gmail.com" className="text-xs sm:text-sm text-white break-words">
                  infoadroit19@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 mb-3">
              <FiPhone className="text-slate-200 mt-1 flex-shrink-0" />
              <div>
                <div className="text-xs text-slate-300">Phone</div>
                <div className="text-xs sm:text-sm text-white">+91 9811038434</div>
                <div className="text-xs sm:text-sm text-white">+91 9811038435</div>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <FiMapPin className="text-slate-200 mt-1 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs text-slate-300">Address</div>
                <div className="text-xs sm:text-sm text-white">
                  86/3 Janpath Connaught Place New Delhi-110001
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider dotted and small indicators (visual similar to reference) */}
      <div className="border-t border-white/10 relative">
        <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 sm:py-6 gap-4 sm:gap-6">
          {/* Left: contact + social */}
          <div className="flex flex-col sm:flex-row items-start sm:items-start gap-4 sm:gap-8">
            <div>
              <div className="text-xs sm:text-sm text-slate-300">Contact Us</div>
              <a href="mailto:infoadroit19@gmail.com" className="mt-1 text-xs sm:text-sm text-white font-medium break-words block">
                infoadroit19@gmail.com
              </a>
              <div className="text-xs sm:text-sm text-slate-600 space-x-2">
                <span className="text-slate-400">Phone:</span>

                {/* Functional Link for the first number */}
                <a
                  href="tel:+919811038434"
                  className="hover:underline text-blue-500 font-medium"
                >
                  +919811038434
                </a>

                {/* Functional Link for the second number */}
                <a
                  href="tel:+919811038435"
                  className="hover:underline text-blue-500 font-medium"
                >
                  +919811038435
                </a>
              </div>            </div>

            <div className="flex flex-col gap-2">
              <div className="text-xs sm:text-sm text-slate-300">Follow Us</div>
              <div className="flex items-center gap-2 sm:gap-3 mt-1">
                <a href="https://www.facebook.com/share/17UDRsPsuc/" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/adroittravels?igsh=aTdhcWVsbHl4dHVs" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition" aria-label="Twitter">
                  <FaInstagram />
                </a>
                {/* <a className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition" aria-label="YouTube">
                  <FaYoutube />
                </a>
                <a className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
                <a className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition" aria-label="TikTok">
                  <SiTiktok /> */}
                {/* </a> */}
              </div>
            </div>
          </div>

          {/* Right: payment methods pill */}
          {/* <div className="flex flex-col items-end gap-3">
            <div className="text-sm text-slate-300">We Accept</div>

            <div className="bg-white/5 px-4 py-2 rounded-full">
              <img
                src={"/mnt/data/f13a5a56-728f-4656-a31b-edbc2f0a2ba4.png"}
                alt="payment logos"
                className="h-8 object-contain"
              />
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#0b0b20]">
        <div className="container py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="text-xs sm:text-sm text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} Adroit Travels — All rights reserved
          </div>
          <div className="text-xs sm:text-sm text-slate-400 text-center sm:text-right">
            Terms • Privacy • Sitemap
          </div>
        </div>
      </div>
    </footer>
  )
}
