import { books } from '../db.js';

export const getAllBooks = (req, res) => {
    res.status(200).json(books);
};

export const getBookById = (req, res) => {
    res.send("הצגת ספר לפי קוד");
};