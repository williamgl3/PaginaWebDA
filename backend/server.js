const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

mongoose
  .connect('mongodb://127.0.0.1:27017/agenda_psicologo')
  .then(() => console.log('MongoDB conectado'))

app.use('/api/auth', require('./routes/auth'))
app.use('/api/students', require('./routes/students'))
app.use('/api/appointments', require('./routes/appointments'))
app.use('/api/admin', require('./routes/admin'))

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000')
})
