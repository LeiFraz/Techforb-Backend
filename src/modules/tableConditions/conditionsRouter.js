import express from 'express'
import * as conditions from './conditionsController.js'

const conditionsRoutes = express.Router()

conditionsRoutes.get('/', conditions.findAll)

export default conditionsRoutes