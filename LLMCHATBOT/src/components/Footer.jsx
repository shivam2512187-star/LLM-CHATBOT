 import React from "react";
import { Send } from "lucide-react";

const Footer = ({ prompt, setprompt, handleGenerate }) => {
  return (
    <footer className="border-t border-slate-800 px-3 sm:px-6 lg:px-10 py-3 sm:py-5 bg-slate-950">
      <div className="mb-3">
        <button className="px-4 py-2 rounded-full border border-slate-600 text-xs sm:text-sm hover:bg-slate-800">
          Gemini Flash
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <input
          value={prompt}
          onChange={(e) => setprompt(e.target.value)}
          type="text"
          placeholder="Enter your prompt..."
          className="w-full min-w-0 h-12 sm:h-14 rounded-xl border border-slate-700 bg-slate-950 px-4 text-sm outline-none placeholder:text-slate-500 focus:border-blue-400"
        />

        <button
          onClick={handleGenerate}
          className="w-full sm:w-auto sm:px-6 h-12 sm:h-14 shrink-0 rounded-xl border border-slate-600  flex items-center justify-center gap-2 font-semibold text-sm hover:bg-slate-800"
        >
          <Send size={18} />
          GENERATE
        </button>
      </div>
    </footer>
  );
};

export default Footer;