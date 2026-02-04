const mongoose = require('mongoose')

module.exports = mongoose.model('Student', {
  name: String,
  apellidoPaterno: String,
  apellidoMaterno: String,
  edad: Number,
  carrera: String,
  grupo: String,
  numeroControl: String,
  semestre: Number,
  telefono: String,
  correo: String,
})
