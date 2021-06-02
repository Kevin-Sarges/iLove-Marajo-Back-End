class Avalaicao {
  constructor(nome_usuario, nota, comentario, id_local) {
    this.nome_usuario = nome_usuario;
    this.nota = nota;
    this.comentario = comentario;
    this.id_local = id_local;
  };

  set(nome_usuario) {
    this._nomeUsuario = nome_usuario;
  }

  set(nota) {
    this._nota = nota;
  };

  set(comentario) {
    this._comentario = comentario;
  };

  set(id_local) {
    this._idLocal = id_local;
  };

  salvar(){};
}

module.exports = Avalaicao;