const mongoose = require('mongoose');
const DataSchema = new mongoose.Schema({
    nome: String,
    email: String,
    telefone: String,
    tipopessoa: String,
    cpf: {type: String, required: false},
    cnpj: {type: String, required: false},
    RG: {type: String, required: false},
    codigoloja: Number,
    status: {type: String, default: 'Y'}
});
const fornecedores = mongoose.model ('Fornecedores', DataSchema);
module.exports = fornecedores;