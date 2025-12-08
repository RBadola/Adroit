// src/pages/Contact.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiMessageCircle,
} from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function onChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (form.phone && !/^[0-9+\-\s()]{7,}$/.test(form.phone))
      e.phone = "Enter a valid phone number.";
    if (!form.topic) e.topic = "Select a topic.";
    if (!form.message.trim()) e.message = "Tell us a bit about your request.";
    if (!form.consent) e.consent = "Please accept to be contacted.";
    return e;
  }

  function onSubmit(e) {
    e.preventDefault();
    const eMap = validate();
    setErrors(eMap);
    if (Object.keys(eMap).length === 0) {
      // front-end only; pretend success
      setSubmitted(true);
    }
  }

  return (
    <main className="bg-white text-[#0b1c3d]">
      {/* HERO (matches your theme) */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f55c0] to-[#1a47a6]" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 1px 1px, rgba(255,255,255,.6) 1px, transparent 0)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="relative z-10 text-white">
          <div className="container py-10 md:py-14">
            <nav className="flex items-center gap-2 text-white/90 text-sm mb-5">
              <FiHome />
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span className="opacity-70">›</span>
              <span>Contact Us</span>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h1 className="text-3xl md:text-4xl font-extrabold">Contact Adroit Travels</h1>
                <p className="mt-4 text-white/95 leading-relaxed">
                  Have a query about visas, appointments, or document legalization?
                  Send us a message — we’ll respond with clear next steps for Indian applicants.
                </p>
              </div>
              <div className="md:col-span-1">
                <div className="rounded-xl bg-white p-4 shadow-md ring-1 ring-white/40">
                  <img
                    src="/Travel (2).png"
                    alt=""
                    className="w-full h-44 md:h-48 object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* seam into body */}
        <div className="relative z-0 h-6 bg-white rounded-t-[2rem] mt-6 mx-auto w-[96%]" />
      </header>

      {/* TOP CONTACT CARDS */}
      <section className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <InfoCard
            icon={<FiPhone />}
            title="Call Us"
            lines={["+919811038435", "+919811038434"]}
            hint="9:30 AM – 6:30 PM IST"
          />
          <InfoCard
            icon={<FiMail />}
            title="Email"
            lines={["support@adroittravels.in", "docs@adroittravels.in"]}
            hint="We reply within 1 business day"
          />
          <InfoCard
            icon={<FiMessageCircle />}
            title="WhatsApp"
            lines={["+919811038434"]}
            link="https://wa.me/919811038434"
            hint="Quick clarifications"
          />
          <InfoCard
            icon={<FiClock />}
            title="Office Hours"
            lines={["Mon–Sat", "9:30 AM – 6:30 PM"]}
            hint="Closed on public holidays"
          />
        </div>
      </section>

      {/* FORM + OFFICES */}
      <section className="container pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FORM */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border bg-white shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold">Send us a message</h2>
              <p className="mt-2 text-gray-600">
                Fill the form and we’ll get back with steps, timelines and a checklist link if needed.
              </p>

              {submitted && (
                <div className="mt-5 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
                  Thanks! Your message was recorded. We’ll email you shortly.
                </div>
              )}

              <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={onSubmit}>
                <Field
                  label="Full name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  error={errors.name}
                  placeholder="Your name"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  error={errors.email}
                  placeholder="name@example.com"
                />
                <Field
                  label="Phone (optional)"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  error={errors.phone}
                  placeholder="+91 9xxxxxxxxx"
                />
                <Select
                  label="Topic"
                  name="topic"
                  value={form.topic}
                  onChange={onChange}
                  error={errors.topic}
                  options={[
                    { value: "", label: "Select a topic" },
                    { value: "visa-consultancy", label: "Visa Consultancy" },
                    { value: "cross-border-visa-processing", label: "Cross-Border Visa Processing" },
                    { value: "e-visa-processing", label: "E-Visa Processing" },
                    { value: "document-legalization", label: "Document Legalization" },
                    { value: "visa-processing-in-india", label: "Visa Processing in India" },
                    { value: "general", label: "General query" },
                  ]}
                />
                <div className="md:col-span-2">
                  <label className="text-sm text-gray-600">Message</label>
                  <textarea
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={onChange}
                    className={`mt-2 w-full rounded-lg border p-3 outline-none focus:ring-4 focus:ring-blue-100 ${
                      errors.message ? "border-red-400" : "border-gray-300"
                    }`}
                    placeholder="Share details like travel purpose, target country, tentative dates, and any past refusals."
                  />
                  {errors.message && <ErrorText text={errors.message} />}
                </div>

                <div className="md:col-span-2 flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={form.consent}
                    onChange={onChange}
                    className={`mt-1 h-5 w-5 rounded border ${
                      errors.consent ? "border-red-400" : "border-gray-300"
                    }`}
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I agree to be contacted by Adroit Travels regarding my query. (No spam, ever.)
                  </label>
                </div>
                {errors.consent && (
                  <div className="md:col-span-2">
                    <ErrorText text={errors.consent} />
                  </div>
                )}

                <div className="md:col-span-2 flex gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#1c4dde] px-5 py-3 font-semibold text-white hover:brightness-95"
                  >
                    <FiSend className="text-white" />
                    Send Message
                  </button>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border px-5 py-3 font-semibold hover:bg-gray-50"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>

          {/* OFFICES */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border bg-white shadow-sm p-6 md:p-8">
              <h3 className="text-xl font-extrabold">Our Offices</h3>
              <div className="mt-5 space-y-5">
                <Office
                  city="New Delhi"
                  address={[
                   "86/3 Janpath Connaught Place New Delhi-110001"
                  ]}
                  phone="+919811038434"
                  mapSrc="https://maps.google.com/maps?q=Connaught%20Place,%20New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                />
            
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container pb-14">
        <div className="rounded-2xl border bg-white shadow-sm p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-extrabold">Frequently Asked Questions</h2>
          <div className="mt-4 divide-y">
            {FAQS.map((f, i) => (
              <details key={i} className="group p-4 open:pb-6">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-semibold">{f.q}</span>
                  <span className="transition group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-3 text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- small components ---------- */

function InfoCard({ icon, title, lines = [], hint, link }) {
  const content = (
    <>
      <div className="text-[#1c4dde] text-2xl">{icon}</div>
      <div>
        <div className="font-semibold text-[#0b2466]">{title}</div>
        <div className="mt-1 text-sm text-gray-700 space-y-0.5">
          {lines.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
        {hint && <div className="mt-1 text-xs text-gray-500">{hint}</div>}
      </div>
    </>
  );

  return (
    <article className="rounded-2xl border bg-white shadow-sm p-5 flex gap-3 items-start">
      {link ? (
        <a href={link} target="_blank" rel="noreferrer" className="flex gap-3 items-start">
          {content}
        </a>
      ) : (
        <div className="flex gap-3 items-start">{content}</div>
      )}
    </article>
  );
}

function Field({ label, name, value, onChange, error, type = "text", placeholder }) {
  return (
    <label className="block">
      <span className="text-sm text-gray-600">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`mt-2 w-full rounded-lg border p-3 outline-none focus:ring-4 focus:ring-blue-100 ${
          error ? "border-red-400" : "border-gray-300"
        }`}
      />
      {error && <ErrorText text={error} />}
    </label>
  );
}

function Select({ label, name, value, onChange, error, options }) {
  return (
    <label className="block">
      <span className="text-sm text-gray-600">{label}</span>
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`mt-2 w-full appearance-none rounded-lg border bg-white p-3 pr-10 outline-none focus:ring-4 focus:ring-blue-100 ${
            error ? "border-red-400" : "border-gray-300"
          }`}
        >
          {options.map((o) => (
            <option key={o.value ?? o.label} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
          ▾
        </span>
      </div>
      {error && <ErrorText text={error} />}
    </label>
  );
}

function ErrorText({ text }) {
  return <div className="mt-1 text-xs text-red-600">{text}</div>;
}

function Office({ city, address = [], phone, mapSrc }) {
  return (
    <div className="rounded-xl border p-4">
      <div className="flex items-center gap-2 text-[#0b2466] font-semibold">
        <FiMapPin />
        <span>{city}</span>
      </div>
      <div className="mt-2 text-sm text-gray-700 space-y-0.5">
        {address.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
      <div className="mt-2 text-sm text-gray-700 flex items-center gap-2">
        <FiPhone className="text-gray-500" />
        <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:underline">
          {phone}
        </a>
      </div>
      <div className="mt-3 h-44 w-full overflow-hidden rounded-lg border">
        <iframe
          title={`${city} Map`}
          src={mapSrc}
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

/* ---------- simple FAQs ---------- */
const FAQS = [
  {
    q: "How long do you take to reply?",
    a: "We usually respond within 1 business day. For urgent cases, call or WhatsApp during office hours.",
  },
  {
    q: "Do you guarantee visa approval?",
    a: "No legitimate agency can guarantee approvals. We focus on accurate guidance, strong documentation, and clean packaging to improve your chances.",
  },
  {
    q: "Can you book embassy/centre appointments for me?",
    a: "Yes—where permitted. We’ll guide you on the correct centre and available routes (online booking, walk-in, or courier).",
  },
  {
    q: "Do you support e-visa routes?",
    a: "Yes, including portal navigation, photo/scan compliance, payments and follow-up.",
  },
];
