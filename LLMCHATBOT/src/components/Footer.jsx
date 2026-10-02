 import React from "react";
import { Send } from "lucide-react";


const Footer = ( {prompt ,setprompt,handleGenerate}) => {
  return (
    <footer className="border-t border-slate-800 px-4 sm:px-6 lg:px-16 py-5 sm:py-6">

     
      <div className="mb-4">

        <button className="px-4 sm:px-5 py-2 rounded-full border border-slate-600 text-xs sm:text-sm hover:bg-slate-800">
          Gemini (Google)
        </button>

      </div>


    
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

        <input
         value={prompt}
        onChange={(e) => setprompt(e.target.value)}
         
        
          type="text"
          placeholder="Enter your prompt..."
          className="w-full h-14 sm:h-16 rounded-xl sm:rounded-2xl border border-slate-700 bg-slate-950 px-4 sm:px-5 text-sm sm:text-base outline-none placeholder:text-slate-500 focus:border-blue-400"
        />

        <button  onClick= {handleGenerate}
           
     className="w-full sm:w-auto sm:px-8 h-14 sm:h-16 rounded-xl sm:rounded-2xl border border-slate-600 bg-[#0b162d] flex items-center justify-center gap-2 font-semibold text-sm hover:bg-slate-800">

          <Send size={18} />

          GENERATE

        </button>

      </div>

    </footer>
  );
};

export default Footer;