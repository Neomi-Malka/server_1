import { users } from '../users.js'; 

export const getAllUsers = (req, res) => {
    res.status(200).json(users);
};

export const signIn = (req, res) => {
    res.send("התחברות בוצעה בהצלחה");
};

export const signUp = (req, res) => {
    res.send("הרשמה בוצעה בהצלחה");
};