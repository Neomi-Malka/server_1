import express from'express'
import { books } from '../db';
const router=express.Router();


router.get('/',(req,res)=>{
    const {search='', page=1, limit=10}=req.query;
    let result=books.filter(b=>b.name.includes(search));
    const start_index=(+page-1)*+limit;
    const end_index=+page*+limit;
    result=result.slice(start_index,end_index);
    res.json(result);

});
router.get('/:code',(req,res)=>{
const bookCode=req.params.code;
const book=books.find(b=>b.code==bookCode);

if(book){
    res.json(book);
}
else{
    res.status(404).json({messege:"ספר לא נמצא"});
}

});

router.post('/',(req,res)=>{
const newBook=req.body;
if(!newBook.code || !newBook.name){
    return res.status(400).json({messege:"חובה לספק קוד ושם ספר"});
}
const double=books.find(b=>b.code==newBook.code);
if(double){
    return res.status(409).json({messege:"ספר עם קוד זה כבר קיים במערכת"})
}

books.push(newBook);
res.status(201).json({messege:"הספר הוסף בהצלחה",book:newBook});
});


export default router ;