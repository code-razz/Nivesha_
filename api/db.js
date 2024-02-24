import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connection established to MongoDB");
    }catch(err){
        throw err;
    }
};

const db=mongoose.connection;

db.on("disconnected",()=>{
    console.log("MongoDB disconnected!");
})

db.on("connected",()=>{
    console.log("MongoDB connected!");
})

connect();

export default db;