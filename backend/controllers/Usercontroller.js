const contacts = require("../model/user") 

// Register Method

const register = async(req, res)=>{
    const { name, email, password } = req.body

    const hashedpassword = await bcrypt.hash(password, 10)
    const exist = await user.findOne({email})
    if(exist){
        res.sendStatus(400)
    }else{
        const data = await user.create({
            name,
            email,
            password : hashedpassword
        })
        console.log(data);
        res.json(data)
    }
}


// Login Method

const login =  async(req, res)=>{
    const { email, password } = req.body
    if( !email && !password ){
        res.sendStatus(400)
        throw new Error(" All Fields are mandatory !! ")
    }

    const data = await user.find({email})
    const uss = await bcrypt.compare(password, data[0].password)

    if(data && (await bcrypt.compare(password, data[0].password))){
        const accesstoken = jwt.sign({
            user:{
                name : data.name,
                email : data.email,
                id : data.id
            },
        }, "bhoopathi", {expiresIn:"10m"})

        res.json({accesstoken})
    }else{
        res.json({"error" : "not working"})
    }
}


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
// }


module.exports = {login, register}