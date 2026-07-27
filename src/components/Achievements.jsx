import { motion } from "framer-motion"

const achievements = [
  {
    icon: "🏆",
    title: "CSIC 1.0 National Finalist",
    org: "MeitY / DSCI",
    date: "February 2026",
    desc: "Selected as a National Finalist at the Cyber Security Innovation Challenge (CSIC 1.0) organized by the Ministry of Electronics & Information Technology (MeitY) and Data Security Council of India (DSCI).",
    color: "#f59e0b",
    highlight: true,
  },
  {
    icon: "📄",
    title: "Published Research — NeuroText",
    org: "ICCISCS 2026",
    date: "2026",
    desc: "Co-authored and published 'NeuroText' — a Flask-based multilingual OCR and translation application — accepted at the International Conference on Computing, Information Security and Computer Science (ICCISCS 2026).",
    color: "#06b6d4",
    highlight: true,
  },
  {
    icon: "🎓",
    title: "B.Tech Computer Science",
    org: "AKGEC, Ghaziabad",
    date: "Class of 2026",
    desc: "Graduated from Ajay Kumar Garg Engineering College, Ghaziabad with a focus on cybersecurity, machine learning security tooling, and software development.",
    color: "#7c3aed",
  },
  {
    icon: "⚽",
    title: "2nd Position — Reliance Foundation Football",
    org: "Reliance Foundation",
    date: "2023",
    desc: "Secured 2nd position at the Reliance Foundation Youth Sports football tournament, demonstrating teamwork and competitive spirit.",
    color: "#10b981",
  },
]

export default function Achievements() {
  return (
    <section id="achievements" style={{ background: "#0a0f1e", padding: "80px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Achievements</h2>
          <div className="accent-line" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((a, i) => (
            <motion.div key={i} className="glass-card p-6 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
              {a.highlight && (
                <div className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-bold"
                  style={{ background: `${a.color}20`, color: a.color, border: `1px solid ${a.color}40` }}>
                  ★ Key Achievement
                </div>
              )}
              {/* Left color bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl" style={{ background: a.color }} />

              <div className="flex items-start gap-4 pl-2">
                <div className="text-3xl flex-shrink-0">{a.icon}</div>
                <div>
                  <h3 className="font-semibold text-white text-base">{a.title}</h3>
                  <div className="flex gap-3 mt-1 mb-3 text-xs" style={{ color: "#94a3b8" }}>
                    <span style={{ color: a.color }}>{a.org}</span>
                    <span>{a.date}</span>
                  </div>
                  <p className="text-sm" style={{ color: "#cbd5e1", lineHeight: "1.7" }}>{a.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
