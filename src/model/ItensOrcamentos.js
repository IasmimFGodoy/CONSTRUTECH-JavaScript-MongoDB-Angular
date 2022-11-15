const mongoose = require('mongoose');
const Orcamentos = require('./Orcamentos');
const Produtos = require('./Produtos');
const Etapas = require('./Etapas');
const DataSchema = new mongoose.Schema({
    orcamentoid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Orcamentos,
        require: true,
    },
    item_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: Produtos,
        require: true,
    },
    etapa_id: {
        type: String,
        type: mongoose.Schema.Types.ObjectId,
        ref: Etapas,
        require: true,
    },
    disc_prcnt: { type: Number, default: 0 }, //Porcentagem de desconto
    qtd: Number, //qtd de itens
    valor_unit: {
        type: Number,
        require: false
    },
    valor_total: Number
})

const itensorcamentos = mongoose.model('ItensOrcamentos', DataSchema);
module.exports = itensorcamentos;