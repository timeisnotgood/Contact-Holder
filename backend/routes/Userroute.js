const express = require("express")
const {login, register} = require('../controllers/Usercontroller')

const Userrouter = express.Router()

Userrouter.post('/login', login)
Userrouter.post('/register', register)


module.exports = Userrouter