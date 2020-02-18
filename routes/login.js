const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const ModelPersonal = require('../models/personal');



const app = express();

app.post('/login', (req, res) => {


  let body = req.body;

  ModelPersonal.findOne( { nombre: body.nombre }, (err, PersonalDB) => {

    if( err ){
        return res.status(400).json({
          ok:false,
          err
        });
    }

    if(!PersonalDB){
      return res.status(400).json({
        ok: false,
        message: 'El usuario no se ha encontrado',
        err
      })
    }

  if( PersonalDB ){
    if( bcrypt.compareSync( body.password, PersonalDB.password ) ){
      res.status(400).json({
        ok: false,
        err: {
          message: 'El usuario o la contraseña no son correctos'
        }

      });
    }else {

      let token = jwt.sign({
        usuario: PersonalDB.nombre,
        role: PersonalDB.role,
        id: PersonalDB.id
      },  process.env.SEED, {  expiresIn: process.env.CADUCIDADTOKEN }  )

       res.json({
        ok: true,
        PersonalDB
      })
    }
  }

  });

});



module.exports = app;
