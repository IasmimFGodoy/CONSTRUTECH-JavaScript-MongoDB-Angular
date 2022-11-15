const Fornecedores  = require("../model/Fornecedores");
module.exports = {
    async store(req, res){
        const {
            nome,
            email,
            telefone,
            tipopessoa,
            cpf,
            rg,
            codigoloja,
            status
        } = req.body;
        const fornecedores = await Fornecedores.create({
            nome,
            email,
            telefone,
            tipopessoa,
            cpf,
            rg,
            codigoloja,
            status
        })
        return res.json(fornecedores);
    },

    async index(req, res){
        const fornecedores = await Fornecedores.find()
        res.json(fornecedores)
    },

    async detail(req, res){
        const {_id} = req.params
        const fornecedores = await Fornecedores.findOne({_id});
        res.json(fornecedores)
    },

    async update(req, res){
        const { _id, 
                nome,
                email,
                telefone,
                tipopessoa,
                cpf,
                rg,
                codigoloja,
                status} = req.body;
        let dataCreate = {}
        dataCreate = {
            nome,
            email,
            telefone,
            tipopessoa,
            cpf,
            rg,
            codigoloja,
            status
        }
        const fornecedores = await Fornecedores.findByIdAndUpdate({_id}, dataCreate, {new: true});
        res.json(fornecedores)
    },
    async delete(req, res){
        const{_id} = req.params
        const fornecedores = await Fornecedores.findByIdAndDelete({_id});
        res.json(fornecedores)
    }
}