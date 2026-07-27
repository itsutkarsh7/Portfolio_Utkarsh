import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const NAV_ITEMS = [
  { name: "Home",         href: "#home" },
  { name: "About",        href: "#about" },
  { name: "Skills",       href: "#skills" },
  { name: "Experience",   href: "#experience" },
  { name: "Projects",     href: "#vault" },
  { name: "Certs",        href: "#certificates" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact",      href: "#contact" },
]

export default function Navigation() {
  const [scrolled, setScrolled]         = useState(false)
  const [active, setActive]             = useState("home")
  const [mobileOpen, setMobileOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const ids = NAV_ITEMS.map(n => n.href.slice(1))
      const cur = ids.find(id => {
        const el = document.getElementById(id)
        if (!el) return false
        const r = el.getBoundingClientRect()
        return r.top <= 110 && r.bottom >= 110
      })
      if (cur) setActive(cur)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const goto = (href) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[100]"
      style={{
        background:   scrolled ? "rgba(6,11,22,0.96)" : "rgba(6,11,22,0.75)",
        backdropFilter: "blur(18px)",
        borderBottom: scrolled ? "1px solid rgba(6,182,212,0.12)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4">

          {/* Logo — no emoji, solid color */}
          <button
            className="font-bold text-lg tracking-wide"
            style={{ color: "#06b6d4", background: "none", border: "none", cursor: "pointer" }}
            onClick={() => goto("#home")}>
            Utkarsh Singh
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.href.slice(1)
              return (
                <a key={item.name} href={item.href}
                  onClick={(e) => { e.preventDefault(); goto(item.href) }}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    color:      isActive ? "#06b6d4"                    : "#64748b",
                    background: isActive ? "rgba(6,182,212,0.1)"        : "transparent",
                    border:     isActive ? "1px solid rgba(6,182,212,0.28)" : "1px solid transparent",
                  }}>
                  {item.name}
                </a>
              )
            })}
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-xl px-2 py-1"
            style={{ color: "#06b6d4", background: "none", border: "none", cursor: "pointer" }}
            onClick={() => setMobileOpen(o => !o)}>
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            style={{ background: "rgba(6,11,22,0.98)", borderTop: "1px solid rgba(6,182,212,0.1)" }}
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}>
            <div className="px-4 py-3 space-y-1">
              {NAV_ITEMS.map((item) => (
                <a key={item.name} href={item.href}
                  onClick={(e) => { e.preventDefault(); goto(item.href) }}
                  className="block px-4 py-3 rounded-lg text-sm font-medium"
                  style={{ color: active === item.href.slice(1) ? "#06b6d4" : "#64748b" }}>
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
