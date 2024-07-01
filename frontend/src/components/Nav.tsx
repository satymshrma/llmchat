// import React from 'react'

type Props = {
    className?: string
}

const Nav: React.FC<Props> = ({ }) => {
  return (
    <div className='flex font-sans flex-row justify-between items-center px-6 py-2 mx-2 font-bold bg-black text-gray-200 rounded-md rounded-t-none'>
        {/* Logo */}
        <a className="flex flex-row items-center gap-2 flex-1" href="/">
        <img src="../../public/icon.png" alt="LLMchat" id="app-logo" width={40} height={40}/> <span className="max-sm:hidden block">LLMchat</span> 
        </a>

        <div>
            <span className="max-sm:hidden block">Navelements</span>
            <img className="max-sm:block hidden" src="{hamburgerIcon}" alt="Menu" />
        </div>
    </div>
  )
}

export default Nav