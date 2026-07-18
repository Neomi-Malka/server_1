import express from 'express';
import bookRouter from '../routes/book.route.js';
import usersRouter from '../routes/user.route.js';
const router=express.Router();

router.use('/books',bookRouter);
router.use('/users',usersRouter);

export default router;