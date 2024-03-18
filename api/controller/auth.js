import user from "../models/user.js";
import bcrypt from 'bcrypt';
import {createError} from "../utils/error.js";   //to create error in login 
import jwt from 'jsonwebtoken';


export const register=async(req,res,next)=>{
    //encrytion of password
    const saltRounds=10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);

    try{
        const newUser=new user({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            photo:req.body.photo,
            isAdmin:req.body.isAdmin,
            isCompany:req.body.isCompany,
            isInvestor:req.body.isInvestor,
        });
        await newUser.save();
        res.status(200).send("User has been created.");
    }catch(err){
        next(err);
    }
};

export const login=async(req,res,next)=>{
    try{
        const getUser=await user.findOne({username:req.body.username});      //await is vvi here
        if(!getUser) return next(createError(404,"User NOT FOUND"));

        const isPasswordCorrect= await bcrypt.compare(req.body.password, getUser.password);
        if(!isPasswordCorrect)
            return next(createError(400,"Wrong Password or username"));

        const token=jwt.sign({id:getUser._id,isInvestor:getUser.isInvestor,isCompany:getUser.isCompany,isAdmin:getUser.isAdmin},process.env.JWT);
        
        const {password,...otherDetails}=getUser._doc;      // This part is object destructuring syntax
        res
        .cookie("access_token",token,{
            httpOnly:true
        })
        .status(200).json(otherDetails);
    }catch(err){
        console.log(err);
        next(err);
    }
};