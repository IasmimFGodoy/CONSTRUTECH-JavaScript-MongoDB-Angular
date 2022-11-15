const Colaboradores  = require("../model/Colaboradores");
module.exports = {
    async store(req, res){
        const {
            nomecliente,
            etapaid,
            descricaoetapa,
            observacoes,
            codigo,
            codigocronograma
        } = req.body;
        const colaboradores = await Colaboradores.create({
            nomecliente,
            etapaid,
            descricaoetapa,
            observacoes,
            codigo,
            codigocronograma
        })
        return res.json(colaboradores);
    },

    async index(req, res){
        const colaboradores = await Colaboradores.find()
        res.json(colaboradores)
    },

    async detail(req, res){
        const {_id} = req.params
        const colaboradores = await Colaboradores.findOne({_id});
        res.json(colaboradores)
    },

    async update(req, res){
        const { _id, 
                nomecliente,
                etapaid,
                descricaoetapa,
                observacoes,
                codigo,
                codigocronograma} = req.body;
        let dataCreate = {}
        dataCreate = {
            nomecliente,
            etapaid,
            descricaoetapa,
            observacoes,
            codigo,
            codigocronograma
        }
        const colaboradores = await Colaboradores.findByIdAndUpdate({_id}, dataCreate, {new: true});
        res.json(colaboradores)
    },
    async delete(req, res){
        const{_id} = req.params
        const colaboradores = await Colaboradores.findByIdAndDelete({_id});
        res.json(colaboradores)
    }
}