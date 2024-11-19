import app from './src/app/App.js';
import dbConnect from './src/database/dbConnect.js'
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT || 5000;

dbConnect()

app.listen(PORT, () => {console.log('Servidor ejecutandose')})