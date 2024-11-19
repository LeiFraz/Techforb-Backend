// import { mySqlSequelize } from "./dbConnect.js";
import userModel, { usersDefault } from "../modules/tableUser/userModel.js"

const initializeModels = async()=>{
    await userModel.sync();
    await usersDefault();
}

export default initializeModels