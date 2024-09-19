import ChatWindow from "../components/ChatWindow";

const Chat = () => {
  return (
    <>
      <div className="flex w-full h-full">
        <aside className="border-r-slate-800 flex flex-col items-start border-r-2 border-dotted max-sm:hidden w-1/5">
          <div className="pb-4 px-3 mt-4  text-xl w-full h-fit border-b-2 border-gray-800">
            Chats
          </div>
          <div className="p-2 h-full">
            <p>individchats</p>
          </div>
          <div
            id="settings"
            className="border-t-2 border-gray-800 w-full flex justify-center"
          >
            <button className="bg-cyan-600 w-fit h-fit rounded-sm text-white p-1 m-4">
              Settings
            </button>
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

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { API_OPENAI_CHAT, API_OPENAI_VALIDATION } from "../utils/endpoints";

// interface ChatProps {}

// interface Message {
//   text: string;
//   sender: "user" | "bot";
// }

// const Chat: React.FC<ChatProps> = () => {
//   const [apiKey, setApiKey] = useState("");
//   const [apiKeyStatus, setApiKeyStatus] = useState<boolean>(false);
//   const [buttonText, setButtonText] = useState("Validate");
//   const [placeholderText, setPlaceholderText] = useState(
//     "Enter OpenaiAPI Key..."
//   );
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [showInvalidKeyMessage, setShowInvalidKeyMessage] = useState(false);
//   let handleSubmit;
//   useEffect(() => {
//     handleSubmit = async (e: React.FormEvent) => {
//       e.preventDefault();
//       if (!apiKeyStatus) {
//         try {
//           const response = await axios.post(API_OPENAI_VALIDATION, { apiKey });
//           setApiKeyStatus(response.data);
//           setButtonText("Chat");
//           setPlaceholderText("Enter your query here...");
//         } catch (error) {
//           console.error(error);
//           setApiKeyStatus(false);
//           setShowInvalidKeyMessage(true);
//           setButtonText("Validate");
//           setPlaceholderText("Enter OpenaiAPI Key...");
//         }
//         return;
//       }

//       // Send user message to chat API
//       const userMessage: Message = { text: apiKey, sender: "user" };
//       setMessages([...messages, userMessage]);

//       try {
//         const response = await axios.post(API_OPENAI_CHAT, { message: apiKey }); // Replace with your chat API endpoint
//         const botMessage: Message = {
//           text: response.data.message,
//           sender: "bot",
//         };
//         setMessages([...messages, botMessage]);
//       } catch (error) {
//         console.error(error);
//         // Handle error, e.g., display an error message
//       }

//       setApiKey(""); // Clear input field
//     };
//   });

//   return (
//     <div className="h-full w-full flex flex-col">
//       <div className="flex-grow overflow-y-auto p-4">
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`flex items-start ${
//               message.sender === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             <div
//               className={`p-2 rounded-lg ${
//                 message.sender === "user" ? "bg-blue-100" : "bg-gray-200"
//               }`}
//             >
//               {message.text}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="border-t border-gray-200 p-4">
//         {apiKeyStatus === false && (
//           <div className="text-red-500 mb-2 font-mono text-sm">
//             {showInvalidKeyMessage && `Invalid API key`}
//           </div>
//         )}
//         <form onSubmit={handleSubmit} className="flex">
//           <input
//             type="text"
//             placeholder={placeholderText}
//             value={apiKey}
//             onChange={(e) => setApiKey(e.target.value)}
//             className="w-full bg-black text-white font-mono p-2 rounded-md focus:outline-none"
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             {buttonText}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Chat;
