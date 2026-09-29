import React from 'react'
 import { Moon } from 'lucide-react';
 import { GitCompareArrows } from 'lucide-react';
 import { Triangle } from 'lucide-react';

const Navbar = () => {
  return (
   
          <div className="  bg-slate-800 text-white">

   
      <header className=" h-24  flex items-center justify-between px-8">

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-cyan-500 flex items-center justify-center ">
         <Triangle />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-cyan-400">
              Trinity
            </h1>

            <p className="text-xs   text-slate-400">
              MULTI-MODEL CONSOLE
            </p>
          
          </div>

        

        </div>

        <div className="flex gap-4">
          <button className="w-11 h-11 rounded-full border   flex  items-center justify-center  border-slate-900">
          <Moon />
          </button>

          <button className="w-11 h-11 rounded-full border flex  items-center justify-center   border-slate-700">
          <GitCompareArrows />
          </button>
        </div>

       

      </header>

      <hr className="border-slate-700" />
    </div>
  )
}

export default Navbar
