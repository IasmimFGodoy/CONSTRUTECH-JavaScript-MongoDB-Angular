const mongoose = require('mongoose');
const DataSchema = new mongoose.Schema({
    nome: String,
    email: String,
    telefone: String,
    tipopessoa: String,
    cpf: {type: String, require: false},
    cnpj: {type: String, require: false},
    rg: {type: String, require: false},
    status: {type: String, default: 'Y'}
});
const clientes = mongoose.model ('Clientes', DataSchema);
module.exports = clientes;