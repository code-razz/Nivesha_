import investor from "../models/investor.js";

export const createInvestor=async(req,res,next)=>{
    const data=req.body;
    const newInvestor=new investor(data);
    try{
        const savedInvestor=await newInvestor.save();
        res.status(200).json(savedInvestor);
    }catch(err){
        next(err);
    }
}

export const updateInvestor=async(req,res,next)=>{
    const id=req.params.id;
    const data=req.body;
    try{
        const updatedInvestor=await investor.findByIdAndUpdate(id,
            {$set:data},
            {new:true}
            );

        res.status(200).json(updatedInvestor);
    }catch(err){
        next(err);
    }
}

export const deleteInvestor=async(req,res,next)=>{
    id=req.params.id;
    try{
        const deletedInvestor=await investor.findByIdAndDelete(id);
        res.status(200).json("Investor deleted successfully"+deleteInvestor);
    }catch(err){
        next(err);
    }
}

export const getInvestor=async(req,res,next)=>{
    const id=req.params.id;
    try{
        const gotInvestor=await investor.findById(id);
        res.status(200).json(gotInvestor);
    }catch(err){
        next(err);
    }
}

export const getAllInvestor=async(req,res,next)=>{
    try{
        const allInvestor=await investor.find({});
        res.status(200).json(allInvestor);
    }catch(err){
        next(err);
    }
}

export const getUserInvestor=async(req,res,next)=>{
    const id=req.params.id;
    try{
        const gotInvestor=await investor.findOne({userId:id});
        res.status(200).json(gotInvestor);
    }catch(err){
        next(err);
    }
}