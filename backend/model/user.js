const mongoose = require('mongoose')

const user = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    contact :{
        type : String
    }
})

const model = mongoose.model("userdata", user)

module.exports = model