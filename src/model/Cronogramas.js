const mongoose = require ('mongoose');
const Clientes = require('./Clientes')
const DataSchema = new mongoose.Schema({
    cliente_id: {
        type: String,
        type: mongoose.Schema.Types.ObjectId,
        ref: Clientes,
        require: true
    },
    data_inicio: Date,
    data_final: Date,
    status: {type: Boolean, default: true},
    data_criacao: {type: Boolean, default: Date.now}
});

const cronogramas = mongoose.model('Cronogramas', DataSchema);
module.exports = cronogramas;