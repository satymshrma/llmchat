import IndividualChat from "./IndividualChat";

interface Chat {
  id: number;
  title: string;
  messages: { sender: "user" | "system"; body: string }[];
}
interface IndividualChatsProps {
  chats: Chat[];
}

// const exampleChats = [
//   {
//     title: "ABCDEFG",
//     previewBody:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe a sunt optio distinctio temporibus! Quaerat, iste odio tempore voluptate deleniti ipsa assumenda enim tempora, optio, recusandae sint vero itaque quia?",
//   },
//   {
//     title: "PQRSTUVW",
//     previewBody:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe a sunt optio distinctio temporibus! Quaerat, iste odio tempore voluptate deleniti ipsa assumenda enim tempora, optio, recusandae sint vero itaque quia?",
//   },
//   {
//     title: "TUVWXYZ",
//     previewBody:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe a sunt optio distinctio temporibus! Quaerat, iste odio tempore voluptate deleniti ipsa assumenda enim tempora, optio, recusandae sint vero itaque quia?",
//   },
// ];

const IndividualChats = ({ chats }: IndividualChatsProps) => {
  return (
    <>
      <div className="max-w-full">
        {chats.map(({ id, title, messages }) => (
          <IndividualChat
            key={id}
            title={title}
            previewBody={
              messages[messages.length - 1]?.body || "No messages yet"
            }
          />
        ))}
      </div>
    </>
  );
};

export default IndividualChats;
