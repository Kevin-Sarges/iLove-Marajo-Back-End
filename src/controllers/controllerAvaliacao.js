const knex = require('../database/connect');
const Avaliacoes = require('../models/modelAvaliacao');

module.exports = {
  async listaAvaliacoes(req, res, next) {
    const { id_local } = req.query;
    
    try {
      const list = await knex
        .table('avaliacao')
        .where({ id_local })
        .select('*');

      return res.json(list);
    } catch (error) {
      next(error);
    }
  },

  async mediaAvaliacao(req, res, next) {
    const { id_local } = req.query;

    try {
      const media = await knex
        .table('avaliacao')
        .where({ id_local })
        .join('praias', 'praias.id_praia', '=', 'avaliacao.id_local')
        .groupBy('praias.nome_praia')
        .select('praias.nome_praia')
        .avg('nota as avaliacao');

      return res.json(media).status(201);
    } catch (error) {
      next(error);
    }
  },

  async avaliar(req, res, next) {
    const { nome_usuario, nota, comentario, id_local } = req.body;

    try {
      const avalaicao = new Avaliacoes(nome_usuario, nota, comentario, id_local);
      await knex.table('avaliacao').insert(avalaicao);

      return res.status(201).json({ 'avaliacao': 'concluida' });
    } catch (error) {
      next(error);
    }
  }
}