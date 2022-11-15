const mongoose = require('mongoose');


const DataSchema = new mongoose.Schema({
    condicaoPagamento: {
        type: String,
        require: true,
    },
    condPagamentoDescCompleta: {
        type: String,
        require: true,
    }
});