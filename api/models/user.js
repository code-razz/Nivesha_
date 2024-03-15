import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    photo:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isInvestor:{
        type:Boolean,
        default:false
    },
    isCompany:{
        type:Boolean,
        default:false
    }
},
{timestamps:true}      //Adds the timestamp of the document created
);


export default mongoose.model("user",userSchema);