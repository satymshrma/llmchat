import { useState } from "react";
import Nav from "./components/Nav";
import { About } from "./pages";

const App = () => {
  const [darkMode, setdarkMode] = useState<boolean>(false); // #TODO: Redo this

  const [loginStatus, setloginStatus] = useState<boolean>(false); //Get this from cookies or APIs.

  return (
    <>
      <main
        className={`flex justify-between items-center bg-black text-white h-screen w-screen flex-col ${
          darkMode ? `hue-rotate-180 invert` : ""
        }`}
      >
        {/* Navigation bar */}
        <nav className="w-full top-0">
          <Nav
            loginStatus={loginStatus}
            darkMode={darkMode}
            changeDarkMode={() => setdarkMode(!darkMode)}
          />
        </nav>

        {/* Main Section */}
        <section
          id="focus"
          className="p-2 border-8 w-full h-full rounded-md flex  justify-center items-center border-slate-gray mt-4 mx-2"
        >
          <About />
        </section>

        <footer className="w-full">
          <div className="p-2 mt-1 mx-2 flex justify-between text-gray-500 text-xs font-mono">
            <p>© 2024 LLMchat. All rights reserved.</p>
            <button className="hover:underlinehover:text-blue-500">
              Feedback
            </button>
          </div>
        </footer>
      </main>
    </>
  );
};

export default App;
