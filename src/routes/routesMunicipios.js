const router = require('express').Router();
const municipio = require('../controllers/controllerMunicipios');

router.get('/municipios', municipio.listMunicipios);
router.get('/municipio', municipio.ListandoUmMunicipio);

router.post('/postMunicipios', municipio.CadastraMunicipios);

module.exports = router;