import user from "../models/user.js"   //.. means 1 directory back

//create user is in auth route

export const updateUser=async(req,res,next)=>{
    try{
        const updatedUser=await user.findByIdAndUpdate(req.params.id,             //we got the id to update by url
            {$set:req.body},
            {new:true});         //This will return updated (not the previous data) in response as updatedUser
        res.status(200).json(updatedUser);
    }catch(err){
        next(err);
    }
};

export const deleteUser=async(req,res,next)=>{
    const id=req.params.id;
    try{
        const deletedUser=await user.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
    }catch(err){
        next(err);
    }
};

export const getUser=async(req,res,next)=>{
    try{
        const gettedUser=await user.findById(req.params.id);
        res.status(200).json(gettedUser);
    }catch(err){
        next(err);
    }
};

export const getAllUser=async(req,res,next)=>{    //next is callback function
    try{
        const allUsers=await user.find();
        res.status(200).json(allUsers);
    }catch(err){
        next(err);
    }
};