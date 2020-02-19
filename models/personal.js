const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let personalSchema = new Schema({
  nombre: { type: String, required: [true, 'El nombre es requerido'] }, // nombre completo
  password: { type: String, required:[true, 'La constrasenia es requerida'] },
  RFC:  { type: String, required: [true, 'ElRFC es requerido'] },
  curp: { type: String, required: [ true, 'El curp es requerido' ] }, // limitado a los 18
  role: { type: String, required: [ true, 'El role es requerido' ]},
  fechaNaciemiento: { type: Date },
  fechaInicio: { type: Date }, // esta sera una funcion que se dispare no necesita input
  turno: { type: String, required: [ true, 'El turno es requerid' ] },
  img: { type: String }
});

module.exports = mongoose.model('ModelPersonal', personalSchema );
