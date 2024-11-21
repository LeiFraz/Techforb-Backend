import * as services from './userServices.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const login = async(req,res) => {
    try {
        const body = req.body;

        //validaciones
        console.log(body.correo, body.contrasenia)
        const data = await services.login(body)

        if(!data || data === null){
            res.status(404).json({error: 'No se pudo realizar el login'})
            return;
        }

        const token = jwt.sign({
            id_Usuario: data.id_Usuario, 
            correo: data.correo, 
            nombre: data.nombre}, process.env.SECRET_KEY, {expiresIn: '8h'})
        
        res.status(200).json({data, token})
        
    } catch (error) {
        res.status(500).json({error: 'Hubo un error con el servidor'})
    }
}

export const register = async(req,res) => {
    try {
        const body = req.body;

        //validaciones del correo y nombre

        body.contrasenia = await bcrypt.hash(req.body.contrasenia, 10)

        const data = await services.register(body)

        if(!data || data === null){
            res.status(404).json({error: 'No se pudo realizar el registro'})
            return;
        }

        res.status(200).json(data)
        
    } catch (error) {
        res.status(500).json({error: 'Hubo un error con el servidor'})
    }
}