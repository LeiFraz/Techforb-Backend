import { DataTypes, Model } from 'sequelize';
import mySqlSequelize from '../../database/dbConnect.js';

const sequelize = mySqlSequelize;

class plantsModel extends Model {}

plantsModel.init(
    {
        id_Plantas: {
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
        lecturas: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        alertas_medias: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        alertas_rojas: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sensores_deshabilitados: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pais: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        createdAt: false,
        timestamps: false,
        tableName: 'plantas'
    }
)

export const plantsDefault = async() => {
    const count = await plantsModel.count()
    
    if (count === 0) {
        await plantsModel.bulkCreate([
            {
                id_Plantas: 1, 
                nombre: 'Quilmes', 
                lecturas: 300,
                alertas_rojas: 2,
                alertas_medias: 10,
                sensores_deshabilitados: 10,
                pais: 'Argentina',
            },
            {
                id_Plantas: 2, 
                nombre: 'Asuncion', 
                lecturas: 321,
                alertas_rojas: 2,
                alertas_medias: 9,
                sensores_deshabilitados: 24,
                pais: 'Paraguay',
            },
            {
                id_Plantas: 3, 
                nombre: 'Montevideo', 
                lecturas: 434,
                alertas_rojas: 4,
                alertas_medias: 4,
                sensores_deshabilitados: 7,
                pais: 'Uruguay',
            }
        ])
    }
}

export default plantsModel;