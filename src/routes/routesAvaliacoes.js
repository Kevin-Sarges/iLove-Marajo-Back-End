const routes = require('express').Router();
const AvaliacaoController = require('../controllers/AvaliacaoControllers');

routes.get('/avaliacao/:place_id/avaliacoes', AvaliacaoController.index);

routes.post('/avaliacao/:place_id/avaliar', AvaliacaoController.store);

module.exports = routes;