const express = require('express');
const ClientesController = require('./controller/ClientesController');
const ColaboradorController = require('./controller/ColaboradorController');
const CondicaoPagamentoController = require('./controller/CondicaoPagamentoController');
const CronogramaController = require('./controller/CronogramaController');
const Etapas = require('./controller/EtapaController');
const EtapasPorClienteController = require('./controller/EtapasPorClienteController');
const FornecedorController = require('./controller/FornecedorController');
const ItensCronogramaController = require('./controller/ItensCronogramaController');
const ItensOrcamentosController = require('./controller/ItensOrcamentosController');
const OrcamentosController = require('./controller/OrcamentosController');
const Produtos = require('./controller/ProdutosController');
const UsuarioController = require('./controller/UsuarioController');
const routes = express.Router();
routes.get('/', function(req, res){
    res.json({message: "Bem vindo ao Back End MongoDB"})
});
routes.post('/auth/usuario', async(req, res)=>{
    const { email, senha } = req.body
    if (!email){
        return res.status(422).json({ msg: 'O e-mail é obrigatório!'})
    }
    if (!senha){
        return res.status(422).json({ msg: 'A senha é obrigatória!'})
    }
})

routes.get('/cliente', ClientesController.index);
routes.post('/cliente', ClientesController.store);
routes.get('/cliente/:_id', ClientesController.detail);
routes.delete('/cliente/:_id', ClientesController.delete);
routes.put('/cliente', ClientesController.update);

routes.get('/colaboradores', ColaboradorController.index);
routes.post('/colaboradores', ColaboradorController.store);
routes.get('/colaboradores/:_id', ColaboradorController.detail);
routes.delete('/colaboradores/:_id', ColaboradorController.delete);
routes.put('/colaboradores', ColaboradorController.update);

routes.get('/condicaopagamento', CondicaoPagamentoController.index);
routes.post('/condicaopagamento', CondicaoPagamentoController.store);
routes.get('/condicaopagamento/:_id', CondicaoPagamentoController.detail);
routes.delete('/condicaopagamento/:_id', CondicaoPagamentoController.delete);
routes.put('/condicaopagamento', CondicaoPagamentoController.update);

routes.get('/cronograma', CronogramaController.index);
routes.post('/cronograma', CronogramaController.store);
routes.get('/cronograma/:_id', CronogramaController.detail);
routes.delete('/cronograma/:_id', CronogramaController.delete);
routes.put('/cronograma', CronogramaController.update);

routes.get('/etapas', Etapas.index);
routes.post('/etapas', Etapas.store);
routes.get('/etapas/:_id', Etapas.detail);
routes.delete('/etapas/:_id', Etapas.delete);
routes.put('/etapas', Etapas.update);

routes.get('/etapasporcliente', EtapasPorClienteController.index);
routes.post('/etapasporcliente', EtapasPorClienteController.store);
routes.get('/etapasporcliente/:_id', EtapasPorClienteController.detail);
routes.delete('/etapasporcliente/:_id', EtapasPorClienteController.delete);
routes.put('/etapasporcliente', EtapasPorClienteController.update);

routes.get('/fornecedores', FornecedorController.index);
routes.post('/fornecedores', FornecedorController.store);
routes.get('/fornecedores/:_id', FornecedorController.detail);
routes.delete('/fornecedores/:_id', FornecedorController.delete);
routes.put('/fornecedores', FornecedorController.update);

routes.get('/itenscronograma', ItensCronogramaController.index);
routes.post('/itenscronograma', ItensCronogramaController.store);
routes.get('/itenscronograma/:_id', ItensCronogramaController.detail);
routes.delete('/itenscronograma/:_id', ItensCronogramaController.delete);
routes.put('/itenscronograma', ItensCronogramaController.update);

routes.get('/itensorcamentos', ItensOrcamentosController.index);
routes.post('/itensorcamentos', ItensOrcamentosController.store);
routes.get('/itensorcamentos/:_id', ItensOrcamentosController.detail);
routes.delete('/itensorcamentos/:_id', ItensOrcamentosController.delete);
routes.put('/itensorcamentos', ItensOrcamentosController.update);

routes.get('/orcamentos', OrcamentosController.index);
routes.post('/orcamentos', OrcamentosController.store);
routes.get('/orcamentos/:_id', OrcamentosController.detail);
routes.delete('/orcamentos/:_id', OrcamentosController.delete);
routes.put('/orcamentos', OrcamentosController.update);

routes.get('/produtos', Produtos.index);
routes.post('/produtos', Produtos.store);
routes.get('/produtos/:_id', Produtos.detail);
routes.delete('/produtos/:_id', Produtos.delete);
routes.put('/produtos', Produtos.update);

routes.get('/usuario', UsuarioController.index);
routes.post('/usuario', UsuarioController.store);
routes.get('/usuario/:_id', UsuarioController.detail);
routes.delete('/usuario/:_id', UsuarioController.delete);
routes.put('/usuario', UsuarioController.update);

module.exports = routes;