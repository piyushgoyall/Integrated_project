import express from "express";
import { registerSeeker } from "../Controller/register.js";  


const router = express.Router();
router.get('/',(req,res)=>{
    res.send("hello ji");;
})
router.get('/problempage',(req,res)=>{
    res.render('./Seeker/commonproblem.ejs',)
})
router.post("/register", registerSeeker);

export default router;
