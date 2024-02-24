import mongoose from 'mongoose';

const userAdminSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
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
},
{timestamps:true}      //Adds the timestamp of the document created
);


export default mongoose.model("userAdmin",userAdminSchema);