import React, { useState, useEffect } from "react"
import { sampleCountries } from "../data/countries"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "motion/react"

/*
  Signup page for Adroit Travels
  - Follows the same visual theme: navy (#23336f), saffron accents
  - Uses an uploaded image (logo/illustration) from conversation assets as decorative art.
    The local path below will be transformed by your build pipeline:
      /mnt/data/dc903e3d-1d02-4d63-bea1-e5e3ed5fabb7.png
*/

const Saffron = "bg-[#f59e0b]" // you can replace with your tailwind class if defined

export default function Signup() {
  const navigate = useNavigate?.() // optional: if using react-router
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    country: "India",
    password: "",
    confirm: "",
    agree: false
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    document.title = "Sign up — Adroit Travels"
  }, [])

  function validate() {
    const e = {}
    if (!form.fullName.trim()) e.fullName = "Please enter your full name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address."
    if (!/^\+?\d{7,15}$/.test(form.mobile)) e.mobile = "Enter a valid phone number (digits only)."
    if (form.password.length < 8) e.password = "Password must be at least 8 characters."
    if (form.password !== form.confirm) e.confirm = "Passwords do not match."
    if (!form.agree) e.agree = "You must agree to the terms to continue."
    return e
  }

  async function onSubmit(e) {
    e.preventDefault()
    const eobj = validate()
    setErrors(eobj)
    if (Object.keys(eobj).length) return

    setSubmitting(true)
    // Simulate API call — replace with real signup call
    await new Promise((r) => setTimeout(r, 900))
    setSubmitting(false)

    // Navigate or show success — using navigate if available
    if (navigate) navigate("/welcome")
    else alert("Account created (mock).")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-12">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* Left: form */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <header className="mb-6">
              <h1 className="text-3xl font-extrabold text-[#0b2466]">Create your Adroit Travels account</h1>
              <p className="mt-2 text-sm text-gray-500">
                Sign up to book appointments, save checklists and track your visa applications.
              </p>
            </header>

            <form onSubmit={onSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Full name</label>
                  <input
                    value={form.fullName}
                    onChange={(e) => setForm((s) => ({ ...s, fullName: e.target.value }))}
                    className={`mt-2 block w-full p-3 border rounded-lg focus:outline-none ${
                      errors.fullName ? "border-red-400" : "border-gray-200"
                    }`}
                    placeholder="John Doe"
                    aria-invalid={!!errors.fullName}
                  />
                  {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                    className={`mt-2 block w-full p-3 border rounded-lg focus:outline-none ${
                      errors.email ? "border-red-400" : "border-gray-200"
                    }`}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label className="text-sm text-gray-600">Mobile number</label>
                  <input
                    value={form.mobile}
                    onChange={(e) => setForm((s) => ({ ...s, mobile: e.target.value }))}
                    className={`mt-2 block w-full p-3 border rounded-lg focus:outline-none ${
                      errors.mobile ? "border-red-400" : "border-gray-200"
                    }`}
                    placeholder="+919812345678"
                    aria-invalid={!!errors.mobile}
                  />
                  {errors.mobile && <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>}
                </div>

                <div>
                  <label className="text-sm text-gray-600">Country</label>
                  <select
                    value={form.country}
                    onChange={(e) => setForm((s) => ({ ...s, country: e.target.value }))}
                    className="mt-2 block w-full p-3 border rounded-lg bg-white border-gray-200"
                  >
                    {/* ensure India is first; sampleCountries from data */}
                    <option>India</option>
                    {sampleCountries
                      .filter((c) => c.name !== "India")
                      .slice(0, 50) // limit for performance in UI; adjust if needed
                      .map((c) => (
                        <option key={c.name} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-600">Password</label>
                  <input
                    type="password"
                    value={form.password}
                    onChange={(e) => setForm((s) => ({ ...s, password: e.target.value }))}
                    className={`mt-2 block w-full p-3 border rounded-lg focus:outline-none ${
                      errors.password ? "border-red-400" : "border-gray-200"
                    }`}
                    placeholder="Choose a secure password"
                    aria-invalid={!!errors.password}
                  />
                  {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
                </div>

                <div>
                  <label className="text-sm text-gray-600">Confirm password</label>
                  <input
                    type="password"
                    value={form.confirm}
                    onChange={(e) => setForm((s) => ({ ...s, confirm: e.target.value }))}
                    className={`mt-2 block w-full p-3 border rounded-lg focus:outline-none ${
                      errors.confirm ? "border-red-400" : "border-gray-200"
                    }`}
                    placeholder="Re-enter password"
                    aria-invalid={!!errors.confirm}
                  />
                  {errors.confirm && <p className="mt-1 text-xs text-red-500">{errors.confirm}</p>}
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3">
                <input
                  id="agree"
                  type="checkbox"
                  checked={form.agree}
                  onChange={(e) => setForm((s) => ({ ...s, agree: e.target.checked }))}
                  className="mt-1 h-4 w-4"
                />
                <label htmlFor="agree" className="text-sm text-gray-600">
                  I agree to Adroit Travels{" "}
                  <a href="/terms" className="text-[#23336f] underline">
                    Terms &amp; Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-[#23336f] underline">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
              {errors.agree && <p className="mt-2 text-xs text-red-500">{errors.agree}</p>}

              <div className="mt-6 flex items-center gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 rounded-lg text-white font-semibold"
                  style={{ backgroundColor: "#23336f" }}
                >
                  {submitting ? "Creating account..." : "Create account"}
                </button>

                <button
                  type="button"
                  className="px-4 py-3 rounded-lg border border-gray-200 text-gray-700"
                  onClick={() =>
                    setForm({
                      fullName: "",
                      email: "",
                      mobile: "",
                      country: "India",
                      password: "",
                      confirm: "",
                      agree: false
                    })
                  }
                >
                  Reset
                </button>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Already have an account?{" "}
                <Link to="/login" className="text-[#23336f] font-medium">
                  Log in
                </Link>
              </p>
            </form>
          </div>

          {/* Right: illustration / benefits */}
          <aside className="px-4">
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <img
                src={"/logo.png"}
                alt="Adroit Travels"
                className="w-36 h-auto mb-6 object-contain"
              />

              <h3 className="text-xl font-semibold text-[#0b2466] mb-3">Why create an account?</h3>
              <ul className="text-gray-600 space-y-3">
                <li>• Save your document checklists and appointments.</li>
                <li>• Track application status in one place.</li>
                <li>• Faster form fills with profile data.</li>
                <li>• Secure uploads and communication with our team.</li>
              </ul>

              <div className="mt-6">
                <a
                  href="/services"
                  className="inline-block px-5 py-3 rounded-lg text-[#23336f] border border-[#23336f] font-semibold hover:bg-[#23336f] hover:text-white transition"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="mt-6 text-xs text-gray-400">
              By creating an account you agree to our policies. We take privacy and data security seriously.
            </div>
          </aside>
        </motion.div>
      </div>
    </div>
  )
}
