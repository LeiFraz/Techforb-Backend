import userModel from "./userModel.js"
import bcrypt from 'bcrypt'

export const login = async(body) => {
    try {

        const response = await userModel.findOne({
            where: {
                correo: body.correo
            }
        })
        
        //comparar encriptacion 
        const comparar = await bcrypt.compare(body.contrasenia, response.contrasenia);
        
        if (!comparar){
            return null
        } 
        
        return response
    } catch (error) {
        return null
    }
}

export const register = async(body) => {
    try {
        const response = await userModel.create({
            nombre: body.nombre,
            correo: body.correo,
            contrasenia: body.contrasenia
        })

        return response
    } catch (error) {
        return null
    }
}