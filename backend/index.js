const express = require("express")
const dotenv = require('dotenv').config()
const cors = require('cors')
const mongoose = require("mongoose")
const user = require("./model/user")
const contacts = require("./model/contact") 
const app = express()
const port = 5000
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

app.use(express.json())
app.use(cors({
    origin : "*"
}))


// Get contacts
app.get('/findcontact', async (req, res)=>{
    const data = await contacts.find()
    res.json({data})
})

// Add Contacts

app.post('/addcontact', async (req, res)=>{
    const { name, email, number } = req.body

    const data = await contacts.create({
        name, 
        email,
        number
    })
    res.json({data})
})

// Delete Contacts

app.delete('/deletecontact', async (req, res)=>{
    const { id } = req.body
    const del = await contacts.deleteOne({id})
    if(del){
        const data = await contacts.find()
        res.json({data})
    }
})

// Update Contact

app.put('/updatecontact/:id',async(req, res)=>{
    const { id } = req.params
    const {name, email, number} = req.body
    console.log(name, email, number);
    const data = await contacts.findByIdAndUpdate(id, req.body )
    const updated = await contacts.findOne({id})
    res.json({updated, "status" : "updated Successfully" })
    console.log(data);
})


// // Register Method

// app.post("/register", async (req, res)=>{
//     const { name, email, password } = req.body

//     const hashedpassword = await bcrypt.hash(password, 10)
//     const exist = await user.findOne({email})
//     if(exist){
//         res.sendStatus(400)
//     }else{
//         const data = await user.create({
//             name,
//             email,
//             password : hashedpassword
//         })
//         console.log(data);
//         res.json(data)
//     }
// })


// // Login Method

// app.post('/login', async (req, res)=>{
//     const { email, password } = req.body
//     if( !email && !password ){
//         res.sendStatus(400)
//         throw new Error(" All Fields are mandatory !! ")
//     }

//     const data = await user.find({email})
//     const uss = await bcrypt.compare(password, data[0].password)

//     if(data && (await bcrypt.compare(password, data[0].password))){
//         const accesstoken = jwt.sign({
//             user:{
//                 name : data.name,
//                 email : data.email,
//                 id : data.id
//             },
//         }, "bhoopathi", {expiresIn:"10m"})

//         res.json({accesstoken})
//     }else{
//         res.json({"error" : "not working"})
//     }
// })


// app.get('/contacts', (req, res)=>{
//     const token = req.headers['x-access-token']
//     console.log(token);


//     try {
//         const decoded = jwt.verify(token, "bhoopathi")
//         console.log(decoded);
//     } catch (error) {
//         console.log(error);
//     }
//     res.send(token)
// })



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
