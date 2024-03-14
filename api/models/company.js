import mongoose from 'mongoose';

const companySchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
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
        type:[String]
    },
    investements:[     //To store the investments data
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'investments'
        }
    ]
})

export default mongoose.model("company",companySchema);