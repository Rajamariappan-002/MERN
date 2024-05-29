const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const userModel = require("./Models/Users")
const candidateModel = require("./Models/Candidate")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/VotingSystem").then(()=>{
    console.log("MongoDB connection Successful....")
})

app.post("/registerUser", async (req,res) => {
  
    try{
        const user = req.body;
        const newuser = new userModel(user)
        await newuser.save()
        res.sendStatus(200)  
    }catch(error){
        console.log("Error:" +error)
    }
    
})

app.post("/userlogin", async (req,res) => {
    const {email, password} = req.body

    await userModel.findOne({email:email,password:password}).then(
        result=>{
           
            if(result){
                res.status(200).json({status:"success", user:{email:result.email,name:result.name}})
            }else{
                res.json({status:"error",message:"Invalid Credentials"} )
            }
        }).catch((error)=>{
            res.status(500).json({status:"servererror", error:error})
        })
})

app.post("/votecount", async (req,res) => {
    const {name,email} = req.body   

    const user = await userModel.findOne({email:email})
    if(user){
        console.log(user)
        if(user.isvoted == false){
            const Candidate = await candidateModel.updateOne({name:name},{$inc:{votecount:1}}).catch((error)=>{
                console.log(error)
            })
            if(Candidate.nModified == 0){
               res.json({status:"error", message:"error updating the data"})
            }
            else{
                await userModel.updateOne({email:email},{$set:{isvoted:true}})
                res.json({status:"success", message:"Vote Casted"})
            }
        }else{
            res.json({status:"voted", message:"Cannot vote more than once"})
        }
    }
    
})

app.post("/getvotecount",async (req,res)=>{
   const candidate1 = await candidateModel.findOne({name:"candidate1"})
   const candidate2 = await candidateModel.findOne({name:"candidate2"})
   const candidate3 = await candidateModel.findOne({name:"candidate3"})
   const candidate4 = await candidateModel.findOne({name:"candidate4"})
   
   if(candidate1&&candidate2&&candidate3&&candidate4){
    res.status(200).json({status:'success',candidate1:candidate1,candidate2:candidate2,candidate3:candidate3,candidate4:candidate4})
   }
   else{
    res.json({staus:'error',message:'something went wrong'})
   }
})

app.listen(3001, () =>{
    console.log("Server is listening");
})



