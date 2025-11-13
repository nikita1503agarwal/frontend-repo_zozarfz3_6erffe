import React from 'react'
import { CheckCircle2, CircleDashed, ArrowRight } from 'lucide-react'

const Step = ({ title, desc, done }) => (
  <div className="flex items-start gap-3">
    {done ? (
      <CheckCircle2 className="text-teal-400 mt-0.5" size={18} />
    ) : (
      <CircleDashed className="text-white/40 mt-0.5" size={18} />
    )}
    <div>
      <div className="text-sm text-white">{title}</div>
      <div className="text-xs text-white/60">{desc}</div>
    </div>
  </div>
)

export default function ReconciliationStepper() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="text-sm text-white/70 mb-3">Reconciliation</div>
      <div className="grid md:grid-cols-3 gap-4">
        <Step title="Import Shopify" desc="Pulled orders & payouts" done />
        <Step title="Import Xero" desc="Sales & bank feed" done />
        <Step title="Reconcile" desc="Auto-matched, 3 deltas flagged" />
      </div>
      <div className="mt-4">
        <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 to-violet-500 px-3 py-2 text-slate-900 text-sm font-semibold">
          Approve <ArrowRight size={16} />
        </button>
      </div>
    </div>
  )
}
