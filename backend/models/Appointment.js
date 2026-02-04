const mongoose = require('mongoose')

module.exports = mongoose.model('Appointment', {
  numeroControl: String,
  fecha: String,
  hora: String,
  motivo: String,
})
