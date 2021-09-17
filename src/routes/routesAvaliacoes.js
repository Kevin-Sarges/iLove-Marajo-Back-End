const routes = require('express').Router();
const AvaliacaoController = require('../controllers/AvaliacaoControllers');

routes.get('/avaliacao/:id_local/avaliacoes', AvaliacaoController.index);

routes.post('/avaliacao/:id_local/avaliar', AvaliacaoController.store);

module.exports = routes;