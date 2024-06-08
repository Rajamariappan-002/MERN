const express = require('express')
const mongoose = require('mongoose')
const userModel = require('./Model/UserModel')
const AdminModel = require('./Model/AdminModel')
const RoomModel = require('./Model/RoomModel')
const cors = require('cors')

const app = express()
app.use(cors())

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/BookStore").then(()=>{
    console.log('MongoDb connection successful')
})


app.post("/registeruser", async (req,res)=>{
    const user = req.body
    const newuser = new userModel(user)
    await newuser.save()
    res.sendStatus(200)
})

app.post("/loginuser", async (req,res)=>{
    const {email, password } = req.body

    try{
        const finduser = await userModel.findOne({email:email, password:password})
        if (finduser){
            res.json({status:"success", message:"User Login Successful",user:{email:finduser.email, name:finduser.name}})
        }
        else{
            res.json({status:"failure", message:"Unable to find User"})
        }
    }catch(e){
        console.log(e)
    }
})

app.post("/loginadmin", async (req,res)=>{

    const {email,password} = req.body  

    try{
        const finduser = await AdminModel.findOne({email:email, password:password})
        console.log(finduser)
        if(finduser){
            res.json({status:"success", message:"Login Successful", user:finduser})
        }
        else{
            res.json({status:"failure", message:"unable to find the user"})
        }

    }catch(e){
        console.log(e)
    }
 
})

app.post("/addroom", async (req,res)=>{
    try{
         const Room = new RoomModel(req.body)
         await Room.save()
         res.status(200).json({status:'success', message:'Room Added Successfully'})
    }catch(e){
        console.log(e)
    }
})

app.get("/viewrooms", async (req,res)=>{
    try{
        const Rooms = await RoomModel.find({})
        if(Rooms){
            res.status(200).json({Rooms})
        }
    }catch(e){
        console.log(e)
    }
})

app.listen(3001,()=>{
    console.log("Server is running")
})