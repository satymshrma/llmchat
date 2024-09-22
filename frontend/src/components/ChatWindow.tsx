import ChatWindowInner, { ChatWindowInnerProps } from "./ChatWindowInner";

const llmChatData: ChatWindowInnerProps[] = [
  { sender: "user", body: "Hello, how are you?" },
  {
    sender: "system",
    body: "I'm doing well, thank you for asking. How can I help you today?",
  },
  { sender: "user", body: "Can you tell me a joke?" },
  {
    sender: "system",
    body: "Sure, here's a joke: Why did the chicken cross the road? To get to the other side!",
  },
  { sender: "user", body: "That's a classic! Do you have any other jokes?" },
];

const ChatWindow = () => {
  return (
    <>
      <div className="w-full h-full overflow-y-scroll">
        <ChatWindowInner llmChatData={llmChatData} />
      </div>

      <div className="flex">
        <input
          className="w-full h-fit border-slate-400 border rounded-lg bg-inherit text-white p-2 my-3"
          placeholder="Chat here..."
        ></input>
        <button type="submit">
          <div className="w-fit h-fit ml-2 bg-cyan-600 rounded-sm px-4 py-1 text-white">
            Send
          </div>
        </button>
      </div>
    </>
  );
};

export default ChatWindow;
