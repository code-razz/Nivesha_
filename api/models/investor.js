import mongoose from 'mongoose';

const investorSchema=new mongoose.Schema({
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
    },
    address:{
        type:String,
    },
    grade:{
        type:String
    },
    noOfCompInvested:{
        type:Number,
        default:0
    },
    totalPortfolio:{
        type:Number,
        default:0
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:String
    },
    about:{
        type:String,
        required:true
    },
    investements:[     //To store the investments data
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'investments'
        }
    ],
    website:{
        type:String
    },
    twitter:{
        type:String
    },
    instagram:{
        type:String
    },
    facebook:{
        type:String
    }
})

export default mongoose.model("investor",investorSchema);