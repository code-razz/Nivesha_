import investments from "../models/investments.js";

export const createInvestments=async(req,res,next)=>{
    const data=req.body;
    const newInvestments=new investments(data);
    try{
        const savedInvestments=await newInvestments.save();
        res.status(200).json(savedInvestments);
    }catch(err){
        next(err);
    }
}

export const updateInvestments=async(req,res,next)=>{
    const id=req.params.id;
    const data=req.body;
    try{
        const updatedInvestments=await investments.findByIdAndUpdate(id,
            {$set:data},
            {new:true}
            );

        res.status(200).json(updatedInvestments);
    }catch(err){
        next(err);
    }
}

export const deleteInvestments=async(req,res,next)=>{
    id=req.params.id;
    try{
        const deletedInvestments=await investments.findByIdAndDelete(id);
        res.status(200).json("Investments deleted successfully"+deleteInvestments);
    }catch(err){
        next(err);
    }
}

export const getInvestments=async(req,res,next)=>{
    const id=req.params.id;
    try{
        const gotInvestments=await investments.findById(id);
        res.status(200).json(gotInvestments);
    }catch(err){
        next(err);
    }
}

export const getAllInvestments=async(req,res,next)=>{
    try{
        const allInvestments=await investments.find({});
        res.status(200).json(allInvestments);
    }catch(err){
        next(err);
    }
}