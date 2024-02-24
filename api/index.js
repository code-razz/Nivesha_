import express from "express";
import db from "./db.js";   //This will automatically call and connect to mongodb

import companyRoute from "./routes/company.js";
import investorRoute from "./routes/investor.js";
import investmentsRoute from "./routes/investments.js";

const app=express();

//MIDDLEWARES

app.use(express.json());

//app.use("/api/auth",authRoute);
// app.use("/api/users",usersRoute);
app.use("/api/company",companyRoute);
app.use("/api/investor",investorRoute);
app.use("/api/investments",investmentsRoute);


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

app.listen(8000,()=>{
    console.log("Nivesha Backend listenning at 8000")
});