const knex = require('../database');
const Avaliacoes = require('../models/modelAvaliacao');

module.exports = {
  async listaAvaliacoes(req, res, next) {
    try {
      const { id_praia } = req.query;

      const list = await knex.table('avaliacao')
        .where({ id_praia })
        .select('*');

      return res.json(list);
    } catch (error) {
      next(error);
    }
  },

  async avaliar(req, res, next) {
    const { nota, comentario, id_praia } = req.body;

    try {
      const avalaicao = new Avaliacoes(nota, comentario, id_praia);
      await knex.table('avaliacao').insert(avalaicao);

      return res.status(201).json({ 'avaliacao': 'concluida' });
    } catch (error) {
      next(error);
    }
  }
}