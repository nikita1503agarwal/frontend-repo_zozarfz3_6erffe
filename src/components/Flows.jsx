import React from 'react'
import { Database, Equal, BarChart3 } from 'lucide-react'

export default function Flows() {
  const Item = ({ icon: Icon, title, desc }) => (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 rounded-xl bg-white/5 ring-1 ring-white/10 p-2"><Icon size={16} className="text-white/80"/></div>
      <div>
        <div className="text-sm text-white">{title}</div>
        <div className="text-xs text-white/60">{desc}</div>
      </div>
    </div>
  )

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="text-sm text-white/70 mb-3">How it works</div>
      <div className="grid sm:grid-cols-3 gap-4">
        <Item icon={Database} title="Data Sources" desc="Shopify, Xero/QB, Stripe, Meta, Google" />
        <Item icon={Equal} title="Reconciliation" desc="Auto-matching, variance waterfall" />
        <Item icon={BarChart3} title="Investor-Ready" desc="Dashboard, valuation, export pack" />
      </div>
    </div>
  )
}
