import express from 'express';
import userRoutes from '../modules/tableUser/userRouter.js';
import plantsRoutes from '../modules/tablePlants/plantsRouter.js';
import conditionsRoutes from '../modules/tableConditions/conditionsRouter.js';

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/user', userRoutes);
app.use('/api/plants', plantsRoutes);
app.use('/api/conditions', conditionsRoutes);

export default app;