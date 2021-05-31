const knex = require('../database');
const Municipios = require('../models/modelMunicipios');

module.exports = {
  async listMunicipios(req, res, next) {
    try {
      const list = await knex.select('*').table('municipios');

      return res.json(list);
    } catch (error) {
      next(error);
    }
  },

  async ListandoUmMunicipio(req, res, next) {
    try {
      const { nome_municipio } = req.query;

      const query = knex.table('municipios')
        
      if( nome_municipio ) {
        query
          .where({ nome_municipio })
          .select('nome_municipio');
      }
      
      const result = await query;

      return res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async CadastraMunicipios(req, res, next){
    const { nome_municipio } = req.body;

    try {
      const municipio = new Municipios(nome_municipio);
      await knex('municipios').insert(municipio);

      return res.status(201).json({ 'dados': 'salvos' });
    } catch (error) {
      next(error);
    }
  }
}