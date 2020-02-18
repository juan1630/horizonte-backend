//=======================================
//          LIBS
//=======================================

const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//=======================================
//          CONFIG
//=======================================

const  { PORT } = require('../config');

// inicio de express
const app = express();


// midlewares de expresss
// el bodyparser va antes de usar las rutas 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }))


app.use(require( '../routes/index' ));




// server configurado para los sockets
let Server = http.createServer(app);

module.exports.io = socketIo(Server)


// conexion con la BD

mongoose.connect(`mongodb://localhost/personal`, {
          useNewUrlParser: true,
          useUnifiedTopology: true
          });



Server.listen( PORT, (err) => {
   if (err) throw new Error(err);
});
console.log(`Server on port: ${PORT}`);
