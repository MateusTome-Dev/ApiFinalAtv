const {DataTypes} = require('sequelize')
const sequelize = require('../config/database');
const Contas = require('./contas');

// Definindo o modelo
const Transacoes = sequelize.define('Transacoes', {
    idConta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:Contas,
            key:"id"
        }
    },
    TipoConta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TipoTransação: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Valor: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    DataTransacao: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    timestamps: true
});


module.exports = Transacoes;