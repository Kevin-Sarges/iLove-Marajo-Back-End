const knex = require('../database/connect');
const Praias = require('../models/modelPraias');

module.exports = {
  async listPraiasBemAvaliadas(req, res, next) {
    try {
      const list = await knex
        .select('*')
        .table('praias')
        .limit(4);

      return res.json(list);
    } catch (error) {
      next(error);
    }
  },

  async listandoUmaPraia(req, res, next) {
    try {
      const { nome_praia } = req.query;
  
      const query = knex.table('praias');
  
      if( nome_praia ) {
        query
          .where({ nome_praia })
          .join('municipios', 'municipios.id_municipio', '=', 'praias.id_municipio')
          .select(
            'praias.*',
            'municipios.nome_municipio'
          );
      }
       
      const result = await query;
  
      return res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async listaPraiasUnicoMunicipio(req, res, next) {
    try {
      const { nome_municipio } = req.query;

      const query = knex.table('praias');

      if( nome_municipio ) {
        query
          .where({ nome_municipio })
          .join('municipios', 'municipios.id_municipio', '=', 'praias.id_municipio')
          .select(
            'praias.*',
            'municipios.nome_municipio'
          );
      }
       
      const result = await query;

      return res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async cadastraPraias(req, res, next) {
    const {
      nome_praia,
      foto,
      lat,
      lon,
      descricao,
      id_municipio,
    } = req.body;

    try {

      const praias = new Praias(
        nome_praia, 
        foto, 
        lat, 
        lon, 
        descricao,
        id_municipio
      );

      await knex.table('praias').insert(praias);

      return res.status(201).json({ 'dados': 'salvos' });

    } catch (error) {
      next(error);
    }
  }
}