import { useEffect, useState } from "react";
import ChatWindow from "../components/ChatWindow";
import IndividualChats from "../components/IndividualChats";
// import Settings from "../components/Settings";

interface Chat {
  id: number;
  title: string;
  messages: { sender: "user" | "system"; body: string }[];
}

const Chat = () => {
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const savedChats = JSON.parse(localStorage.getItem("chats") || "[]");
    setChats(savedChats);
  }, []);

  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: `New Chat ${chats.length + 1}`,
      messages: [],
    };
    const updatedChats = [...chats, newChat];
    setChats(updatedChats);
    localStorage.setItem("chats", JSON.stringify(updatedChats));
  };

  return (
    <>
      <div className="flex w-full h-full">
        <aside className="border-r-slate-800 flex flex-col items-start border-r-2 border-dotted max-sm:hidden w-1/5">
          <div className="pb-4 flex justify-between px-3 mt-4  text-xl w-full h-fit border-b-2 border-gray-800">
            <p>Chats</p>
            <button
              onClick={createNewChat}
              className="w-fit h-fit px-2 rounded-sm bg-blue-400"
            >
              +
            </button>
          </div>
          <div className="p-2 h-full max-w-full">
            <IndividualChats chats={chats} />
          </div>
          <div
            id="settings"
            className="border-t-2 border-gray-800 w-full flex justify-center"
          >
            {/* <Settings /> */}
          </div>
        </aside>

        <div className="w-4/5 p-2 m-2 min-h-full flex-col flex flex-1 justify-between items-stretch">
          <ChatWindow />
        </div>
      </div>
    </>
  );
};

export default Chat;
