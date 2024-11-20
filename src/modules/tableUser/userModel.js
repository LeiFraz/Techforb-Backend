import { DataTypes, Model } from 'sequelize';
import mySqlSequelize from '../../database/dbConnect.js';
import bcrypt from 'bcrypt'

const sequelize = mySqlSequelize;

class userModel extends Model {}

userModel.init(
    {
        id_Usuario: {
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
        tableName: 'usuario'
    }
)

export const usersDefault = async() => {
    const count = await userModel.count()
    
    const contra1 = await bcrypt.hash('admin', 10)
    const contra2 = await bcrypt.hash('test', 10)

    if (count === 0) {
        await userModel.bulkCreate([
            {id_usuario: 1, correo: 'admin@gmail.com', nombre: 'Juan Pablo', contrasenia: contra1},
            {id_usuario: 2, correo: 'test@gmail.com', nombre: 'Pepe Aguilar', contrasenia: contra2}
        ])
    }
}

export default userModel;