import React from 'react'
import { Search } from 'lucide-react';
import { RotateCcwClock } from 'lucide-react';

const Aside = () => {
  return (
    <div>
      
      <aside className=" w-64      border-slate-900  p-5 ">

   
  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
    <span> <RotateCcwClock /></span>
    History
  </h2>

   
  <div className="border border-slate-700 rounded-full px-4 py-3 flex items-center gap-2 text-slate-500 mb-7 active:scale-95">
  <Search size={18} />

  <input
    type="text"
    placeholder="Search prompts..."
    className="bg-transparent outline-none w-full active:scale-95"
  />
</div>
 
   
  <div className="text-center text-slate-500 mt-5">
    No chat history yet
  </div>

</aside>
 

    </div>
  )
}

export default Aside
