const knex = require('../database');
const Praias = require('../models/modelPraias');

module.exports = {
  async listPraiasBemAvaliadas(req, res, next) {
    try {
      const list = await knex
        .select('*')
        .where('avaliacao', '>=', '4.5')
        .orderBy('avaliacao', 'desc')
        .table('praia')
        .limit(4);

      return res.json(list);
    } catch (error) {
      next(error);
    }
  },

  async listandoUmaPraia(req, res, next) {
    try {
      const { nome_praia } = req.query;
  
      const query = knex.table('praia');
  
      if( nome_praia ) {
        query
          .where({ nome_praia })
          .join('municipios', 'municipios.nome_municipio', '=', 'praia.municipio')
          .select(
            'municipios.nome_municipio',
            'praia.nome_praia',
            'praia.descricao',
            'praia.foto', 
            'praia.avaliacao',
            'praia.lat', 
            'praia.lon'
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
      const { municipio } = req.query;

      const query = knex.table('praia');

      if( municipio ) {
        query
          .where({ municipio })
          .join('municipios', 'municipios.nome_municipio', '=', 'praia.municipio')
          .select(
            'municipios.nome_municipio', 
            'praia.nome_praia',
            'praia.descricao',
            'praia.foto', 
            'praia.avaliacao', 
            'praia.lat', 
            'praia.lon'
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
      avaliacao,
      municipio,
    } = req.body;

    try {

      const praias = new Praias(
        nome_praia, 
        foto, 
        lat, 
        lon, 
        descricao,
        avaliacao, 
        municipio
      );

      await knex.table('praia').insert(praias);

      return res.status(201).json({ 'dados': 'salvos' });

    } catch (error) {
      next(error);
    }
  }
}