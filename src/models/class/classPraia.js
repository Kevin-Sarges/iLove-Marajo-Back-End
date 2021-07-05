class Praia {
  constructor(nome_praia, foto, lat, lon, descricao, id_municipio) {
    this.nome_praia = nome_praia;
    this.foto = foto;
    this.lat = lat;
    this.lon = lon;
    this.descricao = descricao;
    this.id_municipio = id_municipio;
  };
 
  set(nome_praia) {
    this._nomePraia = nome_praia;
  };

  set(foto) {
    this._foto = foto;
  };

  set(lat) {
    this._lat = lat;
  };

  set(lon) {
    this._lon = lon;
  };

  set(descricao) {
    this._descricao = descricao;
  };

  set(id_municipio) {
    this._idMunicipio = id_municipio;
  };

  salvar(){};
}

module.exports = Praia;