const Clientes  = require("../model/Clientes");
module.exports = {
    async store(req, res){
        const {
            nome,
            email,
            telefone,
            tipopessoa,
            cpf,
            rg,
            status
        } = req.body;
        const clientes = await Clientes.create({
            nome,
            email,
            telefone,
            tipopessoa,
            cpf,
            rg,
            status
        })
        return res.json(clientes);
    },

    async index(req, res){
        const clientes = await Clientes.find()
        res.json(clientes)
    },

    async detail(req, res){
        const {_id} = req.params
        const clientes = await Clientes.findOne({_id});
        res.json(clientes)
    },

    async update(req, res){
        const { _id, 
                nome,
                email,
                telefone,
                tipopessoa,
                cpf,
                rg,
                status} = req.body;
        let dataCreate = {}
        dataCreate = {
            nome,
            email,
            telefone,
            tipopessoa,
            cpf,
            rg,
            status
        }
        const clientes = await Clientes.findByIdAndUpdate({_id}, dataCreate, {new: true});
        res.json(clientes)
    },
    async delete(req, res){
        const{_id} = req.params
        const clientes = await Clientes.findByIdAndDelete({_id});
        res.json(clientes)
    }
}