import React from 'react'

export default function Logo({ name = 'Truth for D2C', className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 shadow-inner shadow-cyan-500/20 ring-1 ring-white/20">
        <div className="absolute inset-[2px] rounded-[10px] bg-gradient-to-br from-slate-900 to-slate-800" />
        <div className="absolute inset-0 grid place-items-center text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 font-semibold">
          ✓
        </div>
      </div>
      <div className="leading-tight">
        <div className="text-white/90 font-semibold tracking-tight text-base">
          {name}
        </div>
        <div className="text-xs text-white/60">Truth layer for D2C</div>
      </div>
    </div>
  )
}
