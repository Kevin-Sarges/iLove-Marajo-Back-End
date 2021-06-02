const knex = require('../database');
const Avaliacao = require('./class/classAvaliacao');

class Avaliacoes extends Avaliacao {
  constructor(nome_usuario, nota, comentario, id_local) {
    super(nome_usuario, nota, comentario, id_local);
  };

  async salvar() {
    await knex.table('avaliacao').insert({
      nome_usuario: this._nomeUsuario,
      nota: this._nota,
      comentario: this._comentario,
      id_local: this._idLocal,
    });
  };
}

module.exports = Avaliacoes;