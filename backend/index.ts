import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI();

interface Message {
  sender: "user" | "system";
  body: string;
}

const handleValidation = (req: any) => {
  return true;
};

const handleChat = async ({ body }: Message): Promise<Message> => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: body,
      },
    ],
  });

  return {
    sender: "system",
    body: completion.choices[0].message.content + "",
  };
};
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Server On /");
});

app.post("/api/chat", async (req, res) => {
  try {
    const result = await handleChat(req.body);
    res.send(result);
    console.log(`triggered chat : ` + JSON.stringify(req.body));
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send(e);
  }
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
