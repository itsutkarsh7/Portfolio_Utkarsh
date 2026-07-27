import { motion } from "framer-motion"

const certs = [
  {
    name: "Security Analyst Level-1 (SAL-1)",
    issuer: "Security Blue Team",
    period: "Active",
    icon: "🔵",
    color: "#06b6d4",
    active: true,
    link: null,
  },
  {
    name: "Google Chronicle SIEM & SOAR",
    issuer: "Google / Coursera",
    period: "Active",
    icon: "🟡",
    color: "#f59e0b",
    active: true,
    link: null,
  },
  {
    name: "Google – Manage Security Risks",
    issuer: "Google / Coursera",
    period: "MAR – APR 2025",
    icon: "🔐",
    color: "#10b981",
    active: false,
    link: "https://www.coursera.org/account/accomplishments/verify/M38X6Q61BSGV",
  },
  {
    name: "Google – Foundations of Cybersecurity",
    issuer: "Google / Coursera",
    period: "FEB – APR 2025",
    icon: "🛡️",
    color: "#10b981",
    active: false,
    link: null,
  },
  {
    name: "Cisco – Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    period: "JUL – OCT 2023",
    icon: "🔗",
    color: "#7c3aed",
    active: false,
    link: null,
  },
  {
    name: "IBM – Cloud Computing & DevOps",
    issuer: "IBM / Coursera",
    period: "MAY – JUL 2025",
    icon: "☁️",
    color: "#3b82f6",
    active: false,
    link: null,
  },
]

export default function Certificates() {
  return (
    <section id="certificates" style={{ background: "#0a0f1e", padding: "90px 0" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 20px" }}>
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs font-mono mb-2" style={{ color: "#06b6d4", letterSpacing: "0.15em" }}>// CREDENTIALS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Certifications</h2>
          <div className="accent-line" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, i) => {
            const Inner = (
              <motion.div
                className="glass-card p-5 relative overflow-hidden h-full"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }} viewport={{ once: true }}
                whileHover={{ y: -4 }}>
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, ${c.color}, transparent)` }} />

                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{c.icon}</span>
                  <div className="flex items-center gap-1.5">
                    <motion.div className="w-2 h-2 rounded-full"
                      style={{ background: c.active ? "#22c55e" : "#10b981" }}
                      animate={c.active ? { opacity: [1, 0.4, 1] } : {}}
                      transition={{ duration: 1.5, repeat: Infinity }} />
                    <span className="text-xs" style={{ color: c.active ? "#22c55e" : "#10b981" }}>
                      {c.active ? "Active" : "Completed"}
                    </span>
                  </div>
                </div>

                <h3 className="font-semibold text-white text-sm leading-snug mb-1">{c.name}</h3>
                <p className="text-xs mb-1" style={{ color: c.color }}>{c.issuer}</p>
                <p className="text-xs" style={{ color: "#4b5563" }}>{c.period}</p>

                {c.link && (
                  <p className="text-xs mt-3" style={{ color: "#06b6d4" }}>Verify ↗</p>
                )}
              </motion.div>
            )

            return c.link ? (
              <a key={i} href={c.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
                {Inner}
              </a>
            ) : (
              <div key={i}>{Inner}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
