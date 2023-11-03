const contacts = require("../model/contact") 

// Get contacts
const getcontact = async (req, res)=>{
    const data = await contacts.find()
    res.json({data})
}

// Add Contacts

const createcontact =  async (req, res)=>{
    const { name, email, number } = req.body

    const data = await contacts.create({
        name, 
        email,
        number
    })
    res.json({data})
}

// Delete Contacts

const deletecontact =  async (req, res)=>{
    const { id } = req.body
    const del = await contacts.deleteOne({id})
    if(del){
        const data = await contacts.find()
        res.json({data})
    }
}

// Update Contact

const updatecontact = async(req, res)=>{
    const { id } = req.params
    const {name, email, number} = req.body
    console.log(name, email, number);
    const data = await contacts.findByIdAndUpdate(id, req.body )
    const updated = await contacts.findOne({id})
    res.json({updated, "status" : "updated Successfully" })
    console.log(data);
}

module.exports = {getcontact, createcontact, updatecontact, deletecontact}