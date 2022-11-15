const mongoose = require('mongoose');
const Etapas = require('./Etapas');
const DataSchema = new mongoose.Schema({
    etapaid : {
        type: mongoose.Schema.Types.ObjectId,
        ref: Etapas,
        require: true,
    },
    dataInicio: {
        type: Date,
        require: true
    },
    dataFinal: {
        type: Date,
        require: true
    },
})

const itenscronograma = mongoose.model('ItensCronograma', DataSchema);
module.exports = itenscronograma;