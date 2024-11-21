const {DataTypes} = require('sequelize')
const sequelize = require('../config/database');
const Clientes = require('./clientes');

// Definindo o modelo
const Contas = sequelize.define('Contas', {
    idCliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:Clientes,
            key:"id"
        }
    },

    Saldo: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    }
}, {
    timestamps: true // Timestamps, para armazenar a hora que foi criado
});


module.exports = Contas;