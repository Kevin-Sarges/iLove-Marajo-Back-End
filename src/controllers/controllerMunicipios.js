const knex = require('../database');

module.exports = {
  async listMunicipios(req, res, next) {
    try {
      const list = await knex.select().table('municipios');

      return res.json(list);
    } catch (error) {
      next(error);
    }
  },

  async ListandoUmMunicipio(req, res, next) {
    try {
      const { nome_municipios } = req.query;

      const query = knex.table('municipios')
        
      if(query) {
        query
          .where({ nome_municipios })
          .select('nome_municipios');
      }
      
      const result = await query;

      return res.json(result);
    } catch (error) {
      next(error);
    }
  },

  async CadastraMunicipios(req, res, next){
    try {
      const { nome_municipios } = req.body;

      const municipio = { nome_municipios };

      await knex('municipios').insert(municipio);

      return res.status(201).json({ 'dados': 'salvos' });
    } catch (error) {
      next(error);
    }
  }
}