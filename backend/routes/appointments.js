const express = require('express')
const Appointment = require('../models/Appointment')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/', auth, async (req, res) => {
  await Appointment.create({
    numeroControl: req.user.numeroControl,
    ...req.body,
  })
  res.json({ msg: 'Cita creada' })
})

router.get('/', auth, async (req, res) => {
  res.json(await Appointment.find({ numeroControl: req.user.numeroControl }))
})

module.exports = router
