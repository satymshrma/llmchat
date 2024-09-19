const ChatWindow = () => {
  return (
    <>
      <div className="w-full h-full">Chat Window</div>

      <div className="flex">
        <input
          className="w-full h-fit border-slate-400 border rounded-lg bg-inherit text-white p-2 my-3"
          placeholder="Chat here..."
        ></input>
        <button type="submit">
          <div className="w-fit h-fit ml-2 bg-cyan-500 rounded-md px-4 py-1 text-white">
            Send
          </div>
        </button>
      </div>
    </>
  );
};

export default ChatWindow;
