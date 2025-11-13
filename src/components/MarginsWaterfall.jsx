import React from 'react'

export default function MarginsWaterfall() {
  const rows = [
    { label: 'Revenue', value: 100, color: 'from-teal-400 to-emerald-400' },
    { label: 'COGS', value: -42, color: 'from-slate-300 to-slate-400' },
    { label: 'Marketing', value: -18, color: 'from-violet-400 to-fuchsia-400' },
    { label: 'Overheads', value: -8, color: 'from-sky-400 to-blue-400' },
    { label: 'EBITDA', value: 32, color: 'from-amber-400 to-yellow-400' },
  ]

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="text-sm text-white/70 mb-3">Margins</div>
      <div className="space-y-3">
        {rows.map((r, i) => (
          <div key={i}>
            <div className="flex items-center justify-between text-xs text-white/60">
              <span>{r.label}</span>
              <span>{r.value > 0 ? '+' : ''}{r.value}%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <div className={`h-full ${r.value > 0 ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} ${r.color}`} style={{ width: `${Math.abs(r.value)}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
