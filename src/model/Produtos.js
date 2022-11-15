const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    nomePrduto: String,
    precoUnitario: Number,
    codCaracteristica: Number,
    statusProduto: {
        type: Boolean,
        default: true
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }
})

const produtos = mongoose.model('Produtos', DataSchema)
module.exports = produtos;
