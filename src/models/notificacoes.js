const {DataTypes} = require('sequelize')
const sequelize = require('../config/database');
const Clientes = require('./clientes');

// Definindo o modelo
const Notificacoes = sequelize.define('Notificacoes', {
    IdCliente: {
        type: DataTypes.STRING,
        allowNull: false,
        references:{
            model:Clientes,
            key:"id"
        }
    },
    Mensagem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DataNotificacao: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    timestamps: true // Timestamps, para armazenar a hora que foi criado
});


module.exports = Notificacoes;