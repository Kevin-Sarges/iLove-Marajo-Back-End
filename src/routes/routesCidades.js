const routes = require('express').Router();
const CidadeController = require('../controllers/CidadeControllers');

routes.get('/municipios', CidadeController.index);
routes.get('/municipios/municipio', CidadeController.show);

routes.post('/criar-cidade', CidadeController.store);

module.exports = routes;