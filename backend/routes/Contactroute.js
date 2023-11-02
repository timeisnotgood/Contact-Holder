const express = require("express")
const {getcontact, createcontact, updatecontact, deletecontact} = require('../controllers/Contactcontroller')

const Contactrouter = express.Router()

router.use(bodyparser.json())
router.get('/getcontact', getcontact)
router.get('/createcontact', createcontact)
router.get('/updatecontact/:id', updatecontact)
router.get('/deletecontact/:id', deletecontact)

module.exports = Contactrouter