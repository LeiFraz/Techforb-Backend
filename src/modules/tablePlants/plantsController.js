import * as service from './plantsServices.js'
import axios from 'axios'

export const findPlants = async(req, res) => {
    try {
        
        const ApiPais = await axios.get('https://restcountries.com/v3.1/all')

        const paises = ApiPais.data.map(pais => { 
            return {
            name: pais.name.common,
            flag: pais.flags.png,
            }
        })

        const data = await service.findPlants()

        if(data.length === 0 || data === null){
            res.status(404).json({error: 'No se encontraron plantas'})
            return;
        }

        const plants = data.map((pts) => {
            const ptWithCountry = paises.find( p => pts.pais === p.name)

            return {
                id_Plantas: pts.id_Plantas,
                nombre: pts.nombre,
                lecturas: pts.lecturas,
                alertas_medias: pts.alertas_medias,
                alertas_rojas: pts.alertas_rojas,
                pais: pts.pais,
                bandera: ptWithCountry.flag,
            }
        })
        
        res.status(200).json(plants)

    } catch (error) {
        res.status(500).json({error: 'Hubo un problema con el servidor'})
    }
}

export const findOnePlant = async(req, res) => {
    try {
        const id = req.params.id

        const data = await service.findOnePlant(id)

        if(!data || data === null){
            res.status(404).json({error: 'No se encontraron plantas'})
            return;
        }
        
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json({error: 'Hubo un problema con el servidor'})
    }
}

export const findStatus = async(req,res) => {
    try {

        const data = await service.findStatus()

        if(data.length === 0 || data === null){
            res.status(404).json({error: 'No se encontraron lecturas ni alertas'})
            return;
        }

        res.status(200).json(data)

    } catch (error) {
        res.status(500).json({error: 'Hubo un problema con el servidor'})
    }
}

export const createPlants = async(req, res) => {
    try {
        const body = req.body

        const data = await service.createPlants(body)

        if (!data || data === null)
        {
            res.status(400).json({message: 'No se pudo crear la planta.'})
            return;
        }

        res.status(201).json(data)

    } catch (error) {
        res.status(500).json({error: 'Hubo un problema con el servidor'})
    }
}

export const editPlants = async(req, res) => {
    try {
        const body = req.body

        const data = await service.editPlants(body)

        if (!data || data === null)
        {
            res.status(400).json({message: 'No se pudo modificar la planta.'})
            return;
        }

        res.status(201).json(data)

    } catch (error) {
        res.status(500).json({error: 'Hubo un problema con el servidor'})
    }
}

export const deletePlants = async(req, res) => {
    try {
        const id = req.params.id

        const data = await service.deletePlants(id)

        if (!data || data === null)
        {
            res.status(400).json({message: 'No se pudo eliminar la planta.'})
            return;
        }

        res.status(201).json(data)

    } catch (error) {
        res.status(500).json({error: 'Hubo un problema con el servidor'})
    }
}