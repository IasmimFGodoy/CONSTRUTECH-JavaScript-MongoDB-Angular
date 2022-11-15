const ItensCronograma = require('../model/ItensCronograma');

module.exports = {
    async store(req, res){
        const{etapaid, dataInicio, dataFinal} = req.body;
        const itenscronograma = await ItensCronograma.create({etapaid, dataInicio, dataFinal});

        res.json(itenscronograma);
        return res.json(itenscronograma);
    },

    async index(req, res){
        const itenscronograma = await ItensCronograma.find();

        res.json(itenscronograma);
        return res.json(itenscronograma);
    },

    async detail(req, res){
        const{_id} = req.params
        const itenscronograma = await ItensCronograma.findOne({_id});
        res.json(itenscronograma);
    },

    async update(req, res){
        const {etapaid, dataInicio, dataFinal} = req.body;
        let dataCreate = {}
        dataCreate = { etapaid, dataInicio, dataFinal }
        const itenscronograma = await ItensCronograma.findByIdAndUpdate({_id}, dataCreate, {new: true});
        res.json(itenscronograma);
    },

    async delete(req, res){
        const itenscronograma = await ItensCronograma.findByIdAndDelete({_id});
        res.json(itenscronograma);
    }
}