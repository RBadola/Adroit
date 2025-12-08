import React from "react";
import ServiceCard from "../components/ServiceCards"; // NOTE: file is ServiceCard.jsx
import { SERVICE_DETAILS } from "../data/Services";

export default function Services() {
  // Transform the object → array with derived blurbs
  const items = Object.entries(SERVICE_DETAILS).map(([slug, def],ind) => {
    // lightweight blurb: take the first "why.copy" sentence (or fall back)
    const blurb =
      (def?.why?.copy?.split(". ").slice(0, 2).join(". ") || "").trim() ||
      "Learn what this service includes, how it works, and why travellers choose us.";
    return {
      slug,
      title: def.title,
      image: def.heroImg || def?.why?.image, // hero first, else why image
      blurb,
    };
  });

  return (
    <section className="container py-12">
      <header className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Adroit Travels Service
        </p>
        <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">
          <span className="text-[#1c4dde]">Services</span> offered by Adroit Travels
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600">
          Pick a service to see detailed steps, what’s included, and why we’re a fit for your
          case. All pages follow the same clean, informative layout you asked for.
        </p>
      </header>

      {/* 3×2 grid on desktop — responsive down to 1 col on mobile */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <ServiceCard
            key={s.slug}
            slug={s.slug}
            title={s.title}
            blurb={s.blurb}
            image={s.image}
          />
        ))}
      </div>
    </section>
  );
}
