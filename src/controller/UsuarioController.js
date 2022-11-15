const Usuario = require('../model/Usuario');

module.exports = {
    async index(req, res)
    {
        const usuarios = await Usuario.find()// mesma coisa que select * from Usuario
        res.json(usuarios)
    },
    async detail(req, res)
    {
        const {_id} = req.params
        const usuarios = await Usuario.findOne({_id}); //mesma coisa que select * from usuario onde id = X
        res.json(usuarios)
    },
    async store(req, res)
    {
        const {nome, email, senha, confirmacao_de_senha} = req.body;
        const usuarios = await Usuario.create({nome, email, senha, confirmacao_de_senha}); // mesma coisa que insert into usuario
       
        if (!nome){
            return res.status(422).json({ msg: 'O nome é obrigatório!'})
        }
        if (!email){
            return res.status(422).json({ msg: 'O e-mail é obrigatório!'})
        }
        if (!senha){
            return res.status(422).json({ msg: 'A senha é obrigatória!'})
        }
        if (!confirmacao_de_senha){
            return res.status(422).json({ msg: 'A confirmação de senha é obrigatória!'})
        }
        if (senha !== confirmacao_de_senha){
            return res.status(422).json({ msg: 'As senhas não conferem!'})
        }
        const userExits = await Usuario.findOne({ email: email})
        if(userExits){
            return res.status(422).json({ msg: 'Por favor, utilize outro e-mail!' })
        }

        /*const salt = await bcrypt.gensalt(12)
        const passwordHash = await bcrypt.hash(senha, salt)

        const user = new Usuario({
            nome,
            email,
            senha: passwordHash,
        })

        try{
            await user.save()
            res.status(201).json({ msg: 'Usuário criado com sucesso!' })
        }catch(error){
            console.log(error)
            res.status(500).json({msg: 'Aconteceu um erro no servidor, tente novamente mais tarde!'})
        }*/
    },

    async update(req, res)
    {
        const {_id, nome, email, senha, confirmacao_de_senha} = req.body;

        let dataCreate = {}

        dataCreate = {
            nome, email, senha, confirmacao_de_senha
        }
        const usuarios = await Usuario.findByIdAndUpdate({_id}, dataCreate, {new: true});
        res.json(usuarios)
    },

    async delete(req, res)
    {
        const{_id} = req.params
        const usuarios = await Usuario.findByIdAndDelete({_id});
        res.json(usuarios)
    }
} 