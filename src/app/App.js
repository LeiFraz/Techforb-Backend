import express from 'express';
import userRoutes from '../modules/tableUser/userRouter.js';
import plantsRoutes from '../modules/tablePlants/plantsRouter.js';
import conditionsRoutes from '../modules/tableConditions/conditionsRouter.js';
import cors from 'cors'
import { corsConfig } from '../middleware/cors.js';
import axios from 'axios'

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(corsConfig)

app.use('/api/user', userRoutes);
app.use('/api/plants', plantsRoutes);
app.use('/api/conditions', conditionsRoutes);
app.use('/api/paises', async(req,res) => {
    
    try {
        const ApiPais = await axios.get('https://restcountries.com/v3.1/all')
        
        const paises = ApiPais.data.map(pais => { 
            return {
                name: pais.name.common
            }
        })
        paises.sort((a, b)=> {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });

        res.status(200).json(paises)
    } catch (error) {
        res.status(500).json({error: 'Hubo un problema con el servidor'})
    }
})

export default app;