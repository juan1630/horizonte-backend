//=======================================
//          LIBS
//=======================================

const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

//=======================================
//          CONFIG
//=======================================

const  { PORT } = require('../config');

const app = express();
// inicio de express

let Server = http.createServer( app);

module.exports.io = socketIo(Server)

Server.listen( PORT, (err) => {
   if (err) throw new Error(err);
});
console.log(`Server on port: ${PORT}`);