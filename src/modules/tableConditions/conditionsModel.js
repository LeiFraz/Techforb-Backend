import { DataTypes, Model } from "sequelize";
import mySqlSequelize from "../../database/dbConnect.js";

const sequelize = mySqlSequelize

class conditionsModel extends Model{}

conditionsModel.init(
    {
        id_Condicion: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        tipo_condicion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lecturas: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        alertas_medias: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        alertas_rojas: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        createdAt: false,
        timestamps: false,
        tableName: 'condicion'
    }
)

export const conditionsDefault = async() => {
    const count = await conditionsModel.count()

    if (count === 0){
        await conditionsModel.bulkCreate([
            {
                id_Condicion: 1, 
                tipo_condicion: 'Temperatura',
                lecturas: 250,
                alertas_medias: 25,
                alertas_rojas: 3,
            },
            {
                id_Condicion: 2, 
                tipo_condicion: 'Presion',
                lecturas: 100,
                alertas_medias: 5,
                alertas_rojas: 2,
            },
            {
                id_Condicion: 3, 
                tipo_condicion: 'Viento',
                lecturas: 400,
                alertas_medias: 101,
                alertas_rojas: 49,
            },
            {
                id_Condicion: 4, 
                tipo_condicion: 'Niveles',
                lecturas: 153,
                alertas_medias: 40,
                alertas_rojas: 12,
            },
            {
                id_Condicion: 5, 
                tipo_condicion: 'Energia',
                lecturas: 50,
                alertas_medias: 6,
                alertas_rojas: 1,
            },
            {
                id_Condicion: 6, 
                tipo_condicion: 'Tension',
                lecturas: 100,
                alertas_medias: 20,
                alertas_rojas: 3,
            },
            {
                id_Condicion: 7, 
                tipo_condicion: 'Monoxido de carbono',
                lecturas: 100,
                alertas_medias: 4,
                alertas_rojas: 1,
            },
            {
                id_Condicion: 8, 
                tipo_condicion: 'Otros gases',
                lecturas: 117,
                alertas_medias: 11,
                alertas_rojas: 4,
            },
        ])
    }
}


export default conditionsModel