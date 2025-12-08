// src/pages/Careers.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiChevronRight, FiSearch, FiChevronDown } from "react-icons/fi";
import JobCard from "../components/JobCard";
import { JOBS, DEPARTMENTS, LOCATIONS } from "../data/jobs";

export default function Careers() {
  const [q, setQ] = useState("");
  const [dept, setDept] = useState("All");
  const [loc, setLoc] = useState("All");

  const filtered = useMemo(() => {
    return JOBS.filter((j) => {
      const matchDept = dept === "All" || j.dept === dept;
      const matchLoc = loc === "All" || j.location === loc;
      const matchQ =
        !q ||
        j.title.toLowerCase().includes(q.toLowerCase()) ||
        j.summary.toLowerCase().includes(q.toLowerCase()) ||
        j.dept.toLowerCase().includes(q.toLowerCase());
      return matchDept && matchLoc && matchQ;
    });
  }, [q, dept, loc]);

  return (
    <main className="bg-white text-[#0b1c3d]">
      {/* HERO (matches your Services/About style) */}
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
              <Link to="/" className="hover:underline">Home</Link>
              <FiChevronRight className="opacity-70" />
              <span>Careers</span>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h1 className="text-3xl md:text-4xl font-extrabold">Careers at Adroit Travels</h1>
                <p className="mt-4 text-white/95 leading-relaxed">
                  Help us make international travel simpler for India. We’re building tools and
                  services that turn complex visa workflows into clear, human-friendly experiences.
                </p>
              </div>
              <div className="md:col-span-1">
                <div className="rounded-xl bg-white p-4 shadow-md ring-1 ring-white/40">
                  <img
                    src="/Travel (7).jpg"
                    alt=""
                    className="w-full h-44 md:h-48 object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* seam into white body */}
        <div className="relative z-0 h-6 bg-white rounded-t-[2rem] mt-6 mx-auto w-[96%]" />
      </header>

      {/* WHY JOIN / VALUES */}
      <section className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Impact at Scale",
              body:
                "Millions of Indians travel every year. Your work directly helps travellers file better, faster, with fewer surprises.",
              img: "/Travel (1).jpg",
            },
            {
              title: "Craft & Care",
              body:
                "We obsess over clarity and reliability—from content quality to UI polish and operations discipline.",
              img: "/Travel (8).jpg",
            },
            {
              title: "Grow with Ownership",
              body:
                "Small squads, big problems. Own outcomes end-to-end and level up quickly with supportive peers.",
              img: "/Travel (6).jpg",
            },
          ].map((v, i) => (
            <article key={i} className="rounded-2xl border bg-white shadow-sm p-5">
              <div className="h-36 w-full overflow-hidden rounded-xl bg-[#eef6ff] grid place-items-center">
                <img src={v.img} alt="" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#0b2466]">{v.title}</h3>
              <p className="mt-2 text-gray-600">{v.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="container">
        <div className="rounded-2xl border bg-white shadow-sm p-4 md:p-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {/* Search */}
            <label className="block">
              <span className="text-sm text-gray-500">Search roles</span>
              <div className="mt-2 flex items-center gap-2 rounded-lg border px-3">
                <FiSearch className="shrink-0" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  className="w-full py-2 outline-none"
                  placeholder="Try “Engineer”, “Operations”…"
                />
              </div>
            </label>

            {/* Dept */}
            <label className="block">
              <span className="text-sm text-gray-500">Department</span>
              <div className="relative mt-2">
                <select
                  value={dept}
                  onChange={(e) => setDept(e.target.value)}
                  className="w-full appearance-none rounded-lg border bg-white py-2 pl-3 pr-8"
                >
                  {DEPARTMENTS.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
                <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </label>

            {/* Location */}
            <label className="block">
              <span className="text-sm text-gray-500">Location</span>
              <div className="relative mt-2">
                <select
                  value={loc}
                  onChange={(e) => setLoc(e.target.value)}
                  className="w-full appearance-none rounded-lg border bg-white py-2 pl-3 pr-8"
                >
                  {LOCATIONS.map((l) => (
                    <option key={l}>{l}</option>
                  ))}
                </select>
                <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </label>

            {/* CTA */}
            <div className="flex items-end">
              <Link
                to="/careers/apply"
                className="w-full rounded-lg bg-[#1c4dde] py-2 text-center font-semibold text-white hover:brightness-95"
              >
                Refer / Apply
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section className="container py-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-extrabold">Open Positions</h2>
          <span className="text-sm text-gray-500">
            Showing {filtered.length} role{filtered.length === 1 ? "" : "s"}
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border bg-white p-8 text-center text-gray-500">
            No roles match your filters. Try clearing search or choosing “All”.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </section>

      {/* BENEFITS */}
      <section className="container py-10">
        <div className="rounded-2xl border bg-white shadow-sm p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-extrabold">Benefits & Perks</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: "Hybrid Work", d: "Flexible WFO/WFH based on role and schedule." },
              { t: "Learning Budget", d: "Courses, books, and conferences are reimbursed." },
              { t: "Medical Insurance", d: "Health cover for you and dependents." },
              { t: "Wellness", d: "Gym/fitness reimbursements and wellness days." },
              { t: "Equipment", d: "Modern laptop and accessories for your role." },
              { t: "Time Off", d: "Generous leave and optional unpaid time for travel." },
            ].map((b, i) => (
              <div key={i} className="rounded-xl border p-5">
                <div className="text-lg font-semibold text-[#0b2466]">{b.t}</div>
                <p className="mt-1 text-gray-600">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIRING PROCESS (accordion) */}
      <section className="container py-10">
        <h3 className="text-xl md:text-2xl font-extrabold">Our Hiring Process</h3>
        <div className="mt-4 divide-y rounded-2xl border bg-white">
          {[
            { t: "1) Application Review", d: "We evaluate your profile for role fit and relevant experience." },
            { t: "2) Intro Chat", d: "A quick conversation on your interests, expectations, and role scope." },
            { t: "3) Skills Assessment", d: "Take-home task or live exercise aligned to the role." },
            { t: "4) Panel Interview", d: "Meet the team; discuss decisions, tradeoffs and past work." },
            { t: "5) Offer & Onboarding", d: "We share a detailed offer and a clear 30-60-90 day plan." },
          ].map((s, i) => (
            <details key={i} className="group p-5 open:pb-6">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="font-semibold">{s.t}</span>
                <FiChevronDown className="transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-gray-600">{s.d}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-14">
        <div className="rounded-2xl border bg-white shadow-sm p-6 md:p-8 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <img src="/Travel (2).png" alt="" className="md:col-span-1 w-full object-contain" />
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Join Adroit Travels <span className="text-[#1a47a6]">— build for real users</span>
            </h2>
            <p className="mt-3 text-gray-700">
              Don’t see a perfect fit? Tell us how you can help. We hire exceptional people across India.
            </p>
            <div className="mt-5 flex gap-3 flex-wrap">
              <Link
                to="/careers/apply"
                className="px-5 py-3 rounded-xl bg-[#1a47a6] text-white font-semibold hover:brightness-95"
              >
                Send your CV
              </Link>
              <Link
                to="/careers/open-roles"
                className="px-5 py-3 rounded-xl border font-semibold hover:bg-gray-50"
              >
                See all roles
              </Link>
            </div>
          </div>
          <img src="/Travel (5).jpg" alt="" className="md:col-span-1 w-full object-contain" />
        </div>
      </section>
    </main>
  );
}
