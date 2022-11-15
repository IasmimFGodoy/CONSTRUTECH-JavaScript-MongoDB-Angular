const mongoose = require('mongoose');
const Clientes = require('./Clientes');
const Etapas = require('./Etapas');


const DataSchema = new mongoose.Schema({
    clienteid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Clientes,
        require: true
    },
    etapaid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Etapas,
        require: true
    },
    descricaoetapa: {type: String, require: true},
    observacoes: {type: String, require: true},
    codigo: {type: String, require: true},
    codigocronograma: {type: String, require: true},
});

const etapasporcliente = mongoose.model ('EtapasPorCliente', DataSchema);
module.exports = etapasporcliente;