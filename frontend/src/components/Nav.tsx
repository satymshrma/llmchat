// import React from 'react'
import { darkModeIcon } from "../assets";
import { navLinks } from "../utils/constants";
import UserMenu from "./UserMenu";

type Props = {
  className?: string;
  darkMode: boolean;
  loginStatus: boolean;
  changeDarkMode: () => void;
};

const Nav: React.FC<Props> = ({ darkMode, changeDarkMode, loginStatus }) => {
  return (
    <div className="flex font-sans flex-row justify-between items-center px-4 max-sm:px-2 py-2 mx-2 font-bold border-2 border-t-0 border-gray-400 bg-black text-gray-200 rounded-lg rounded-t-none">
      <div className="flex flex-row gap-3">
        {/* Logo */}
        <div className="gap-3">
          <a className="flex flex-row items-center gap-2 flex-1" href="/">
            <img
              src="../../public/icon.png"
              alt="LLMchat"
              id="app-logo"
              width={40}
              height={40}
            />{" "}
            <span className="max-sm:hidden block">LLMchat</span>
          </a>
        </div>

        {/* Darkmode Button HIDDEN RN. Will remake this. #TODO */}
        <button className="hidden" onClick={changeDarkMode}>
          <img
            src={darkMode ? `${darkModeIcon.dark}` : `${darkModeIcon.light}`}
            alt="Dark Mode"
          />
        </button>
      </div>

      <div>
        {/*Navigation links and Menu*/}
        <div className="max-sm:hidden flex-row flex justify-evenly items-center">
          <div className="border p-1 px-2 border-slate-400 rounded">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="mx-2">
                {link.title}
              </a>
            ))}
          </div>
          <div className="mx-4 bg-blue-400 p-1 px-2 rounded">
            {!loginStatus && <a href="/login">Login</a>}
            {loginStatus && <UserMenu />}
          </div>
        </div>
        <img className="max-sm:block hidden" src="{hamburgerIcon}" alt="Menu" />
      </div>
    </div>
  );
};

export default Nav;
