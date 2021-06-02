const knex = require('../database');
const Avaliacoes = require('../models/modelAvaliacao');

module.exports = {
  async listaAvaliacoes(req, res, next) {
    try {
      const { id_local } = req.query;

      const list = await knex.table('avaliacao')
        .where({ id_local })
        .select('*');

      return res.json(list);
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