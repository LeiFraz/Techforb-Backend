import conditionsModel from './conditionsModel.js'

export const findAll = async() => {
    try {
        const response = await conditionsModel.findAll()

        return response
    } catch (error) {
        return null
    }
}