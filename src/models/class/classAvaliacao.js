class Avalaicao {
  constructor(nota, comentario, id_local) {
    this.nota = nota;
    this.comentario = comentario;
    this.id_local = id_local;
  };

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