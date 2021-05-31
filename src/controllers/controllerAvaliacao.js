const knex = require('../database');
const Avaliacoes = require('../models/modelAvaliacao');

module.exports = {
  async listaAvaliacoes(req, res, next) {
    try {
      const list = await knex.table('avaliacao')
        .join('praia', 'praia.id_praia', '=', 'avaliacao.id_praia')
        .select('avaliacao.*', 'praia.nome_praia');

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