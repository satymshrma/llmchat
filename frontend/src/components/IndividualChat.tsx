interface IndividualChatProps {
  title: string;
  previewBody: string;
}

const IndividualChat = ({ title, previewBody }: IndividualChatProps) => {
  return (
    <button className="max-w-full">
      <div className="h-fit w-full bg-slate-900 p-2 rounded overflow-hidden">
        <p className="whitespace-nowrap overflow-hidden max-w-full text-ellipsis text-left font-bold">
          {title}
        </p>
        <p className="whitespace-nowrap overflow-hidden max-w-full text-ellipsis">
          {previewBody}
        </p>
      </div>
    </button>
  );
};

export default IndividualChat;
