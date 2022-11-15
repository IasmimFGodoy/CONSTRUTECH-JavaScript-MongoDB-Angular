const Orcamentos = require("../model/Orcamentos");

module.exports = {

    async store(req, res){
        const { 
                fornecedorid,
                fornecedornome,
                telefone,
                email,
                enderecoentrega,
                condicaopagamento,
                totalservicoprestado,
                total,
                order_date_lanc}  = req.body;
        const orcamentos = await Orcamentos.create({
                                                    fornecedorid,
                                                    fornecedornome,
                                                    telefone,
                                                    email,
                                                    enderecoentrega,
                                                    condicaopagamento,
                                                    totalservicoprestado,
                                                    total,
                                                    order_date_lanc});
        res.json(orcamentos);

        return res.json(orcamentos);
    },

    async index(req, res){
        const orcamentos = await Orcamentos.find()
        res.json(orcamentos);
    },

    async detail(req, res){
        const{_id} = req.params
        const orcamentos = await Orcamentos.findOne({_id});
        res.json(orcamentos);
    },

    async update(req, res){
        const { 
                fornecedorid,
                fornecedornome,
                telefone,
                email,
                enderecoentrega,
                condicaopagamento,
                totalservicoprestado,
                total,
                order_date_lanc} = req.body;
        let dataCreate = {}
        dataCreate = {
                        
                        fornecedorid,
                        fornecedornome,
                        telefone,
                        email,
                        enderecoentrega,
                        condicaopagamento,
                        totalservicoprestado,
                        total,
                        order_date_lanc
                    }
        const orcamentos = await Orcamentos.findByIdAndUpdate({_id}, dataCreate, {new: true});
        res.json(orcamentos);
    },

    async delete(req, res){
        const orcamentos = await Orcamentos.findByIdAndDelete({_id});
        res.json(orcamentos);
    }
}