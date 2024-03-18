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

export const getInvestPullReqs=async(req,res,next)=>{
    const id=req.params.id;
    try{
        const gotPullReqs=await pullReq.find({investorId:id});
        res.status(200).json(gotPullReqs);
    }catch(err){
        next(err);
    }
}

export const getCompPullReqs=async(req,res,next)=>{
    const id=req.params.id;
    try{
        const gotPullReqs=await pullReq.find({companyId:id});
        res.status(200).json(gotPullReqs);
    }catch(err){
        next(err);
    }
}