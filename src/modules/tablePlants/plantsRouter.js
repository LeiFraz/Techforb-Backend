import express from 'express'
import * as plants from './plantsController.js'

const plantsRoutes = express.Router()

plantsRoutes.get('/status', plants.findStatus)
plantsRoutes.get('/', plants.findPlants)

// plantsRoutes.post('/create', plants.createPlants)
// plantsRoutes.put('/edit', plants.editPlants)
// plantsRoutes.delete('/delete', plants.deletePlants)

export default plantsRoutes