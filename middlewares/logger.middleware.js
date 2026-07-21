export const checkGetRequestMiddleware =(req,res,next)=>{
    if(req.method==='GET'){
        console.log(`[GET Request] Method: GET | Date: ${req.currentDate}`);
        
    }
    next();
    
    };