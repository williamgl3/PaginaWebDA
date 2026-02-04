const express = require('express')
const auth = require('../middleware/auth')
const Student = require('../models/Student')
const Appointment = require('../models/Appointment')

const router = express.Router()

router.get('/alumnos', auth, async (req, res) => {
  if (req.user.rol !== 'admin') return res.sendStatus(403)
  res.json(await Student.find())
})

router.get('/estadisticas', auth, async (req, res) => {
  if (req.user.rol !== 'admin') return res.sendStatus(403)

  const data = await Appointment.aggregate([
    { $group: { _id: '$numeroControl', total: { $sum: 1 } } },
  ])

  res.json(data)
})

module.exports = router
