// src/components/JobCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiMapPin, FiClock, FiBriefcase } from "react-icons/fi";

export default function JobCard({ job }) {
  return (
    <article className="rounded-2xl border bg-white shadow-sm hover:shadow-md transition p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-[#0b2466]">{job.title}</h3>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">{job.summary}</p>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span className="inline-flex items-center gap-1">
              <FiBriefcase /> {job.dept}
            </span>
            <span className="inline-flex items-center gap-1">
              <FiMapPin /> {job.location}
            </span>
            <span className="inline-flex items-center gap-1">
              <FiClock /> {job.type} • {job.posted}
            </span>
          </div>
        </div>

        <span className="text-xs font-mono text-gray-400 shrink-0">{job.id}</span>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          to={job.applyUrl}
          className="px-4 py-2 rounded-lg bg-[#1c4dde] text-white font-semibold hover:brightness-95"
        >
          Apply
        </Link>
        <Link
          to={`/careers/${encodeURIComponent(job.id)}`}
          className="px-4 py-2 rounded-lg border font-semibold hover:bg-gray-50"
        >
          View details
        </Link>
      </div>
    </article>
  );
}
