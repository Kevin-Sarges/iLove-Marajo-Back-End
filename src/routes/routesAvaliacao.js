const routes = require('express').Router();
const avaliacao = require('../controllers/controllerAvaliacao');

routes.get('/avaliacoes-praia', avaliacao.listaAvaliacoes);

routes.post('/avaliar-praia', avaliacao.avaliar);

module.exports = routes;