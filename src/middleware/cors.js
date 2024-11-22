
export const corsConfig = (req, res, next) =>{
    res.header('Access-Control-Allow-Origin', 'https://monitoreoglobal.netlify.app'); 
    // res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
}
