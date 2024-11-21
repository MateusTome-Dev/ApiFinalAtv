const {DataTypes} = require('sequelize')
const sequelize = require('../config/database')

// Definindo o modelo
const Admins = sequelize.define('Admins', {
    Nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true // E-mail unico
    },
    Senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    
    timestamps: true // Timestamps, para armazenar a hora que foi criado
});


module.exports = Admins;