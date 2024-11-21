import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {

    try {
        const existToken = req.headers['authorization']
        console.log(existToken)
        if (existToken){
            res.status('401').json({message: 'Ya tiene una sesion iniciada'})
            return;
        }
    
        next();

    } catch (error) {
        res.status(403).json({error: 'Su token expiro'})
    }
}
export default verifyToken