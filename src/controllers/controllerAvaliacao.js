const knex = require('../database');

module.exports = {
  async avaliar(req, res, next) {
    try {
      const { 
        avaliacao,
        nome_praia
      } = req.body;

      const dados = {
        avaliacao,
        nome_praia,
      };

      await knex.table('avaliacao').insert(dados);

      return res.status(201).json({ 'avaliacao': 'concluida' });
    } catch (error) {
      next(error);
    }
  }
}