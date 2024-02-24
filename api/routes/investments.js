import express from "express";
import { createInvestments, deleteInvestments, getAllInvestments, getInvestments, updateInvestments } from "../controller/investments.js";
//import {createInvestments,upsd}

const router=express.Router();

//CREATE
router.post("/",createInvestments);

//UPDATE
router.put("/:id",updateInvestments);

//DELETE
router.delete("/:id",deleteInvestments);

//GET A Investments
router.get("/:id",getInvestments);

//GET ALL Investments
router.get("/",getAllInvestments);

export default router;