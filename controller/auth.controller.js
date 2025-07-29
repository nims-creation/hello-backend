import genToken from "../config/token.js";
import user from "../models/user_model.js";
import bcrypt from "bcryptjs";

export const signUp = async (req,res)=>{
    try{
        const {userName,email,password} = req.body;
        const checkUserByUserName = await user.findOne({userName});
        if(checkUserByUserName){
            return res.status(400).json({message : "userName already exist"})
        }

        const checkUserByEmail = await user.findOne({email});
        if(checkUserByEmail){
            return res.status(400).json({message : "Email already exist"})
        }


        if(password.length < 8){
            return res.status(400).json({message : "Password must be 8 character."})
        }


        const hashedPassword = await bcrypt.hash(password,10);

        const user = await user.create({
            userName,email,password:hashedPassword
        }) 

        const token = await genToken(user._id)
        res.cookie("token",token,{
            httpOnly : true,
            maxAge : 7*24*60*60*1000,
            sameSite : "None",
            secure : false
        })

        return res.status(201).json(user);

    }catch(error){
        return res.status(500).json({message : `signUp error ${error}`})

    }
}

// login
export const login = async (req,res)=>{
    try{
        const {email,password} = req.body;
        const checkUserByUserName = await user.findOne({userName});
        const checkUserByEmail = await user.findOne({email});
        if(user){
            return res.status(400).json({message : "user does not exist"})
        }


       

        const hashedPassword = await bcrypt.hash(password,10);

        const token = await genToken(user._id)
        res.cookie("token",token,{
            httpOnly : true,
            maxAge : 7*24*60*60*1000,
            sameSite : "None",
            secure : false
        })

        return res.status(201).json(user);

    }catch(error){
        return res.status(500).json({message : `signUp error ${error}`})

    }
}