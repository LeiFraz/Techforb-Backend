import { DataTypes, Model } from 'sequelize';
import { mySqlSequelize } from '../../database/dbConnect.js';

const sequelize = mySqlSequelize;

class userModel extends Model {}

userModel.init(
    {
        idUser: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 4,
                max: 100
            }
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        contrasenia: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 6
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        createdAt: false,
        timestamps: false,
        tableName: 'user'
    }
)
// ).addHook('afterSync', 'insertInitialValues', async() => {
//     const count = userModel.count()

//     if (count === 0) {
//         await userModel.bulkCreate([
//             {idUser: 1, correo: 'admin@gmail.com', nombre: 'Juan Pablo', contrasenia: '12345678'},
//             {idUser: 2, correo: 'test@gmail.com', nombre: 'Pepe Aguilar', contrasenia: '12345678'}
//         ])
//     }
// });
export const usersDefault = async() => {
    const count = await userModel.count()
    
    if (count === 0) {
        await userModel.bulkCreate([
            {idUser: 1, correo: 'admin@gmail.com', nombre: 'Juan Pablo', contrasenia: '12345678'},
            {idUser: 2, correo: 'test@gmail.com', nombre: 'Pepe Aguilar', contrasenia: '12345678'}
        ])
    }
}

export default userModel;