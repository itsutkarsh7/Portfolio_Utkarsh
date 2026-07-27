import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"

/* ─── CSS-only matrix rain — zero JS animation overhead ─── */
const MatrixRain = () => {
  const cols = useMemo(() =>
    [...Array(16)].map((_, i) => ({
      id: i,
      left: `${(i / 16) * 100 + 1}%`,
      char: ["0","1","{","}","[","]","=>","//"][i % 8],
      dur: `${(i % 4) + 3}s`,
      delay: `${(i * 0.4) % 5}s`,
    })), [])

  return (
    <>
      <style>{`
        @keyframes matrixFall {
          0%   { transform: translateY(-60px); opacity: 0; }
          10%  { opacity: 0.18; }
          90%  { opacity: 0.12; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .matrix-char {
          position: absolute;
          top: 0;
          font-family: monospace;
          font-size: 11px;
          color: #06b6d4;
          pointer-events: none;
          animation: matrixFall linear infinite;
          will-change: transform;
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {cols.map((c) => (
          <div key={c.id} className="matrix-char"
            style={{ left: c.left, animationDuration: c.dur, animationDelay: c.delay }}>
            {c.char}
          </div>
        ))}
      </div>
    </>
  )
}

/* ─── Typing terminal — batched, throttled ─── */
const CODE_LINES = [
  { text: "// Utkarsh Singh — Cybersecurity Portfolio", color: "#4b5563" },
  { text: "const analyst = {", color: "#f59e0b" },
  { text: "  role: 'SOC Analyst / GRC Analyst',", color: "#86efac" },
  { text: "  siem: ['Splunk', 'QRadar', 'Chronicle'],", color: "#06b6d4" },
  { text: "  frameworks: ['MITRE ATT&CK', 'NIST', 'ISO 27001'],", color: "#06b6d4" },
  { text: "  skills: ['Threat Hunting', 'IOC/TTP', 'Incident Response Playbooks'],", color: "#a78bfa" },
  { text: "  grc: ['PCI-DSS', 'OWASP', 'Risk Assessment'],", color: "#a78bfa" },
  { text: "  status: '✅ Immediate Joiner',", color: "#86efac" },
  { text: "};", color: "#f59e0b" },
  { text: "analyst.defend(); // Ready.", color: "#4b5563" },
]

const TypingCode = () => {
  const [visible, setVisible] = useState([])
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    if (lineIdx >= CODE_LINES.length) return
    const delay = 28 + Math.random() * 30 // 28–58ms — smooth but not burning CPU
    const t = setTimeout(() => {
      const line = CODE_LINES[lineIdx].text
      if (charIdx < line.length) {
        setVisible((prev) => {
          const next = [...prev]
          if (!next[lineIdx]) next[lineIdx] = { text: "", color: CODE_LINES[lineIdx].color }
          next[lineIdx] = { ...next[lineIdx], text: next[lineIdx].text + line[charIdx] }
          return next
        })
        setCharIdx((p) => p + 1)
      } else {
        setLineIdx((p) => p + 1)
        setCharIdx(0)
      }
    }, delay)
    return () => clearTimeout(t)
  }, [lineIdx, charIdx])

  return (
    <div className="w-full max-w-2xl mx-auto font-mono text-sm rounded-2xl overflow-hidden"
      style={{ background: "rgba(5,10,25,0.88)", border: "1px solid rgba(6,182,212,0.18)", backdropFilter: "blur(14px)" }}>
      {/* Title bar */}
      <div className="flex items-center px-4 py-2.5 gap-3"
        style={{ borderBottom: "1px solid rgba(6,182,212,0.1)", background: "rgba(0,0,0,0.25)" }}>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-70" />
        </div>
        <span className="text-xs" style={{ color: "#334155" }}>analyst.js</span>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: "pulse 2s infinite" }} />
          <span className="text-xs text-green-400">LIVE</span>
        </div>
      </div>
      {/* Code lines */}
      <div className="p-5 space-y-1 max-h-72 md:max-h-80 overflow-y-auto">
        {visible.map((l, i) => (
          <div key={i} className="flex items-start">
            <span className="w-6 text-right mr-4 flex-shrink-0 select-none"
              style={{ color: "#1e3a4a", fontSize: "12px", lineHeight: "1.7" }}>{i + 1}</span>
            <span style={{ color: l.color, lineHeight: "1.7", wordBreak: "break-all", fontSize: "13px" }}>
              {l.text}
              {i === lineIdx && (
                <span className="inline-block w-1.5 h-3.5 ml-0.5 align-middle"
                  style={{ background: "#06b6d4", animation: "blink 0.7s step-end infinite" }} />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const ROLES = ["SOC Analyst", "GRC Analyst", "Threat Hunter", "Incident Responder"]

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setRoleIdx((p) => (p + 1) % ROLES.length), 2500)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="home" className="min-h-screen w-full relative overflow-hidden flex items-center"
      style={{ background: "linear-gradient(135deg, #050a18 0%, #0a0f1e 55%, #0d0820 100%)" }}>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>

      <MatrixRain />

      {/* Static glow orbs — CSS only, no JS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute" style={{ top:"28%", left:"18%", width:300, height:300, borderRadius:"50%",
          background:"radial-gradient(circle,rgba(6,182,212,0.06) 0%,transparent 70%)" }} />
        <div className="absolute" style={{ bottom:"28%", right:"18%", width:260, height:260, borderRadius:"50%",
          background:"radial-gradient(circle,rgba(124,58,237,0.06) 0%,transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-24 text-center w-full">

        {/* Name */}
        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 tracking-tight"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <span style={{ background:"linear-gradient(135deg,#06b6d4 0%,#818cf8 50%,#a78bfa 100%)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
            Utkarsh Singh
          </span>
        </motion.h1>

        {/* Animated role */}
        <motion.div className="h-9 mb-3 flex items-center justify-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
          <span className="text-sm font-mono mr-2" style={{ color:"#475569" }}>$ whoami →</span>
          <AnimatePresence mode="wait">
            <motion.span key={roleIdx} className="text-lg md:text-xl font-semibold" style={{ color:"#06b6d4" }}
              initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28 }}>
              {ROLES[roleIdx]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p className="text-sm mb-8 max-w-lg mx-auto" style={{ color:"#64748b" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          Detecting threats. Mapping TTPs. Securing the enterprise.
        </motion.p>

        {/* Terminal — only mount after brief delay */}
        <motion.div className="mb-8"
          initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.5 }}>
          <TypingCode />
        </motion.div>

        {/* CTAs */}
        <motion.div className="flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
          {[
            { label:"View Projects", icon:"🔐", href:"#vault", cls:"btn-primary" },
            { label:"Contact Me",    icon:"📧", href:"#contact", cls:"btn-outline" },
          ].map((btn) => (
            <a key={btn.label} href={btn.href} className={`${btn.cls} flex items-center justify-center gap-2 text-sm`}
              onClick={(e) => { e.preventDefault(); document.querySelector(btn.href)?.scrollIntoView({ behavior:"smooth" }) }}>
              {btn.label} {btn.icon}
            </a>
          ))}
          <a href="https://drive.google.com/drive/folders/1E75M8Q5CgcqiMIiFSvhKbm-mgsB5Pr6B" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm px-6 py-3 rounded-xl font-semibold"
            style={{ background:"rgba(124,58,237,0.12)", border:"1px solid rgba(124,58,237,0.32)", color:"#a78bfa" }}>
            Resume 📄
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
