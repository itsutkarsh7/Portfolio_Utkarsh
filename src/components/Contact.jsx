import { useState } from "react"
import { motion } from "framer-motion"

const contactLinks = [
  { icon: "📧", label: "Email", value: "utkarsh.singh1224@gmail.com", link: "mailto:utkarsh.singh1224@gmail.com", color: "#06b6d4" },
  { icon: "📱", label: "Phone", value: "+91 7007491114", link: "tel:+917007491114", color: "#10b981" },
  { icon: "💼", label: "LinkedIn", value: "utkarsh-singh-a76622255", link: "https://www.linkedin.com/in/utkarsh-singh-a76622255", color: "#0ea5e9" },
  { icon: "🐙", label: "GitHub", value: "itsutkarsh7", link: "https://github.com/itsutkarsh7", color: "#a78bfa" },
  { icon: "🌐", label: "Portfolio", value: "utkarshsinghportfolio.vercel.app", link: "https://utkarshsinghportfolio.vercel.app", color: "#f59e0b" },
  { icon: "📍", label: "Location", value: "Lucknow | Open to Noida, Gurugram, Delhi NCR, Bangalore", link: null, color: "#ec4899" },
]

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:utkarsh.singh1224@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Enquiry — " + form.name)}&body=${encodeURIComponent(`Hi Utkarsh,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`)}`
    window.open(mailto, "_blank")
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" style={{ background: "#060b16", padding: "80px 0" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
          <div className="accent-line" />
          <p className="mt-4 text-sm max-w-xl mx-auto" style={{ color: "#94a3b8" }}>
            Open to cybersecurity opportunities, SOC roles, and collaborations. Immediate joiner — Noida, Gurugram, Delhi NCR preferred. Also open to Bangalore, Hyderabad, Dubai & Saudi Arabia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-base font-semibold text-white mb-5">Contact Information</h3>
            <div className="space-y-3">
              {contactLinks.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }} viewport={{ once: true }}>
                  {c.link ? (
                    <a href={c.link} target="_blank" rel="noopener noreferrer"
                      className="glass-card flex items-center gap-4 p-4 block" style={{ textDecoration: "none" }}>
                      <span className="text-xl">{c.icon}</span>
                      <div>
                        <div className="text-xs mb-0.5" style={{ color: "#6b7280" }}>{c.label}</div>
                        <div className="text-sm font-medium" style={{ color: c.color }}>{c.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="glass-card flex items-center gap-4 p-4">
                      <span className="text-xl">{c.icon}</span>
                      <div>
                        <div className="text-xs mb-0.5" style={{ color: "#6b7280" }}>{c.label}</div>
                        <div className="text-sm font-medium" style={{ color: c.color }}>{c.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="glass-card p-6">
              <h3 className="text-base font-semibold text-white mb-5">Send a Message</h3>

              {sent && (
                <div className="mb-4 p-3 rounded-lg text-sm text-center font-medium"
                  style={{ background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.3)", color: "#06b6d4" }}>
                  ✅ Opening your email client...
                </div>
              )}

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {[{ name: "name", label: "Name", placeholder: "Your Name" },
                    { name: "email", label: "Email", placeholder: "your@email.com" }].map(f => (
                    <div key={f.name}>
                      <label className="block text-xs mb-1.5" style={{ color: "#94a3b8" }}>{f.label}</label>
                      <input type={f.name === "email" ? "email" : "text"} name={f.name}
                        value={form[f.name]} onChange={handleChange} placeholder={f.placeholder} required
                        className="w-full px-3 py-2.5 rounded-lg text-sm text-white outline-none transition-all"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(6,182,212,0.15)",
                          caretColor: "#06b6d4" }}
                        onFocus={e => e.target.style.borderColor = "rgba(6,182,212,0.5)"}
                        onBlur={e => e.target.style.borderColor = "rgba(6,182,212,0.15)"} />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "#94a3b8" }}>Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange}
                    placeholder="SOC Analyst Opportunity / Collaboration"
                    className="w-full px-3 py-2.5 rounded-lg text-sm text-white outline-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(6,182,212,0.15)" }}
                    onFocus={e => e.target.style.borderColor = "rgba(6,182,212,0.5)"}
                    onBlur={e => e.target.style.borderColor = "rgba(6,182,212,0.15)"} />
                </div>

                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "#94a3b8" }}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} required
                    placeholder="Your message here..."
                    className="w-full px-3 py-2.5 rounded-lg text-sm text-white outline-none resize-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(6,182,212,0.15)" }}
                    onFocus={e => e.target.style.borderColor = "rgba(6,182,212,0.5)"}
                    onBlur={e => e.target.style.borderColor = "rgba(6,182,212,0.15)"} />
                </div>

                <motion.button type="button" onClick={handleSubmit}
                  className="w-full btn-primary text-sm py-3"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  Send Message →
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div className="text-center mt-16 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="text-sm" style={{ color: "#4b5563" }}>
            Designed & Built by <span style={{ color: "#06b6d4" }}>Utkarsh Singh</span> · 2026
          </p>
        </motion.div>
      </div>
    </section>
  )
}
