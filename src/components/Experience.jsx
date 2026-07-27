import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import zethetaLogo  from "../assets/logos/zetheta.jpeg"
import ibmLogo      from "../assets/logos/ibm.jpeg"
import cloudxLogo   from "../assets/logos/cloudx.jpeg"
import incubatorLogo from "../assets/logos/incubator.jpeg"

const experiences = [
  {
    role: "Cybersecurity Risk Analyst",
    company: "ZeTheta Algorithms Pvt. Ltd.",
    period: "JAN 2026 – JUN 2026",
    logo: zethetaLogo,
    color: "#06b6d4",
    highlights: [
      "Conducted CTI analysis — investigated IOCs, mapped adversary TTPs to MITRE ATT&CK, built APT & threat actor profiles for detection rule refinement and proactive threat hunting",
      "Executed SOC workflows: threat detection, log analysis (HTTP, SMTP, Network), alert triage, and PCI-DSS compliance reporting across SIEM telemetry",
      "Built Python ML anomaly detection system (8-model ensemble) for fraud detection; developed Cyber Attack Defence Simulator modelling ransomware, DDoS & data exfiltration TTPs",
      "Produced structured threat intelligence reports following intelligence cycle (collection → processing → analysis → dissemination); leveraged OSINT & SOCMINT techniques",
    ],
    skills: ["Threat Hunting","IOC/TTP Analysis","MITRE ATT&CK","Python","ML","PCI-DSS","OSINT","SIEM"],
  },
  {
    role: "Cloud Computing Intern",
    company: "IBM",
    period: "MAY 2025 – JUL 2025",
    logo: ibmLogo,
    color: "#3b82f6",
    highlights: [
      "Hands-on with IBM QRadar SIEM for log monitoring and threat detection; security hardening ensuring CIA Triad compliance on IBM Cloud infrastructure",
      "Designed and deployed a secure cloud-native Task Manager using Flask and IBM Cloudant NoSQL — implemented authentication, input validation & server-side error handling",
      "Applied IAM-based access control, data encryption, and secure API management; integrated IBM Watson and AWS components aligned with cloud security best practices",
    ],
    skills: ["IBM QRadar","Flask","IBM Cloudant","IAM","AWS","CIA Triad","Cloud Security"],
  },
  {
    role: "Cybersecurity Intern",
    company: "CloudX Solutions Pvt. Ltd.",
    period: "APR 2024 – APR 2025",
    logo: cloudxLogo,
    color: "#7c3aed",
    highlights: [
      "Monitored 100+ endpoints via SIEM dashboards; triaged alerts, correlated IOCs, mapped TTPs to MITRE ATT&CK, and escalated incidents following OWASP guidelines",
      "Conducted forensic investigation on a high-profile entity for bribery & fraud risks; analysed digital evidence (email & network logs), documented Forensic Risk Research Report",
      "Performed SOC-aligned risk assessment for Botium Toys; developed security controls & compliance checklists per NIST framework",
      "Built a self-contained portable cybersecurity device on Raspberry Pi 5 with custom tools for VAPT, Wi-Fi penetration testing, and red team operations",
    ],
    skills: ["SIEM","Incident Response","MITRE ATT&CK","Forensics","NIST","OWASP","VAPT","Raspberry Pi"],
  },
  {
    role: "UI/UX Designer",
    company: "Software Incubator",
    period: "SEPT 2023 – DEC 2023",
    logo: incubatorLogo,
    color: "#10b981",
    highlights: [
      "Designed UI/UX prototypes and built full-stack web applications including a Canteen App, Petcare App, and NCBC Website",
      "Focused on responsive design, user experience, and front-end performance optimisation",
    ],
    skills: ["UI/UX","React","Web Development","Prototyping"],
  },
]

function ExpCard({ exp, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Connector line between cards */}
      {index < experiences.length - 1 && (
        <div className="hidden md:block absolute left-[52px] top-full w-px h-8 z-0"
          style={{ background: `linear-gradient(to bottom, ${exp.color}60, transparent)` }} />
      )}

      <div className="glass-card overflow-hidden relative z-10"
        style={{ borderLeft: `3px solid ${exp.color}` }}>

        {/* ── Card header ── */}
        <div className="flex items-start gap-4 p-5">

          {/* Company logo */}
          <div className="flex-shrink-0 w-[60px] h-[60px] rounded-xl overflow-hidden flex items-center justify-center"
            style={{ background: "#fff", padding: 6, border: `1px solid ${exp.color}30` }}>
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-full h-full object-contain"
              style={{ imageRendering: "auto" }}
            />
          </div>

          {/* Title block */}
          <div className="flex-grow min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-bold text-white text-base leading-snug">{exp.role}</h3>
                <p className="text-sm mt-0.5 font-medium" style={{ color: exp.color }}>{exp.company}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}25` }}>
                  {exp.type}
                </span>
                <span className="text-xs hidden sm:block" style={{ color: "#475569" }}>{exp.period}</span>
              </div>
            </div>
            <span className="text-xs mt-1 sm:hidden block" style={{ color: "#475569" }}>{exp.period}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-5" style={{ height: 1, background: "rgba(255,255,255,0.05)" }} />

        {/* ── Highlights ── */}
        <div className="px-5 pt-4 pb-3">
          <ul className="space-y-2">
            {exp.highlights.slice(0, open ? undefined : 2).map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm"
                style={{ color: "#94a3b8", lineHeight: "1.65" }}>
                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                  style={{ background: exp.color, boxShadow: `0 0 5px ${exp.color}80` }} />
                {h}
              </li>
            ))}
          </ul>

          {exp.highlights.length > 2 && (
            <button
              onClick={() => setOpen(!open)}
              className="mt-3 text-xs font-medium flex items-center gap-1 transition-opacity hover:opacity-80"
              style={{ color: exp.color }}>
              {open ? "▲ Show less" : `▼ ${exp.highlights.length - 2} more`}
            </button>
          )}
        </div>

        {/* ── Skill tags ── */}
        <div className="px-5 pb-4 flex flex-wrap gap-1.5">
          {exp.skills.map((s) => (
            <span key={s} className="text-xs px-2.5 py-0.5 rounded-md"
              style={{ background: `${exp.color}0e`, color: exp.color, border: `1px solid ${exp.color}1c` }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" style={{ background: "#060b16", padding: "90px 0" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px" }}>

        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs font-mono mb-2" style={{ color: "#06b6d4", letterSpacing: "0.15em" }}>// WORK HISTORY</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
          <div className="accent-line" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <ExpCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
