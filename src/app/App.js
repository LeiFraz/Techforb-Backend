//aqui va lo de express, el puerto, el escuchador
import express from 'express';
import userRoutes from '../modules/tableUser/userRouter.js';

//importacion de rutas
// import usersRouter from '../modules/usuario/UserRoutes.js';
// import entrepreneurRouter from '../modules/emprendimiento/EntrepreneurRoutes.js'

//instancia de express
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//RUTAS
app.use('/api/login', userRoutes);

export default app;