import mongoose from 'mongoose';

const investerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
    },
    headquarter:{
        type:String,
    },
    valuation:{
        type:Number,
        required:true
    }
})

export default mongoose.model("company",companySchema);