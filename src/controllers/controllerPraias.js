const knex = require('../database');

module.exports = {
  async listPraiasBemAvaliadas(req, res, next) {
    try {
      const list = await knex
        .table('praia')
        .where('avaliacao', '>=', '4.5')
        .orderBy('avaliacao', 'desc')
        .select('*')
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
  
      if(query) {
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

      if(query) {
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
    try {
      const {
        nome_praia,
        descricao,
        foto,
        lat,
        lon,
        avaliacao,
        municipio,
      } = req.body;

      const praias = {
        nome_praia,
        descricao,
        foto,
        lat,
        lon,
        avaliacao,
        municipio,
      };

      await knex('praia').insert(praias);

      return res.status(201).json({ 'dados': 'salvos' });

    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await knex('praia').where({ id_praia: id }).del()
    
      return res.json({ 'dados': 'deletado' });
    } catch (error) {
      next(error)
    }
  }
}