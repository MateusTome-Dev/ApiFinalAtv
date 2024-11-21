const {DataTypes} = require('sequelize')
const sequelize = require('../config/database')

// Definindo o modelo
const Clientes = sequelize.define('Clientes', {
    Nome_Cliente: {
        type: DataTypes.STRING,
        allowNull: false
    },

    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true // E-mail unico
    }
}, {
    timestamps: true // Timestamps, para armazenar a hora que foi criado
});

module.exports = Clientes;