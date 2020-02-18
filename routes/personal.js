const express = require('express');
const bcryptjs = require('bcryptjs');
const ModelPersonal = require('../models/personal');


const app = express();

app.post('/personal/nuevo', (req, res) => {


  let body = req.body;

  console.log(body);

  let personal = new ModelPersonal({
    nombre: body.nombre,
    password: bcryptjs.hashSync(body.password, 10),
    RFC: body.rfc,
    curp: body.curp,
    role: body.role,
    // fechaNaciemiento:  ,
    // fechaInicio: { type: Date },
    // Comente estas lineas para poder manejar la fecha despues
    turno: body.turno
    // img: { type: string }
  });

  personal.save( (err, personalDB) => {
    if(err) {
      return res.status(400).json({
        ok: false,
        err
      });

    }
    personalDB.password = ":)"
    
    if( personalDB ) {
      return res.json({
        ok: true,
        personalDB
      });

    }

  });

});


module.exports = app;
