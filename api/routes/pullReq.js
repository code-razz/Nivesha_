import express from "express";
import { createPullReq, getCompPullReqs, getInvestPullReqs } from "../controller/pullReq.js";

//import {createPullReq,upsd}

const router=express.Router();

//CREATE
router.post("/",createPullReq);

// //UPDATE
// router.put("/:id",updateInvestments);

// //DELETE
// router.delete("/:id",deleteInvestments);

// GET pull requests made to a company
router.get("/comp/:id",getCompPullReqs);

// GET pull requests made by an investor
router.get("/invest/:id",getInvestPullReqs);

// //GET ALL Investments
// router.get("/",getAllInvestments);

export default router;