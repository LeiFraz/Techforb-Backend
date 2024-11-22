import express from 'express'
import * as plants from './plantsController.js'
import authToken from '../../middleware/authToken.js'

const plantsRoutes = express.Router()

plantsRoutes.get('/status', authToken, plants.findStatus)
plantsRoutes.get('/', authToken, plants.findPlants)
plantsRoutes.get('/:id', authToken, plants.findOnePlant)

plantsRoutes.post('/create', authToken, plants.createPlants)
plantsRoutes.put('/edit', authToken, plants.editPlants)
plantsRoutes.delete('/delete/:id', authToken, plants.deletePlants)

export default plantsRoutes