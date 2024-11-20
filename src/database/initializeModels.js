import  mySqlSequelize  from "./dbConnect.js";
import { usersDefault } from "../modules/tableUser/userModel.js"
import { plantsDefault } from "../modules/tablePlants/plantsModel.js";
import { conditionsDefault } from "../modules/tableConditions/conditionsModel.js";

export const initializeModels = async()=>{
    const {userModel, plantsModel, conditionsModel} = mySqlSequelize.models;

    userModel.sync();
    plantsModel.sync();
    conditionsModel.sync();
    
    await usersDefault();
    await plantsDefault();
    await conditionsDefault();
}
