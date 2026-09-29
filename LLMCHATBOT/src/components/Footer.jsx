import React from 'react'
import { SendHorizontal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="    bg-slate-800 p-4 sm:p-6 lg:px-16 lg:py-5 ">

  
  <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between ">

    

    <p className="text-xs font-medium  text-slate-400">
      LIVE COMPARISON
    </p>

  </div>


  
  <div className="flex  gap-3 lg:flex-row ">

    <input
      placeholder="Enter your prompt and see three viewpoints..."
      className="min-h-20 flex-1 rounded-2xl border border-slate-700 bg-slate-950 p-4 text-sm text-white outline-none placeholder:text-slate-500 "
   />

    <button className="rounded-2xl border border-slate-700 bg-slate-950 px-8 py-4 font-semibold  text-white hover:bg-slate-800 flex items-center justify-between gap-4">
    <span> <SendHorizontal /></span> GENERATE
    </button>

  </div>

</footer>
  )
}

export default Footer
