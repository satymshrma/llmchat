"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handleValidation = (req) => {
    return true;
};
const handleChat = (message) => {
    return message;
};
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Hello from TypeScript!');
});
app.get('/api/chat', (req, res) => {
    res.send(handleChat(req.body));
});
app.get('/api/validation', (req, res) => {
    if (handleValidation(req)) {
        res.send('Valid');
    }
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
