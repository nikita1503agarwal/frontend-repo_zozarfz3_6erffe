import React from 'react'

export default function VarianceChart() {
  // Simple visual: two bars with tiny delta
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm text-white/70">Shopify vs Accounting (30d)</div>
        <div className="text-xs text-teal-400">Reconciled ✓</div>
      </div>
      <div className="space-y-3">
        <div>
          <div className="flex items-center justify-between text-xs text-white/60"><span>Shopify</span><span>£483k</span></div>
          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-[96%] bg-gradient-to-r from-teal-400 to-emerald-400" />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between text-xs text-white/60"><span>Accounting</span><span>£482.9k</span></div>
          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-[95.8%] bg-gradient-to-r from-violet-400 to-fuchsia-400" />
          </div>
        </div>
        <div className="text-xs text-white/50">Variance: £100 (0.02%)</div>
      </div>
    </div>
  )
}
