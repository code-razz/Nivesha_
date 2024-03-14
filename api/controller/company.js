import company from "../models/company.js";

export const createCompany=async(req,res,next)=>{
    const data=req.body;
    const newCompany=new company(data);

    try{
        const savedCompany=await newCompany.save();
        res.status(200).json(savedCompany);
    }catch(err){
        next(err);
    }
}

export const updateCompany=async(req,res,next)=>{
    const id=req.params.id;
    const data=req.body;
    try{
        const updatedCompany=await company.findByIdAndUpdate(id,
            {$set:data},
            {new:true}
            );

        res.status(200).json(updatedCompany);
    }catch(err){
        next(err);
    }
}

export const deleteCompany=async(req,res,next)=>{
    id=req.params.id;
    try{
        const deletedCompany=await company.findByIdAndDelete(id);
        res.status(200).json("Company deleted successfully"+deleteCompany);
    }catch(err){
        next(err);
    }
}

export const getCompany=async(req,res,next)=>{
    const id=req.params.id;
    try{
        const gotCompany=await company.findById(id);
        res.status(200).json(gotCompany);
    }catch(err){
        next(err);
    }
}

export const getAllCompany=async(req,res,next)=>{
    try{
        const allCompany=await company.find({});
        res.status(200).json(allCompany);
    }catch(err){
        next(err);
    }
}

export const getUserCompany=async(req,res,next)=>{
    const id=req.params.id;
    try{
        const gotCompany=await company.findOne({userId:id});
        res.status(200).json(gotCompany);
    }catch(err){
        next(err);
    }
}