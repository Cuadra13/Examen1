require('dotenv').config()
const express = require('express')
const app = express()

const Server = require('./models/server.js')
const server = new Server();
server.listen();


app.get('/', function(req,res){
res.send('Hello World')
})

app.listen(5000, () => {
    console.log("El puerto esta corriendo el puerto TCP5000")
});