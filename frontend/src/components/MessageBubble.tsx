import { ChatWindowInnerProps as MessageBubbleProps } from "./ChatWindowInner";
const MessageBubble = ({ sender, body }: MessageBubbleProps) => {
  return (
    <>
      <div
        className={`${
          sender == "user"
            ? `self-end text-right bg-slate-900`
            : `text-left self-start bg-cyan-900`
        } h-fit p-6 m-2 rounded`}
      >
        <p>{body}</p>
      </div>
    </>
  );
};

export default MessageBubble;
