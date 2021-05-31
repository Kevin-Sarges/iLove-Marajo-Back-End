class Avalaicao {
  constructor(nota, comentario, id_praia) {
    this.nota = nota;
    this.comentario = comentario;
    this.id_praia = id_praia;
  };

  set(nota) {
    this._nota = nota;
  };

  set(comentario) {
    this._comentario = comentario;
  };

  set(id_praia) {
    this._idPraia = id_praia;
  };

  salvar(){};
}

module.exports = Avalaicao;