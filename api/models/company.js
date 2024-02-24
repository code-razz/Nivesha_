import mongoose from 'mongoose';

const companySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    headquarter:{
        type:String,
    },
    valuation:{
        type:Number,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    outlets:{
        type:
    }
})

export default mongoose.model("company",companySchema);