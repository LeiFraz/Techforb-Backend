import express from 'express'
import * as user from './userController.js'

const userRoutes = express.Router()

userRoutes.get('/', user.findAll)
// userRoutes.get('/', user.findById)

export default userRoutes