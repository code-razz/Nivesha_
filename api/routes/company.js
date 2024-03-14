import express from "express";

import { createCompany, deleteCompany, getAllCompany, getCompany, getUserCompany, updateCompany } from "../controller/company.js";

const router=express.Router();

//CREATE
router.post("/",createCompany);

//UPDATE
router.put("/:id",updateCompany);

//DELETE
router.delete("/:id",deleteCompany);

//GET A Company
router.get("/:id",getCompany);

//GET ALL COMPANY
router.get("/",getAllCompany)

//get usercompany
router.get("/ucom/:id",getUserCompany);

export default router;