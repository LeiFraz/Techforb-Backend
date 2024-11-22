import express from 'express'
import * as conditions from './conditionsController.js'
import authToken from '../../middleware/authToken.js'

const conditionsRoutes = express.Router()

conditionsRoutes.get('/', authToken, conditions.findAll)

export default conditionsRoutes