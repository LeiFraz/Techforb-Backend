import userModel from "./userModel.js"

export const findAll = async() => {
    try {
        const response = await userModel.findAll()

        return response
    } catch (error) {
        return null
    }
}