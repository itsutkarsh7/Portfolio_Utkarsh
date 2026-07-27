import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const STATUSES = [
  "Initializing security modules...",
  "Loading threat intelligence...",
  "Mounting SIEM dashboard...",
  "Access granted ✅",
]

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const iv = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(iv); return 100 }
        return p + 2
      })
    }, 24)
    return () => clearInterval(iv)
  }, [])

  const statusIdx = Math.min(Math.floor((progress / 100) * STATUSES.length), STATUSES.length - 1)

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50"
      style={{ background: "linear-gradient(135deg,#050a18,#0a0f1e,#0d0820)" }}>

      {/* CSS-only subtle grid — no JS animation */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage:"linear-gradient(rgba(6,182,212,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(6,182,212,0.5) 1px,transparent 1px)",
          backgroundSize:"40px 40px" }} />

      <div className="text-center z-10 px-6 max-w-xs w-full">
        {/* Avatar */}
        <motion.div className="mb-6"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <div className="w-18 h-18 w-[72px] h-[72px] mx-auto rounded-full flex items-center justify-center text-xl font-bold text-white"
            style={{ background:"linear-gradient(135deg,#06b6d4,#7c3aed)", boxShadow:"0 0 32px rgba(6,182,212,0.25)" }}>
            US
          </div>
        </motion.div>

        <motion.h2 className="text-lg font-bold text-white mb-1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          Utkarsh Singh
        </motion.h2>

        <motion.p className="text-xs mb-8 font-mono" style={{ color:"#06b6d4" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
          SOC Analyst · GRC Analyst
        </motion.p>

        {/* Progress */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>
          <div className="flex justify-between text-xs mb-2" style={{ color:"#334155" }}>
            <span style={{ color:"#06b6d4" }}>{STATUSES[statusIdx]}</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-1 rounded-full overflow-hidden" style={{ background:"rgba(255,255,255,0.06)" }}>
            <div className="h-full rounded-full transition-all duration-200"
              style={{ width:`${progress}%`, background:"linear-gradient(90deg,#06b6d4,#7c3aed)" }} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
