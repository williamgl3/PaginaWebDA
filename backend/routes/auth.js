const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const router = express.Router()
router.post('/login', async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10)
  await User.create({ ...req.body, password: hash })
  res.json({ message: 'Usuario creado' })
})

router.post('/login', async (req, res) => {
  const user = await User.findOne({ correo: req.body.correo })
  if (!user) return res.status(400).json({ message: 'Usuario no encontrado' })

  const ok = await bcrypt.compare(req.body.password, user.password)
  if (!ok) return res.status(400).json({ message: 'Contraseña incorrecta' })

  const token = jwt.sign({ rol: user.rol, numeroControl: user.numeroControl })

  res.json({ token, rol: user.rol })
})

module.exports = router
