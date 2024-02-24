import express from "express";
import { createInvestor, deleteInvestor, getAllInvestor, getInvestor, updateInvestor } from "../controller/Investor.js";
//import {createInvestor,upsd}

const router=express.Router();

//CREATE
router.post("/",createInvestor);

//UPDATE
router.put("/:id",updateInvestor);

//DELETE
router.delete("/:id",deleteInvestor);

//GET A Investor
router.get("/:id",getInvestor);

//GET ALL Investor
router.get("/",getAllInvestor);

export default router;