import mySqlSequelize from "../../database/dbConnect.js"
import plantsModel from "./plantsModel.js"

export const findPlants = async(body) => {
    try {
        const response = await plantsModel.findAll()
        
        return response
    } catch (error) {
        return null
    }
}

export const findStatus = async() => {
    try {
        const response = await plantsModel.findAll({
            attributes: 
            [
                [mySqlSequelize.fn('SUM', mySqlSequelize.col('lecturas')), 'lecturas'],
                [mySqlSequelize.fn('SUM', mySqlSequelize.col('alertas_medias')), 'alertas_medias'],
                [mySqlSequelize.fn('SUM', mySqlSequelize.col('alertas_rojas')), 'alertas_rojs'],
                [mySqlSequelize.fn('SUM', mySqlSequelize.col('sensores_deshabilitados')), 'sensores_deshabilitados'],
            ]
        })
        return response

    } catch (error) {
        return null
    }
}