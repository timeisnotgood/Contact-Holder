const mongoose = require("mongoose")

const contacts = mongoose.Schema({
    name :{
        type : String,
        require :[true, 'Name must be enterd']
    },
    email :{
        type : String,
        require :[true, 'age must be enterd']
    },
    number :{
        type : String,
        require :[true, 'occupation must be enterd']
    },
})

const modu = mongoose.model("Contact", contacts)

module.exports = modu