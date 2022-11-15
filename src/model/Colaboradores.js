const Usuario = require('./Usuario');
const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nomecompleto: String,
    email: String,
    telefone: String,
    tipopessoa: String,
    cpf: String,
    rg: String,
    status: {
        type: String,
        default: 'Y'
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Usuario,
        require: true
    },
    //Y -- YES -- Ativo
    //N -- NO -- Inativo
});






const colaboradores = mongoose.model ('Colaboradores', DataSchema);
module.exports = colaboradores;