import jwt from 'jsonwebtoken'

const authToken = (req, res, next) => {

    try {
        const existToken = req.headers['authorization']

        if (!existToken || !existToken.startsWith('Bearer ')){
            res.status('401').json({message: 'Acceso no autorizado'})
            return;
        }
    
        const token = existToken.split(' ')[1];

        const jwtoken = jwt.verify(token, process.env.SECRET_KEY)
        
        req.token = jwtoken;
        next();

    } catch (error) {
        res.status(403).json({error: 'Token invalido'})
    }
}
export default authToken