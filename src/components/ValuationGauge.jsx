import React from 'react'

export default function ValuationGauge() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm text-white/70">Valuation</div>
        <div className="text-xs text-white/60">Percentile: 85th</div>
      </div>
      <div className="relative h-24">
        <div className="absolute inset-x-0 bottom-0 h-3 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-[68%] bg-gradient-to-r from-teal-400 via-emerald-400 to-amber-400" />
        </div>
        <div className="absolute left-[60%] -top-1 translate-x-[-50%]">
          <div className="rounded-xl bg-white/10 border border-white/10 px-2 py-1 text-xs text-white/80">£6.8M–£8.9M</div>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:bg-white/10 transition text-sm">Benchmark details</button>
        <button className="rounded-xl bg-gradient-to-r from-teal-400 to-violet-500 px-3 py-2 text-slate-900 text-sm font-semibold">Download Investor Pack</button>
      </div>
    </div>
  )
}
