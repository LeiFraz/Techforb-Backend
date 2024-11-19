import * as services from './userServices.js'

export const findAll = async(req,res) => {
    try {
        const data = await services.findAll()

        if(!data || data === null){
            res.status(404).json({error: 'No se encontraron usuarios'})
            return;
        }

        res.status(200).json(data)
        
    } catch (error) {
        res.status(500).json({error: 'Hubo un error con el servidor'})
    }
}