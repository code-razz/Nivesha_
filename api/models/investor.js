import mongoose from 'mongoose';

const investorSchema=new mongoose.Schema({
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
    }
})

export default mongoose.model("investor",investorSchema);