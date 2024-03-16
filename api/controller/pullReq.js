// import investments from "../models/investments.js";
import pullReq from "../models/pullReq.js";

export const createPullReq=async(req,res,next)=>{
    const data=req.body;
    const newPullReq=new pullReq(data);
    try{
        const savedPullReq=await newPullReq.save();
        res.status(200).json(savedPullReq);
    }catch(err){
        next(err);
    }
}