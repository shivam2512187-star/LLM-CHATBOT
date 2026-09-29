import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Aside from './components/Aside'
import Body from './components/Body'
import Footer from './components/Footer'
 

const App = () => {
  return (
     <div className="min-h-screen bg-slate-800 text-white ">

      <Navbar />

      <div className="flex">

        <Aside />

        <main className=" flex-1 p-6">
          <Body/>
        </main>

 
   
 
      </div>

      <Footer/>

    </div>
  )
}

export default App
