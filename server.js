var express = require('express');
var app = express();
var port = process.env.PORT||9800;
const path = require('path');


const app=express();

app.use(express.static(path.join(__dirname, 'build')))
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'))
})

app.listen(port)
