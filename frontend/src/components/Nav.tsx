// import React from 'react'
import { darkModeIcon } from "../assets"
import { navLinks } from "../utils/constants"

type Props = {
    className?: string
    darkMode : boolean
    changeDarkMode : () => void
}

const Nav: React.FC<Props> = ({ darkMode, changeDarkMode }) => {
  return (
    <div className='flex font-sans flex-row justify-between items-center px-4 max-sm:px-2 py-2 mx-2 font-bold bg-black text-gray-200 rounded-md rounded-t-none'>
        <div className="flex flex-row gap-3">
            {/* Logo */}
            <div className="gap-3">
                <a className="flex flex-row items-center gap-2 flex-1" href="/">
                <img src="../../public/icon.png" alt="LLMchat" id="app-logo" width={40} height={40}/> <span className="max-sm:hidden block">LLMchat</span>
                </a>
            </div>
                <button onClick={changeDarkMode}><img src={darkMode ? `${darkModeIcon.dark}` : `${darkModeIcon.light}`} alt="Dark Mode" /></button>
        </div>

        <div>
            <div className="max-sm:hidden block">
                {navLinks.map((link) => (
                    <a key={link.href} href={link.href} className="mx-2">{link.title}</a>
                ))}
            </div>
            <img className="max-sm:block hidden" src="{hamburgerIcon}" alt="Menu" />
        </div>
    </div>
  )
}

export default Nav