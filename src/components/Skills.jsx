import { useState } from "react"
import { motion } from "framer-motion"

const TABS = [
  { key: "SOC & IR",     icon: "🛡️", label: "SOC & Incident Response" },
  { key: "Tools",        icon: "⚙️", label: "Tools & Platforms" },
  { key: "GRC",          icon: "📋", label: "GRC & Compliance" },
  { key: "Development",  icon: "💻", label: "Development" },
]

const SKILLS = {
  "SOC & IR": [
    "SOC Operations & Alert Triage",
    "Incident Response Playbooks",
    "MITRE ATT&CK Framework & TTP Mapping",
    "Threat Hunting — Network Flow & UBA",
    "IOC / TTP Investigation",
    "Phishing & Email Security Analysis",
    "Malware Behaviour Analysis",
    "Log Analysis — HTTP, SMTP, Network",
    "Root Cause Analysis (RCA)",
    "SOC Quality Assessment",
    "OSINT & SOCMINT Techniques",
    "Threat Actor Profiling (APT)",
  ],
  "Tools": [
    "Splunk SIEM",
    "IBM QRadar",
    "Google Chronicle SIEM",
    "MISP",
    "OpenCTI",
    "Wireshark",
    "Nmap",
    "Burp Suite",
    "Metasploit",
    "Raspberry Pi — VAPT / Red Team",
    "IBM Cloud / AWS",
    "TryHackMe / HackTheBox",
  ],
  "GRC": [
    "NIST Cybersecurity Framework",
    "ISO 27001",
    "PCI-DSS",
    "OWASP Guidelines",
    "Risk Assessment & Rating",
    "Security Controls Design",
    "Compliance Checklists & Auditing",
    "Process Deviation Analysis",
    "Threat Intelligence Reporting",
    "Forensic Investigation & Evidence Analysis",
  ],
  "Development": [
    "Python — Security Automation",
    "Flask / FastAPI",
    "ML Anomaly Detection",
    "React / JavaScript",
    "REST API Design",
    "PostgreSQL / NoSQL (IBM Cloudant)",
    "Docker",
    "Git / GitHub",
  ],
}

const TAB_COLORS = {
  "SOC & IR":    { bg: "rgba(6,182,212,0.08)",   border: "rgba(6,182,212,0.3)",   text: "#22d3ee", dot: "#06b6d4" },
  "Tools":       { bg: "rgba(124,58,237,0.08)",  border: "rgba(124,58,237,0.3)",  text: "#a78bfa", dot: "#7c3aed" },
  "GRC":         { bg: "rgba(16,185,129,0.08)",  border: "rgba(16,185,129,0.3)",  text: "#34d399", dot: "#10b981" },
  "Development": { bg: "rgba(245,158,11,0.08)",  border: "rgba(245,158,11,0.3)",  text: "#fbbf24", dot: "#f59e0b" },
}

export default function Skills() {
  const [active, setActive] = useState("SOC & IR")
  const color = TAB_COLORS[active]
  const skills = SKILLS[active]

  return (
    <section id="skills" style={{ background: "#0a0f1e", padding: "90px 0" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>

        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs font-mono mb-2" style={{ color: "#06b6d4", letterSpacing: "0.15em" }}>// CAPABILITIES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Expertise</h2>
          <div className="accent-line" />
        </motion.div>

        {/* Tab row */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {TABS.map((tab) => {
            const c = TAB_COLORS[tab.key]
            const isActive = active === tab.key
            return (
              <button key={tab.key} onClick={() => setActive(tab.key)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  background:    isActive ? c.bg        : "rgba(255,255,255,0.03)",
                  border:        isActive ? `1px solid ${c.border}` : "1px solid rgba(255,255,255,0.07)",
                  color:         isActive ? c.text       : "#64748b",
                  boxShadow:     isActive ? `0 0 16px ${c.dot}18` : "none",
                }}>
                <span>{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.key}</span>
              </button>
            )
          })}
        </div>

        {/* Skills panel */}
        <motion.div
          key={active}
          className="glass-card overflow-hidden"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}>

          {/* Panel header strip */}
          <div className="px-6 py-4 flex items-center gap-3"
            style={{ borderBottom: `1px solid ${color.border}22`, background: `${color.dot}06` }}>
            <div className="w-2 h-8 rounded-full" style={{ background: `linear-gradient(to bottom, ${color.dot}, ${color.dot}40)` }} />
            <div>
              <h3 className="font-semibold text-white text-sm">{TABS.find(t => t.key === active)?.label}</h3>
              <p className="text-xs mt-0.5" style={{ color: "#334155" }}>{skills.length} skills</p>
            </div>
          </div>

          {/* Skill grid — names only, clean 2-col */}
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-0">
            {skills.map((skill, i) => (
              <div key={skill}
                className="flex items-center gap-3 py-3 px-2"
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.04)" : "none",
                }}>
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: color.dot, boxShadow: `0 0 6px ${color.dot}80` }} />
                <span className="text-sm" style={{ color: "#cbd5e1" }}>{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tool chips row */}
        <motion.div className="mt-5 glass-card px-5 py-4 flex flex-wrap gap-2 items-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <span className="text-xs mr-1" style={{ color: "#334155" }}>Tools:</span>
          {["Splunk","QRadar","Chronicle","MISP","Wireshark","Nmap","Burp Suite","Python","NIST","ISO 27001","MITRE ATT&CK","PCI-DSS"].map((t) => (
            <span key={t} className="tag-purple">{t}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
