const Etapas = require("../model/Etapas");

module.exports = {

    async store(req, res){
        const {NomeEtapa, NivelEtapa} = req.body;
        const etapas = await Etapas.create({NomeEtapa, NivelEtapa});
        res.json(etapas);

        return res.json(etapas);
    },

    async index(req, res){
        const etapas = await Etapas.find()
        res.json(etapas);
    },

    async detail(req, res){
        const{_id} = req.params
        const etapas = await Etapas.findOne({_id});
        res.json(etapas);
    },

    async update(req, res){
        const {_id, NomeEtapa, NivelEtapa} = req.body;
        let dataCreate = {}
        dataCreate = {
            _id, NomeEtapa, NivelEtapa
        }
        const etapas = await Etapas.findByIdAndUpdate({_id}, dataCreate, {new: true});
        res.json(etapas);
        },

    async delete(req, res){
        const etapas = await Etapas.findByIdAndDelete({_id});
        res.json(etapas);
    }
}