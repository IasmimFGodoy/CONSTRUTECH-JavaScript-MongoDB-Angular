const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    NomeEtapa: String,
    NivelEtapa: Number
});
const etapas = mongoose.model('Etapas', DataSchema);
module.exports = etapas;