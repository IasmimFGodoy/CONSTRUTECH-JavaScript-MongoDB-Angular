const CondicaoPagamento = require("../model/CondicaoPagamento");

module.exports = {

    async store(req, res){
        const {condicaoPagamento, condPagamentoDescCompleta} = req.body;
        const condicaopagamento = await CondicaoPagamento.create({condicaoPagamento, condPagamentoDescCompleta});
        res.json(condicaopagamento);

        return res.json(condicaopagamento);
    },

    async index(req, res){
        const condicaopagamento = await CondicaoPagamento.find()
        res.json(condicaopagamento);
    },

    async detail(req, res){
        const{_id} = req.params
        const condicaopagamento = await CondicaoPagamento.findOne({_id});
        res.json(condicaopagamento);
    },

    async update(req, res){
        const {_id, condicaoPagamento, condPagamentoDescCompleta} = req.body;
        let dataCreate = {}
        dataCreate = {
            _id, condicaoPagamento, condPagamentoDescCompleta
        }
        const condicaopagamento = await CondicaoPagamento.findByIdAndUpdate({_id}, dataCreate, {new: true});
        res.json(condicaopagamento);
        },

    async delete(req, res){
        const condicaopagamento = await CondicaoPagamento.findByIdAndDelete({_id});
        res.json(condicaopagamento);
    }
}