import express from "express";
import { createPullReq, getPullReqs } from "../controller/pullReq.js";

//import {createPullReq,upsd}

const router=express.Router();

//CREATE
router.post("/",createPullReq);

// //UPDATE
// router.put("/:id",updateInvestments);

// //DELETE
// router.delete("/:id",deleteInvestments);

// GET A Investments
router.get("/:id",getPullReqs);

// //GET ALL Investments
// router.get("/",getAllInvestments);

export default router;