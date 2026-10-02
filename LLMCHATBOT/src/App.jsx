 import React, { useState,useEffect } from 'react'
import './App.css'
import { askGemini } from './api/gemini'

import Navbar from './components/Navbar'
import Aside from './components/Aside'
import Body from './components/Body'
import Footer from './components/Footer'

const App = () => {

  const [prompt, setprompt] = useState('')
  const [response, setResponse] = useState('')
 const [history, setHistory] = useState(() => {
  try {
    const savedHistory = localStorage.getItem("chatHistory");
    const parsedHistory = savedHistory
      ? JSON.parse(savedHistory)
      : [];

    return Array.isArray(parsedHistory) ? parsedHistory : [];
  } catch (error) {
    console.error("History loading error:", error);
    return [];
  }
});

useEffect(() => {
  localStorage.setItem("chatHistory", JSON.stringify(history));
}, [history]);


 const handleGenerate = async () => {
  console.log("Prompt:", prompt)
  setprompt('')
   if (!prompt.trim()) return;

  try {
  const response = await askGemini(prompt)

      setResponse(response);

    const newChat = {
      id: Date.now(),
      prompt: prompt,
      response: response,
    }
setHistory((prev) => [newChat, ...prev]);
 setprompt("");
  }
  catch (error) {
    alert(error.message);
  }
}
   


   
  return (
<div className="bg-slate-950 min-h-screen text-white">
  <Navbar />

  <div className="flex">
    <div className="hidden md:block">
      <Aside
        history={history}
        onSelectChat={(chat) => {
          setprompt(chat.prompt);
          setResponse(chat.response);
        }}
      />
    </div>

    <main className="flex-1 min-w-0 p-3 sm:p-5 lg:p-10 pb-40">
      <Body response={response} />
    </main>
  </div>

  <div className="fixed bottom-0 left-0 md:left-64 right-0 z-50 bg-slate-950">
    <Footer
      prompt={prompt}
      setprompt={setprompt}
      handleGenerate={handleGenerate}
    />
  </div>
</div>
   
  )
}

export default App