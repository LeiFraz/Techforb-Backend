import Sequelize from 'sequelize'
import dotenv from "dotenv"

dotenv.config();

const {DB_NAME, DB_USER, DB_PASSWORD,DB_HOST,DB_PORT} = process.env

const mySqlSequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    dialect: 'mysql',
    host: DB_HOST,
    port: Number(DB_PORT)
});

export const dbConnect = async() => {
    try {
        await mySqlSequelize.authenticate();
        // await initializeModels();         
        
        console.log("conectado a la base de datos")  
    } catch (error) {
        console.log(error)
    }  
} 

export default mySqlSequelize;