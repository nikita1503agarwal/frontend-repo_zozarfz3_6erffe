import React from 'react'
import { Menu, Settings, Download, LogIn } from 'lucide-react'
import Logo from './Logo'

export default function NavBar({ productName = 'Truth for D2C' }) {
  return (
    <div className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between rounded-2xl bg-white/5 backdrop-blur border border-white/10 px-4 py-3">
          <div className="flex items-center gap-3">
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 transition"><Menu size={18} /></button>
            <Logo name={productName} />
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"><Settings size={16}/> Settings</button>
            <button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"><Download size={16}/> Download Pack</button>
            <button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm bg-gradient-to-r from-teal-400 to-violet-500 text-slate-900 font-semibold shadow-lg shadow-violet-500/20"> <LogIn size={16}/> Sign in</button>
          </div>
        </div>
      </div>
    </div>
  )
}
