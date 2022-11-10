const express = require('express')
const cors = require('cors');

class Server{
  constructor(){
    this.app = express()
    //CORS
    this.app.use(cors());
    //Lectura y parseo del body
    this.app.use(express.json());
    //Directorio publico
    this.app.use(express.static('public'));
    this.routes();
  }
  routes(){
   
    this.app.use('/evento', require('../routes/evento.js'))

  }

  listen(){
    this.app.listen(process.env.PORT, () =>
    console.log("El puerto esta corriendo el puerto TCP" + process.env.PORT))
  }
}

module.exports = Server