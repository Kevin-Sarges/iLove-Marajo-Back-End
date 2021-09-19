const routes = require('express').Router();
const CidadeController = require('../controllers/CidadeControllers');

routes.get('/cidades', CidadeController.index);
routes.get('/cidades/cidade', CidadeController.show);

routes.post('/criar-cidade', CidadeController.store);

module.exports = routes;