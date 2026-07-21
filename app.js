import express from 'express';
import indexRouter from './routes/index.route.js';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import {currentDateMiddleware} from './middlewares/currentDate.middleware.js';
import {checkGetRequestMiddleware} from './middlewares/logger.middleware.js';
import {errorHandler} from './middlewares/errorHandler.middleware.js';
import {notFoundHandler} from './middlewares/notFound.middleware.js';




const app=express();
const port=8000;


app.use(express.json());
app.use(cors());
// Middleware שמוסיף שכבות אבטחה והגנה על השרת מפני פגיעויות נפוצות
app.use(helmet());
// Middleware שמדפיס לטרמינל את פרטי כל בקשה שנכנסת לשרת בזמן אמת לצורכי פיתוח
app.use(morgan('dev'));

app.use(currentDateMiddleware);
app.use(checkGetRequestMiddleware);

app.use('/', indexRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});