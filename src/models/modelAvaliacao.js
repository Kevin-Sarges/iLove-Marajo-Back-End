const knex = require('../database');
const Avaliacao = require('./class/classAvaliacao');

class Avaliacoes extends Avaliacao {
  constructor(nota, comentario, id_praia) {
    super(nota, comentario, id_praia);
  };

  async salvar() {
    await knex.table('avaliacao').insert({
      nota: this._nota,
      comentario: this._comentario,
      id_praia: this._idPraia,
    });
  };
}

module.exports = Avaliacoes;