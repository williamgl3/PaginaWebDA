const express = require('express')
const Student = require('../models/Student')

const router = express.Router()

router.post('/', async (req, res) => {
  await Student.create(req.body)
  res.json({ message: 'Estudiante creado' })
})

router.get('/', async (req, res) => {
  res.json(await Student.find())
})

module.exports = router
