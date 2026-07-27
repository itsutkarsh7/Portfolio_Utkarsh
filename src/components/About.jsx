import { motion } from "framer-motion"
import img from "../assets/img.jpg"

const stats = [
  { value: "2+", label: "Yrs Experience", icon: "⏱️" },
  { value: "3+", label: "Internships", icon: "💼" },
  { value: "8+", label: "Projects", icon: "🛠️" },
  { value: "5+", label: "Certifications", icon: "📜" },
  { value: "1", label: "Published Paper", icon: "📄" },
]

export default function About() {
  return (
    <section id="about" style={{ background: "#060b16", padding: "90px 0" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs font-mono mb-2" style={{ color: "#06b6d4", letterSpacing: "0.15em" }}>// WHO AM I</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <div className="accent-line" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* ── LEFT: Photo card (2 cols) ── */}
          <motion.div className="lg:col-span-2 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }} viewport={{ once: true }}>

            <div style={{ width: 320 }}>
              {/* Polaroid-style card */}
              <div className="relative rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(15,23,42,0.6)",
                  border: "1px solid rgba(6,182,212,0.2)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(6,182,212,0.08)",
                }}>

                {/* Top bar */}
                <div className="flex items-center px-3 py-2 gap-1.5"
                  style={{ borderBottom: "1px solid rgba(6,182,212,0.1)", background: "rgba(6,182,212,0.04)" }}>
                  <div className="w-2 h-2 rounded-full bg-red-500 opacity-70" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500 opacity-70" />
                  <div className="w-2 h-2 rounded-full bg-green-500 opacity-70" />
                  <span className="ml-auto text-xs font-mono" style={{ color: "#1e3a4a" }}>profile.jpg</span>
                </div>

                {/* Photo */}
                <div className="relative" style={{ paddingBottom: "100%", background: "#030712" }}>
                  <img
                    src={img}
                    alt="Utkarsh Singh"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  {/* subtle gradient bottom fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-16"
                    style={{ background: "linear-gradient(to top, rgba(15,23,42,0.7), transparent)" }} />
                </div>

                {/* Name strip */}
                <div className="px-4 py-3 text-center">
                  <h3 className="font-bold text-white text-base tracking-wide">Utkarsh Singh</h3>
                  <p className="text-xs mt-0.5 font-mono" style={{ color: "#06b6d4" }}>SOC Analyst · GRC Analyst</p>
                </div>
              </div>

              {/* Below card — status dots */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400"
                    style={{ boxShadow: "0 0 6px #4ade80", animation: "pulse 2s infinite" }} />
                  <span className="text-xs" style={{ color: "#4ade80" }}>Available</span>
                </div>
                <div className="w-px h-3" style={{ background: "rgba(255,255,255,0.1)" }} />
                <span className="text-xs" style={{ color: "#475569" }}>Lucknow, India</span>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Text (3 cols) ── */}
          <motion.div className="lg:col-span-3 space-y-5"
            initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }} viewport={{ once: true }}>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                Cybersecurity Professional
              </h3>
              <p className="text-sm font-mono mt-1.5" style={{ color: "#06b6d4" }}>
                B.Tech CS — AKGEC, Ghaziabad (2022–2026)
              </p>
            </div>

            <p style={{ color: "#94a3b8", lineHeight: "1.85", fontSize: "0.9rem" }}>
              Results-driven cybersecurity professional with hands-on experience in{" "}
              <span style={{ color: "#e2e8f0" }}>SOC operations, alert triage, incident response, and
              threat hunting</span> across network flows and user behaviour indicators.
              Proficient in SIEM-based monitoring, phishing and email security analysis,
              malware behaviour investigation, and incident response playbook execution.
            </p>

            <p style={{ color: "#94a3b8", lineHeight: "1.85", fontSize: "0.9rem" }}>
              Skilled in Python scripting for security automation, log analysis (HTTP, SMTP, Network),
              and IOC/TTP investigation using the{" "}
              <span style={{ color: "#e2e8f0" }}>MITRE ATT&CK framework</span>. Strong GRC foundation
              covering NIST, ISO 27001, and PCI-DSS compliance.
            </p>

            {/* Domain pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "SOC Operations","Incident Response","Threat Hunting","MITRE ATT&CK",
                "IOC/TTP Analysis","OSINT","GRC Compliance","Log Analysis",
                "Malware Analysis","Playbook Execution",
              ].map((s) => (
                <span key={s} className="tag-cyan text-xs">{s}</span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 pt-2">
              {stats.map((s, i) => (
                <motion.div key={i} className="glass-card p-3 text-center"
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 + i * 0.07 }} viewport={{ once: true }}>
                  <div className="text-lg mb-0.5">{s.icon}</div>
                  <div className="text-xl font-bold" style={{ color: "#06b6d4" }}>{s.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: "#64748b" }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
