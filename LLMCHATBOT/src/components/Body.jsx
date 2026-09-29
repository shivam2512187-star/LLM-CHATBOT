import React from 'react'
import { Copy } from 'lucide-react';

const Body = () => {
  return (
   
      
    <div className=" p-4 sm:p-6 lg:p-8">

  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3  ">

    
    <div className="h-120 rounded-3xl border border-slate-800 bg-slate-900  sm:p-6 ">
      <h2 className="text-xl  flex justify-between font-bold text-white sm:text-2xl ">
        Llama
        <span className='  h-10 w-10 rounded-full border-2 border-slate-800 flex justify-center items-center'> <Copy /> </span>
      </h2>
 
    

      <p className="mt-1 text-xs   text-slate-400">
        GROQ / META
      </p>

      <div className="mt-8 text-slate-200">
        Llama response will appear here...
      </div>
    </div>

   
    <div className="min-h-120 rounded-3xl border border-slate-800 bg-slate-900   sm:p-6">
      <h2 className="text-xl font-bold flex justify-between text-white sm:text-2xl">
        Gemini
         <span className='  h-10 w-10 rounded-full border-2 border-slate-800 flex justify-center items-center'> <Copy /> </span>
       
      </h2>

      <p className="mt-1 text-xs   text-slate-400">
        GOOGLE
      </p>

      <div className="mt-8 text-slate-200">
        Gemini response will appear here...
      </div>
    </div>
 
    
    <div className="min-h-120 rounded-3xl border border-slate-800  bg-slate-900   sm:p-6">
      <h2 className="text-xl flex justify-between font-bold text-white sm:text-2xl">
        Cohere
         <span className='  h-10 w-10 rounded-full border-2 border-slate-800 flex justify-center items-center'> <Copy /> </span>
      </h2>

      <p className="mt-1 text-xs tracking-[3px] text-slate-400">
        Cohere
      </p>
  
      <div className="mt-8 text-slate-200">
        Qwen response will appear here...
      </div>
    </div>

 

  </div>



</div>
     
  )
}

export default Body
