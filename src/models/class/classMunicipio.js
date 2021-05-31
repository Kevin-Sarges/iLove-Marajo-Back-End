class Municipio {
  constructor(nome_municipio) {
    this.nome_municipio = nome_municipio;
  };

  set(nome_municipio) {
    this._nomeMunicipio = nome_municipio;
  };

  salvar(){};
}

module.exports = Municipio;