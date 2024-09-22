import { useState } from "react";
import ChatWindowInner, { ChatWindowInnerProps } from "./ChatWindowInner";

// const llmChatData: ChatWindowInnerProps[] = [
//   { sender: "user", body: "Hello, how are you?" },
//   {
//     sender: "system",
//     body: "I'm doing well, thank you for asking. How can I help you today?",
//   },
//   { sender: "user", body: "Can you tell me a joke?" },
//   {
//     sender: "system",
//     body: "Sure, here's a joke: Why did the chicken cross the road? To get to the other side!",
//   },
//   { sender: "user", body: "That's a classic! Do you have any other jokes?" },
// ];

const ChatWindow = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatWindowInnerProps[]>([]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return;

    // Add user message to chat
    const userMessage: ChatWindowInnerProps = {
      sender: "user",
      body: inputMessage,
    };
    setChatMessages((prevMessages) => [...prevMessages, userMessage]);

    // Send message to backend
    try {
      const response = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sender: "user", body: inputMessage }),
      });
      const data = await response.json();
      console.log("Response from backend for OPENAI call:", data);

      // Add system response to chat
      const systemMessage: ChatWindowInnerProps = {
        sender: "system",
        body: data.body,
      };
      setChatMessages((prevMessages) => [...prevMessages, systemMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    // Clear input
    setInputMessage("");
  };

  return (
    <>
      <div className="w-full h-full overflow-y-scroll">
        <ChatWindowInner llmChatData={chatMessages} />
      </div>

      <div className="flex">
        <input
          className="w-full h-fit border-slate-400 border rounded-lg bg-inherit text-white p-2 my-3"
          placeholder="Chat here..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        ></input>
        <button onClick={handleSendMessage}>
          <div className="w-fit h-fit ml-2 bg-cyan-600 rounded-sm px-4 py-1 text-white">
            Send
          </div>
        </button>
      </div>
    </>
  );
};

export default ChatWindow;
