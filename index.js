const express = require('express');
const e = require("express");

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'\\index.html');
})

app.listen(port, ()=>{
    console.log('server started at port 3000');
});