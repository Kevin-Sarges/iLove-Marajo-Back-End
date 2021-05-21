const routes = require('express').Router();
const avaliacao = require('../controllers/controllerAvaliacao');

routes.post('/praia/avaliação', avaliacao.avaliar);

module.exports = routes;