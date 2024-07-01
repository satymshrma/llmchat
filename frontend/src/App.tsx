// import React from 'react'
import Nav from './components/Nav'

const App = () => {
  return (
    <>
    <main className='flex justify-center items-center bg-white h-screen w-screen flex-col hue-rotate-180 invert'>
      <div className="w-full"><Nav/></div>
      <section id='focus' className='p-2 border w-full container flex flex-1 justify-center items-center border-slate-gray mt-4 mx-2'>
        About
      </section>
      <footer className='w-full'>
        <div className="p-2 mt-1 mx-2">
          <p className='text-gray-500 text-xs font-mono'>© 2024 LLMchat. All rights reserved.</p>
        </div>
      </footer>
    </main>
    </>
  )
}

export default App