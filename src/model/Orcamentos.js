const mongoose = require('mongoose');
const Clientes = require('./Clientes');
const Fornecedores = require('./Fornecedores');
const DataSchema = new mongoose.Schema({
    clienteid: {
        type: String,
        /*type: mongoose.Scheema.Types.ObjectID,
        ref: Clientes,*/
        require: true,
    },
    fornecedorid: {
        type: String,
        /*type: mongoose.Scheema.Types.ObjectID,
        ref: Fornecedores,*/
        require: true,
    },
    telefone: {type: String, required: true},
    email: {type: String, required: true},
    enderecoentrega: {type: String, required: true},
    condicaopagamento: {type: String, required: true},
    totalservicoprestado: {type: Number, required: true},
    total: {type: Number},
    order_date_lanc:
        {type: Date, default: Date.now},
})

const orcamentos = mongoose.model('Orcamentos', DataSchema)
module.exports = orcamentos;