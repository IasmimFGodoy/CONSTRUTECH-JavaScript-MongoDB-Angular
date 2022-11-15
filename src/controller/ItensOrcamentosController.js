const ItensOrcamentos = require('../model/ItensOrcamentos');


module.exports = {
    async store(req, res){
        const{order_id, pn_id, item_id, item_nome, disc_prcnt, qtd, valor_unit, valor_total} = req.body;
        const itensorcamentos = await ItensOrcamentos.create({order_id, pn_id, item_id, item_nome, disc_prcnt, qtd, valor_unit, valor_total});

        res.json(itensorcamentos);
        return res.json(itensorcamentos);
    },

    async index(req, res){
        const itensorcamentos = await ItensOrcamentos.find();

        res.json(itensorcamentos);
        return res.json(itensorcamentos);
    },

    async detail(req, res){
        const{_id} = req.params
        const itensorcamentos = await ItensOrcamentos.findOne({_id});
        res.json(itensorcamentos);
    },

    async update(req, res){
        const {order_id, pn_id, item_id, item_nome, disc_prcnt, qtd, valor_unit, valor_total} = req.body;
        let dataCreate = {}
        dataCreate = {
            order_id, pn_id, item_id, item_nome, disc_prcnt, qtd, valor_unit, valor_total
        }
        const itensorcamentos = await ItensOrcamentos.findByIdAndUpdate({_id}, dataCreate, {new: true});
        res.json(itensorcamentos);
    },

    async delete(req, res){
        const itensorcamentos = await ItensOrcamentos.findByIdAndDelete({_id});
        res.json(itensorcamentos);
    }
}