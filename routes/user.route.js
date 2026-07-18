import express from 'express';
import {users} from '../users'
 const router=express.Router();

 router.get('/',(req,res)=>{
    res.status(200).json(users);
 });


 router.post('/sign-in',(req,res)=>{
res.send("התחברות בוצעה בהצלחה");
 });

 router.post('/sign-up',(req,res)=>{
res.send("הרשמה בוצעה בהצלחה");
 });





 export default router;
