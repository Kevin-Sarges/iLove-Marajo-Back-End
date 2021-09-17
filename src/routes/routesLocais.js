const routes = require('express').Router();
const LocalController = require('../controllers/LocalControllers');

routes.get('/municipios/:city_id/locais', LocalController.index);
routes.get('/municipios/:city_id/local', LocalController.locais);
routes.get('/municipios/:city_id/local/nome', LocalController.show);

routes.post('/municipios/:city_id/criar-local', LocalController.store);

module.exports = routes;