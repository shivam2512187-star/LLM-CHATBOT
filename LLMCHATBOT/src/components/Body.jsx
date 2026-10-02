 import React from "react";
import { Copy } from "lucide-react";

const Body = ({ response }) => {
  return (
    <div className="w-full min-w-0">
      <div className="w-full min-h-96 rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
        <h2 className="flex justify-between items-center gap-2 text-lg sm:text-2xl font-bold text-white">
          <span>✦ Gemini Flash</span>

          <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-700">
            <Copy size={17} />
          </button>
        </h2>

        <p className="mt-1 text-xs text-slate-400">
          GOOGLE
        </p>

        <div className="mt-6 max-h-80 overflow-y-auto pr-2 text-sm sm:text-base text-slate-200 whitespace-pre-wrap ">
          {response || "Gemini response will appear here..."}
        </div>
      </div>
    </div>
  );
};

export default Body;