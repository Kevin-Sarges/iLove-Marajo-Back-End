const routes = require('express').Router();
const praias = require('../controllers/controllerPraias');

routes.get('/praias', praias.listPraiasBemAvaliadas);
routes.get('/praia', praias.listandoUmaPraia);
routes.get('/praias-municipio', praias.listaPraiasUnicoMunicipio);

routes.post('/postPraias', praias.cadastraPraias);

module.exports = routes;