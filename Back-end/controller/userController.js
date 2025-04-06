const user = require("../model/userModel")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const createUser = async(req,res)=>{
    try{
        const {firstName,lastName,email,password} = req.body;
        const user = await user.findOne({email});
        if(user){
            return res.status(400).json({
                status: "failed",
                message: "User already exists with this email",
            });
        }
        const newUser  = await user.create({firstName,lastName,email,password}); 
        res.status(201).json({
            status:"success",
            message:"User create successfully",
            data:{
                user:newUser
            }
        })
    }catch(error){
        res.status(400).json({
            status:"failed",
            message:error.message
        });
    }
}

const login = async (req,res) => {
    try{
        const {email,password}=req.body;
        const userData = await user.findOne({email:email});
        if(!userData)
            return res.status(400).json({
                status:"failed",
                message:"Email or password in incorrect"   
            })
        const passwordMatch = await bcrypt.compare(password,userData.password);
        if(!passwordMatch)
            return res.status(400).json({
                status:"failed",
                message:"Email or password in incorrect"   
            })
        const jwtToken = jwt.sign({userId:userData._id},process.env.PASSWORD,{expiresIn:"1h"});
        const data = {
            name : userData.firstName+" "+userData.lastName,
            email:userData.email,
        }
        res.status(200).json({
            status:"Success",
            data:{
                user:data,
                token:jwtToken
            }
        })
    }catch(error){
        res.status(400).json({
            status:"failed",
            message:error.message
        })

    }
}

module.exports = {createUser,login}