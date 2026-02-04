const mongoose = require('mongoose')

module.exports = mongoose.model('User', {
  correo: String,
  password: String,
  rol: String,
  numeroControl: String,
})
