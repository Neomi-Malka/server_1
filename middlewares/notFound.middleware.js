export const notFoundHandler=(req,res,next)=>{
const error=new Error(`הנתיב המבוקש לא נמצא: ${req.originalUrl}`);
res.status(404);
next(error);
}