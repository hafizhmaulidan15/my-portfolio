import { NavBar } from "@/components/ui/tubelight-navbar"

export default function TubelightDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: 'bi-house' },
    { name: 'About', url: '/about', icon: 'bi-person' },
    { name: 'Achievements', url: '/achievements', icon: 'bi-award' },
    { name: 'Resume', url: '/contact', icon: 'bi-file-text' }
  ]

  return (
    <div className="relative min-h-[600px] w-full bg-background rounded-2xl border border-border overflow-hidden">
      <div className="p-8 pt-16">
        <h3 className="font-display text-2xl font-bold tracking-tight">Tubelight Navbar Demo</h3>
        <p className="text-sm text-text-secondary mt-2 max-w-[60ch]">Floating pill with backdrop-blur and spring lamp effect. Desktop shows labels, mobile shows icons. Active tab has tubelight glow.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-surface border border-border">
            <p className="font-mono text-xs text-text-tertiary">Responsive</p>
            <p className="text-sm mt-1">Bottom on mobile (mb-6), top on desktop (sm:pt-6). Backdrop-blur pill.</p>
          </div>
          <div className="p-4 rounded-xl bg-surface border border-border">
            <p className="font-mono text-xs text-text-tertiary">Motion</p>
            <p className="text-sm mt-1">Framer Motion spring (stiffness 300, damping 30) + lamp glow blur.</p>
          </div>
        </div>
      </div>
      <NavBar items={navItems} />
    </div>
  )
}
