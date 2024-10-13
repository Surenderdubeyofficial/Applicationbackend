const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to advance backend js ");
    
})
app.get('/twiter',(req,res)=>{
    res.send(" hi twiter Welcome to advance backend js ");
    
})
app.get('/login',(req,res)=>{
    res.send(" hi twiter Welcome to advance backend js login section ");
    
})

const port = 4000;

app.listen(port,()=>{
    console.log(`Server is listeniing ${port}`);
    
})