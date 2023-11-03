const express = require("express")
const dotenv = require('dotenv').config()
const cors = require('cors')
const mongoose = require("mongoose")
const user = require("./model/user")
const app = express()
const port = 5000
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

app.use(express.json())
app.use(cors({
    origin : "*"
}))
app.use('/contact', require('./routes/Contactroute'))
app.use('/user', require('./routes/Userroute'))


try {
   const connection =  mongoose.connect("mongodb://127.0.0.1:27017/trail")
   if(connection){
    console.log("DB connected and server started ");
    app.listen(port, (req, res)=> console.log("server is running in port :", port) )
   }else{
    console.log("fail");
   }
} catch (error) {
    console.log(error);
}
