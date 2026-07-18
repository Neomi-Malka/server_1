const express=require('express');
const {books}=require('./db');

const app=express();
const port=8000;

app.use(express.json());

app.get('/books',(req,res)=>{
    const {search='', page=1, limit=10}=req.query;
    let result=books.filter(b=>b.name.includes(search));
    const start_index=(+page-1)*+limit;
    const end_index=+page*+limit;
    result=result.slice(start_index,end_index);
    res.json(res);

});

app.get('/books/:code',(req,res)=>{
const bookCode=req.params.code;
const book=books.find(b=>b.code==bookCode);

if(book){
    res.json(book);
}
else{
    res.status(404).json({messege:"ספר לא נמצא"});
}

});

app.post('/books',(req,res)=>{
const newBook=req.body;
if(!newBook.code || !newBook.name){
    return res.status(400).json({messege:"חובה לספק קוד ושם ספר"});
}
const double=books.find(b=>b.code==newBook.code);
if(double){
    return res.status(409).json({messege:"ספר עם קוד זה כבר קיים במערכת"})
}

books.push(newbook);
res.status(201).json({messege:"הספר הוסף בהצלחה",book:newBook});
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});