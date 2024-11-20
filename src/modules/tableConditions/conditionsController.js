import * as service from './conditionsServices.js'

export const findAll = async(req,res) => {
    try {
        const data = await service.findAll()

        if(data.length === 0 || data === null){
            res.status(404).json({error: 'No se encontraron condiciones ambientales'})
            return;
        }
        console.log(data)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error: 'Hubo un problema con el servidor'})
    }
}