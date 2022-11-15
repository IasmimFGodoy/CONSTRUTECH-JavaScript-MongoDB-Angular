const Produtos = require("../model/Produtos");

module.exports = {

    async store(req, res){
        const {nomePrduto,
               precoUnitario,
               codCaracteristica,
               statusProduto,
               dataCadastro} = req.body;
        const produtos = await Produtos.create({nomePrduto,
                                                precoUnitario,
                                                codCaracteristica,
                                                statusProduto,
                                                dataCadastro});
        res.json(produtos);

        return res.json(produtos);
    },

    async index(req, res){
        const produtos = await Produtos.find()
        res.json(produtos);
    },

    async detail(req, res){
        const{_id} = req.params
        const produtos = await Produtos.findOne({_id});
        res.json(produtos);
    },

    async update(req, res){
        const { _id, 
                nomePrduto,
                precoUnitario,
                codCaracteristica,
                statusProduto,
                dataCadastro} = req.body;
        let dataCreate = {}
        dataCreate = {
            _id, 
            nomePrduto,
            precoUnitario,
            codCaracteristica,
            statusProduto,
            dataCadastro
        }
        const produtos = await Produtos.findByIdAndUpdate({_id}, dataCreate, {new: true});
        res.json(produtos);
        },

    async delete(req, res){
        const produtos = await Produtos.findByIdAndDelete({_id});
        res.json(produtos);
    }
}