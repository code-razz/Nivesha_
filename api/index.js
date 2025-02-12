import express from "express";
import db from "./db.js";   //This will automatically call and connect to mongodb

import companyRoute from "./routes/company.js";
import investorRoute from "./routes/investor.js";
import investmentsRoute from "./routes/investments.js";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import pullReqRoute from "./routes/pullReq.js";

import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';

const PORT=process.env.PORT || 8000;

const app=express();

app.use(cors({
    origin: ['http://localhost:5173','http://localhost:5174','http://localhost:5175','https://nivesha-frontend.vercel.app','https://nivesha.vercel.app'],
    credentials: true, // If you're using cookies or authentication
  }));

//MIDDLEWARES

app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/company",companyRoute);
app.use("/api/investor",investorRoute);
app.use("/api/investments",investmentsRoute);
app.use("/api/pullreq",pullReqRoute);


//ERROR handling middleware
app.use((err,req,res,next)=>{
    const errStatus=err.status || 500;
    const errMessage=err.message || "Something went wrong";
    return res.status(errStatus).json({
        success:false,
        status:errStatus,
        message:errMessage,
        stack:err.stack   //gives more details on error
    })
})

app.listen(PORT,()=>{
    console.log("Nivesha Backend listenning at ",PORT)
});