import express from 'express'
import * as plants from './plantsController.js'

const plantsRoutes = express.Router()

plantsRoutes.get('/status', plants.findStatus)
plantsRoutes.get('/', plants.findPlants)
plantsRoutes.get('/:id', plants.findOnePlant)

plantsRoutes.post('/create', plants.createPlants)
plantsRoutes.put('/edit', plants.editPlants)
plantsRoutes.delete('/delete/:id', plants.deletePlants)

export default plantsRoutes