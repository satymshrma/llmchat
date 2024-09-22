import IndividualChat from "./IndividualChat";

const exampleChats = [
  {
    title: "ABCDEFG",
    previewBody:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe a sunt optio distinctio temporibus! Quaerat, iste odio tempore voluptate deleniti ipsa assumenda enim tempora, optio, recusandae sint vero itaque quia?",
  },
  {
    title: "PQRSTUVW",
    previewBody:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe a sunt optio distinctio temporibus! Quaerat, iste odio tempore voluptate deleniti ipsa assumenda enim tempora, optio, recusandae sint vero itaque quia?",
  },
  {
    title: "TUVWXYZ",
    previewBody:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe a sunt optio distinctio temporibus! Quaerat, iste odio tempore voluptate deleniti ipsa assumenda enim tempora, optio, recusandae sint vero itaque quia?",
  },
];

const IndividualChats = () => {
  return (
    <>
      <div className="max-w-full">
        {exampleChats.map(({ title, previewBody }) => (
          <IndividualChat title={title} previewBody={previewBody} />
        ))}
      </div>
    </>
  );
};

export default IndividualChats;
