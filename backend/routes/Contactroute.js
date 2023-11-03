const express = require("express")
const {getcontact, createcontact, updatecontact, deletecontact} = require('../controllers/Contactcontroller')

const Contactrouter = express.Router()

Contactrouter.get('/getcontact', getcontact)
Contactrouter.get('/createcontact', createcontact)
Contactrouter.get('/updatecontact/:id', updatecontact)
Contactrouter.get('/deletecontact/:id', deletecontact)

module.exports = Contactrouter