const Cronogramas = require('../model/Cronogramas');
module.exports = {
    async store(req, res){
        const{etapaid, dataInicio, dataFinal} = req.body;
        const cronogramas = await Cronogramas.create({etapaid, dataInicio, dataFinal});

        res.json(cronogramas);
        return res.json(cronogramas);
    },

    async index(req, res){
        const cronogramas = await Cronogramas.find();

        res.json(cronogramas);
        return res.json(cronogramas);
    },

    async detail(req, res){
        const{_id} = req.params
        const cronogramas = await Cronogramas.findOne({_id});
        res.json(cronogramas);
    },

    async update(req, res){
        const {etapaid, dataInicio, dataFinal} = req.body;
        let dataCreate = {}
        dataCreate = { etapaid, dataInicio, dataFinal }
        const cronogramas = await Cronogramas.findByIdAndUpdate({_id}, dataCreate, {new: true});
        res.json(cronogramas);
    },

    async delete(req, res){
        const cronogramas = await Cronogramas.findByIdAndDelete({_id});
        res.json(cronogramas);
    }
}