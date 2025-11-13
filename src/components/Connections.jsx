import React from 'react'
import { ShoppingBag, Banknote, CreditCard, Megaphone, MousePointerClick } from 'lucide-react'

const providers = [
  { name: 'Shopify', icon: ShoppingBag, color: 'from-emerald-400 to-teal-400' },
  { name: 'Xero', icon: Banknote, color: 'from-sky-400 to-cyan-400' },
  { name: 'Stripe', icon: CreditCard, color: 'from-indigo-400 to-violet-400' },
  { name: 'Meta Ads', icon: Megaphone, color: 'from-pink-400 to-fuchsia-400' },
  { name: 'Google Ads', icon: MousePointerClick, color: 'from-yellow-400 to-amber-400' },
]

const Card = ({ name, Icon, color }) => (
  <button className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur text-left hover:bg-white/10 transition">
    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-slate-900 font-semibold`}> 
      <Icon size={18} />
    </div>
    <div className="mt-3 text-white">{name}</div>
    <div className="text-xs text-white/60">Connect via OAuth</div>
  </button>
)

export default function Connections() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm text-white/70">Data Connections</div>
        <div className="text-xs text-white/50">Secure • Read-only</div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {providers.map(p => (
          <Card key={p.name} name={p.name} Icon={p.icon} color={p.color} />
        ))}
      </div>
    </div>
  )
}
