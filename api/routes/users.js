import express from 'express';
import { deleteUser, getAllUser, getUser, updateUser } from '../controller/users.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router=express.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("HELLO user, you are authenticated i.e. logged in");
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("Hello user, you are logged in and you can delete your account or anyone's account if you are an admin");
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello adimin, you are logged in and you can delete all account");
// })

//CREATE
//it is in auth.js

//UPDATE
router.put("/:id",updateUser);

//DELETE
router.delete("/:id",deleteUser);

//GET
router.get("/:id",getUser);

//GET ALL
router.get("/",getAllUser);


export default router;