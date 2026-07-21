export const currentDateMiddleware = (req, res, next) => {
    req.currentDate = new Date().toISOString();
    
    next();
};