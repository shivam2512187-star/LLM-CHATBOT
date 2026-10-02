 import React from 'react'
import { Copy } from 'lucide-react'
import ReactMarkdown from "react-markdown";

const Body = ({ response }) => {
  return (
    <div className="w-full p-4 sm:p-6 lg:p-8">

      <div className="w-full">

        <div className="w-full min-h-96 rounded-3xl border border-slate-800 bg-slate-900 p-5 sm:p-6">

          <h2 className="flex justify-between text-xl font-bold text-white sm:text-2xl">
            <span>✦ Gemini</span>

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-slate-800">
              <Copy />
            </span>
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            GOOGLE
          </p>

          <div className="mt-8 max-h-80 overflow-y-auto pr-3 text-slate-200">
       {response ? (
            <ReactMarkdown>{response}</ReactMarkdown>
          ) : (
            "Gemini response will appear here..."
          )} 
          </div>

        </div>

      </div>

    </div>
  )
}

export default Body