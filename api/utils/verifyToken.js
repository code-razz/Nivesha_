import Jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token;

    if(!token){
        return next(createError(401,"You are not authenticated"));
    }

    Jwt.verify(token,process.env.JWT,(err,user)=>{    //If verification is successful, it sets req.user to the user object decoded from the token and calls the next function to pass control to the next middleware in the stack.
        if(err) return next(createError(403,"Token is not valid! i.e. invalid login"));
        req.user=user;
        next();
    });
};

export const verifyUser=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){      //req.user is got from line no. 14 of verifyToken function
            next();
        }else{
            return next(createError(403,"You are not authorized"));
        }
    });
};

export const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){      //req.user is got from line no. 14 of verifyToken function
            next();
        }else{
            return next(createError(403,"You are not authorized"));
        }
    });
};