const express = require('express');
const http = require('http');
const path = require('path');
const port=6700;

const app=express();

app.use(express.static(path.join(__dirname, 'build')))
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'))
})

app.listen(port)