import express from 'express'
import * as user from './userController.js'
// import authToken from '../../middleware/authToken.js'

// import axios from 'axios'

const userRoutes = express.Router()

//login
userRoutes.get('/login', user.login)
userRoutes.post('/registro', user.register)
// userRoutes.get('/prueba', authToken, async(req,res) => {
//     try {
//         const ApiPais = await axios.get('https://restcountries.com/v3.1/all')

//         const paises = ApiPais.data.map(pais => { 
//             return {
//             name: pais.name.common,
//             flag: pais.flags.png,
//             }
//         })
    
//         res.status(200).json({message: 'accediste al dashboard', token: req.token, paises: paises})
        
//     } catch (error) {
//         res.status(500).json({error: 'Error con el servidor'})
//     }
// })

export default userRoutes