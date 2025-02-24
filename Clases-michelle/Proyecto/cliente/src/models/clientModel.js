import { DataTypes } from "sequelize";
import sequelize from "../conf/clientConfig.js";

const Client = sequelize.define('Client', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    telefono: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING, // Cambiado de BOOLEAN a STRING
        allowNull: false,
    },
    fech_nacimiento: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    }
}, {
    timestamps: false,
    tableName: 'cliente', // Nombre en plural
});

export default Client;
