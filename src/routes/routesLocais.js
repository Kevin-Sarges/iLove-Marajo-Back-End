const routes = require('express').Router();
const LocalController = require('../controllers/LocalControllers');

routes.get('/municipios/:id_cidade/locais', LocalController.index);
routes.get('/municipios/:id_cidade/local', LocalController.locais);
routes.get('/municipios/:id_cidade/local/nome', LocalController.show);

routes.post('/municipios/:id_cidade/criar-local', LocalController.store);

module.exports = routes;