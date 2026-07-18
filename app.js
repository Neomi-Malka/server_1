import express from 'express';
import indexRouter from './routes/index.route.js';

const app=express();
const port=8000;

app.use(express.json());
app.use('/',indexRouter);


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});