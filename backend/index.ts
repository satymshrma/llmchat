import express from 'express'

interface Message {
  text: string;
  sender: "user" | "bot";
}

const handleValidation=(req:any) => {
    return true
}

const handleChat = (message: Message) => {
    return message
}

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from TypeScript!');   

});

app.post('/api/chat', (req, res) => {
    res.send(handleChat(req.body))
    console.log(`triggered chat : `+req.body)
})

app.post('/api/validate-key', (req, res) => {
    if (handleValidation(req)) {
        res.send(true)
    }
    console.log(`triggered validation : `+req.body)
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});