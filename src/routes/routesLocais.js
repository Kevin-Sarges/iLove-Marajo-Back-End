const routes = require('express').Router();
const LocalController = require('../controllers/LocalControllers');

routes.get('/cidades/:id_cidade/locais', LocalController.index);
routes.get('/cidades/:id_cidade/local', LocalController.locais);
routes.get('/cidades/:id_cidade/local/nome', LocalController.show);

routes.post('/cidades/:id_cidade/criar-local', LocalController.store);

module.exports = routes;