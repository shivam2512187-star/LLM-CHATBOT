 import React from "react";
import { Search, RotateCcwClock } from "lucide-react";

const Aside = ({ history, onSelectChat }) => {
  return (
    <aside className="w-64 h-screen shrink-0 sticky top-0 border-r border-slate-900 text-white flex flex-col p-5">

      {/* History Heading */}
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2 shrink-0">
        <RotateCcwClock />
        History
      </h2>

      {/* Search Box */}
      <div className="border border-slate-700 rounded-full px-4 py-3 flex items-center gap-2 text-slate-500 mb-5 shrink-0">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search prompts..."
          className="bg-transparent outline-none w-full text-white"
        />
      </div>

      {/* Scrollable History List */}
      <div className="flex-1 min-h-0 overflow-y-auto flex flex-col gap-3 pr-2">
        {Array.isArray(history) && history.length > 0 ? (
          history.map((chat) => (
            <button
              key={chat.id}
              onClick={() => onSelectChat(chat)}
              className="w-full text-left p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-sm  shrink-0"
            >
              {chat.prompt}
            </button>
          ))
        ) : (
          <p className="text-center text-slate-500 mt-5">
            No chat history yet
          </p>
        )}
      </div>
    </aside>
  );
};

export default Aside;