import MessageBubble from "./MessageBubble";

export interface ChatWindowInnerProps {
  sender: "user" | "system";
  body: string;
}

interface ChatWindowProps {
  llmChatData: ChatWindowInnerProps[];
}

const ChatWindowInner = ({ llmChatData }: ChatWindowProps) => {
  let id = 0;
  return (
    <>
      <div className="flex flex-col overflow-y-scroll">
        {llmChatData.map(({ sender, body }) => (
          <MessageBubble key={id++} sender={sender} body={body} />
        ))}
      </div>
    </>
  );
};

export default ChatWindowInner;
