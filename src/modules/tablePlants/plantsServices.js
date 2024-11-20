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

export const findOnePlant = async(id) => {
    try {
        const response = await plantsModel.findOne({
            where: {
                id_Plantas: id
            }
        })

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

export const createPlants = async(body) => {
    try {
        
        const verifyPlants = await plantsModel.findOne({
            where: {
                nombre: body.nombre
            }
        })

        console.log(verifyPlants)

        if (verifyPlants) {
            return null
        }

        const response = await plantsModel.create({
            nombre: body.nombre,
            pais: body.pais
        })

        return response

    } catch (error) {
        return null
    }
}

export const editPlants = async(body) => {
    try {
        
        const plants = await plantsModel.findOne({
            where: {
                nombre: body.nombre
            }
        })
        
        if (!plants || plants === null){
            return null
        }

        await plants.update({
            lecturas: body.lecturas? body.lecturas : plants.dataValues.lecturas,
            alertas_medias: body.alertas_medias? body.alertas_medias : plants.dataValues.alertas_medias,
            alertas_rojas: body.alertas_rojas? body.alertas_rojas : plants.dataValues.alertas_rojas,
            sensores_deshabilitados: body.sensores_deshabilitados? body.sensores_deshabilitados : plants.dataValues.sensores_deshabilitados
        })

        await plants.save()

        return plants
    } catch (error) {
        return null
    }
}

export const deletePlants = async(id) => {
    try {
        
        const plant = await plantsModel.findOne({
            where: {
                id_Plantas: id
            }
        })

        if (!plant || plant === null){
            return null
        }

        const plantDestroy = await plantsModel.destroy({
            where: {
                id_Plantas: id
            }
        })
        
        return {message: 'Planta eliminada exitosamente'}
    } catch (error) {
        return null
    }
}