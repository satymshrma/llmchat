import { useState } from "react";
import Nav from "./components/Nav";
import { About, Chat } from "./pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [darkMode, setdarkMode] = useState<boolean>(false); // #TODO: Redo this

  const [loginStatus, setloginStatus] = useState<boolean>(false); //Get this from cookies or APIs.

  return (
    <>
      <main
        className={`flex font-mono justify-between items-center bg-black text-white h-full min-h-screen w-full min-w-screen flex-col ${
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
          className="border-4 border-gray-600 max-w-[98%] w-full rounded-md flex flex-1 justify-stretch items-stretch mt-4"
        >
          <div className="min-w-full min-h-full">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </div>
        </section>

        <footer className="w-full h-fit">
          <div className="p-2 mt-1 mx-2 flex justify-between text-gray-500 text-xs">
            <p>LLMchat by Satyam Sharma</p>
            <button
              onClick={() => {}}
              className="hover:underline hover:text-blue-100"
            >
              <p>
                <a href="https://forms.gle/76ekqM5SkwPSEA566">Feedback</a>
              </p>
            </button>
          </div>
        </footer>
      </main>
    </>
  );
};

export default App;
