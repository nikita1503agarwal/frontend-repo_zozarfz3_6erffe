import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import KpiCards from './components/KpiCards'
import VarianceChart from './components/VarianceChart'
import ReconciliationStepper from './components/ReconciliationStepper'
import Flows from './components/Flows'
import Connections from './components/Connections'
import MarginsWaterfall from './components/MarginsWaterfall'
import ValuationGauge from './components/ValuationGauge'

export default function App() {
  const PRODUCT_NAME = 'Truth for D2C'

  return (
    <div className="min-h-screen bg-slate-950">
      <NavBar productName={PRODUCT_NAME} />

      <Hero productName={PRODUCT_NAME} />

      <main className="relative z-10 -mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 space-y-4">
              <KpiCards />
              <VarianceChart />
              <ReconciliationStepper />
            </div>
            <div className="space-y-4">
              <Connections />
              <MarginsWaterfall />
              <ValuationGauge />
            </div>
          </section>

          <section className="mt-6">
            <Flows />
          </section>

          <footer className="py-10 text-center text-white/40 text-sm">
            Finally, your numbers make sense.
          </footer>
        </div>
      </main>
    </div>
  )
}
