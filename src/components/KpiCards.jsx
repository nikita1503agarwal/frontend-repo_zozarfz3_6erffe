import React from 'react'
import { Info } from 'lucide-react'

const Card = ({ label, value, sub, truth = 'reconciled', accent = 'teal' }) => {
  const status = truth === 'reconciled' ? 'Reconciled ✓' : 'Needs review'
  const statusColor = truth === 'reconciled' ? 'text-teal-400' : 'text-amber-400'
  const ring = accent === 'violet' ? 'ring-violet-500/30' : 'ring-teal-500/30'
  const glow = accent === 'violet' ? 'shadow-violet-500/20' : 'shadow-teal-500/20'

  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur ring-1 ${ring} shadow-lg ${glow}`}>
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs text-white/60 flex items-center gap-1">
            {label}
            <Info size={14} className="opacity-60" />
          </div>
          <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
          {sub && <div className="text-xs text-white/60 mt-1">{sub}</div>}
        </div>
        <div className={`text-xs ${statusColor} font-medium`}>{status}</div>
      </div>
    </div>
  )
}

export default function KpiCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card label="Revenue (30d)" value="£482,900" sub="+12.4% vs last 30d" truth="reconciled" accent="teal" />
      <Card label="Gross Margin" value="58.2%" sub="COGS reconciled" truth="reconciled" accent="violet"/>
      <Card label="CAC" value="£22.50" sub="Meta + Google blended" truth="review" accent="teal"/>
      <Card label="LTV" value="£164" sub="12m cohort" truth="reconciled" accent="violet"/>
      <Card label="LTV:CAC" value="7.3x" sub="Healthy" truth="reconciled" accent="teal"/>
      <Card label="Valuation range" value="£6.8M–£8.9M" sub="85th percentile" truth="reconciled" accent="violet"/>
    </div>
  )
}
