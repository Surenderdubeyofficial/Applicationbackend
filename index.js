require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to advanced backend JS");
});

app.get('/twitter', (req, res) => {
    res.send("Hi Twitter, Welcome to advanced backend JS");
});

app.get('/login', (req, res) => {
    res.send("Hi, Welcome to advanced backend JS login section");
});  

const port = process.env.PORT || 4000; // It will use 3000 from .env or default to 4000

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
