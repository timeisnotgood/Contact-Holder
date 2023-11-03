const express = require("express")
const {login, register} = require('../controllers/Usercontroller')

const Userrouter = express.Router()

Userrouter.get('/getuser', login)
Userrouter.get('/createuser', register)


module.exports = Userrouter