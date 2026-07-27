import { useState } from "react"
import { motion } from "framer-motion"

const CATEGORIES = ["All","Cybersecurity","ML / AI","Full-Stack","Research"]

const projects = [
  {
    title: "Gagan Drishti — SOC Anomaly Dashboard",
    cat: "Cybersecurity",
    desc: "Full-stack SOC log analysis engine with MITRE ATT&CK mapping, real-time anomaly detection, threat scoring, and incident triage dashboard.",
    tech: ["Python","FastAPI","React","MITRE ATT&CK","Scikit-learn"],
    features: ["MITRE ATT&CK mapping","Real-time log ingestion","Threat scoring engine","Incident triage UI"],
    live: null, github: "https://github.com/itsutkarsh7/soc-anomaly-dashboard",
    color: "#06b6d4", badge: "🛡️ Flagship",
  },
  {
    title: "Cyber Attack Defence Simulator",
    cat: "Cybersecurity",
    desc: "Simulated real-world adversary TTPs — phishing, ransomware, DDoS, data exfiltration — with integrated detection & IR mechanisms mapped to MITRE ATT&CK.",
    tech: ["Python","MITRE ATT&CK","Threat Simulation","IR Playbooks"],
    features: ["Ransomware/DDoS simulation","TTP-based attack modelling","Detection integration","MITRE ATT&CK aligned"],
    live: null, github: "https://github.com/itsutkarsh7/cyberwar-banking-defense",
    color: "#ef4444", badge: "⚔️ Red Team",
  },
  {
    title: "Anomaly Detection System",
    cat: "ML / AI",
    desc: "Production-grade fraud and market manipulation detection using an 8-model ML ensemble (Isolation Forest, LOF, DBSCAN, AutoEncoder). FastAPI + React/Vite.",
    tech: ["Python","FastAPI","Scikit-learn","PyOD","React","Render"],
    features: ["8-model ML ensemble","Real-time anomaly scoring","Alert prioritisation","Deployed on Render"],
    live: null, github: "https://github.com/itsutkarsh7",
    color: "#7c3aed", badge: "🤖 ML",
  },
  {
    title: "Raspberry Pi Portable Security Device",
    cat: "Cybersecurity",
    desc: "Self-contained portable cybersecurity toolkit on Raspberry Pi 5 with custom tools for VAPT, Wi-Fi penetration testing, and red team field operations.",
    tech: ["Raspberry Pi 5","Kali Linux","Nmap","Aircrack-ng","Python"],
    features: ["Wi-Fi pentesting","VAPT toolkit","Red team ops","Portable & offline"],
    live: null, github: "https://github.com/itsutkarsh7",
    color: "#f59e0b", badge: "🍓 Hardware",
  },
  {
    title: "Financial RPG Quest",
    cat: "Full-Stack",
    desc: "Gamified financial education platform. Players learn personal finance through RPG-style quests. Node.js/Express, React/Redux, PostgreSQL, live on Render.",
    tech: ["Node.js","Express","React","Redux","PostgreSQL","Render"],
    features: ["RPG quest system","User progression","Financial education","Live deployed"],
    live: "https://financial-rpg-client.onrender.com", github: "https://github.com/itsutkarsh7",
    color: "#10b981", badge: "🎮 Live",
  },
  {
    title: "NeuroText — Multilingual OCR & Translation",
    cat: "Research",
    desc: "Flask-based multilingual OCR and translation app. Co-authored and accepted at ICCISCS 2026. Supports multiple Indian and international languages.",
    tech: ["Python","Flask","Tesseract OCR","NLP","Translation APIs"],
    features: ["Multilingual OCR","Neural translation","ICCISCS 2026 paper","Multi-language"],
    live: null, github: "https://github.com/itsutkarsh7/NeuroText",
    color: "#ec4899", badge: "📄 Published",
  },
]

function ProjectCard({ p }) {
  return (
    <div className="glass-card flex flex-col relative overflow-hidden h-full"
      style={{ transition:"transform 0.2s,box-shadow 0.2s" }}
      onMouseEnter={e => { e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow=`0 8px 30px ${p.color}18` }}
      onMouseLeave={e => { e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow="" }}>
      <div className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background:`linear-gradient(90deg,${p.color},transparent)` }} />
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 rounded-full"
            style={{ background:`${p.color}14`, color:p.color, border:`1px solid ${p.color}22` }}>{p.cat}</span>
          <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
            style={{ background:"rgba(255,255,255,0.04)", color:"#64748b" }}>{p.badge}</span>
        </div>
        <h3 className="font-semibold text-white text-sm mb-2 leading-snug">{p.title}</h3>
        <p className="text-xs mb-3 flex-grow" style={{ color:"#64748b", lineHeight:"1.65" }}>{p.desc}</p>
        <ul className="mb-3 space-y-1">
          {p.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs" style={{ color:"#94a3b8" }}>
              <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background:p.color }} />{f}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded"
              style={{ background:"rgba(255,255,255,0.04)", color:"#475569", border:"1px solid rgba(255,255,255,0.06)" }}>{t}</span>
          ))}
        </div>
        <div className="flex gap-2 mt-auto">
          {p.live && (
            <a href={p.live} target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center text-xs py-2 rounded-lg font-semibold"
              style={{ background:`${p.color}18`, color:p.color, border:`1px solid ${p.color}28` }}>Live ↗</a>
          )}
          {p.github && (
            <a href={p.github} target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center text-xs py-2 rounded-lg font-semibold"
              style={{ background:"rgba(255,255,255,0.04)", color:"#64748b", border:"1px solid rgba(255,255,255,0.07)" }}>GitHub ↗</a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Vault() {
  const [filter, setFilter] = useState("All")
  const filtered = filter === "All" ? projects : projects.filter(p => p.cat === filter)

  return (
    <section id="vault" style={{ background:"#060b16", padding:"90px 0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-10"
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <p className="text-xs font-mono mb-2" style={{ color:"#06b6d4", letterSpacing:"0.15em" }}>// WHAT I'VE BUILT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
          <div className="accent-line" />
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className="text-xs px-4 py-2 rounded-lg font-medium transition-all duration-150"
              style={{
                background: filter===cat ? "rgba(6,182,212,0.13)" : "rgba(255,255,255,0.03)",
                border: filter===cat ? "1px solid rgba(6,182,212,0.38)" : "1px solid rgba(255,255,255,0.07)",
                color: filter===cat ? "#22d3ee" : "#64748b",
              }}>{cat}</button>
          ))}
        </div>

        {/* Plain grid — no AnimatePresence */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>

        <div className="text-center mt-10">
          <a href="https://github.com/itsutkarsh7" target="_blank" rel="noopener noreferrer"
            className="btn-outline text-sm inline-flex items-center gap-2">
            View All on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}
