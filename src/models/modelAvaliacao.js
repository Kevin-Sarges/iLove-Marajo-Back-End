const knex = require('../database');
const Avaliacao = require('./class/classAvaliacao');

class Avaliacoes extends Avaliacao {
  constructor(nota, comentario, id_local) {
    super(nota, comentario, id_local);
  };

  async salvar() {
    await knex.table('avaliacao').insert({
      nota: this._nota,
      comentario: this._comentario,
      id_local: this._idLocal,
    });
  };
}

module.exports = Avaliacoes;