import express from "express";
import OpenAI from "openai";

const openai = new OpenAI();

interface Message {
  sender: "user" | "system";
  body: string;
}

const handleValidation = (req: any) => {
  return true;
};

const handleChat = async ({ body }: Message) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: body,
      },
    ],
  });

  return completion;
};

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Server On /");
});

app.post("/api/chat", (req, res) => {
  res.send(handleChat(req.body));
  console.log(`triggered chat : ` + req.body);
});

app.post("/api/validate-key", (req, res) => {
  if (handleValidation(req)) {
    res.send(true);
  }
  console.log(`triggered validation : ` + req.body);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
