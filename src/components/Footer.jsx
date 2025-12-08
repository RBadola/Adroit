import React from "react"
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"

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
    <footer className="bg-[#0f1030] text-white mt-12" style={{color:"white"}}>
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Company */}
        <FooterColumn title="Company">
          <a className="block hover:text-white/90 transition">About Adroit Travels</a>
          <a className="block hover:text-white/90 transition">Career</a>
          <a className="block hover:text-white/90 transition">News</a>
          <a className="block hover:text-white/90 transition">Media Library</a>
          <a className="block hover:text-white/90 transition">Business Network</a>
          <a className="block hover:text-white/90 transition">Contact Us</a>
          <a className="block hover:text-white/90 transition">Blogs</a>
        </FooterColumn>

        {/* Column 2: Information */}
        <FooterColumn title="Information">
          <a className="block hover:text-white/90 transition">Find VISA Requirements</a>
          <a className="block hover:text-white/90 transition">Embassies & Consulates</a>
          <a className="block hover:text-white/90 transition">Explore Countries</a>
          <a className="block hover:text-white/90 transition">Explore Visa Fees</a>
        </FooterColumn>

        {/* Column 3: Services */}
        <FooterColumn title="Services">
          <a className="block hover:text-white/90 transition">Visa Consultancy</a>
          <a className="block hover:text-white/90 transition">Visa Processing in India</a>
          <a className="block hover:text-white/90 transition">Document Legalization</a>
          <a className="block hover:text-white/90 transition">E-visa Processing</a>
          <a className="block hover:text-white/90 transition">Book an Appointment</a>
        </FooterColumn>

        {/* Column 4: Logo + Disclaimer */}
        <div className="flex flex-col justify-between">
          <div>
            <img
              src={"/logo.png"}
              alt="Adroit Travels logo"
              className="w-20 h-auto mb-4 object-contain"
            />
            <p className="text-sm text-slate-200/90 leading-relaxed">
              <strong>Disclaimer</strong>
              <br />
              Due to periodic changes of information and requirements, Adroit Travels does not guarantee
              visa outcomes. Information provided here is for guidance only — the final decision lies with the
              embassy or consulate of the respective country.
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-4 mb-3">
              <FiMail className="text-slate-200" />
              <div>
                <div className="text-xs text-slate-300">Email</div>
                <a href="mailto:infoadroit19@gmail.com" className="text-sm text-white">infoadroit19@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-3">
              <FiPhone className="text-slate-200" />
              <div>
                <div className="text-xs text-slate-300">Phone</div>
                <div className="text-sm text-white">+91 9811038435</div>
                <div className="text-sm text-white">+91 9811038434</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiMapPin className="text-slate-200 mt-1" />
              <div>
                <div className="text-xs text-slate-300">Address</div>
                <div className="text-sm text-white">
                 86/3 Janpath Connaught Place New Delhi-110001
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider dotted and small indicators (visual similar to reference) */}
      <div className="border-t border-white/10 relative">
        <div className="container flex items-center justify-between py-6">
          {/* Left: contact + social */}
          <div className="flex items-start gap-8">
            <div>
              <div className="text-sm text-slate-300">Contact Us</div>
              <a href="mailto:infoadroit19@gmail.com" className="mt-1 text-white font-medium">infoadroit19@gmail.com</a>
              <div className="text-sm text-slate-400">Phone: +919811038434 +919811038435</div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-sm text-slate-300">Follow Us</div>
              <div className="flex items-center gap-3 mt-1">
                <a href="https://www.facebook.com/share/17UDRsPsuc/" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/adroittravels?igsh=aTdhcWVsbHl4dHVs" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition" aria-label="Twitter">
                  <FaInstagram/>
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
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-400">© {new Date().getFullYear()} Adroit Travels — All rights reserved</div>
          <div className="text-sm text-slate-400">Terms • Privacy • Sitemap</div>
        </div>
      </div>
    </footer>
  )
}
