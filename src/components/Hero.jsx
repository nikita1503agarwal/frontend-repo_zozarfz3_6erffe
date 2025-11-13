import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero({ productName }) {
  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-900/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Calm intelligence for D2C finance</span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            {productName}: your single source of truth
          </h1>
          <p className="mt-5 text-white/70 text-lg max-w-xl">
            Connect Shopify, accounting, payments, and ads. We reconcile the differences and give you one trusted number for revenue, margin, CAC, and valuation.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <button className="pointer-events-auto rounded-xl bg-gradient-to-r from-teal-400 to-violet-500 px-4 py-2.5 text-slate-900 font-semibold shadow-lg shadow-violet-500/20">Start free trial</button>
            <button className="pointer-events-auto rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white/80 hover:text-white hover:bg-white/10 transition">See how it works</button>
          </div>
        </div>
      </div>
    </section>
  )
}
