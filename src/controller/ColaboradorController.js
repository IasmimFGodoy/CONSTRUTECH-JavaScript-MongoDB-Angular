const Colaboradores  = require("../model/Colaboradores");
module.exports = {
    async store(req, res){
        const {
            nomecompleto,
            email, 
            telefone, 
            tipopessoa,
            cpf,
            rg,
            status
        } = req.body;
        const colaboradores = await Colaboradores.create({
            nomecompleto,
            email, 
            telefone, 
            tipopessoa,
            cpf,
            rg,
            status
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
                nomecompleto,
                email, 
                telefone, 
                tipopessoa,
                cpf,
                rg,
                status} = req.body;
        let dataCreate = {}
        dataCreate = {
            nomecompleto,
            email, 
            telefone, 
            tipopessoa,
            cpf,
            rg,
            status
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