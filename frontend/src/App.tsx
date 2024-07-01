import { useState } from 'react'
import Nav from './components/Nav'
import {About} from './pages'

const App = () => {

  const [darkMode, setdarkMode] = useState<boolean>(true)
  return (
    <>
    <main className={`flex justify-between items-center bg-white h-full w-full flex-col ${darkMode ?`hue-rotate-180 invert`:''}`}>

      {/* Navigation bar */}
      <nav className="w-full fixed top-0"><Nav darkMode={darkMode} changeDarkMode={() => setdarkMode(!darkMode)} /></nav>

      {/* Main Section */}
      <section id='focus' className='p-2 border w-full h-svh container flex justify-center items-center border-slate-gray mt-4 mx-2'>

        <About/>
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